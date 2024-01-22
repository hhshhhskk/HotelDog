import { useNavigate } from "react-router-dom";
import {
  Discount,
  FinalPriceDiv,
  HotelAddress,
  HotelCardDiv,
  HotelContentsDiv,
  HotelImgDiv,
  HotelName,
  HotelPriceDiv,
  HotelStarDiv,
  OriginalPrice,
  TitleDiv,
} from "../../styles/Common/hotelCardFormStyle";
import HotelLike from "../Common/HotelLike";

const HotelCardForm = () => {
  const navigate = useNavigate();

  // [삭제예정] 더미 데이터
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

  const handleClickHotel = () => {
    // [수정 예정] 데이터 오면 주소 변경
    navigate("/hoteldetail/:detailId");
  };

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
                <HotelStarDiv>
                  <span>★ {hotels.star} </span>
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
