import API_CONFIG from './Config.js';

const RazorpayPayment = async ({ amount, userDetails, onClose, onSuccess }) => {
  try {
    const currency = 'INR';

    const orderResponse = await fetch(
      `${API_CONFIG.BASE_URL}/api/payments/create-order?amount=${amount}&currency=${currency}`,
      { method: 'POST' }
    );

    const orderData = await orderResponse.json();

    if (!orderData.orderId) {
      alert('❌ Failed to create Razorpay order');
      return;
    }

    const options = {
      key: 'rzp_live_GKGlQXeJbW2cZD',
      // key: 'rzp_test_3Y81TFDSwCPoV6',

      amount: amount * 100,
      currency,
      name: 'eCROP',
      description: 'Purchase of eCROP Device',
      order_id: orderData.orderId,
      handler: async function (response) {
        const verifyResponse = await fetch(
          `${API_CONFIG.BASE_URL}/api/payments/verify`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          }
        );

        const result = await verifyResponse.text();

        if (result.includes('verified')) {
          onSuccess();
        } else {
          alert('❌ Payment verification failed.');
        }

        onClose();
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
       contact: String(userDetails.contact),
      },
      theme: { color: '#3399cc' },
      modal: {
        ondismiss: onClose
      }
    };

    const rzp = new window.Razorpay(options);
    console.log("✅ Prefill Data:", userDetails);

    rzp.open();
  } catch (err) {
    alert('⚠️ Something went wrong: ' + err.message);
    onClose();
  }
};

export default RazorpayPayment;
