import React, { useContext, createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "../theme";
import { useDarkMode } from "../hooks/useDarkMode";

const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [mode, toggleMode] = useDarkMode();

  const toggleTheme = () => {
    toggleMode();
  };

  const computedTheme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: mode, toggleTheme }}>
      <StyledThemeProvider theme={computedTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
