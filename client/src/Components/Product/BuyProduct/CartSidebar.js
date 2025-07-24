import React, { useState } from 'react';
import './CartSidebar.css';
import { useCart } from '../BuyProduct/CartContext';
import UserDetailsModal from './UserDetailsModal';

const CartSidebar = ({ show, onClose }) => {
  const {
    cartItems,
    increment,
    decrement,
    removeFromCart,
    getTotalPrice
  } = useCart();

  const [showModal, setShowModal] = useState(false); // ✅ Added for modal

  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose();
  };

  const totalPrice = getTotalPrice();

  return (
    <div className={`cart-sidebar ${show ? 'open' : ''}`}>
      <div className="cart-header">
        <h5>Your Cart</h5>
        <button onClick={handleClose} className="close-btn">×</button>
      </div>

      <div className="cart-body">
        {cartItems.length === 0 ? (
          <p className="text-muted text-center mt-5">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-4 border-bottom pb-3 d-flex align-items-center gap-3">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="flex-grow-1">
                <h6 className="fw-bold">{item.name}</h6>
                <p className="text-muted small mb-1">{item.description}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => increment(item.id)}>+</button>
                  </div>
                  <h6 className="text-success mb-0">₹{item.price * item.quantity}</h6>
                </div>
                <button className="btn btn-sm btn-link text-danger p-0 mt-1" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Footer section */}
      {cartItems.length > 0 && (
        <div className="cart-footer mt-auto">
          <hr />
          <h6 className="fw-bold d-flex justify-content-between">
            <span>Total:</span>
            <span className="text-success">₹{totalPrice}</span>
          </h6>
          
      <button
  className="gradient-btn fw-semibold w-100 mt-2"
  onClick={() => setShowModal(true)}
>
  Proceed to Pay
</button>

<UserDetailsModal
  show={showModal}
  handleClose={() => setShowModal(false)}
  amount={totalPrice}
/>

        </div>
      )}
    </div>
  );
};

export default CartSidebar;
