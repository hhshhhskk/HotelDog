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
  HotelStarDiv,
  OneNight,
  OriginalPrice,
  Review,
  Star,
  TitleDiv,
  Unit,
} from "../../styles/Common/hotelCardFormStyle";
import HotelLike from "../Common/HotelLike";

const HotelCardForm = () => {
  const navigate = useNavigate();

  // [삭제예정] 더미 데이터
  const hotels = [
    {
      pic: "",
      name: "호텔 이름이 길면 긴대로 잘라야하는데 어떻게 하지",
      star: 9.5,
      add: "대구 중구",
      sale: "",
      review: 999,
      originalPrice: 50000,
    },
    {
      pic: "",
      name: "호텔 2",
      star: 8.0,
      add: "대구 수성구",
      sale: 10,
      review: 24,
      originalPrice: 50000,
    },
    {
      pic: "",
      name: "호텔 3",
      star: 9.8,
      add: "대구 북구",
      sale: 5,
      review: 9,
      originalPrice: 80000,
    },
    {
      pic: "",
      name: "호텔 4",
      star: 5.0,
      add: "대구 중구",
      sale: 3,
      review: 2542,
      originalPrice: 30000,
    },
  ];

  const handleClickHotel = () => {
    // [수정 예정] 데이터 오면 주소 변경
    navigate("/hoteldetail/:detailId");
  };

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
      {hotels.map(hotels => (
        <>
          <HotelCardDiv key={hotels.name} style={{ flex: "0 0 360px" }}>
            <HotelImgDiv>
              <img src={`${process.env.PUBLIC_URL}/images/hotel1.jpg`} />
              <HotelLike />
            </HotelImgDiv>

            <HotelContentsDiv onClick={handleClickHotel}>
              <TitleDiv>
                <HotelName>{hotels.name}</HotelName>
                <HotelEvaluationDiv>
                  <Star>★ {hotels.star}</Star>
                  <Review>({formatNumber(hotels.review)})</Review>
                </HotelEvaluationDiv>
              </TitleDiv>
              <HotelAddress>{hotels.add}</HotelAddress>
              <HotelPriceDiv>
                {hotels.sale ? (
                  <>
                    <Discount>{hotels.sale}%</Discount>
                    <OriginalPrice>
                      {formatNumber(hotels.originalPrice)}
                    </OriginalPrice>
                    <FinalPriceDiv>
                      <FinalPrice>
                        {salePrice(hotels.originalPrice, hotels.sale)}
                      </FinalPrice>
                      <Unit>원~</Unit>
                      <OneNight>/1박</OneNight>
                    </FinalPriceDiv>
                  </>
                ) : (
                  <FinalPriceDiv>
                    <FinalPrice>
                      {formatNumber(hotels.originalPrice)}
                    </FinalPrice>
                    <Unit>원~</Unit>
                    <OneNight>/1박</OneNight>
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
