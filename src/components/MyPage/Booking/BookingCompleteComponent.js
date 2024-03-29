import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ReserveDate from "../../Common/ReserveDate";
import ReviewModal from "./ReviewModal";
import BookingDate from "./BookingDate";
import { getReviewApi } from "../../../api/mypage/mypageApi";

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
    width: 360px;
    height: 290px;
    border-radius: 10px;
    object-fit: cover;
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
  // console.log("지난날짜 입니다.");
  // 모달 열림/닫힘 상태를 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [reviewData, setReviewData] = useState([]);
  const [isReviewAlreadyWritten, setIsReviewAlreadyWritten] = useState(false);

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

  // 후기 작성 버튼 활성화 여부 함수
  const isReviewButtonEnabled = resPk => {
    // 해당 예약 번호(resPk)에 대한 후기가 이미 등록되었는지 확인
    return !reviewData.some(review => review.resPk === resPk);
  };
  const getReviewData = async () => {
    try {
      const data = await getReviewApi();
      console.log("Returned review data:", data);
      setReviewData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkReviewAlreadyWritten = resPk => {
    return reviewData.some(review => review.resPk === resPk);
  };

  useEffect(() => {
    getReviewData();
    // 후기가 이미 작성되었는지 확인
    setIsReviewAlreadyWritten(checkReviewAlreadyWritten(bookingData.res_pk));
  }, []);

  // 데이터가 없으면 null 반환
  if (!bookingData) return null;
  return (
    <>
      <BookingCompleteList>
        <ListTitle>
          <p>{bookingData.hotel_nm}</p>
          <span>{bookingData.address_name}</span>
        </ListTitle>
        <BookingContents>
          <BookingLeft>
            <img
              src={`http://112.222.157.156:5222/pic/hotel/${bookingData.hotel_pk}/${bookingData.hotel_pic}`}
              alt="booking"
            />
            <p>이용 완료</p>
          </BookingLeft>
          <BookingRight>
            <BookingDate bookingData={bookingData} />
            <BookInfo>
              <Line />
              <span>예약 정보</span>
              <BookInfoTxt>
                <p>예약 번호 : {bookingData.res_pk}</p>
                <p>객실 : {bookingData.hotel_room_nm}</p>
                <p>강아지 : {bookingData.res_dog_info_vo_list[0].dog_nm}</p>
              </BookInfoTxt>
            </BookInfo>
            <PayInfo>
              <Line />
              <span>호텔 정보</span>
              <PayInfoTxt>
                <p>전화번호 : {bookingData.hotel_call}</p>
              </PayInfoTxt>
            </PayInfo>
            <CompleteBt>
              {isReviewButtonEnabled(bookingData.res_pk) ? (
                <Complete onClick={() => handleOpenModal(bookingData)}>
                  숙소 후기
                </Complete>
              ) : (
                <Complete
                  onClick={() => {
                    alert("이미 후기가 작성되었습니다.");
                  }}
                >
                  숙소 후기
                </Complete>
              )}
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
    </>
  );
};

export default BookingCompleteComponent;
