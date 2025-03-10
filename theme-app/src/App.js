import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import LoadableComponent from "./utils/LoadableComponent";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoadableComponent page="home" />} />
          <Route path="/about" element={<LoadableComponent page="about" />} />
          <Route path="/contact" element={<LoadableComponent page="contact" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
