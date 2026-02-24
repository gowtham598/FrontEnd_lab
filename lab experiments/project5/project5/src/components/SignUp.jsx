import React, { useState } from "react";

const SignUp = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid =
    email.includes("@") &&
    password.length >= 6 &&
    password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onRegister();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit" disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
};

export default SignUp;