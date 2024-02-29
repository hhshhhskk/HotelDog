import styled from "@emotion/styled";
import React from "react";

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
`;

const CompleteBtn = styled.div`
  width: 120px;
  height: 50px;
  margin: 0 auto;
  margin-top: 100px;
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
const AdvertComplete = ({ setAdvertModalState }) => {
  return (
    <ModalWrapper>
      <ImgBox>
        <CompleteImg
          src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/Advert/complete.svg`}
        />
      </ImgBox>
      <BigText>광고 결제가 완료되었습니다!</BigText>
      <SmText>오늘부터 시스템에 반영되어 호텔 광고가 시작됩니다.</SmText>
      <SmText>다음 자동 결제 시점은 2023-03-01 입니다.</SmText>
      <CompleteBtn onClick={() => setAdvertModalState(false)}>확인</CompleteBtn>
    </ModalWrapper>
  );
};

export default AdvertComplete;
