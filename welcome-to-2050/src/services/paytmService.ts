/**
 * Paytm Payment Gateway Service (Staging & Production)
 */

export interface PaytmInitResponse {
  success: boolean;
  txnToken?: string;
  mid?: string;
  orderId?: string;
  amount?: string;
  error?: string;
}

export function generatePaytmOrderId(): string {
  const time = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `FII_PTM_${time}_${rand}`;
}

/**
 * Initiates Paytm payment and auto-submits form to Paytm Staging gateway
 */
export async function startPaytmCheckout(params: {
  amount: number | string;
  orderId?: string;
  custId?: string;
  courseTitle?: string;
}): Promise<void> {
  const orderId = params.orderId || generatePaytmOrderId();
  const amtStr = typeof params.amount === 'number' ? params.amount.toFixed(2) : parseFloat(params.amount).toFixed(2);

  const res = await fetch('/api/paytm-initiate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: amtStr,
      orderId: orderId,
      custId: params.custId || `CUST_${orderId.substring(8)}`,
    }),
  });

  const data: PaytmInitResponse = await res.json();

  if (!data.success || !data.txnToken || !data.mid || !data.orderId) {
    throw new Error(data.error || 'Unable to initialize Paytm payment session.');
  }

  // Create form post and redirect to Paytm Staging
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${data.mid}&orderId=${data.orderId}`;
  form.style.display = 'none';

  const hiddenMid = document.createElement('input');
  hiddenMid.type = 'hidden';
  hiddenMid.name = 'mid';
  hiddenMid.value = data.mid;
  form.appendChild(hiddenMid);

  const hiddenOrderId = document.createElement('input');
  hiddenOrderId.type = 'hidden';
  hiddenOrderId.name = 'orderId';
  hiddenOrderId.value = data.orderId;
  form.appendChild(hiddenOrderId);

  const hiddenToken = document.createElement('input');
  hiddenToken.type = 'hidden';
  hiddenToken.name = 'txnToken';
  hiddenToken.value = data.txnToken;
  form.appendChild(hiddenToken);

  document.body.appendChild(form);
  form.submit();
}
