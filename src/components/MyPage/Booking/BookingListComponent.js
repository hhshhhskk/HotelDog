import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import BookingDate from "./BookingDate";
import axios from "axios";
import jwtAxios from "../../../utils/jwtUtil";

const BookingList = styled.div`
  position: relative;
  margin-bottom: 35px;
`;
const ListTitle = styled.div`
  position: relative;
  margin-bottom: 20px;
  P {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: #9d9d9d;
  }
`;
const BookingContents = styled.div`
  position: relative;
  display: flex;
`;
const BookingRight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`;
const BookingLeft = styled.div`
  position: relative;
`;

const BookInfo = styled.div`
  position: relative;
  display: flex;
  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #654222;
  }
`;
const Line = styled.div`
  position: relative;
  display: flex;
  height: 20px;
  border-left: 3px solid #654222;
`;
const BookInfoTxt = styled.div`
  position: relative;
  margin-left: 17px;
  line-height: normal;
  p {
    font-size: 14px;
    color: #9d9d9d;
  }
`;
const PayInfo = styled.div`
  position: relative;
  display: flex;
  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #654222;
  }
`;
const PayInfoTxt = styled.div`
  position: relative;
  margin-left: 17px;
  line-height: normal;
  p {
    font-size: 14px;
    color: #9d9d9d;
  }
`;
const CancelBt = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
const Cancel = styled.button`
  position: relative;
  justify-content: flex-end;
  cursor: pointer;
  width: 90px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #654222;
  background: #fff;
  color: #654222;
  font-size: 14px;
`;

const BookingListComponent = ({ bookingData }) => {
  // 상태 설정
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        // Axios를 사용하여 API에서 데이터 가져오기
        const response = await jwtAxios.get("/api/reservation");

        // API 응답에서 데이터 추출
        const data = response.data;

        // 데이터를 상태로 설정
        setBookings(data);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    // 데이터 불러오기 함수 호출
    fetchBookingData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함
  return (
    <>
      {bookingData.map((booking, index) => (
        <BookingList key={index}>
          <ListTitle>
            <p>{booking.hotelName}</p>
            <span>{booking.hotelLocation}</span>
          </ListTitle>
          <BookingContents>
            <BookingLeft>
              <img
                src={`${process.env.PUBLIC_URL}/images/MyPage/example_booking.svg`}
              />
            </BookingLeft>
            <BookingRight>
              <BookingDate />
              <BookInfo>
                <Line />
                <span>예약 정보</span>
                <BookInfoTxt>
                  <p>예약 번호 : {booking.reservationInfo.reservationNumber}</p>
                  <p>객실 : {booking.reservationInfo.room}</p>
                  <p>강아지 : {booking.reservationInfo.pet}</p>
                </BookInfoTxt>
              </BookInfo>
              <PayInfo>
                <Line />
                <span>결제 정보</span>
                <PayInfoTxt>
                  <p>결제 금액 : {booking.paymentInfo.amount}</p>
                  <p>결제 수단 : {booking.paymentInfo.paymentMethod}</p>
                </PayInfoTxt>
              </PayInfo>
              <CancelBt>
                <Cancel>예약취소</Cancel>
              </CancelBt>
            </BookingRight>
          </BookingContents>
        </BookingList>
      ))}
    </>
  );
};

export default BookingListComponent;
