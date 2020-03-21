import React, { useState, Suspense } from "react";
import ReactTooltip from "react-tooltip";
import {
  Layout,
  SEO,
  GlobalStats,
  Map,
  Affected,
  StayHome,
  Misconceptions,
  Spinner
} from "../components";

const IndexPage = () => {
  const [content, setContent] = useState(``);
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};

export default IndexPage;
