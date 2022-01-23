import "./product-card.css";

import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>
        <i>Price: ₹</i>
        {product.price}
      </p>
      <div className="btn secondary">ADD TO CART</div>
    </div>
  );
};

export default ProductCard;
