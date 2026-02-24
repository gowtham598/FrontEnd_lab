import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
        background: "white"
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "0 0 10px 0" }}>{product.title}</h3>
        <p style={{ fontWeight: "bold", color: "#16a34a" }}>
          ${product.price}
        </p>
        <p style={{ fontSize: "14px", color: "#555" }}>
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;