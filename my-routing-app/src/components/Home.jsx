import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="home-container">
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
          <button onClick={handleLogin} className="btn login-btn">Login</button>
          <Link to="/register" className="btn register-btn">Register</Link>
        </div>
      </nav>
      <main className="main-content">
        <h2>Welcome to Our Website</h2>
        <p>Discover amazing features and services we offer.</p>
      </main>
    </div>
  )
}

export default Home