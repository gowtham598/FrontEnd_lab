// services/productService.js

export const createProductService = () => {
  let cache = null;
  let fetchCount = 0;
  let lastFetchTime = null;

  return async function fetchProducts() {
    fetchCount++;
    lastFetchTime = new Date().toLocaleTimeString();

    // Return cached data if available
    if (cache) {
      return {
        products: cache,
        fetchCount,
        lastFetchTime,
        fromCache: true
      };
    }

    const response = await fetch("https://dummyjson.com/products");

    return response.json().then(data => {
      cache = data.products;
      return {
        products: cache,
        fetchCount,
        lastFetchTime,
        fromCache: false
      };
    });
  };
};