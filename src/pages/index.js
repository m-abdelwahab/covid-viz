import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlobalStats from "../components/GlobalStats";
import ThemeProvider from "../contexts/themeProvider";
import ThemeToggle from "../components/ThemeToggle";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";

const IndexPage = () => {
  const [content, setContent] = useState(``);
  return (
    <ThemeProvider>
      <SEO title="Home" />
      <main className="container">
        <ThemeToggle />
        <GlobalStats
          title="Global Case"
          url={process.env.GATSBY_API_ENDPOINT}
        />
        <Map
          url={`${process.env.GATSBY_API_ENDPOINT}/confirmed`}
          setTooltipContent={setContent}
        />
        <ReactTooltip>{content}</ReactTooltip>
      </main>
    </ThemeProvider>
  );
};

export default IndexPage;
