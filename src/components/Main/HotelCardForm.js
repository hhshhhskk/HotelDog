import styled from "@emotion/styled";
import React from "react";

export const HotelCardDiv = styled.div`
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
  z-index: n 999;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const HotelContentsDiv = styled.div`
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

export const HotelStarDiv = styled.div`
  position: relative;
  background-color: #d9d9d9;
  font-size: 12px;
  padding: 2px 4px;
  margin-left: 15px;
  border-radius: 5px;
`;

export const HotelAddress = styled.span`
  position: relative;
  display: block;
  color: #9d9d9d;
  font-size: 14px;
  padding: 6px 0px;
`;

export const HotelPriceDiv = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  font-weight: 700;
`;

export const Discount = styled.span`
  position: relative;
  color: #e05353;
  font-size: 1.8rem;
`;
export const OriginalPrice = styled.span`
  position: relative;
  color: #9d9d9d;
  font-size: 1.4rem;
  padding: 0px 6px;
  text-decoration: line-through;
`;
export const FinalPriceDiv = styled.div`
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
      originalPrice: "50000",
    },
    {
      pic: "",
      name: "호텔 2",
      star: "8.0",
      add: "대구 수성구",
      sale: "10",
      originalPrice: "50000",
    },
    {
      pic: "",
      name: "호텔 3",
      star: "9.8",
      add: "대구 북구",
      sale: "5",
      originalPrice: "80000",
    },
    {
      pic: "",
      name: "호텔 4",
      star: "5.0",
      add: "대구 중구",
      sale: "3",
      originalPrice: "30000",
    },
  ];

  // 호텔 할인가 계산식
  const salePrice = (originalPrice, sale) => {
    if (originalPrice && sale) {
      const discount = (parseFloat(sale) / 100) * parseFloat(originalPrice);
      return parseFloat(originalPrice) - discount;
    }
    return null;
  };

  return (
    <>
      {/* !!!컴포넌트를 쓰는 페이지에서 데이터를 받아 올 수 있게 변경 예정*/}
      {hotels.map(hotels => (
        <>
          <HotelCardDiv key={hotels.name} style={{ flex: "0 0 33%" }}>
            <HotelImgDiv>
              <img src={`${process.env.PUBLIC_URL}/images/hotel1.jpg`} />
              <LikeImgDiv>
                <img src={`${process.env.PUBLIC_URL}/images/like_before.svg`} />
              </LikeImgDiv>
            </HotelImgDiv>

            <HotelContentsDiv>
              <TitleDiv>
                <HotelName>{hotels.name}</HotelName>
                <HotelStarDiv>
                  <span>★ {hotels.star}</span>
                </HotelStarDiv>
              </TitleDiv>
              <HotelAddress>{hotels.add}</HotelAddress>
              <HotelPriceDiv>
                {hotels.sale ? (
                  <>
                    <Discount>{hotels.sale}%</Discount>
                    <OriginalPrice>{hotels.originalPrice}</OriginalPrice>
                    <FinalPriceDiv>
                      <span>
                        {salePrice(hotels.originalPrice, hotels.sale)}
                      </span>
                      <span>원</span>
                    </FinalPriceDiv>
                  </>
                ) : (
                  <FinalPriceDiv>
                    <span>{hotels.originalPrice}</span>
                    <span>원</span>
                  </FinalPriceDiv>
                )}
              </HotelPriceDiv>
            </HotelContentsDiv>
          </HotelCardDiv>
        </>
      ))}
    </>
  );
};

export default HotelCardForm;
