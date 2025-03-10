import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RetailPage.css';

const RetailPage = ({ setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
        navigate('/login');
    };

    return (
        <div className="retail-container">
            <h1>Welcome to the Retail Page!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default RetailPage;
