import React from "react";
import styled from "styled-components";
import { data } from "../data/misconceptions";

const Misconceptions = () => {
  return (
    <Section>
      <Title>Common Questions & Misconceptions</Title>
      {data.map((item, i) => {
        return (
          <Container key={i}>
            <Question>{item.question}</Question>
            <Answer>{item.answer}</Answer>
          </Container>
        );
      })}
    </Section>
  );
};

export default Misconceptions;

const Section = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 2em;
  height: auto;
  min-height: 100vh;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  padding: 1em;
  display: block;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  border-top: 0.5px solid #d2d6dc;
  border-bottom: 0.5px solid #d2d6dc;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 2em 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-right:1em;
  }
`;
const Question = styled.h2`
  display: flex;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  width: 50%;
  margin-right: 1em;
  @media (max-width: 1000px) {
    width: 100%;
    padding:0 1em;
  }
`;

const Answer = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  width: 100%;
  line-height: 1.5;
  font-weight: 300;
  @media (max-width: 1000px) {
    width: 100%;
    padding:0 1em;
  }
`;
