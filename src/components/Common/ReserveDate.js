import styled from "@emotion/styled";
import React from "react";
const CalendarSelectWrap = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  cursor: pointer;
  border: none;
  background-color: #fff;
`;
const CalendarSelectLeft = styled.div`
  position: relative;
  width: 150px;
  height: 70px;
  border: 1px solid #654222;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const CalendarSelectRight = styled.div`
  position: relative;
  width: 151px;
  height: 70px;
  margin-left: -1px;
  border: 1px solid #654222;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const CalendarText = styled.div`
  position: relative;
  margin: 14px 20px;
`;
const CalendarSelectTitle = styled.div`
  position: relative;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  color: #9d9d9d;
`;
const CalendarSelectDate = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #654222;
`;
const ReserveDate = ({ resDay, handleMoveCalendar }) => {
  // const startDay = resDay.startDay;
  // const endDay = resDay.endDay;
  // console.log(resDay);
  return (
    <CalendarSelectWrap onClick={handleMoveCalendar}>
      <CalendarSelectLeft>
        <CalendarText>
          <CalendarSelectTitle>체크인</CalendarSelectTitle>
          <CalendarSelectDate>{resDay.startDay}</CalendarSelectDate>
        </CalendarText>
      </CalendarSelectLeft>
      <CalendarSelectRight>
        <CalendarText>
          <CalendarSelectTitle>체크아웃</CalendarSelectTitle>
          <CalendarSelectDate>{resDay.endDay}</CalendarSelectDate>
        </CalendarText>
      </CalendarSelectRight>
    </CalendarSelectWrap>
  );
};

export default ReserveDate;
