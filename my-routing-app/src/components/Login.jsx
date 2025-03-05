  import React from 'react'
  import { Link, useNavigate } from 'react-router-dom'
  import './Login.css'

  const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      // Add your login logic here
      // For now, just navigate to home page after form submission
      navigate('/');
    }

    return (
      <div className="login-container">
        <nav className="navbar">
          <div className="nav-logo">
            <h1>My App</h1>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="btn login-btn">Login</Link>
            <Link to="/register" className="btn register-btn">Register</Link>
          </div>
        </nav>
        <main className="main-content">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="btn login-submit-btn">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </div>
        </main>
      </div>
    )
  }

  export default Login
