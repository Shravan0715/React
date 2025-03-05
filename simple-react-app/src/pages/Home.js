function Home() {
    const username = localStorage.getItem('username') || 'User';
    const message = localStorage.getItem('message') || 'You have successfully logged in.';
    
    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('message');
      window.location.href = '/login';
    };

    return (
      <div className="home">
        <div className="welcome-tab">
          <h2>Welcome, {username}!</h2>
          <p>{message}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
  
  export default Home;