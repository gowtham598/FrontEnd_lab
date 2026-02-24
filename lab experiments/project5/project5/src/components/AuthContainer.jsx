import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

const AuthContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("signin");

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div>
      <h2>Authentication Page</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActivePage("signin")}>Sign In</button>
        <button onClick={() => setActivePage("signup")} style={{ marginLeft: "10px" }}>
          Sign Up
        </button>
      </div>

      {activePage === "signin" ? (
        <SignIn onLogin={handleLogin} />
      ) : (
        <SignUp onRegister={handleLogin} />
      )}
    </div>
  );
};

export default AuthContainer;