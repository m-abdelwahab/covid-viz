import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <h1>Hello From hero Section</h1>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  height: 100vh;
  background-color: whitesmoke;
`;
