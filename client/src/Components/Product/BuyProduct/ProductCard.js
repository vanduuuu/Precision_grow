import React from 'react';
import { useCart } from '../BuyProduct/CartContext';
import '../BuyProduct/ProductCard.css'
const ProductCard = ({ product, onShowCart }) => {
  const { addToCart } = useCart();

 const handleAddToCart = () => {
  const cartItem = {
    ...product,
    price: finalPrice,      
    quantity: 1              
  };

  addToCart(cartItem);
  onShowCart();
};


  // 🧮 Get values dynamically per product
  const basePrice = product.originalPrice;
  const discountRate = product.discountRate || 0;
  const gstRate = product.gstRate || 0;

  const discountedPrice = Math.round(basePrice - basePrice * discountRate);
  const gstAmount = Math.round(discountedPrice * gstRate);
  const finalPrice = discountedPrice + gstAmount;

  return (
<div className="product-card border rounded p-3 shadow-sm position-relative bg-white h-100 d-flex flex-column">
  {/* Discount Badge */}
  {discountRate > 0 && (
    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
      {Math.round(discountRate * 100)}% OFF
    </span>
  )}

  {/* Product Image with Hover Effect */}
  <div className="product-image-wrapper mb-3 ">
    <img
      src={product.image}
      alt={product.name}
      className="product-image main-img"
    />
    <img
      src={product.hoverImage}
      alt={`${product.name} hover`}
      className="product-image hover-img"
    />
  </div>

  <h5 className="fw-bold">{product.name}</h5>
  <p className="text-muted small">{product.description}</p>

<div className="d-flex align-items-center mb-2 gap-4">
  <div className="text-muted text-decoration-line-through small">
    ₹{basePrice.toLocaleString()}
  </div>
  <div className="text-success fw-bold">
    ₹{discountedPrice.toLocaleString()}
  </div>
  <div className="text-secondary small">
    + {Math.round(gstRate * 100)}% GST
  </div>
</div>


 

  <div className="my-3 d-flex justify-content-between gap-2">
     <div className="fw-bold text-dark mb-3">
    Total: ₹{finalPrice.toLocaleString()}
  </div>
    <button className="gradient-btn w-50 fw-semibold" onClick={handleAddToCart}>
      Add to Cart
    </button>
  
  </div>
</div>

  );
};

export default ProductCard;
