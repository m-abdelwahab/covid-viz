import React from "react";
import styled from "styled-components";

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
        <Title>Don't panic, but be alert.</Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>

      <Container>
        <Title>
          Wash your hands often and practice good cough and sneeze etiquette.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>

      <Container>
        <Title>
          Try to touch your face as little as possible, including your mouth,
          nose, and eyes.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>

      <Container>
        <Title>
          Practice social distancing, no hugs and kisses, no handshakes, no high
          fives. If you must, use safer alternatives.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>

      <Container>
        <Title>
          Do not attend concerts, stage plays, sporting events, or any other
          mass entertainment events.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>
      <Container>
        <Title>
          Refrain from visiting museums, exhibitions, movie theaters, night
          clubs, and other entertainment venues.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>
      <Container>
        <Title>
          Stay away from social gatherings and events, like club meetings,
          religious services, and private parties.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>
      <Container>
        <Title>
          Reduce travel to a minimum. Don't travel long distances if not
          absolutely necessary.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>
      <Container>
        <Title>
          Do not use public transportation if not absolutely necessary.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>
      <Container>
        <Title>
          Do not use public transportation if not absolutely necessary.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>
      <Container>
        <Title>
          If you can work from home, work from home. Urge your employer to allow
          remote work if needed.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>
      <Container>
        <Title>
          Replace as many social interactions as possible with remote
          alternatives like phone calls or video chat.
        </Title>
        <Img src="https://via.placeholder.com/300" />
      </Container>

      <Container>
        <Title>Do not leave your home unless absolutely necessary.</Title>
        <Img src="https://via.placeholder.com/300" />
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
  min-height: 80vh;
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
`;

const Title = styled.h2`
  max-width: 500px;
  width: 100%;
  margin: 1em;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1em;
    padding: 2em;
  }
  span {
    font-weight: 700;
  }
`;
