
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: ${({ theme }) => (theme === "light" ? "rgb(42, 195, 222)" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background: rgb(4, 30, 41);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: rgb(9, 71, 98);
  }
`;

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
    navigate("/search");
  };

  return (
    <LoginContainer theme={theme}>
      <h2><FaUser /> Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type="submit">
          <FaUser /> Login
        
        </Button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
