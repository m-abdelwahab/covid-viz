import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  text-align: center;
  height: auto;
  min-height: 70px;
  line-height:1.5;
`;
const Copy = styled.div`
  margin: 10px 0;
  font-size: 1em;
  line-height: 1.5;
`;
const GithubLink = styled.a`
  color: ${props => props.theme.colors.text};
`;

const Footer = () => (
  <FooterContainer>
    <Copy>
      <div>
        Designed &amp; Built with ❤ by{" "}
        <GithubLink
          href="https://github.com/m-abdelwahab"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Mahmoud Abdelwahab.
        </GithubLink>{" "}
        Icons from{" "}
        <a
          href="https://thenounproject.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          The Noun Project
        </a>
        , inspired by{" "}
        <a
          href="https://staythefuckhome.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          staythefuckhome.com
        </a>
      </div>
    </Copy>
  </FooterContainer>
);

export default Footer;
