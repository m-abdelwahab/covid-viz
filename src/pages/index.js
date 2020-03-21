import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlobalStats from "../components/GlobalStats";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import Affected from "../components/Affected";
import StayHome from "../components/StayHome";
import Misconceptions from "../components/Misconceptions";

const IndexPage = () => {
  const [content, setContent] = useState(``);
  return (
    <Layout>
      <SEO title="Home" />
      <main className="container">
        <GlobalStats
          title="Global Stats"
          url={"https://covid19.mathdro.id/api"}
        />
        <Map
          url={"https://covid19.mathdro.id/api/confirmed"}
          setTooltipContent={setContent}
        />
        <ReactTooltip className="tooltip">{content}</ReactTooltip>
        <Affected />
        <StayHome />
        <Misconceptions />
      </main>
    </Layout>
  );
};

export default IndexPage;
