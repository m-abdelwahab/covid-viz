import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlobalStats from "../components/GlobalStats";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import Hero from "../components/Hero";
import Affected from "../components/Affected";
import StayHome from "../components/StayHome";
import Misconceptions from "../components/Misconceptions";

const IndexPage = () => {
  const [content, setContent] = useState(``);
  return (
    <Layout>
      <SEO title="Home" />
      <main className="container">
        <Hero />
        <Affected />
        <StayHome />
        <Misconceptions />
        <GlobalStats
          title="Global Stats"
          url={process.env.GATSBY_API_ENDPOINT}
        />
        <Map
          url={`${process.env.GATSBY_API_ENDPOINT}/confirmed`}
          setTooltipContent={setContent}
        />
        <ReactTooltip className="tooltip">{content}</ReactTooltip>
      </main>
    </Layout>
  );
};

export default IndexPage;
