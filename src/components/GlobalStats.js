import React from "react";
import styled from "styled-components";

import useDataApi from "../hooks/useDataApi";
import { formatNumber, formatDate } from "../utils";
import Card from "./Card";
import Error from "./Error";
import Row from "./Row";

const StatSection = styled.section`
  display: block;
`;

const StatHeading = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StatTitle = styled.h2`
  color: inherit;
  margin-bottom: 0.2rem;
`;

const StatSubtitle = styled.span`
  font-size: 14px;
  opacity: 0.8;
  color: black;
`;

const GlobalStats = ({ url, title }) => {
  const [{ data, isLoading, isError }] = useDataApi({
    initUrl: url,
    defaultData: {}
  });

  return (
    <StatSection className="center-text">
      {isError ? (
        <Row>
          <Error message="No Data Available" />
        </Row>
      ) : (
        <>
          <StatHeading>
            {title && <StatTitle>{title}</StatTitle>}
            <StatSubtitle>
              Last updated: {data?.lastUpdate && formatDate(data.lastUpdate)}
            </StatSubtitle>
          </StatHeading>
          <Row>
            {data && (
              <>
                <Card info="warning" loading={isLoading}>
                  <h2>
                    {data.confirmed && formatNumber(data.confirmed.value)}
                  </h2>
                  <h4>
                    Confirmed{" "}
                    <span role="img" aria-label="muscle">
                      &#128567;
                    </span>
                  </h4>
                </Card>
                <Card info="danger" loading={isLoading}>
                  <h2>{data.deaths && formatNumber(data.deaths.value)}</h2>
                  <h4>
                    Deaths
                    <span role="img" aria-label="muscle">
                      💀
                    </span>
                  </h4>
                </Card>
                <Card info="success" loading={isLoading}>
                  <h2>
                    {data.recovered && formatNumber(data.recovered.value)}
                  </h2>
                  <h4>
                    Recovered{" "}
                    <span role="img" aria-label="muscle">
                      &#128588;
                    </span>
                  </h4>
                </Card>
              </>
            )}
          </Row>
        </>
      )}
    </StatSection>
  );
};

export default GlobalStats;
