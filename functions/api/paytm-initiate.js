/**
 * Cloudflare Pages Function — /api/paytm-initiate
 * Server-side transaction initiation and token generation for Paytm Payment Gateway (Staging)
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
    const merchantKey = env.PAYTM_MERCHANT_KEY;
    if (!merchantKey) {
      return new Response(JSON.stringify({ success: false, error: 'Merchant configuration missing' }), {
        status: 500,
        headers: corsHeaders,
      });
    }
    const website = env.PAYTM_WEBSITE || 'WEBSTAGING';

    if (!amount || !orderId) {
      return new Response(JSON.stringify({ error: 'Missing amount or orderId' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const paytmBody = {
      requestType: 'Payment',
      mid: mid,
      websiteName: website,
      orderId: orderId,
      callbackUrl: `https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=${orderId}`,
      txnAmount: {
        value: parseFloat(amount).toFixed(2),
        currency: 'INR',
      },
      userInfo: {
        custId: custId || `CUST_${orderId.substring(0, 10)}`,
      },
    };

    // Generate Paytm Signature using Web Crypto API compatible with Cloudflare Workers
    const stringBody = JSON.stringify(paytmBody);
    const saltChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let salt = '';
    const randomArray = new Uint8Array(4);
    crypto.getRandomValues(randomArray);
    for (let i = 0; i < 4; i++) {
      salt += saltChars[randomArray[i] % saltChars.length];
    }

    const paysString = stringBody + salt;
    const msgBuffer = new TextEncoder().encode(paysString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const sha256Hex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    const totalString = sha256Hex + salt;

    // Encrypt totalString with AES-128-CBC using Web Crypto
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

    const signature = btoa(String.fromCharCode(...new Uint8Array(encryptedBuffer))).replace(/\n/g, '');

    // Call Paytm Staging Initiate Transaction API
    const paytmRequest = {
      head: {
        signature: signature,
        channelId: 'WEB',
      },
      body: paytmBody,
    };

    const paytmResponse = await fetch(
      `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paytmRequest),
      }
    );

    const paytmData = await paytmResponse.json();

    if (paytmData?.body?.txnToken) {
      return new Response(
        JSON.stringify({
          success: true,
          txnToken: paytmData.body.txnToken,
          mid: mid,
          orderId: orderId,
          amount: paytmBody.txnAmount.value,
        }),
        { status: 200, headers: corsHeaders }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: paytmData?.body?.resultInfo?.resultMsg || 'Failed to initiate transaction',
          details: paytmData,
        }),
        { status: 400, headers: corsHeaders }
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Server error', message: String(err) }),
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
