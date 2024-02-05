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
  // console.log("대기중 날짜입니다.");

  // bookingData가 존재하지 않는 경우 빈 배열로 설정
  if (!bookingData) return null; // 데이터가 없는 경우 null 반환

  return (
    <>
      <BookingList>
        <ListTitle>
          <p>{bookingData.hotel_nm}</p>
          <span>{bookingData.hotel_call}</span>
        </ListTitle>
        <BookingContents>
          <BookingLeft>
            <img
              src={`${process.env.PUBLIC_URL}/images/MyPage/example_booking.svg`}
            />
          </BookingLeft>
          <BookingRight>
            <BookingDate bookingData={bookingData} />
            <BookInfo>
              <Line />
              <span>예약 정보</span>
              <BookInfoTxt>
                <p>예약 번호 : {bookingData?.res_pk}</p>
                <p>객실 : {bookingData?.hotel_room_nm}</p>
                <p>강아지 : {bookingData.res_dog_info_vo_list?.[0].dot_nm}</p>
              </BookInfoTxt>
            </BookInfo>
            <PayInfo>
              <Line />
              <span>결제 정보</span>
              <PayInfoTxt>
                <p>결제 금액 : </p>
                <p>결제 수단 : </p>
              </PayInfoTxt>
            </PayInfo>
            <CancelBt>
              <Cancel>예약취소</Cancel>
            </CancelBt>
          </BookingRight>
        </BookingContents>
      </BookingList>
    </>
  );
};

export default BookingListComponent;
