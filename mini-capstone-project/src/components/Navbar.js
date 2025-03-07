import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { FaMoon, FaSun, FaSignOutAlt, FaUser } from "react-icons/fa";
import UserProfile from "./UserProfile"; // Import UserProfile
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  background: ${({ theme }) => (theme === "light" ? "rgb(12, 94, 129)" : "#222")};
  color: #fff;
  padding: 15px;
  border: 1px solid rgb(230, 238, 230);
  box-shadow: 100px 100px 100px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(AuthContext);

  return (
    <NavBar theme={theme}>
      <h3>Advanced App</h3>
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-outline-warning me-2" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        {user ? (
          <>
            <UserProfile />
            <Link to="/" className="btn btn-danger" onClick={logout}>
              <FaSignOutAlt /> Logout
            </Link>
          
          </>
        ) : (
        
            <Link to="/" className="btn btn-primary" onClick={login}>
            <FaUser /> Login
            </Link>
        )}
      </div>
    </NavBar>
  );
}

export default Navbar;
