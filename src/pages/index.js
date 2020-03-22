import React, { useState, Suspense } from "react";
import ReactTooltip from "react-tooltip";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/Map"
import StayHome from "../components/StayHome"
import Misconceptions from "../components/Misconceptions"
import Affected from "../components/Affected"
import Spinner from "../components/Spinner"
import GlobalStats from "../components/GlobalStats"

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
