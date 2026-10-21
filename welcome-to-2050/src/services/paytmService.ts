/**
 * Paytm Payment Gateway Service (Staging & Production)
 */

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

  const res = await fetch('/api/paytm-checksum', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: amtStr,
      orderId: orderId,
      custId: params.custId || `CUST_${orderId.substring(8)}`,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to initialize Paytm payment session.');
  }

  const data = await res.json();

  if (!data.success || !data.params) {
    throw new Error(data.error || 'Failed to initialize Paytm payment session.');
  }

  // Create form and auto-submit to Paytm Staging
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = data.paytmUrl || 'https://securegw-stage.paytm.in/theia/processTransaction';
  form.style.display = 'none';

  Object.entries(data.params).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = String(value);
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}
