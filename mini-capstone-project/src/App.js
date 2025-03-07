import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SearchList from "./components/Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/search" element={<SearchList />} />
            <Route path="/" element={<Login />} />
            
          </Routes>
          
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
