import React from 'react';
import {Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';
const stripePromise = loadStripe('pk_test_51IeGgvCvYK065ALopgI9UsyqdYrPK6sLYRCwbJuXYyjsOB9cgmy4aXw25s762TIfEBvbiWCLUJrkt7nPqinvLpqo00IerrByYs');

const PaymentProcess = ({handlePaymentStatus,servicePrice}) => {
    return (
    <Elements stripe={stripePromise}>
     <PaymentCard servicePrice={servicePrice} handlePaymentStatus={handlePaymentStatus}></PaymentCard>
    </Elements>
    );
};

export default PaymentProcess;