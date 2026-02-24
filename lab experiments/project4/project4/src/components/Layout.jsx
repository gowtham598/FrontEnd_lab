import React from "react";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Product Dashboard
      </h1>
      {children}
    </div>
  );
};

export default Layout;