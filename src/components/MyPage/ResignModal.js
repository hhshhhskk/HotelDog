import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

// 모달을 감싸는 컨테이너 스타일 정의
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); // 배경에 반투명한 검은색 추가
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// 모달 내용을 담는 영역 스타일 정의
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 700px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  padding-left: 50px;
`;

// 닫기 버튼 스타일 정의
const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
const ModalTitle = styled.div`
  position: relative;
  margin-bottom: 10px;
  margin-top: 20px;

  h2 {
    color: #654222;
    /* font-family: "Noto Sans"; */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ResignList = styled.table`
  position: relative;
  /* display: flex; */
  justify-content: center;
  width: 550px;
  height: 210px;
  background-color: #eeeeee;
  border-radius: 10px;
  margin-bottom: 40px;
  border-collapse: collapse;
`;
const Price = styled.div`
  position: relative;
  width: 520px;
  margin: 0 auto;
  text-align: center;
  color: #654222;
  margin-top: 10px;
  p {
    display: inline;
    font-size: 10px;
    font-weight: 500;
  }
  span {
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    margin-right: 5px;
  }
`;
const RefundBt = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid #654222;
  background: #654222;
  color: #fff;
  font-weight: 600;
  font-size: 10px;
  cursor: pointer;
`;

const ResignBt = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  /* margin-top: 50px; */
  border-radius: 10px;
  border: 1px solid #654222;
  background: #654222;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ModalTxtContents = styled.div`
  position: relative;
  width: 550px;
  height: 200px;
  border-radius: 10px;
  background: #fffaf0;
  cursor: pointer;
  margin-bottom: 25px;
  padding: 30px;
  line-height: 16px;
  font-size: 12px;
  h2 {
    position: relative;
    margin-bottom: 2px;
    font-size: 12px;
    color: #654222;
  }
  p {
    position: relative;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  span {
    position: relative;
    margin-left: 10px;
  }
`;
const ListContents = styled.div`
  position: relative;
  margin: 0 auto;
  width: 520px;
  height: auto;
  background-color: #fff;
  margin-top: 13px;
  font-size: 11px;
  max-height: 156px; /* 스크롤이 생길 최대 높이 */
  overflow: auto;
  /* & td:last-child {
    width: ${props => (props.hasScroll ? "105px" : "120px")};
  } */
`;
const ContentsCate = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: auto;
  background-color: #654222;
  color: #fff;
  /* padding: 7px; */
  ul {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
  }
  li {
    position: relative;
  }
`;
const ContentsDetail = styled.tbody`
  position: relative;
  color: #654222;
`;

const Th = styled.th`
  padding: 9px;
  text-align: left;
`;

const Td = styled.td`
  padding: 9px;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #fffaf0; /* 짝수 행 배경색 */
  }
  &:nth-child(odd) {
    background-color: #ffffff; /* 홀수 행 배경색 */
  }
`;
const StyledSpan = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-bottom: 0.2px solid red;
  }
`;
const BtArea = styled.div`
  position: relative;
  width: 550px;
`;

const initData = [
  {
    id: 1,
    hotelName: "Hotel A",
    reservationDate: "2024-01-24 ~ 2024-01-26",
    before: "65,000",
    after: "65,000",
  },
  {
    id: 2,
    hotelName: "Hotel B",
    reservationDate: "2024-01-24 ~ 2024-01-26",
    before: "65,000",
    after: "65,000",
  },
  {
    id: 3,
    hotelName: "Hotel C",
    reservationDate: "2024-01-24 ~ 2024-01-26",
    before: "65,000",
    after: "65,000",
  },
  {
    id: 3,
    hotelName: "Hotel C",
    reservationDate: "2024-01-24 ~ 2024-01-26",
    before: "65,000",
    after: "65,000",
  },
];

const ResignModal = ({ onCloseModal }) => {
  const handleModalClose = () => {
    onCloseModal();
  };

  const handleRefundButtonClick = () => {
    if (confirm("환불하시겠습니까?")) {
      alert("환불이 완료되었습니다.");
    }
  };
  const handleResignButtonClick = () => {
    // 탈퇴 처리 로직 추가

    alert("탈퇴가 완료되었습니다.");
    location.href = "/login";
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>
          <h2>환불정책</h2>
        </ModalTitle>
        <ModalTxtContents>
          <h2>1. 환불 기간 및 비율</h2>
          <span>예약 취소 시점에 따라 환불 비율이 다릅니다.</span>
          <p>
            • 예약 취소가 7일 전에 이뤄진 경우: 100%
            <br />
            • 환불 예약 취소가 3일 전에 이뤄진 경우: 결제 금액의 80%
            <br />• 환불 예약 취소가 1일전 또는 이후에 이뤄진 경우: 환불 불가
          </p>
          <h2>2. 환불 방법</h2>
          <p>
            • 환불 방법 환불은 원래 결제 방법을 통해 처리됩니다. <br />• 예를
            들어, 신용카드로 결제한 경우, 환불은 해당 신용카드로 이루어집니다.
          </p>
        </ModalTxtContents>
        <ModalTitle>
          <h2>환불 예약 내역</h2>
        </ModalTitle>
        <ResignList>
          <ListContents>
            <ContentsCate>
              <tr>
                <Th style={{ width: "70px", textAlign: "center" }}>번호</Th>
                <Th style={{ width: "160px" }}>호텔 이름</Th>
                <Th style={{ width: "170px" }}>예약 날짜</Th>
                <Th style={{ width: "120px" }}>환불 금액</Th>
              </tr>
            </ContentsCate>
            <ContentsDetail>
              {initData.map((item, index) => (
                <Tr key={item.id}>
                  <Td style={{ width: "70px", textAlign: "center" }}>
                    {index + 1}
                  </Td>
                  <Td style={{ width: "160px" }}>{item.hotelName}</Td>
                  <Td style={{ width: "170px" }}>{item.reservationDate}</Td>
                  <Td style={{ width: "120px" }}>
                    <StyledSpan>{item.before}</StyledSpan>
                    <img
                      style={{ padding: "0 5px 2px 5px" }}
                      src={`${process.env.PUBLIC_URL}/images/MyPage/Polygon.svg`}
                    />
                    {item.after}
                  </Td>
                </Tr>
              ))}
            </ContentsDetail>
          </ListContents>
          <Price>
            <p>총 환불 금액</p>
            <span>260,000</span>
            <p>원</p>
            <RefundBt onClick={handleRefundButtonClick}>환불하기</RefundBt>
          </Price>
        </ResignList>
        <BtArea>
          <ResignBt onClick={handleResignButtonClick}>
            <p>탈퇴 하기</p>
          </ResignBt>
        </BtArea>

        <CloseButton onClick={handleModalClose}>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/close.svg`} />
        </CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ResignModal;
