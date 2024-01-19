import styled from "@emotion/styled";
import React from "react";

export const HotelDiv = styled.div`
  width: 360px;
  height: 410px;
  /* background-color: plum; */
`;
export const HotelImgDiv = styled.div`
  position: relative;
  width: 360px;
  height: 290px;
  overflow: hidden;
  border-radius: 10px;
  /* background-color: aqua; */

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* display: block; */
  }
`;

// 좋아요한 호텔
export const LikeImgDiv = styled.div``;

export const HotelText = styled.div`
  position: relative;
  display: block;
  padding: 20px 0px;
  /* background-color: aqua; */
`;

export const TitleDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const HotelName = styled.span`
  position: relative;
  font-size: 18px;
`;

export const StarDiv = styled.div`
  position: relative;
  background-color: #d9d9d9;
  font-size: 12px;
  padding: 2px 4px;
  margin-left: 15px;
  border-radius: 5px;
`;

export const HotelLocation = styled.span`
  position: relative;
  display: block;
  color: #9d9d9d;
  font-size: 14px;
  padding-top: 6px;
`;

export const PriceDiv = styled.div`
  position: relative;
  display: flex;
  padding-top: 6px;
  bottom: 0;
  align-items: flex-end;
`;

export const Sale = styled.span`
  position: relative;
  color: #e05353;
  font-size: 18px;
  font-weight: 700;
`;
export const NetPrice = styled.span`
  position: relative;
  color: #9d9d9d;
  font-size: 14px;
  font-weight: 700;
  padding: 0px 6px;
`;
export const SalePriceDiv = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 700;
`;

const HotelCardForm = () => {
  return (
    <div>
      <HotelDiv>
        {/* 호텔 이미지 */}
        <HotelImgDiv>
          <img src={`${process.env.PUBLIC_URL}/images/hotel1.jpg`} />
          {/* 찜하기 이미지 */}
          <LikeImgDiv>
            <img />
          </LikeImgDiv>
        </HotelImgDiv>

        {/* 텍스트 영역 */}
        <HotelText>
          {/* 호텔 이름 및 별점 */}
          <TitleDiv>
            {/* 호텔 이름 */}
            <HotelName>강아지 호텔</HotelName>
            {/* 호텔 별점 */}
            <StarDiv>
              {/* 별점의 별을 이미지로 할지? */}
              <img />
              <span>★ 9.5</span>
            </StarDiv>
          </TitleDiv>
          <HotelLocation>강아지 호텔 설명입니다.</HotelLocation>
          <PriceDiv>
            <Sale>10%</Sale>
            <NetPrice>110,000</NetPrice>
            <SalePriceDiv>
              <span>99,000</span>
              <span>원</span>
            </SalePriceDiv>
          </PriceDiv>
        </HotelText>
      </HotelDiv>
    </div>
  );
};

export default HotelCardForm;
