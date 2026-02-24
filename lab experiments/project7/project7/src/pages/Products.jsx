import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      image: "/images/headphones.jpg"
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "/images/watch.jpg"
    },
    {
      id: 3,
      name: "Gaming Laptop",
      image: "/images/laptop.jpg"
    }
  ];

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Our Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div className="product-card-content">
              <h3>{product.name}</h3>
              <Link to={`/products/${product.id}`}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;