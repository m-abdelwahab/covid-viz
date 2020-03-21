import React from "react";
import { getMaxNumInCountries } from "../utils";
import Row from "./Row";
import Error from "./Error";
import styled from "styled-components";
import useDataApi from "../hooks/useDataApi";
import { scaleLog } from "d3-scale";
import { format } from "date-fns";
import { RefreshIcon } from "./icons";
import Fade from "react-reveal/Fade";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Graticule
  // Sphere
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

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

  let max = getMaxNumInCountries(countriesData);
  const colorScale = scaleLog()
    .domain([1, max])
    .range(["#E6A6A6", "#E60000"]);

  return (
    <div>
      {isError ? (
        <Row>
          <Error message="There was an error fetching country data" />
        </Row>
      ) : (
        <Fade delay={1300}>
          <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
            <ZoomableGroup>
              <Graticule stroke="#E4E5E6" strokeWidth={1} />
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
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
                              <p>
                                <span role="img">😷</span> {confirmed}{" "}
                              </p>
                              <p>
                                <span role="img">💀</span>
                                {deaths}
                              </p>
                              <p>
                                <span role="img">🙌</span>
                                {recovered}
                              </p>
                              <p>
                                Last updated{" "}
                                {lastUpdate !== undefined
                                  ? format(new Date(lastUpdate), "MM/dd/yyyy")
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
                            fill: "#696969",
                            outline: "#000000"
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "#000000"
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </Fade>
      )}
      <Tip>
        You can see the stats of an individual country by clicking on it!
      </Tip>
    </div>
  );
};

export default Map;

const CountryStats = styled.div`
  display: flex;
  flex-direction: column;
  /* border-radius: 100px; */

  p {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 10px 0;
  }

  h5 {
    margin: 10px 0;
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

const Tip = styled.h1`
  font-size: 1em;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  display: block;
  text-align: center;
`;
