import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-hero">
      <h1>🚀 Welcome to Colorful Store</h1>
      <p>
        Discover premium products with beautiful design and powerful features.
      </p>

      <Link to="/products">
        <button>Explore Products</button>
      </Link>

      <div className="feature-section">
        <div className="feature-card">
          <h3>⚡ Fast Delivery</h3>
          <p>Get your products delivered within 24 hours.</p>
        </div>

        <div className="feature-card">
          <h3>💎 Premium Quality</h3>
          <p>Only the best products selected for you.</p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure Payment</h3>
          <p>100% secure and encrypted transactions.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;