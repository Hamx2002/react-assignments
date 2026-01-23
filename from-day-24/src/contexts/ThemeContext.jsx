import { createContext, useState } from "react";

// 1. Create Context
export const ThemeContext = createContext();

// 2. Create Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
