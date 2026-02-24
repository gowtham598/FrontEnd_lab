import React, { useState, useEffect, useRef } from "react";
import { createProductService } from "../services/productService";
import ProductGrid from "../components/ProductGrid";
import SkeletonLoader from "../components/SkeletonLoader";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({});

  const serviceRef = useRef(createProductService());
  const requestId = useRef(0);

  const loadProducts = async () => {
    setLoading(true);

    const currentId = ++requestId.current;
    const result = await serviceRef.current();

    // Prevent stale state
    if (currentId !== requestId.current) return;

    setProducts(result.products);
    setMeta(result);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>🛍 Product Store</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={loadProducts}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer"
          }}
        >
          Refresh Products
        </button>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>Fetch Count: {meta.fetchCount}</p>
        <p>Last Fetch: {meta.lastFetchTime}</p>
        <p>From Cache: {meta.fromCache ? "Yes" : "No"}</p>
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default ProductsPage;