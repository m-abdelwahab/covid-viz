import React from "react";
import styled from "styled-components";
import ThemeProvider from "../contexts/themeProvider";
import { Footer, ThemeToggle } from "./index";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Main>
        <ThemeToggle />
        {children}
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

export default Layout;

const Main = styled.div`
  margin: 0 auto;
`;
