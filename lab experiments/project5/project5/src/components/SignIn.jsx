import React, { useState, useEffect } from "react";

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.includes("@") && password.length >= 6; // derived state

  useEffect(() => {
    console.log("SignIn Re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" disabled={!isFormValid}>
        Login
      </button>

      {!isFormValid && (
        <p style={{ color: "red" }}>
          Email must contain @ and password must be at least 6 characters.
        </p>
      )}
    </form>
  );
};

export default SignIn;