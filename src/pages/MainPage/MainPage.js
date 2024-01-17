import styled from "@emotion/styled";
import React from "react";
import TopButton from "../../components/Common/TopButton";

const MainPageDiv = styled.div`
  position: relative;
  width: 100%;
  min-width: 1250px;
  display: flex;
  /* flex 요소들을 세로로 정렬 */
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: hotpink;
`;

const MainTop = styled.div`
  width: 100%;
  height: 860px;
  /* background-color: yellowgreen; */
  overflow: hidden;
`;

const MainImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: blue;
`;

const MainTitle = styled.div`
  width: 1200px;
  margin-top: -130px;
  span {
    font-size: 4rem;
    font-weight: 700;
    color: #fff;
  }
`;

const MainList = styled.div`
  background-color: aquamarine;
`;
// const MainList = styled.div`
//   width: 1200px;
//   height: 100px;
//   color: #000;
//   font-size: 2.4rem;
//   line-height: 100px;
// `;

// const MainListImg = styled.img`
//   width: 1200px;
// `;

// 메인 페이지
const MainPage = () => {
  return (
    // <MainPageDiv>
    //   <MainImg
    //     src={`${process.env.PUBLIC_URL}/images/main.png`}
    //     alt="이미지가없어요"
    //   />
    //   <MainList>호텔리스트</MainList>
    //   <MainListImg
    //     src={`${process.env.PUBLIC_URL}/images/mainList.png`}
    //     alt="이미지가없어요"
    //   />
    //   <MainListImg
    //     src={`${process.env.PUBLIC_URL}/images/mainList.png`}
    //     alt="이미지가없어요"
    //   />
    //   <MainListImg
    //     src={`${process.env.PUBLIC_URL}/images/mainList.png`}
    //     alt="이미지가없어요"
    //   />
    //   <TopButton />
    // </MainPageDiv>

    //MainPageDiv
    <MainPageDiv>
      <MainTop>
        {/* MainPageTop */}
        <MainImg>
          <img src={`${process.env.PUBLIC_URL}/images/main.png`} alt="" />
        </MainImg>

        <MainTitle>
          <span>
            나의 반려견에게 <br /> 최고의 하루를 선물하세요
          </span>
        </MainTitle>
        <div>SearchForm</div>
      </MainTop>
      {/* 호텔 리스트 출력 영역 */}
      <MainList>하읭~~</MainList>
    </MainPageDiv>
  );
};

export default MainPage;
