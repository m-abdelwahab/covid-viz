import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import {
  Layout,
  Affected,
  GlobalStats,
  Map,
  Misconceptions,
  SEO,
  StayHome,
} from "../components";

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
