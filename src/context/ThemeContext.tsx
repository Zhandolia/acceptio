// acceptio/src/context/ThemeContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context
interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

// Create the context with default values
export const ThemeContext = createContext<ThemeContextProps>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize theme based on localStorage or default to light theme
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("isDarkTheme");
      return storedTheme ? JSON.parse(storedTheme) : false;
    }
    return false;
  });

  // Toggle theme and save preference to localStorage
  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      localStorage.setItem("isDarkTheme", JSON.stringify(!prev));
      return !prev;
    });
  };

  // Apply theme class to body
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("darkTheme", isDarkTheme);
      document.body.classList.toggle("lightTheme", !isDarkTheme);
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
