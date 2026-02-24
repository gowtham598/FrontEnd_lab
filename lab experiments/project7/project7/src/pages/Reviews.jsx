import { useParams } from "react-router-dom";

function Reviews() {
  const { id } = useParams();

  return <h3>Reviews for Product {id}</h3>;
}

export default Reviews;