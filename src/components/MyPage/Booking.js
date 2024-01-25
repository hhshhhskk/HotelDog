import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BookingPage = styled.div`
  margin-left: 85px;
  position: relative;
  width: 865px;
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
const BookingList = styled.div`
  position: relative;
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
const BookDateBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoxLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  width: 150px;
  height: 70px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid #654222;
  background: #fff;
  p {
    position: relative;
    /* text-align: left; */
    margin-left: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #654222;
  }
  span {
    margin-left: 40px;
    /* text-align: left; */
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

const Booking = () => {
  // 예약 데이터를 담을 상태
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios를 사용하여 데이터를 불러오기
        const response = await axios.get("API_URL_HERE");

        // 데이터를 상태에 설정
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const bookingListData = !!bookingData;

  return (
    <BookingPage>
      <PageTitle>
        <p>예약 내역</p>
      </PageTitle>
      {bookingListData ? (
        // 데이터 있을 때 화면
        <BookingList>
          <ListTitle>
            <p>교동 쉽독호텔&리조트</p>
            <span>대구광역시 중구</span>
          </ListTitle>

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
                <Line />
                <span>예약 정보</span>
                <BookInfoTxt>
                  <p>예약 번호 : 2591564896</p>
                  <p>객실 : 2호 개인실</p>
                  <p>강아지 : 콩이</p>
                </BookInfoTxt>
              </BookInfo>
              <PayInfo>
                <Line />
                <span>결제 정보</span>
                <PayInfoTxt>
                  <p>결제 금액 : 45,000원</p>
                  <p>결제 수단 : 카카오페이</p>
                </PayInfoTxt>
              </PayInfo>
              <CancelBt>
                <Cancel>예약취소</Cancel>
              </CancelBt>
            </BookingRight>
          </BookingContents>
        </BookingList>
      ) : (
        // 데이터 없을 때 화면
        <ListNone>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/booking.svg`} />
          <p>예약 내역이 없습니다.</p>
          <span>다양한 호텔상품을 만나보세요</span>
          <a href="/"> 호텔 목록 보러가기</a>
        </ListNone>
      )}
    </BookingPage>
  );
};

export default Booking;
