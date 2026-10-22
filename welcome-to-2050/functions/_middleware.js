/**
 * Cloudflare Pages Middleware
 * Catches any root HTTP POST requests (e.g. from payment gateway callbacks)
 * and safely redirects to dashboard with status parameters, preventing HTTP 405 Method Not Allowed.
 */

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // If a POST request hits the root or static pages (e.g. payment gateway redirects),
  // handle the form submission safely to prevent HTTP 405 error.
  if (request.method === 'POST' && (url.pathname === '/' || url.pathname === '')) {
    try {
      const contentType = request.headers.get('content-type') || '';
      let orderId = '';
      let status = '';
      let txnId = '';
      let amount = '';
      let respMsg = '';

      if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
        const formData = await request.formData();
        orderId = formData.get('ORDERID') || formData.get('orderId') || '';
        status = formData.get('STATUS') || formData.get('status') || '';
        txnId = formData.get('TXNID') || formData.get('txnId') || '';
        amount = formData.get('TXNAMOUNT') || formData.get('amount') || '';
        respMsg = formData.get('RESPMSG') || formData.get('respMsg') || '';
      }

      const isSuccess = (status || '').toUpperCase() === 'TXN_SUCCESS';
      const targetHash = isSuccess ? '#payment-success' : (status ? '#payment-failure' : '#dashboard');
      const redirectUrl = `${url.origin}/${targetHash}?orderId=${encodeURIComponent(orderId)}&txnId=${encodeURIComponent(txnId)}&amount=${encodeURIComponent(amount)}&status=${encodeURIComponent(status)}&msg=${encodeURIComponent(respMsg)}`;

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=${redirectUrl}">
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
<body style="background: #090d16; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
  <div style="text-align: center;">
    <h2>Processing Payment...</h2>
    <p style="color: #94a3b8;">Redirecting to your dashboard...</p>
    <a href="${redirectUrl}" style="color: #38bdf8;">Click here if not redirected</a>
  </div>
</body>
</html>`;

      return new Response(html, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    } catch (err) {
      return Response.redirect(`${url.origin}/#dashboard`, 303);
    }
  }

  return next();
}
