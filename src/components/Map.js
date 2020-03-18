import React from "react";
import {
  formatNumber,
  formatDate,
  getMinNumInCountries,
  getMaxNumInCountries
} from "../utils";
import Row from "./Row";
import Error from "./Error";
import styled from "styled-components";
import useDataApi from "../hooks/useDataApi";
import { scaleLog } from "d3-scale";
import { format } from "date-fns";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const rounded = num => {
//   if (num > 1000000000) {
//     return Math.round(num / 100000000) / 10 + "Bn";
//   } else if (num > 1000000) {
//     return Math.round(num / 100000) / 10 + "M";
//   } else {
//     return Math.round(num / 100) / 10 + "K";
//   }
// };

const Map = ({ setTooltipContent, url }) => {
  const [{ data, isError }] = useDataApi({
    initUrl: url,
    defaultData: {}
  });

  const countriesData = [];
  Object.values(data).map(country => {
    const { iso3, deaths, recovered, confirmed, lastUpdate } = country;
    countriesData.push({
      iso3: iso3,
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate
    });
  });
  let min = getMinNumInCountries(countriesData);
  let max = getMaxNumInCountries(countriesData);
  console.log(max);

  const colorScale = scaleLog()
    .domain([min, max])
    .range(["#E6A6A6", "#E60000"]);

  return (
    <div>
      {isError ? (
        <Row>
          <Error message="There was an error fetching country data" />
        </Row>
      ) : (
        <>
          <StatSubtitle>
            Last updated: {data?.lastUpdate && formatDate(data.lastUpdate)}
          </StatSubtitle>
          {data && (
            <>
              <>
                <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                  <ZoomableGroup>
                    <Graticule stroke="#E4E5E6" strokeWidth={1} />
                    <Geographies geography={geoUrl}>
                      {({ geographies }) => {
                        console.log(geographies);
                        geographies &&
                          geographies.map(geo => {
                            const d = countriesData.find(
                              country => country.iso3 === geo.properties.ISO_A3
                            );
                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={d ? colorScale(d.confirmed) : "#D6D6DA"}
                                onMouseEnter={() => {
                                  const { NAME, ISO_A3 } = geo.properties;

                                  const country = countriesData.find(
                                    country => country.iso3 === ISO_A3
                                  );
                                  const {
                                    confirmed = 0,
                                    deaths = 0,
                                    recovered = 0,
                                    lastUpdate
                                  } = country || {};
                                  setTooltipContent(
                                    <CountryStats>
                                      <h5>{NAME}</h5>
                                      <p>Confirmed: {confirmed} </p>
                                      <p>Recovered: {deaths}</p>
                                      <p>Deaths: {recovered}</p>
                                      <p>
                                        Last update:{" "}
                                        {lastUpdate !== undefined
                                          ? format(
                                              new Date(lastUpdate),
                                              "MM/dd/yyyy"
                                            )
                                          : "-"}
                                      </p>
                                    </CountryStats>
                                  );
                                }}
                                onMouseLeave={() => {
                                  setTooltipContent("");
                                }}
                                style={{
                                  hover: {
                                    fill: "#F53",
                                    outline: "none"
                                  },
                                  pressed: {
                                    fill: "#E42",
                                    outline: "none"
                                  }
                                }}
                              />
                            );
                          });
                      }}
                    </Geographies>
                  </ZoomableGroup>
                </ComposableMap>
              </>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Map;

const StatSubtitle = styled.span`
  font-size: 14px;
  opacity: 0.8;
  color: black;
`;
const CountryStats = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  @media screen and (max-width: 710px) {
    p {
      font-size: 3.33vw;
    }

    h5 {
      font-size: 4.44vw;
    }
  }
`;
