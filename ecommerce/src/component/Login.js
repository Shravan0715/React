import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter all fields.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("userData"));
  
    if (users && users.email === email && users.password === password) {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", email);
      navigate("/products");
    } else {
      setError("Invalid email or password");
    }
 
  };
  
  const handleSocialLogin = async (provider) => {
    try {
      // Example authentication implementation
      switch (provider) {
        case "Google":
          // Implement Google OAuth authentication
          // Example: const result = await signInWithGoogle();
          localStorage.setItem("email", "google@example.com");
          localStorage.setItem("provider", "Google");
          localStorage.setItem("isLoggedIn", "true");
          navigate("/productlist");
          break;
          
        case "Facebook":
          // Implement Facebook OAuth authentication
          // Example: const result = await signInWithFacebook();
          localStorage.setItem("email", "facebook@example.com");
          localStorage.setItem("provider", "Facebook");
          localStorage.setItem("isLoggedIn", "true");
          navigate("/productlist");
          break;
          
        case "GitHub":
          // Implement GitHub OAuth authentication
          // Example: const result = await signInWithGithub();
          localStorage.setItem("email", "github@example.com");
          localStorage.setItem("provider", "GitHub");
          localStorage.setItem("isLoggedIn", "true");
          navigate("/productlist");
          break;
          
        default:
          setError("Invalid provider");
      }
    } catch (error) {
      setError(error.message || "Failed to authenticate");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign In</h2>
        {error && <p className="alert alert-danger">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
        </div>

        <hr />

        <p className="text-center">Or login with</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-light border w-100 me-2" onClick={() => handleSocialLogin("Google")}>
            <FaGoogle className="text-danger" /> Google
          </button>
          <button className="btn btn-light border w-100 me-2" onClick={() => handleSocialLogin("Facebook")}>
            <FaFacebook className="text-primary" /> Facebook
          </button>
          <button className="btn btn-light border w-100" onClick={() => handleSocialLogin("GitHub")}>
            <FaGithub className="text-dark" /> GitHub
          </button>
        </div>

        <div className="text-center mt-3">
          <p>Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;