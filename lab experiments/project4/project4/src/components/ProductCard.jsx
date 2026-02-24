import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} width="200" />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>${product.price}</div>
    </div>
  );
};

export default ProductCard;