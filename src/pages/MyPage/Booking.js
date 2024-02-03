import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReserveDate from "../../components/Common/ReserveDate";
import BookingListComponent from "../../components/MyPage/Booking/BookingListComponent";
import BookingCompleteComponent from "../../components/MyPage/Booking/BookingCompleteComponent";
import ReviewModal from "../../components/MyPage/Booking/ReviewModal";
import jwtAxios from "../../utils/jwtUtil";

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
  const [page, setPage] = useState(1);

  const DemoDagta = [
    {
      hotel_nm: "더 꼬냥 컴포트 호텔",
      hotel_call: "010-4823-7331",
      hotel_room_nm: "단체룸(소)",
      from_date: "2024-01-04",
      to_date: "2024-02-25",
      room_pic: "8b1aa9c7-7e0a-42f5-9a83-303b3d6e5bc5.png",
      res_pk: 264,
      res_dog_info_vo_list: [
        {
          res_pk: 264,
          dot_nm: "odio.",
        },
      ],
    },
    {
      hotel_nm: "헤어볼 티어라스 호텔",
      hotel_call: "010-2056-4431",
      hotel_room_nm: "케이지(대)",
      from_date: "2023-12-31",
      to_date: "2024-01-30",
      room_pic: "52e035ca-e556-42d3-9d49-d5c80fd1e6dc.png",
      res_pk: 373,
      res_dog_info_vo_list: [
        {
          res_pk: 373,
          dot_nm: "mattis",
        },
      ],
    },
    {
      hotel_nm: "가짜.......",
      hotel_call: "010-4823-7331",
      hotel_room_nm: "단체룸(소)",
      from_date: "2024-01-04",
      to_date: "2024-01-31",
      room_pic: "8b1aa9c7-7e0a-42f5-9a83-303b3d6e5bc5.png",
      res_pk: 264,
      res_dog_info_vo_list: [
        {
          res_pk: 264,
          dot_nm: "odio.",
        },
      ],
    },
  ];

  useEffect(() => {
    DemoDagta.map(item => {
      const result = dayCheck(item.to_date);
      item.compare = result;
    });
  }, []);

  // 날짜를 비교해서 지났는지 아닌지 판단하는 함수
  const dayCheck = _endDate => {
    var today = new Date();
    var comparisonDate = new Date(_endDate);
    // 오늘 날짜가 comparisonDate 이전인지 확인
    if (today > comparisonDate) {
      // 정상
      return true;
    } else {
      // 초과
      return false;
    }
  };

  // // 임시 예약 데이터
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const ExData = [
  //       {
  //         hotelName: "교동 쉽독호텔&리조트",
  //         hotelLocation: "대구광역시 중구",
  //         checkInDate: "23.01.01",
  //         checkOutDate: "23.01.01",
  //         reservationInfo: {
  //           reservationNumber: "2591564896",
  //           room: "2호 개인실",
  //           pet: "콩이",
  //         },
  //         paymentInfo: {
  //           amount: "45,000원",
  //           paymentMethod: "카카오페이",
  //         },
  //       },
  //       {
  //         hotelName: "수성구 퍼피하우스",
  //         hotelLocation: "대구광역시 수성구",
  //         checkInDate: "23.01.01",
  //         checkOutDate: "23.01.01",
  //         reservationInfo: {
  //           reservationNumber: "2591564896",
  //           room: "2호 개인실",
  //           pet: "탄이",
  //         },
  //         paymentInfo: {
  //           amount: "45,000원",
  //           paymentMethod: "카카오페이",
  //         },
  //       },
  //     ];

  //     // 임시 만료 데이터
  //     const ExCompleteData = [
  //       {
  //         hotelName: "만료된 호텔1",
  //         hotelLocation: "서울특별시 강남구",
  //         checkInDate: "22.12.01",
  //         checkOutDate: "22.12.02",
  //         reservationInfo: {
  //           reservationNumber: "1234567890",
  //           room: "스위트룸",
  //           pet: "미정",
  //         },
  //         paymentInfo: {
  //           amount: "100,000원",
  //           paymentMethod: "신용카드",
  //         },
  //       },
  //       {
  //         hotelName: "만료된 호텔2",
  //         hotelLocation: "부산광역시 해운대구",
  //         checkInDate: "22.12.05",
  //         checkOutDate: "22.12.06",
  //         reservationInfo: {
  //           reservationNumber: "0987654321",
  //           room: "디럭스룸",
  //           pet: "도그",
  //         },
  //         paymentInfo: {
  //           amount: "120,000원",
  //           paymentMethod: "네이버페이",
  //         },
  //       },
  //     ];

  //     setBookingData(ExData);
  //     setBookingCompleteData(ExCompleteData); // 만료된 예약 데이터
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const GetBookingData = async () => {
      try {
        // 페이지에 해당하는 요청 URL 생성
        const url = `/api/reservation?page=${page}`;

        // 요청 보내기
        const res = await jwtAxios({
          method: "get",
          url: url,
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res.data);
        // 받아온 데이터를 상태에 저장
        setBookingData(prevBookings => [...prevBookings, ...res.data]);
      } catch (error) {
        console.log(error);
      }
    };

    // 데이터 불러오기 함수 호출
    GetBookingData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함

  // 예약 데이터가 있는지 확인
  const bookingListData = true;
  const bookingCompleteDataExist = bookingCompleteData.length > 0;

  return (
    <BookingPage>
      <PageTitle>
        <p>예약 내역</p>
      </PageTitle>
      {DemoDagta.length > 0 ? (
        // 지난 날짜인지 아니면, 일정이 남았는지
        // ?예약 취소 눌렀을 때 삭제되게 해야함
        DemoDagta.map((item, index) => (
          <div key={index}>
            (item.compare) ? ( <BookingListComponent bookingData={item} />) : (
            <BookingCompleteComponent bookingData={item} />)
          </div>
        ))
      ) : (
        // <BookingListComponent bookingData={bookingData} />
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
