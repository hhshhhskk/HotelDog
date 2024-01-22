import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const TopBt = styled.button`
  position: fixed;
  bottom: 350px;
  right: 250px;
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
  // 스크롤 위치 저장 및 업데이트, 초기값은 0
  const [scrollPosition, setScrollPosition] = useState(0);

  // 컴포넌트가 마운트될 때 한 번만 실행되는 이벤트 리스너를 설정
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 이벤트가 발생할 때 호출. window.scrollY로 현재 스크롤 위치를 가져와서 scrollPosition을 업데이트
      setScrollPosition(window.scrollY);
    };
    // 스크롤 이벤트가 발생할 때 handScroll 함수 호출하는 이벤트 리스너
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 등록한 이벤트 리스너 제거. 메모리 누수 방지용
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
