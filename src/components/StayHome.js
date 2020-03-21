import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Placeholder from "./Placeholder";

const StayHome = () => {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          margin: "1em"
        }}
      >
        <Heading>The Self-Quarantine Manifesto</Heading>
        <SubHeading>
          With no well-studied treatment and no viable vaccine available for at
          least another year, the only effective way to keep the coronavirus
          pandemic at bay is to give the virus fewer chances of spreading. The
          following list of actions, ordered from easiest to implement to most
          effective in the fight against the pandemic, should serve as a set of
          loose guidelines for people who wish to join the movement and take
          action that can actually make a difference.
        </SubHeading>
      </div>
        <Container>
          <Title>
            Practice social distancing, no hugs and kisses, no handshakes, no
            high fives. If you must, use safer alternatives.
          </Title>
          <LazyLoad height="100%" placeholder={<Placeholder />}>
            <Img src="https://media.giphy.com/media/WdiaOAX35Pnzi/giphy.gif" />
          </LazyLoad>
        </Container>

        <Container>
          <Title>
            Do not attend concerts, stage plays, sporting events, or any other
            mass entertainment events. <br />
            Refrain from visiting museums, exhibitions, movie theaters, night
            clubs, and other entertainment venues. <br />
            Stay away from social gatherings and events, like club meetings,
            religious services, and private parties.
          </Title>
          <LazyLoad height="100%" placeholder={<Placeholder />}>
            <Img src="https://media.giphy.com/media/UWbTKqJTkd7uErSq99/giphy.gif" />
          </LazyLoad>
        </Container>

      <Container>
        <Title>
          Wash your hands often and practice good cough and sneeze etiquette.
        </Title>
        <LazyLoad height="100%" placeholder={<Placeholder />}>
          <Img src="https://media.giphy.com/media/kemdi7TniqYca14jI8/giphy.gif" />
        </LazyLoad>
      </Container>

      <Container>
        <Title>
          If you can work from home, work from home. Urge your employer to allow
          remote work if needed.Reduce travel to a minimum. Don't travel long
          distances if not absolutely necessary. Do not use public
          transportation if not absolutely necessary.
        </Title>
        <LazyLoad height="100%" placeholder={<Placeholder />}>
          <Img src="https://media.giphy.com/media/3oKIPoAP1wLvewc7QI/giphy.gif" />
        </LazyLoad>
      </Container>

      <Container>
        <Title>
          Replace as many social interactions as possible with remote
          alternatives like phone calls or video chat.
        </Title>
        <LazyLoad height="100%" placeholder={<Placeholder />}>
          <Img src="https://media.giphy.com/media/lS7kOhwRbZwLDynCA7/giphy.gif" />
        </LazyLoad>
      </Container>

      <Container>
        <Title>Do not leave your home unless absolutely necessary.</Title>
        <LazyLoad height="100%" placeholder={<Placeholder />}>
          <Img src="https://media.giphy.com/media/Qu1fT51CG14ksIkASL/giphy.gif" />
        </LazyLoad>
      </Container>
      <Container>
        <Title>Do not panic, but be alert</Title>
        <LazyLoad height="100%" placeholder={<Placeholder />}>
          <Img src="https://media.giphy.com/media/McVcE1YJrsze1qtgnP/giphy.gif" />
        </LazyLoad>
      </Container>
    </Section>
  );
};

export default StayHome;

const Section = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
`;

const Heading = styled.h1`
  max-width: 1000px;
  margin: 1em 0;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60vh;
  height: auto;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
  }
`;
const SubHeading = styled.p`
  max-width: 1000px;
  line-height: 1.8;
  font-size: 1.2em;
  margin: 1em 0;
`;
const Img = styled.img`
  width: 50%;
  margin: 1em;
  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    max-width: 350px;
  }
`;

const Title = styled.h2`
  max-width: 500px;
  width: 100%;
  margin: 1em;
  font-weight: 500;
  line-height: 1.5;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 2em 1em 1em 1em;
    margin-bottom: 0;
  }
  span {
    font-weight: 700;
  }
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: black;
  color: black;
`;
