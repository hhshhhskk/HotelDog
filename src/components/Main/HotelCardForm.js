import styled from "@emotion/styled";
import React from "react";

export const HotelDiv = styled.div``;
export const HotelImgDiv = styled.div``;
export const LikeImgDiv = styled.div``;
export const HotelText = styled.div``;

const HotelCardForm = () => {
  return (
    <div>
      {/* 이미지 영역 */}
      <HotelDiv>
        {/* 호텔 이지지 */}
        <HotelImgDiv>
          <img />
          {/* 찜하기 이미지 */}
          <LikeImgDiv>
            <img />
          </LikeImgDiv>
        </HotelImgDiv>

        {/* 텍스트 영역 */}
        <HotelText>
          {/* 호텔 이름 및 별점 */}
          <div>
            {/* 호텔 이름 */}
            <span>강아지호텔</span>
            {/* 호텔 별점 */}
            <div>
              <img />
              <span>9.5</span>
            </div>
          </div>
          <span>강아지 호텔 설명입니다.</span>
          <div>
            <span>10%</span>
            <span>110,000</span>
            <div>
              <span>99,000</span>
              <span>원</span>
            </div>
          </div>
        </HotelText>
      </HotelDiv>
    </div>
  );
};

export default HotelCardForm;
