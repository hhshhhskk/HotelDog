import React, { useState } from "react";
import styled from "@emotion/styled";

// 모달을 감싸는 컨테이너 스타일 정의
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); // 배경에 반투명한 검은색 추가
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// 모달 내용을 담는 영역 스타일 정의
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 750px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

// 닫기 버튼 스타일 정의
const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
const ModalTitle = styled.div`
  position: relative;
  height: 130px;
  border-bottom: 1px solid #654222;

  h2 {
    color: #654222;
    /* font-family: "Noto Sans"; */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 35px;
  }
  p {
    position: relative;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 5px;
  }
  span {
    color: #9d9d9d;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const Star = styled.div`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 25px;
  p {
    margin-bottom: 6px;
    color: #9d9d9d;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const ReviewTxt = styled.form`
  position: relative;
  textarea {
    position: relative;
    width: 590px;
    height: 290px;
    resize: none;
    border-radius: 5px;
    border: 1px solid #eee;
    background: #fafafa;
    padding: 20px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span {
    width: 150px;
    height: 50px;
  }
`;

const ReviewComplete = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  margin-top: 90px;
  border-radius: 10px;
  border: 1px solid #654222;
  background: #654222;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

// ReviewModal 컴포넌트 정의
const ReviewModal = ({
  isOpen,
  onClose,
  bookingData,
  children,
  onReviewSubmit,
}) => {
  if (!isOpen) return null;
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");

  // 후기 작성 완료 시 처리 함수
  const handleReviewSubmit = () => {
    // 작성된 후기 데이터 전달
    // onReviewSubmit({ rating, reviewText });
    // 얼럿 창 띄우기
    alert("후기가 작성되었습니다.");
    // 모달 닫기
    onClose();
    
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>
          <h2>숙소 후기</h2>
          <p>{bookingData.hotelName}</p>
          <span>{bookingData.hotelLocation}</span>
          {/* ? 날짜는 어떻게 불러오지 */}
        </ModalTitle>
        <Star>
          <p>숙소는 어떠셨나요?</p>
          {[...Array(rating)].map((a, i) => (
            <img
              src={`${process.env.PUBLIC_URL}/images/MyPage/startfill.svg`}
              className="star-lg"
              key={i}
              onClick={() => setRating(i + 1)}
            />
          ))}
          {[...Array(5 - rating)].map((a, i) => (
            <img
              src={`${process.env.PUBLIC_URL}/images/MyPage/startlight.svg`}
              className="star-lg"
              key={i}
              onClick={() => setRating(rating + i + 1)}
            />
          ))}
        </Star>

        {/* 모달 내용 */}
        {children}
        <ReviewTxt>
          <p>
            <textarea
              placeholder="다른 회원들이 숙소를 이용할 때 도움이 될 수 있도록 느낀 점을 작성해주세요.
이미지는 최대 3장까지 업로드가 가능합니다."
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
            ></textarea>
          </p>
        </ReviewTxt>
        <ReviewComplete onClick={handleReviewSubmit}>
          <p>작성완료</p>
        </ReviewComplete>
        <CloseButton onClick={onClose}>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/close.svg`} />
        </CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ReviewModal;
