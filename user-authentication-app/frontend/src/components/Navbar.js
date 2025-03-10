import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ auth }) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {auth ? <Link to="/retail">Retail Page</Link> : <><Link to="/signup">Sign Up</Link> <Link to="/login">Login</Link></>}
        </nav>
    );
};

export default Navbar;
