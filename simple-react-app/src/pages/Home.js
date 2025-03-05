function Home() {
  const storedUser = JSON.parse(localStorage.getItem('name'));
  const username = storedUser ? storedUser.name : 'Guest';
    const message = localStorage.getItem('message') || 'You have successfully logged in.';
    
    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('message');
      window.location.href = '/login';
    };

    return (
      <div className="home">
        <div className="welcome-tab">
          <h2>Welcome, {username}</h2>
          <p>{message}</p>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
  
  export default Home;