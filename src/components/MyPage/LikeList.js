import styled from "@emotion/styled";
import React from "react";

const BookingPage = styled.div`
  margin-left: 85px;
  position: relative;
  /* display: flex; */
  width: 865px;
  /* height: 980px; */
  /* background-color: lightblue; */
`;
const PageTitle = styled.div`
  position: relative;
  height: auto;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #654222;
  }
`;
const BookingList = styled.div`
  position: relative;
  display: flex;
  width: 950px;
  height: 500px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-left: -85px;
  margin-top: 150px;
  img {
    position: relative;
    height: 68px;
    margin-bottom: 23px;
  }
  p {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-bottom: 1px;
  }
  span {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #969696;
    margin-bottom: 14px;
  }

  a {
    display: flex;
    justify-content: center;
    color: #e5b300;
    width: 150px;
    height: 40px;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid #e5b300;
    background: #fff;
    cursor: pointer;
    align-items: center;
  }
`;

const LikeList = () => {
  return (
    <BookingPage>
      <PageTitle>
        <p>찜한 호텔</p>
      </PageTitle>
      <BookingList>
        <img src={`${process.env.PUBLIC_URL}/images/MyPage/heart.svg`} />
        <p>찜한 목록이 없습니다.</p>
        <span>다양한 호텔 상품들을 만나보세요</span>
        <a href="/"> 호텔 목록 보러가기</a>
      </BookingList>
    </BookingPage>
  );
};

export default LikeList;
