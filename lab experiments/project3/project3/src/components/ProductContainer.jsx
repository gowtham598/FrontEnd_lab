// components/ProductContainer.js

import React, { useState, useEffect } from "react";
import { createProductFetcher } from "../services/productService";
import ProductList from "./ProductList";
import SkeletonCard from "./SkeletonCard";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({});

  const fetchProducts = createProductFetcher(); // closure instance

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const result = await fetchProducts();
        setProducts(result.products);
        setMeta({
          fetchCount: result.fetchCount,
          lastFetchTime: result.lastFetchTime
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Product Listing Page</h2>

      {loading ? (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <>
          <p>Fetch Count: {meta.fetchCount}</p>
          <p>Last Fetch Time: {meta.lastFetchTime}</p>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
};

export default ProductContainer;