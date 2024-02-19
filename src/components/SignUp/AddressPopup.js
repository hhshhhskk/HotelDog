import React from "react";
import DaumPostcode from "react-daum-postcode";

import { addressApi } from "../../api/SignUp/addressApi";
import {
  CloseDiv,
  CloseImg,
  PopupWrapper,
} from "../../styles/SignUpPageStyle/addressPopupStyle";

const AddressPopup = ({ setPopUp, setAddress }) => {
  const handleComplete = data => {
    addressApi(data.address, setAddress);
    // console.log(data);
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
