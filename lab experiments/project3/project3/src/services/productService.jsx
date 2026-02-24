// services/productService.js

export const createProductFetcher = () => {
  let fetchCount = 0;
  let lastFetchTime = null;

  const fetchProducts = async () => {
    fetchCount++;
    lastFetchTime = new Date().toLocaleTimeString();

    console.log("Fetch Attempt:", fetchCount);
    console.log("Last Fetch Time:", lastFetchTime);

    // Async/Await
    const response = await fetch("https://dummyjson.com/products");

    // Promise chaining
    return response.json().then(data => {
      return {
        products: data.products,
        fetchCount,
        lastFetchTime
      };
    });
  };

  return fetchProducts;
};