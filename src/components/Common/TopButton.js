import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const TopBt = styled.button`
  position: fixed;
  bottom: 350px;
  right: 450px;
  background-color: #654222;
  border: none;
  border-radius: 30px;
  padding: 10px 17px;
  color: #fff;
  font-weight: 7rem;
  font-size: 15px;
  cursor: pointer;
`;

const TopBtImg = styled.img`
  position: relative;
  padding-right: 5px;
  top: -1px;
`;

const TopButton = () => {
  // 스크롤 위치 업데이트
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

  // TOP 버튼 클릭 시 상단으로 스크롤 실행
  const handleClick = e => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {scrollPosition > 150 ? (
        <TopBt
          scrollPosition={scrollPosition}
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
