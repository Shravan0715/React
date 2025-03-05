
import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';



function App() {
  const [page, setPage] = useState('register');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Set user as logged in
  };

  return (
    <div>
      <h1>User Authentication</h1>
      {isAuthenticated ? (
        <Home />
      ) : page === 'register' ? (
        <Register />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
      {!isAuthenticated && (
        <button id="go-to" onClick={() => setPage(page === 'register' ? 'login' : 'register')}>
          {page === 'register' ? 'Go to Login' : 'Go to Register'}
        </button>
      )}
    </div>
  );
}

export default App;




