import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReserveDate from "../../components/Common/ReserveDate";
import BookingListComponent from "../../components/MyPage/Booking/BookingListComponent";
import BookingCompleteComponent from "../../components/MyPage/Booking/BookingCompleteComponent";
import ReviewModal from "../../components/MyPage/Booking/ReviewModal";

const BookingPage = styled.div`
  margin-left: 85px;
  position: relative;
  width: 865px;
  height: auto;
`;
// PageTitle 공통 스타일로 빼도됨

const PageTitle = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 35px;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #654222;
  }
`;
// ListNone공통 스타일로 빼도됨
const ListNone = styled.div`
  position: relative;
  display: flex;
  width: 950px;
  height: 500px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-left: -85px;
  margin-top: 150px;
  img {
    position: relative;
    height: 68px;
    margin-bottom: 23px;
  }
  p {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-bottom: 1px;
  }
  span {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #969696;
    margin-bottom: 14px;
  }
  a {
    display: flex;
    justify-content: center;
    color: #e5b300;
    width: 150px;
    height: 40px;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid #e5b300;
    background: #fff;
    cursor: pointer;
    align-items: center;
  }
`;

const Booking = () => {
  const [bookingData, setBookingData] = useState([]);
  const [bookingCompleteData, setBookingCompleteData] = useState([]);

  // 임시 예약 데이터
  useEffect(() => {
    const fetchData = async () => {
      const ExData = [
        {
          hotelName: "교동 쉽독호텔&리조트",
          hotelLocation: "대구광역시 중구",
          checkInDate: "23.01.01",
          checkOutDate: "23.01.01",
          reservationInfo: {
            reservationNumber: "2591564896",
            room: "2호 개인실",
            pet: "콩이",
          },
          paymentInfo: {
            amount: "45,000원",
            paymentMethod: "카카오페이",
          },
        },
        {
          hotelName: "수성구 퍼피하우스",
          hotelLocation: "대구광역시 수성구",
          checkInDate: "23.01.01",
          checkOutDate: "23.01.01",
          reservationInfo: {
            reservationNumber: "2591564896",
            room: "2호 개인실",
            pet: "탄이",
          },
          paymentInfo: {
            amount: "45,000원",
            paymentMethod: "카카오페이",
          },
        },
      ];

      // 임시 만료 데이터
      const ExCompleteData = [
        {
          hotelName: "만료된 호텔1",
          hotelLocation: "서울특별시 강남구",
          checkInDate: "22.12.01",
          checkOutDate: "22.12.02",
          reservationInfo: {
            reservationNumber: "1234567890",
            room: "스위트룸",
            pet: "미정",
          },
          paymentInfo: {
            amount: "100,000원",
            paymentMethod: "신용카드",
          },
        },
        {
          hotelName: "만료된 호텔2",
          hotelLocation: "부산광역시 해운대구",
          checkInDate: "22.12.05",
          checkOutDate: "22.12.06",
          reservationInfo: {
            reservationNumber: "0987654321",
            room: "디럭스룸",
            pet: "도그",
          },
          paymentInfo: {
            amount: "120,000원",
            paymentMethod: "네이버페이",
          },
        },
      ];

      setBookingData(ExData);
      setBookingCompleteData(ExCompleteData); // 만료된 예약 데이터
    };

    fetchData();
  }, []);

  // 예약 데이터가 있는지 확인
  const bookingListData = bookingData.length > 0;
  const bookingCompleteDataExist = bookingCompleteData.length > 0;

  return (
    <BookingPage>
      <PageTitle>
        <p>예약 내역</p>
      </PageTitle>
      {bookingListData ? (
        // ?예약 취소 눌렀을 때 삭제되게 해야함
        <BookingListComponent bookingData={bookingData} />
      ) : (
        <ListNone>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/booking.svg`} />
          <p>예약 내역이 없습니다.</p>
          <span>다양한 호텔상품을 만나보세요</span>
          <a href="/"> 호텔 목록 보러가기</a>
        </ListNone>
      )}

      {/* ?해당 날짜가 지나면 완료로 뜨게 해야함 */}
      {bookingCompleteDataExist && (
        <BookingCompleteComponent bookingData={bookingCompleteData} />
      )}
      <ReviewModal />
    </BookingPage>
  );
};

export default Booking;
