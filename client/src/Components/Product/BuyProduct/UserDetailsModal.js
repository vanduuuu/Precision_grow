import React, { useState } from 'react';
import RazorpayPayment from './RazorpayPayment';
import '../BuyProduct/ProductCard.css';

const UserDetailsModal = ({ show, handleClose, amount }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateAndProceed = async () => {
    const trimmedUser = {
      name: user.name.trim(),
      email: user.email.trim(),
      contact: user.contact.trim()
    };

    if (!trimmedUser.name || !trimmedUser.email || !trimmedUser.contact) {
      alert('⚠️ Please fill in all fields');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(trimmedUser.contact)) {
      alert('📞 Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);

    await RazorpayPayment({
      amount,
      userDetails: trimmedUser,
      onClose: () => {
        setLoading(false);
        handleClose();
      },
      onSuccess: () => {
        setLoading(false);
        setShowSuccess(true);
      }
    });
  };

  if (!show && !showSuccess) return null;

  return (
    <div className="modal d-block custom-modal-backdrop" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow">

          <div className="modal-header border-0">
            <h5 className="modal-title mx-auto">
              {showSuccess ? '🎉 Thank You!' : '📝 Enter Your Details'}
            </h5>
            <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={handleClose}></button>
          </div>

          <div className="modal-body">
            {showSuccess ? (
              <>
                <p className="text-center text-secondary mb-4">
                  You've successfully purchased the <strong>eCROP device</strong>.<br />
                  Wishing you a great farming journey! 🌾🌿
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setShowSuccess(false);
                      handleClose();
                    }}
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingName">Full Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingEmail">Email Address</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="tel"
                    name="contact"
                    className="form-control"
                    id="floatingContact"
                    placeholder="Phone Number"
                    value={user.contact}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingContact">Phone Number</label>
                </div>

                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-secondary" onClick={handleClose}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={validateAndProceed} disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Processing...
                      </>
                    ) : (
                      'Pay Now'
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
