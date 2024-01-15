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
  width: 100%;
  height: 100%;
`;

const FooterTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  border-bottom: 1px solid #fff;
`;

const FooterTopItem = styled.div`
  width: 1200px;
  button {
    border: none;
    background-color: #654222;
    color: #fff;
    cursor: pointer;
  }
  span {
    padding: 0px 22px;
  }
`;

const FooterBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 64px;
`;

const FooterBottomContent = styled.div`
  display: flex;
  width: 1200px;
`;
const FooterBottomImg = styled.div`
  padding-right: 66.11px;
`;
const FooterBottomItem = styled.div`
  width: 675px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* padding-right: 10px; */
  span {
    padding: 22px 0 !important;
  }
`;

const Footer = () => {
  // const footerTopItem = ["개인정보취급방침", "│", "회사소개"];
  const footerBottomItem = [
    "상호명 : 호텔독",
    "대표 : 황예지",
    "TEL : 053-572-1005",
    "EMAIL : master@hoteldog.com",
    "주소 : 대구광역시 중구 중앙대로 394",
    "사업자등록번호 : 000-00-00000",
    "아쉽다아아아",
  ];

  return (
    <FooterDiv>
      <FooterContent>
        <FooterTop>
          {/* {footerTopItem.map((item, idx) => {
            return <FooterTopItem key={idx}>{item}</FooterTopItem>;
          })} */}
          <FooterTopItem>
            <button>개인정보취급방침</button>
            <span>|</span>
            <button>회사소개</button>
          </FooterTopItem>
        </FooterTop>

        <FooterBottom>
          <FooterBottomContent>
            <FooterBottomImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/logoBefore.svg`}
                alt=""
              />
            </FooterBottomImg>
            <FooterBottomItem>
              {footerBottomItem.map((item, idx) => {
                return (
                  <div key={idx}>
                    {/* {idx > 0 && <span></span>}{" "} */}
                    {/* 첫 번째 아이템 이후에는 구분선을 추가 */}
                    {item}
                  </div>
                );
              })}
              <span>Copyright©에이에프이엔씨.All Rights Reserved </span>
            </FooterBottomItem>
          </FooterBottomContent>
        </FooterBottom>
      </FooterContent>
    </FooterDiv>
  );
};

export default Footer;
