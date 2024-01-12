import styled from "@emotion/styled";
import React from "react";

const TopBt = styled.button`
  position: fixed;
  top: 90%;
  left: 83%;
  background-color: #654222;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
`;

const TopBtImg = styled.img`
  position: relative;
  padding-right: 5px;
  top: -1px;
`;

const TopButton = () => {
  const handleClick = e => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <TopBt
        onClick={e => {
          handleClick(e);
        }}
      >
        <TopBtImg
          src={`${process.env.PUBLIC_URL}/images/bt_arrow.svg`}
          alt=""
        />
        TOP
      </TopBt>
    </div>
  );
};

export default TopButton;
