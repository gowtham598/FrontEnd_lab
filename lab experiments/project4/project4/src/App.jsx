import React, { useState } from "react";

const sampleProducts = [
  { id: 1, title: "Phone", price: 500 },
  { id: 2, title: "Laptop", price: 1200 },
  { id: 3, title: "Headphones", price: 200 }
];

function App() {
  const [products] = useState(sampleProducts);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Product Dashboard</h1>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;