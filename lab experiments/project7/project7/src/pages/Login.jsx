import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/contact");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🔐 Welcome Back</h2>
        <p>Please login to continue</p>
        <br />
        <button onClick={handleLogin}>Login Now</button>
      </div>
    </div>
  );
}

export default Login;