/**
 * Cloudflare Pages Function — /api/paytm-checksum
 * Generates Paytm legacy CHECKSUMHASH for staging/production form post
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = await request.json();
    const { amount, orderId, custId } = body;

    const mid = env.PAYTM_MID || 'TeBDWo05912976663912';
    const merchantKey = env.PAYTM_MERCHANT_KEY || '5CHexR2LJLiVAUXv';
    const website = env.PAYTM_WEBSITE || 'WEBSTAGING';
    const industryTypeId = env.PAYTM_INDUSTRY_TYPE_ID || 'Retail';
    const channelId = env.PAYTM_CHANNEL_ID || 'WEB';

    const url = new URL(request.url);
    const callbackUrl = `${url.origin}/api/paytm-callback`;

    const paytmParams = {
      MID: mid,
      ORDER_ID: orderId,
      CUST_ID: custId || `CUST_${Date.now()}`,
      INDUSTRY_TYPE_ID: industryTypeId,
      CHANNEL_ID: channelId,
      TXN_AMOUNT: parseFloat(amount).toFixed(2),
      WEBSITE: website,
      CALLBACK_URL: callbackUrl,
    };

    // Sort keys alphabetically
    const orderedKeys = Object.keys(paytmParams).sort();
    let paramString = '';
    for (const key of orderedKeys) {
      const val = paytmParams[key] ?? '';
      paramString += `${val}|`;
    }

    // 4-char random salt
    const saltChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let salt = '';
    const randomArray = new Uint8Array(4);
    crypto.getRandomValues(randomArray);
    for (let i = 0; i < 4; i++) {
      salt += saltChars[randomArray[i] % saltChars.length];
    }

    const finalString = paramString + salt;
    const msgBuffer = new TextEncoder().encode(finalString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const sha256Hex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    const totalString = sha256Hex + salt;

    // AES-128-CBC encryption with static Paytm IV
    const keyBuffer = new TextEncoder().encode(merchantKey);
    const ivBuffer = new TextEncoder().encode('@@@@&&&&####$$$$');

    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'AES-CBC' },
      false,
      ['encrypt']
    );

    const dataToEncrypt = new TextEncoder().encode(totalString);
    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: 'AES-CBC', iv: ivBuffer },
      cryptoKey,
      dataToEncrypt
    );

    const checksum = btoa(String.fromCharCode(...new Uint8Array(encryptedBuffer))).replace(/\n/g, '');

    return new Response(
      JSON.stringify({
        success: true,
        paytmUrl: 'https://securegw-stage.paytm.in/theia/processTransaction',
        params: {
          ...paytmParams,
          CHECKSUMHASH: checksum,
        },
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to generate Paytm checksum', message: String(err) }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
