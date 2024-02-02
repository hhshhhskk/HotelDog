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
  // console.log(hotel);
  // !!!초기값은 데이터 불러오면 변경 예정
  const [bookMark, setBookMark] = useState(hotel.book_mark);
  const toggleBookMark = () => setBookMark(prev => !prev);

  // 가격 천단위 표시
  const formatNumber = number => {
    if (number) {
      return number.toLocaleString();
    } else {
      return 0;
    }
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
      <HotelCardDiv>
        <HotelImgDiv>
          <img
            src={`http://112.222.157.156:5222/pic/hotel/${hotel.hotel_pk}/${hotel.hotel_pic}`}
            onClick={() => handleSelectGo(hotel.hotel_pk)}
          />
          {/* 북마크 넘겨주거나 컴포넌트를 해지해야 함. */}
          {/* <HotelLike /> */}
          {/* <BookMarkImgDiv onClick={toggleBookMark}>
            {bookMark ? (
              <img src={`${process.env.PUBLIC_URL}/images/like_after.svg`} />
            ) : (
              <img src={`${process.env.PUBLIC_URL}/images/like_before.svg`} />
            )}
          </BookMarkImgDiv> */}
        </HotelImgDiv>

        <HotelContentsDiv onClick={() => handleSelectGo(hotel.hotel_pk)}>
          <TitleDiv>
            <HotelName>{hotel.hotel_nm}</HotelName>
            <HotelEvaluationDiv>
              <Star>★ {hotel.avgStar}</Star>
              {/* 데이터에 리뷰수 누락 */}
              <Review>({formatNumber(hotel.review_count)})</Review>
            </HotelEvaluationDiv>
          </TitleDiv>
          <HotelAddress>{hotel.address_name}</HotelAddress>
          <HotelPriceDiv>
            {hotel.discount_per ? (
              <>
                <Discount>{hotel.discount_per}%</Discount>
                <OriginalPrice>
                  {formatNumber(hotel.hotelRoomCost)}
                </OriginalPrice>
                <FinalPriceDiv>
                  <FinalPrice>
                    {salePrice(hotel.price, hotel.discount_per)}
                  </FinalPrice>
                  <Unit>원~</Unit>
                  <OneNight>/1박</OneNight>
                </FinalPriceDiv>
              </>
            ) : (
              <FinalPriceDiv>
                <FinalPrice>{formatNumber(hotel.hotelRoomCost)}</FinalPrice>
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
