import React, { createContext, useState, useContext } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Custom Hook for using Theme
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider to manage theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
