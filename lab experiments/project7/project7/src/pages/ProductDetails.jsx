import { useParams, Link, Outlet } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>You're viewing product ID: <strong>{id}</strong></p>

      <br />

      <Link to="reviews">
        <button>View Reviews</button>
      </Link>

      <br /><br />
      <Outlet />
    </div>
  );
}

export default ProductDetails;