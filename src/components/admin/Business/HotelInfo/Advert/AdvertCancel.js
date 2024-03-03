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

const AdvertCancel = ({ setAdvertModalState }) => {
  return (
    <ModalWrapper>
      <ImgBox>
        <CompleteImg
          src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/Advert/warning.svg`}
        />
      </ImgBox>
      <BigText>정말 해지하시겠어요?</BigText>
      <SmText>
        지금 해지하시면 <span>2023-02-29</span> 까지 이용 가능하고,
      </SmText>
      <SmText>다음 정기결제시점 (2023-03-01) 부터</SmText>
      <SmText>결제가 중단됩니다. 계속 하시겠어요?</SmText>
      <InfoBtnBox>
        <CancelBtn onClick={() => setAdvertModalState(false)}>취소</CancelBtn>
        <AdvertBtn
          onClick={() => {
            alert("광고가 해지 되었습니다.");
            setAdvertModalState(false);
          }}
        >
          해지
        </AdvertBtn>
      </InfoBtnBox>
    </ModalWrapper>
  );
};

export default AdvertCancel;
