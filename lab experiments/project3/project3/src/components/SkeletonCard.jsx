// components/SkeletonCard.js

import React from "react";

const SkeletonCard = () => {
  return (
    <div style={{
      width: "220px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f4f4f4"
    }}>
      <div style={{ height: "150px", background: "#ddd", marginBottom: "10px" }} />
      <div style={{ height: "20px", background: "#ddd", marginBottom: "8px" }} />
      <div style={{ height: "20px", background: "#ddd", width: "50%" }} />
    </div>
  );
};

export default SkeletonCard;