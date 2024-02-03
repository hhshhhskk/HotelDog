import styled from "@emotion/styled";
import React from "react";

const BookingDate = ({ bookingData }) => {
  const DateWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  `;
  const DateLeft = styled.div`
    position: relative;
    width: 150px;
    height: 70px;
    border: 1px solid #654222;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  `;
  const DateRright = styled.div`
    position: relative;
    width: 151px;
    height: 70px;
    margin-left: -1px;
    border: 1px solid #654222;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  `;
  const DateTxt = styled.div`
    position: relative;
    margin: 14px 20px;
  `;
  const CheckIn = styled.div`
    position: relative;
    margin-bottom: 2px;
    font-size: 14px;
    font-weight: 500;
    color: #9d9d9d;
  `;
  const CheckInDate = styled.div`
    position: relative;
    font-size: 16px;
    font-weight: 700;
    color: #654222;
  `;

  return (
    <DateWrap>
      <DateLeft>
        <DateTxt>
          <CheckIn>체크인</CheckIn>
          <CheckInDate>{bookingData?.from_date}</CheckInDate>
        </DateTxt>
      </DateLeft>
      <DateRright>
        <DateTxt>
          <CheckIn>체크아웃</CheckIn>
          <CheckInDate>{bookingData?.to_date}</CheckInDate>
        </DateTxt>
      </DateRright>
    </DateWrap>
  );
};

export default BookingDate;
