import styled from "@emotion/styled";
import React from "react";

export const HotelDiv = styled.div`
  position: relative;
  width: 360px;
  padding-bottom: 50px;
`;
export const HotelImgDiv = styled.div`
  position: relative;
  width: 360px;
  height: 290px;
  overflow: hidden;
  border-radius: 10px;
  /* z-index: 1; */

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* display: block; */
  }
`;

// 좋아요한 호텔 (안 되는 이유?)
export const LikeImgDiv = styled.div`
  position: absolute;
  z-index: 999;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const HotelText = styled.div`
  position: relative;
  display: block;
  padding: 20px 0px;
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
  padding: 6px 0px;
`;

export const PriceDiv = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  font-weight: 700;
`;

export const Sale = styled.span`
  position: relative;
  color: #e05353;
  font-size: 1.8rem;
`;
export const NetPrice = styled.span`
  position: relative;
  color: #9d9d9d;
  font-size: 1.4rem;
  padding: 0px 6px;
  text-decoration: line-through;
`;
export const SalePriceDiv = styled.div`
  position: relative;
  font-size: 1.8rem;
`;

const HotelCardForm = () => {
  const hotels = [
    {
      pic: "",
      name: "호텔 1",
      star: "9.5",
      add: "대구 중구",
      sale: "",
      netprice: "50000",
      saleprice: "",
    },
    {
      pic: "",
      name: "호텔 2",
      star: "8.0",
      add: "대구 수성구",
      sale: "10",
      netprice: "50000",
      saleprice: "45000",
    },
    {
      pic: "",
      name: "호텔 3",
      star: "9.8",
      add: "대구 북구",
      sale: "10",
      netprice: "80000",
      saleprice: "72000",
    },
    {
      pic: "",
      name: "호텔 4",
      star: "5.0",
      add: "대구 중구",
      sale: "",
      netprice: "30000",
      saleprice: "",
    },
  ];

  return (
    <>
      {hotels.map(hotels => (
        <>
          <HotelDiv key={hotels.name} style={{ flex: "0 0 33%" }}>
            {/* 호텔 이미지 */}
            <HotelImgDiv>
              <img src={`${process.env.PUBLIC_URL}/images/hotel1.jpg`} />
              {/* <LikeImgDiv>
                <img src={`${process.env.PUBLIC_URL}/images/like_before.svg`} />
              </LikeImgDiv> */}
            </HotelImgDiv>

            {/* 텍스트 영역 */}
            <HotelText>
              <TitleDiv>
                <HotelName>{hotels.name}</HotelName>
                <StarDiv>
                  {/* 별점의 별을 이미지로 할지? */}
                  <img />
                  <span>★ {hotels.star}</span>
                </StarDiv>
              </TitleDiv>
              <HotelLocation>{hotels.add}</HotelLocation>
              <PriceDiv>
                <Sale>{hotels.sale}%</Sale>
                <NetPrice>{hotels.netprice}</NetPrice>
                <SalePriceDiv>
                  <span>{hotels.saleprice}</span>
                  <span>원</span>
                </SalePriceDiv>
              </PriceDiv>
            </HotelText>
          </HotelDiv>
        </>
      ))}
    </>
  );
};

export default HotelCardForm;
