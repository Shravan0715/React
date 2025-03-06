import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Payment = ({ totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const amount = totalAmount;
  

  const handlePaymentSubmit = (e) => {
   

    if (paymentMethod === 'cod') {
      alert('Order placed successfully! Cash on delivery to your address');
        navigate("/products");
    
    } else if (paymentMethod === 'phonepe') {
      window.location.href = 'https://phonepe.com/payment-gateway';
      window.addEventListener('popstate', () => {
        navigate('/');
      });
    }
    e.preventDefault();
  };

  return (
    <div className="payment-container">
      <h2>Payment Method</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="payment-options">
          <div className="payment-option">
            <input
              type="radio"
              id="cod"
              name="payment"
              value="cod"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              id="phonepe"
              name="payment"
              value="phonepe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="phonepe">PhonePe</label>
          </div>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Total Amount: ₹{amount}</p>
          
          
        </div>
        <button type="submit" className="payment-button" disabled={!paymentMethod}>
          {paymentMethod === 'cod' ? 'Place Order' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
