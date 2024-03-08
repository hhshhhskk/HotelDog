import { useEffect, useState } from "react";
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
import { getHotelBookMarkAPI } from "../../api/Main/HotelApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useNavigate } from "react-router-dom";

const HotelCardForm = ({ hotel, handleClickHotel, setRendering }) => {
  const navigate = useNavigate();
  const { isLogin } = useCustomLogin();

  // 호텔 좋아요 북마크 useState
  const [bookMarkCheck, setBookMarkCheck] = useState(0);

  useEffect(() => {
    if (hotel) {
      setBookMarkCheck(hotel.book_mark);
    }
  }, [hotel]);

  // 호텔 좋아요 북마크 처리
  const hotelBookMark = async () => {
    try {
      const result = await getHotelBookMarkAPI(
        hotel?.hotel_pk,
        isLogin,
        navigate,
      );
      if (result === 2) {
        setBookMarkCheck(0);
        setRendering(prev => !prev);
      } else {
        setBookMarkCheck(1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 가격 천단위 표시
  const formatNumber = number => {
    if (number) {
      return number.toLocaleString();
    } else {
      return 0;
    }
  };

  // 호텔 할인가 계산
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
            src={
              hotel.hotel_pic === ""
                ? `${process.env.PUBLIC_URL}/images/dummyImg.jpeg`
                : `http://112.222.157.156:5222/pic/hotel/${hotel.hotel_pk}/${hotel.hotel_pic}`
            }
            onClick={() => handleClickHotel(hotel.hotel_pk)}
          />
          {/* 호텔 좋아요 북마크 */}
          <BookMarkImgDiv onClick={hotelBookMark}>
            {bookMarkCheck === 1 ? (
              <img src={`${process.env.PUBLIC_URL}/images/like_after.svg`} />
            ) : (
              <img src={`${process.env.PUBLIC_URL}/images/like_before.svg`} />
            )}
          </BookMarkImgDiv>
        </HotelImgDiv>

        {/* 호텔 정보 */}
        <HotelContentsDiv onClick={() => handleClickHotel(hotel.hotel_pk)}>
          <TitleDiv>
            <HotelName>{hotel.hotel_nm}</HotelName>
            <HotelEvaluationDiv>
              <Star>★ {hotel.avgStar}</Star>
              <Review>({formatNumber(hotel.review_count)})</Review>
            </HotelEvaluationDiv>
          </TitleDiv>
          <HotelAddress>{hotel.address_name}</HotelAddress>

          {/* 호텔 가격 */}
          <HotelPriceDiv>
            {hotel.discount_per ? (
              <>
                <Discount>{hotel.discount_per}%</Discount>
                <OriginalPrice>
                  {formatNumber(hotel.hotelRoomCost)}
                </OriginalPrice>
                <FinalPriceDiv>
                  <FinalPrice>
                    {salePrice(hotel.hotelRoomCost, hotel.discount_per)}
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
