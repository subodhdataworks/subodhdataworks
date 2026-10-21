/**
 * Cloudflare Pages Function — /api/paytm-callback
 * Handles Paytm POST callback when transaction completes.
 * Returns an HTML redirect (GET) to avoid HTTP 405 on static hosting.
 */

export async function onRequestPost(context) {
  const { request } = context;

  try {
    let orderId = '';
    let status = '';
    let txnId = '';
    let amount = '';
    let respMsg = '';

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      orderId = formData.get('ORDERID') || formData.get('orderId') || '';
      status = formData.get('STATUS') || formData.get('status') || '';
      txnId = formData.get('TXNID') || formData.get('txnId') || '';
      amount = formData.get('TXNAMOUNT') || formData.get('amount') || '';
      respMsg = formData.get('RESPMSG') || formData.get('respMsg') || '';
    } else {
      const json = await request.json().catch(() => ({}));
      orderId = json.ORDERID || json.orderId || '';
      status = json.STATUS || json.status || '';
      txnId = json.TXNID || json.txnId || '';
      amount = json.TXNAMOUNT || json.amount || '';
      respMsg = json.RESPMSG || json.respMsg || '';
    }

    const url = new URL(request.url);
    const isSuccess = (status || '').toUpperCase() === 'TXN_SUCCESS';
    const targetHash = isSuccess ? '#payment-success' : '#payment-failure';

    const redirectUrl = `${url.origin}/${targetHash}?orderId=${encodeURIComponent(orderId)}&txnId=${encodeURIComponent(txnId)}&amount=${encodeURIComponent(amount)}&status=${encodeURIComponent(status)}&msg=${encodeURIComponent(respMsg)}`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${isSuccess ? 'Payment Successful' : 'Payment Status'} - Future IT Industry</title>
  <meta http-equiv="refresh" content="0;url=${redirectUrl}">
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #090d16;
      color: #ffffff;
    }
    .card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 32px;
      max-width: 420px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
    .spinner {
      width: 44px;
      height: 44px;
      border: 4px solid rgba(56, 189, 248, 0.2);
      border-top-color: #38bdf8;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 20px;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    h2 { font-size: 20px; font-weight: 800; margin: 0 0 8px; color: ${isSuccess ? '#34d399' : '#f87171'}; }
    p { font-size: 13px; color: #94a3b8; margin: 0 0 16px; line-height: 1.5; }
    a { color: #38bdf8; font-size: 13px; font-weight: 600; text-decoration: none; }
  </style>
  <script>
    try {
      if (${isSuccess}) {
        localStorage.setItem('futureai_student_enrolled', 'true');
        localStorage.setItem('futureai_payment_order_id', ${JSON.stringify(orderId)});
        localStorage.setItem('futureai_payment_txn_id', ${JSON.stringify(txnId)});
      }
    } catch(e) {}
    window.location.replace(${JSON.stringify(redirectUrl)});
  </script>
</head>
<body>
  <div class="card">
    <div class="spinner"></div>
    <h2>${isSuccess ? 'Payment Successful! 🎉' : 'Payment Completed'}</h2>
    <p>Redirecting you back to your learning dashboard...</p>
    <a href="${redirectUrl}">Click here if not redirected automatically →</a>
  </div>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (err) {
    const url = new URL(request.url);
    return Response.redirect(`${url.origin}/#payment-failure?error=server_error`, 303);
  }
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  return Response.redirect(`${url.origin}/#dashboard`, 303);
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
