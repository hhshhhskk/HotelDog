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

  font-size: 15px;
  color: #fff;
`;

const FooterContent = styled.div`
  width: 1200px;
  height: 100%;
`;

const FooterTop = styled.div`
  position: relative;
  height: 65px;
  background-color: yellowgreen;
`;

const FooterTopItem = styled.span`
  padding-right: 15px;
`;

const FooterBottom = styled.div`
  position: relative;
  display: flex;
`;

const FooterBottomItem = styled.div`
  display: flex;
`;

const Footer = () => {
  const footerTopItem = ["개인정보취급방침", "│", "회사소개"];
  const footerBottomItem = [
    "상호명 : 호텔독",
    "대표 : 곽민성",
    "TEL : 053-572-1005",
    "EMAIL : master@hoteldog.com",
    "주소 : 대구광역시 중구 중앙대로 394",
    "사업자등록번호 : 000-00-00000",
  ];

  return (
    <FooterDiv>
      <FooterContent>
        <FooterTop>
          {footerTopItem.map((item, idx) => {
            return <FooterTopItem key={idx}>{item}</FooterTopItem>;
          })}
        </FooterTop>
        <FooterBottom>
          <div>
            <div>로고</div>
          </div>
          <div>
            {footerBottomItem.map((item, idx) => {
              return <FooterBottomItem key={idx}>{item}</FooterBottomItem>;
            })}
            <span>Copyright©에이에프이엔씨.All Rights Reserved </span>
          </div>
        </FooterBottom>
      </FooterContent>
    </FooterDiv>
  );
};

export default Footer;
