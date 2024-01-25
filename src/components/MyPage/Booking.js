import styled from "@emotion/styled";
import React from "react";

const BookingPage = styled.div`
  margin-left: 85px;
  position: relative;
  /* display: flex; */
  width: 865px;
  /* height: 980px; */
  /* background-color: lightblue; */
`;
const PageTitle = styled.div`
  position: relative;
  height: auto;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #654222;
  }
`;
const BookingListNone = styled.div`
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
const BookingList = styled.div`
  position: relative;
`;
const BookingContents = styled.div`
  position: relative;
  display: flex;
`;
const BookingRight = styled.div`
  position: relative;
`;
const BookingLeft = styled.div`
  position: relative;
`;
const BookDateBox = styled.div`
  position: relative;
  display: flex;
`;
const BoxLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  width: 150px;
  height: 70px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid #654222;
  background: #fff;
  p {
    font-size: 16px;
    font-weight: 700;
    color: #654222;
  }
`;
const BoxRight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  width: 150px;
  height: 70px;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid #654222;
  border-left: none;
  background: #fff;
  p {
    font-size: 16px;
    font-weight: 700;
    color: #654222;
  }
`;
const BookInfo = styled.div`
  position: relative;
  display: flex;
  border-left: 3px solid #654222;
  span {
    margin-left: 10px;

    font-size: 16px;
    font-weight: 600;
    color: #654222;
  }
`;
const BookInfoTxt = styled.div`
  position: relative;
  margin-left: 17px;
  p {
    font-size: 14px;
    color: #9d9d9d;
  }
`;
const PayInfo = styled.div`
  position: relative;
  display: flex;
  span {
    font-size: 16px;
    font-weight: 600;
    color: #654222;
  }
`;
const PayInfoTxt = styled.div`
  position: relative;
  margin-left: 17px;
  p {
    font-size: 14px;
    color: #9d9d9d;
  }
`;

const Booking = () => {
  return (
    <BookingPage>
      <PageTitle>
        <p>예약 내역</p>
      </PageTitle>
      {/* <BookingListNone>
        <img src={`${process.env.PUBLIC_URL}/images/MyPage/booking.svg`} />
        <p>예약 내역이 없습니다.</p>
        <span>다양한 호텔상품을 만나보세요</span>
        <a href="/"> 호텔 목록 보러가기</a>
      </BookingListNone> */}
      <BookingList>
        <p>교동 쉽독호텔&리조트</p>
        <span>대구광역시 중구</span>
        <BookingContents>
          <BookingLeft>
            <img
              src={`${process.env.PUBLIC_URL}/images/MyPage/example_booking.svg`}
            />
          </BookingLeft>
          <BookingRight>
            <BookDateBox>
              <BoxLeft>
                <span>체크인</span>
                <p>23.01.01</p>
              </BoxLeft>
              <BoxRight>
                <span>체크아웃</span>
                <p>23.01.01</p>
              </BoxRight>
            </BookDateBox>
            <BookInfo>
              <span>예약 정보</span>
              <BookInfoTxt>
                <p>예약 번호 : 2591564896</p>
                <p>객실 : 2호 개인실</p>
                <p>강아지 : 콩이</p>
              </BookInfoTxt>
            </BookInfo>
            <PayInfo>
              <span>결제 정보</span>
              <PayInfoTxt>
                <p>결제 금액 : 45,000원</p>
                <p>결제 수단 : 카카오페이</p>
              </PayInfoTxt>
            </PayInfo>
            <button>예약취소</button>
          </BookingRight>
        </BookingContents>
      </BookingList>
    </BookingPage>
  );
};

export default Booking;
