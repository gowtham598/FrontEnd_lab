import React from "react";

const SkeletonLoader = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}
    >
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            height: "300px",
            background: "#e5e7eb",
            borderRadius: "12px",
            animation: "pulse 1.5s infinite"
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;