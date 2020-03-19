import { createGlobalStyle } from "styled-components";

const CommonColors = {
  warning: "#f77427",
  success: "#05b584",
  danger: "#ec314b"
};

export const lightTheme = {
  borderRadius: "4px",
  colors: {
    primary: "#4caf50",
    background: "#F4F6F8",
    backgroundLight: "#ffffff",
    text: "#000000",
    textLight: "#8E9EAC",
    ...CommonColors
  }
};

export const darkTheme = {
  borderRadius: "4px",
  colors: {
    primary: "#6ca22d",
    background: "#19212a",
    backgroundLight: "#212b36",
    text: "#ffffff",
    textLight: "#a5b7c7",
    ...CommonColors
  }
};

const customMediaQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  dekstop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
  .container {
    max-width: 800px;
    margin: 0px auto 8rem auto;
    min-height: 100vh;
  }
  .center-text {
    text-align: center;
  }
  .tooltip {
  color: ${props => props.theme.colors.text} !important;
  background-color: ${props => props.theme.colors.background} !important;
  box-shadow: 4px 6px 19px -8px rgba(0,0,0,0.75);
  &.place-top {
  &:after {
  border-top-color: ${props => props.theme.colors.background} !important;
  border-top-style: solid !important;
  border-top-width: 6px !important;
  }
 }
}
`;
