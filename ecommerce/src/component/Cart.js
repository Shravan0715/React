import React from "react";

import { Link } from "react-router-dom";

function Cart({ cart, isLoggedIn, removeFromCart }) {
  
  
  if (!isLoggedIn) {
    return (
      <div className="container mt-5">
        <h1>🛒 Your Shopping Cart</h1>
        <p>Please login to view your cart</p>
        <a href="/" className="btn btn-primary">Login</a>
      </div>
    );
  }


  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
 
  

  return (
    <div className="container mt-5">
      <h1>🛒 Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ₹{item.price}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total Amount: ₹{totalAmount}</h4>
              <Link to="/payment" className="btn btn-success">Buy Now</Link>
            
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;