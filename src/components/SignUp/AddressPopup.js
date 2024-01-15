import styled from "@emotion/styled";
import React from "react";
import DaumPostcode from "react-daum-postcode";

const PopupWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 15%;

  width: 500px;
  height: 500px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 500;
`;

const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const CloseImg = styled.img``;

const AddressPopup = ({ setPopUp, setAddress }) => {
  const handleComplete = data => {
    console.log(data);
    setAddress(data.address);
    setPopUp(false);
  };

  return (
    <PopupWrapper>
      <CloseDiv>
        <CloseImg
          onClick={() => {
            setPopUp(false);
          }}
          src={`${process.env.PUBLIC_URL}/images/closeBtn.svg`}
          alt=""
        />
      </CloseDiv>
      <DaumPostcode onComplete={handleComplete} />
    </PopupWrapper>
  );
};

export default AddressPopup;
