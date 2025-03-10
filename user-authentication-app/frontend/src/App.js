import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import RetailPage from './components/RetailPage';
import Navbar from './components/Navbar';

const App = () => {
    const [auth, setAuth] = useState(localStorage.getItem('token') ? true : false);

    return (
        <Router>
            <Navbar auth={auth} />
            <Routes>
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm setAuth={setAuth} />} />
                <Route path="/retail" element={auth ? <RetailPage setAuth={setAuth} /> : <LoginForm setAuth={setAuth} />} />
            </Routes>
        </Router>
    );
};

export default App;
