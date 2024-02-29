import React, { useState } from "react";
import styled from "@emotion/styled";
import AdvertReq from "./AdvertReq";

const ModalWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 650px;

  padding: 29px 33px;
  z-index: 600;
`;

const CloseBtn = styled.img``;

const ModalTitle = styled.div`
  color: #000;
  font-family: "Noto Sans";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ModalTitleInfo = styled.div`
  color: #000;
  font-family: "Noto Sans";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
`;

const InfoBox = styled.div`
  background-color: #eee;
  width: 100%;
  height: 350px;

  display: flex;

  div {
    width: 100%;
    height: 175px;
  }
`;
const InfoItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoItemImg = styled.img``;

const InfoItemText = styled.span`
  color: #000;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InfoItemSmText = styled.span`
  color: #000;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InfoBtnBox = styled.div`
  height: 50px;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const CancelBtn = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #323232;
  background: #fff;

  color: #323232;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;

  cursor: pointer;
`;

const AdvertBtn = styled.div`
  background-color: #323232;
  width: 120px;
  height: 50px;
  border-radius: 5px;

  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;

  cursor: pointer;
`;

const AdvertModal = ({ setAdvertModalState }) => {
  const [advertReqState, setAdvertReqState] = useState(false);

  return (
    <>
      {advertReqState ? (
        <AdvertReq setAdvertModalState={setAdvertModalState} />
      ) : (
        <ModalWrapper>
          <ModalTitle>호텔 광고</ModalTitle>
          <ModalTitleInfo>원할 때 언제든 해지할 수 있어요.</ModalTitleInfo>
          <InfoBox>
            <div>
              <InfoItem>
                <InfoItemImg
                  style={{ marginTop: 20, marginBottom: 15 }}
                  src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/Advert/money.svg`}
                />
                <InfoItemText>계약이 아닌 한달 구독</InfoItemText>
                <InfoItemSmText>월 5만원 부담 없는 조건과 가격</InfoItemSmText>
              </InfoItem>
              <InfoItem>
                <InfoItemImg
                  src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/Advert/sortUp.svg`}
                />
                <InfoItemText>편리한 자동 결재</InfoItemText>
                <InfoItemSmText>매월 신청일 기준</InfoItemSmText>
              </InfoItem>
            </div>
            <div>
              <InfoItem>
                <InfoItemImg
                  src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/Advert/wallet.svg`}
                />
                <InfoItemText>호텔 리스트 최상단 노출</InfoItemText>
                <InfoItemSmText>화면 고침 시마다 랜덤 출력</InfoItemSmText>
              </InfoItem>
              <InfoItem>
                <InfoItemImg
                  src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/Advert/shakeHands.svg`}
                />
                <InfoItemText>간편한 신청과 해지</InfoItemText>
                <InfoItemSmText>해지 시 그 달 만료일까지 서비스</InfoItemSmText>
              </InfoItem>
            </div>
          </InfoBox>
          <InfoBtnBox>
            <CancelBtn onClick={() => setAdvertModalState(false)}>
              취소
            </CancelBtn>
            <AdvertBtn onClick={() => setAdvertReqState(true)}>광고</AdvertBtn>
          </InfoBtnBox>
        </ModalWrapper>
      )}
    </>
  );
};

export default AdvertModal;
