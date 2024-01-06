import styled from "@emotion/styled";
import React from "react";

const MainPageDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImg = styled.img`
  width: 100%;
`;

const MainList = styled.div`
  width: 1200px;
  height: 100px;
  color: #000;
  font-size: 2.4rem;
  line-height: 100px;
`;

const MainListImg = styled.img`
  width: 1200px;
`;

// 메인 페이지
const MainPage = () => {
  return (
    <MainPageDiv>
      <MainImg
        src={`${process.env.PUBLIC_URL}/images/main.png`}
        alt="이미지가없어요"
      />
      <MainList>호텔리스트</MainList>
      <MainListImg
        src={`${process.env.PUBLIC_URL}/images/mainList.png`}
        alt="이미지가없어요"
      />
      <MainListImg
        src={`${process.env.PUBLIC_URL}/images/mainList.png`}
        alt="이미지가없어요"
      />
      <MainListImg
        src={`${process.env.PUBLIC_URL}/images/mainList.png`}
        alt="이미지가없어요"
      />
    </MainPageDiv>
  );
};

export default MainPage;
