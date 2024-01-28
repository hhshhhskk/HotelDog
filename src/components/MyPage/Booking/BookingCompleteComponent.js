import styled from "@emotion/styled";
import React, { useState } from "react";
import ReserveDate from "../../Common/ReserveDate";
import ReviewModal from "./ReviewModal";

const BookingCompleteList = styled.div`
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
  img {
    position: relative;
    opacity: 0.3;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.93);
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    font-family: "Noto Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
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
const CompleteBt = styled.div`
  position: relative;
  display: flex;
  /* justify-content: flex-end; */
`;
const Complete = styled.button`
  position: relative;
  justify-content: flex-end;
  cursor: pointer;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #654222;
  color: #fff;
  font-size: 14px;
`;
const BookingCompleteComponent = ({ bookingData }) => {
  // 모달 열림/닫힘 상태를 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // 모달을 열기
  const handleOpenModal = booking => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  // 모달을 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };
  return (
    <>
      {bookingData.map((booking, index) => (
        <BookingCompleteList key={index}>
          <ListTitle>
            <p>{booking.hotelName}</p>
            <span>{booking.hotelLocation}</span>
          </ListTitle>
          <BookingContents>
            <BookingLeft>
              <img
                src={`${process.env.PUBLIC_URL}/images/MyPage/example_booking.svg`}
                alt="booking"
              />
              <p>이용 완료</p>
            </BookingLeft>
            <BookingRight>
              <ReserveDate></ReserveDate>
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
              <CompleteBt>
                {/* "숙소 후기" 버튼에 모달을 열기 위한 onClick 이벤트 추가 */}
                <Complete onClick={() => handleOpenModal(booking)}>
                  숙소 후기
                </Complete>
              </CompleteBt>
              {/* 모달 컴포넌트 */}
              <ReviewModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                bookingData={selectedBooking}
              />
            </BookingRight>
          </BookingContents>
        </BookingCompleteList>
      ))}
    </>
  );
};

export default BookingCompleteComponent;
