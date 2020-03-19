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
`;
const Copy = styled.div`
  margin: 10px 0;
  font-size: 1em;
  line-height: 1;
`;
const GithubLink = styled.a`
  color: ${props => props.theme.colors.text};
`;

const Footer = () => (
  <FooterContainer>
    <Copy>
      <GithubLink
        href="https://github.com/m-abdelwahab"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <div>
          Designed &amp; Built with ❤ by Mahmoud Abdelwahab
          {` `}
        </div>
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
