// 호텔 좋아요(찜하기) 컴포넌트입니다.
import styled from "@emotion/styled";
import React, { useState } from "react";

const LikeImgDiv = styled.div`
  top: 240px;
  left: 300px;
  position: absolute;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const initData = {
  result: 0,
};

const HotelLike = () => {
  // 좋아요 저장 및 업데이트
  // !!!초기값은 데이터 불러오면 변경 예정
  const [like, setLike] = useState(false);

  const toggleLike = () => setLike(prev => !prev);

  return (
    <>
      <LikeImgDiv onClick={toggleLike}>
        {like ? (
          <img src={`${process.env.PUBLIC_URL}/images/like_after.svg`} />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/images/like_before.svg`} />
        )}
      </LikeImgDiv>
    </>
  );
};

export default HotelLike;
