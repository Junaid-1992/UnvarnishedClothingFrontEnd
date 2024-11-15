import React from 'react';
import axios from 'axios';
import { baseurl } from '../baseUrl';

const WithdrawPayout = () => {
  const handlePayout = async () => {
    const payoutData = {
      amount: "10.00", // Amount to send
      currency: "USD", // Currency
      receiverType: "EMAIL", // Use 'PAYPAL' for PayPal accounts, 'BANK' for IBAN
      iban: "378282246310005", // Replace with the actual IBAN of the user
      receiverEmail:'sb-blvt4328468450@business.example.com'
    };

    try {
      const response = await axios.post(`${baseurl}/payouts`, payoutData);
      console.log('Payout successful:', response.data);
    } catch (error) {
      console.error('Error during payout:', error);
    }
  };

  return (
    <div>
      <h2>Withdraw Payment</h2>
      <button onClick={handlePayout}>Withdraw</button>
    </div>
  );
};

export default WithdrawPayout;
