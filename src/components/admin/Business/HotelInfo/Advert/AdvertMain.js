import React from "react";
import styled from "@emotion/styled";
import AdvertModal from "./AdvertModal";
import AdvertProgress from "./AdvertProgress";

const AdvertWrap = styled.div``;

const AdvertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

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

const AdvertMain = ({ setAdvertModalState, advertise }) => {
  if (advertise === 0) {
    console.log("광고 시작전 : ", advertise);
  } else if (advertise === 1) {
    console.log("광고 진행중 : ", advertise);
  }

  return (
    <AdvertWrap>
      <AdvertOverlay />
      {advertise === 0 ? (
        <AdvertModal setAdvertModalState={setAdvertModalState} />
      ) : advertise === 1 ? (
        <AdvertProgress setAdvertModalState={setAdvertModalState} />
      ) : null}
    </AdvertWrap>
  );
};

export default AdvertMain;
