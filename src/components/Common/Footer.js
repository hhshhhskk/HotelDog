import React from "react";
import {
  FooterDiv,
  FooterContent,
  FooterTop,
  FooterTopItem,
  FooterBottom,
  FooterBottomContent,
  FooterBottomLogo,
  FooterBottomItem,
} from "../../styles/Common/footerStyle";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContent>
        <FooterTop>
          <FooterTopItem>
            <button>개인정보취급방침</button>
            <span>|</span>
            <button>회사소개</button>
          </FooterTopItem>
        </FooterTop>

        <FooterBottom>
          <FooterBottomContent>
            <FooterBottomLogo>
              <img
                src={`${process.env.PUBLIC_URL}/images/logoBefore.svg`}
                alt=""
              />
            </FooterBottomLogo>
            <FooterBottomItem>
              <ul>
                <li>상호명 : 호텔독</li>
                <li>대표 : 홍길동</li>
                <li>TEL : 053-572-1005</li>
                <li>EMAIL : master@hoteldog.com</li>
                <li>주소 : 대구광역시 중구 중앙대로 394</li>
                <li>사업자등록번호 : 000-00-00000</li>
              </ul>
              <span>Copyright©에이에프이엔씨.All Rights Reserved </span>
            </FooterBottomItem>
          </FooterBottomContent>
        </FooterBottom>
      </FooterContent>
    </FooterDiv>
  );
};

export default Footer;
