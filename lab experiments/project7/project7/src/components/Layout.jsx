import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const Layout = React.memo(() => {
  return (
    <>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
});

export default Layout;