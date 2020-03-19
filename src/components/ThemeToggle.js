import React from "react";
import styled from "styled-components";

import { useTheme } from "../contexts/themeProvider";
import { mediaQuery } from "../theme";
import MoonIcon from "../components/icons/MoonIcon";
import SunIcon from "../components/icons/SunIcon";

const ButtonSwitch = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  background-color: transparent;
  position: fixed;
  top: 10px;
  right: 1em;
  /* border-radius: 25px; */
  /* box-shadow: 0 1px 4px rgba(0, 50, 50, 0.08); */
  svg {
    fill: ${props => props.theme.colors.text};
    stroke: ${props => props.theme.colors.text};
    height: 1.25rem;
    width: 1.25rem;
    margin: 0 auto;
  }
`;

const FloatingContainer = styled.div``;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <FloatingContainer>
      <ButtonSwitch onClick={toggleTheme}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </ButtonSwitch>
    </FloatingContainer>
  );
};

export default ThemeToggle;
