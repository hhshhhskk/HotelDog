import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const TopBt = styled.button`
  position: fixed;
  bottom: 350px;
  right: 50px;
  background-color: #654222;
  border: none;
  border-radius: 30px;
  padding: 10px 17px;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;

const TopBtImg = styled.img`
  position: relative;
  padding-right: 5px;
  top: -1px;
`;

const TopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // TOP 버튼 클릭 시 실행되는 이벤트
  const handleClick = e => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // if(scrollPosition > 100){

    // }else(scrollPosition<500){

    // }
  };

  return (
    <div>
      {scrollPosition > 90 ? (
        <TopBt
          id="scrollButton"
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
      ) : null}
    </div>
  );
};

export default TopButton;
