import styled from "@emotion/styled";
import React from "react";

const FooterDiv = styled.div`
  background-color: #654222;

  width: 100%;
  min-width: 1250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 33px;
  color: #fff;
`;

const FooterContent = styled.div`
  width: 1200px;
  height: 100%;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContent>Footer</FooterContent>
    </FooterDiv>
  );
};

export default Footer;
