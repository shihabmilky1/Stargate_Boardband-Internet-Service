import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentCard = ({handlePaymentStatus,servicePrice}) => {
  const stripe = useStripe();
  const elements = useElements();
    const [paymentError,setPaymentError] = useState(null)
    const [paymentSuccess,setPaymentSuccess] = useState(null)
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentSuccess(null)
      setPaymentError(error.message)
      
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentError(null)
      setPaymentSuccess(paymentMethod.id)
      handlePaymentStatus(paymentMethod.id)
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <p className="mb-0"><small style={{color:"red"}}>{paymentError}</small></p> }
      {paymentSuccess && <p className="mb-0"><small style={{color:"green"}}>Payment Success</small></p> }
        <div className="pay-button d-flex align-items-center justify-content-between">
        <button type="submit" className="btn my-btn mt-4"disabled={!stripe}>
        Pay
      </button>
      <h6 className="mt-4">Your Service charge will be <strong>${servicePrice}.00</strong> </h6>
        </div>
    </form>
  );
};
export default PaymentCard;