import { useNavigate } from "react-router-dom";
import {
  Discount,
  FinalPrice,
  FinalPriceDiv,
  HotelAddress,
  HotelCardDiv,
  HotelContentsDiv,
  HotelEvaluationDiv,
  HotelImgDiv,
  HotelName,
  HotelPriceDiv,
  OneNight,
  OriginalPrice,
  Review,
  Star,
  TitleDiv,
  Unit,
} from "../../styles/Common/hotelCardFormStyle";
import HotelLike from "./HotelLike";

const HotelCardForm = ({ handleSelectGo }) => {
  // [삭제예정] 더미 데이터
  const hotels = [
    {
      hotel_pk: 1,
      pic: "",
      name: "호텔 이름이 길면 긴대로 잘라야하는데 어떻게 하지",
      star: 9.5,
      add: "대구 중구",
      sale: 5,
      review: 999,
      originalPrice: 50000,
    },
    {
      hotel_pk: 2,
      pic: "",
      name: "호텔 2",
      star: 8.0,
      add: "대구 수성구",
      sale: 10,
      review: 24,
      originalPrice: 50000,
    },
    {
      hotel_pk: 3,
      pic: "",
      name: "호텔 3",
      star: 9.8,
      add: "대구 북구",
      sale: 5,
      review: 9,
      originalPrice: 80000,
    },
    {
      hotel_pk: 4,
      pic: "",
      name: "호텔 4",
      star: 5.0,
      add: "대구 중구",
      sale: 3,
      review: 2542,
      originalPrice: 30000,
    },
  ];

  // 숫자 천단위 쉼표 표시
  const formatNumber = number => {
    return number.toLocaleString();
  };

  // 호텔 할인가 계산식
  const salePrice = (originalPrice, sale) => {
    if (originalPrice && sale) {
      const discount = (parseFloat(sale) / 100) * parseFloat(originalPrice);
      return (parseFloat(originalPrice) - discount).toLocaleString();
    }
    return null;
  };

  return (
    <>
      {/* [수정 예정] 컴포넌트를 쓰는 페이지에서 데이터를 받아 올 수 있게 변경*/}
      {hotels.map((hotel, index) => (
        <HotelCardDiv key={index}>
          <HotelImgDiv>
            <img
              src={`${process.env.PUBLIC_URL}/images/hotel1.jpg`}
              onClick={() => handleSelectGo(hotel.hotel_pk)}
            />
            <HotelLike />
          </HotelImgDiv>

          <HotelContentsDiv onClick={() => handleSelectGo(hotel.hotel_pk)}>
            <TitleDiv>
              <HotelName>{hotel.name}</HotelName>
              <HotelEvaluationDiv>
                <Star>★ {hotel.star}</Star>
                <Review>({formatNumber(hotel.review)})</Review>
              </HotelEvaluationDiv>
            </TitleDiv>
            <HotelAddress>{hotel.add}</HotelAddress>
            <HotelPriceDiv>
              {hotel.sale ? (
                <>
                  <Discount>{hotel.sale}%</Discount>
                  <OriginalPrice>
                    {formatNumber(hotel.originalPrice)}
                  </OriginalPrice>
                  <FinalPriceDiv>
                    <FinalPrice>
                      {salePrice(hotel.originalPrice, hotel.sale)}
                    </FinalPrice>
                    <Unit>원~</Unit>
                    <OneNight>/1박</OneNight>
                  </FinalPriceDiv>
                </>
              ) : (
                <FinalPriceDiv>
                  <FinalPrice>{formatNumber(hotel.originalPrice)}</FinalPrice>
                  <Unit>원~</Unit>
                  <OneNight>/1박</OneNight>
                </FinalPriceDiv>
              )}
            </HotelPriceDiv>
          </HotelContentsDiv>
        </HotelCardDiv>
      ))}
    </>
  );
};

export default HotelCardForm;
