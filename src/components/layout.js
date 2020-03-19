import React from "react";
import Footer from "./Footer";
import ThemeProvider from "../contexts/themeProvider";
import ThemeToggle from "../components/ThemeToggle";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <main>
        <ThemeToggle />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
