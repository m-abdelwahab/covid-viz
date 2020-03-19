import React from "react";
import styled from "styled-components";
import Row from "./Row";
import { ChildrenIcon, ElderlyIcon, ImmunityIcon } from "../components/icons/";

const Affected = () => {
  return (
    <Section>
      <Heading> Who is affected by this virus?</Heading>
      <Row>
        <Card>
          <ChildrenIcon />
          <h2>Children</h2>
        </Card>
        <Card>
          <ElderlyIcon />
          <h2>The Elderly</h2>
        </Card>
        <Card>
          <ImmunityIcon />
          <h2>
            Immunosuppressed <br />
            Individuals
          </h2>
        </Card>
      </Row>
    </Section>
  );
};

export default Affected;

const Heading = styled.h1`
  display: block;
  text-align: center;
`;

const Section = styled.div`
  height: auto;
  min-height: 100vh;
  svg {
    width: 100px;
    height: 100px;
    fill: ${props => props.theme.colors.text};
    stroke: ${props => props.theme.colors.text};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  min-height: 150px;
  min-width: 300px;
  border-radius: 10px;
  margin: 1.5em;
  box-shadow: 4px 6px 19px -8px rgba(0, 0, 0, 0.75);

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;
