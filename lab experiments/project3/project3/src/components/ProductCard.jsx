// components/ProductCard.js

import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "220px",
      borderRadius: "8px"
    }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        width="200"
        height="150"
      />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;