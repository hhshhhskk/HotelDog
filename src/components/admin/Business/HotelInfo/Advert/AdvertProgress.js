import styled from "@emotion/styled";
import React, { useState } from "react";
import AdvertCancel from "./AdvertCancel";

const ModalWrapper = styled.div`
  position: relative;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 650px;

  padding: 29px 58px;
  z-index: 600;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  margin-bottom: 50px;
`;

const CompleteImg = styled.img``;

const BigText = styled.div`
  color: #346fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-bottom: 30px;
`;

const SmText = styled.div`
  color: #666;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;

  span {
    color: #346fff;
  }
`;

const InfoBtnBox = styled.div`
  height: 50px;
  margin-top: 100px;
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

const AdvertProgress = ({ setAdvertModalState }) => {
  const [advertCancel, setAdvertCancel] = useState(false);
  return (
    <>
      {advertCancel ? (
        <AdvertCancel setAdvertModalState={setAdvertModalState} />
      ) : (
        <ModalWrapper>
          <ImgBox>
            <CompleteImg
              src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/Advert/progress.svg`}
            />
          </ImgBox>
          <BigText>곽민성 님의 호텔이 광고중입니다.</BigText>
          <SmText>이번 달 만료일은 2023-02-29 이고,</SmText>
          <SmText>
            다음 자동 결제 시점은 <span>2023-03-01 입니다.</span>
          </SmText>
          <InfoBtnBox>
            <CancelBtn
              onClick={() => {
                setAdvertCancel(true);
              }}
            >
              해지
            </CancelBtn>
            <AdvertBtn onClick={() => setAdvertModalState(false)}>
              닫기
            </AdvertBtn>
          </InfoBtnBox>
        </ModalWrapper>
      )}
    </>
  );
};

export default AdvertProgress;
