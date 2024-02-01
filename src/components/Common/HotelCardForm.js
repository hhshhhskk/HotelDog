import { useState } from "react";
import {
  BookMarkImgDiv,
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

const HotelCardForm = ({ hotel, handleSelectGo }) => {
  // !!!초기값은 데이터 불러오면 변경 예정
  const [bookMark, setBookMark] = useState(hotel.book_mark);
  const toggleBookMark = () => setBookMark(prev => !prev);

  // 가격 천단위 표시
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
      <HotelCardDiv>
        <HotelImgDiv>
          <img
            src={hotel.hotel_pic}
            onClick={() => handleSelectGo(hotel.hotel_pk)}
          />
          {/* 북마크 넘겨주거나 컴포넌트를 해지해야 함. */}
          {/* <HotelLike /> */}
          <BookMarkImgDiv onClick={toggleBookMark}>
            {bookMark ? (
              <img src={`${process.env.PUBLIC_URL}/images/like_after.svg`} />
            ) : (
              <img src={`${process.env.PUBLIC_URL}/images/like_before.svg`} />
            )}
          </BookMarkImgDiv>
        </HotelImgDiv>

        <HotelContentsDiv onClick={() => handleSelectGo(hotel.hotel_pk)}>
          <TitleDiv>
            <HotelName>{hotel.hotel_name}</HotelName>
            <HotelEvaluationDiv>
              <Star>★ {hotel.hotel_star}</Star>
              {/* 데이터에 리뷰수 누락 */}
              <Review>({formatNumber(hotel.review_count)})</Review>
            </HotelEvaluationDiv>
          </TitleDiv>
          <HotelAddress>{hotel.hotel_address}</HotelAddress>
          <HotelPriceDiv>
            {hotel.hotel_discount_per ? (
              <>
                <Discount>{hotel.hotel_discount_per}%</Discount>
                <OriginalPrice>{formatNumber(hotel.price)}</OriginalPrice>
                <FinalPriceDiv>
                  <FinalPrice>
                    {salePrice(hotel.price, hotel.hotel_discount_per)}
                  </FinalPrice>
                  <Unit>원~</Unit>
                  <OneNight>/1박</OneNight>
                </FinalPriceDiv>
              </>
            ) : (
              <FinalPriceDiv>
                <FinalPrice>{formatNumber(hotel.price)}</FinalPrice>
                <Unit>원~</Unit>
                <OneNight>/1박</OneNight>
              </FinalPriceDiv>
            )}
          </HotelPriceDiv>
        </HotelContentsDiv>
      </HotelCardDiv>
    </>
  );
};

export default HotelCardForm;
