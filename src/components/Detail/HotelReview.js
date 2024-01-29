import React, { useState } from "react";
import "../../../src/styles/Detail/hotelreview.css";
import { Navigate, useNavigate } from "react-router-dom";

const HotelReview = () => {
  // 후기 모달 관련
  // true : 열린상태 , setIsOpen : 닫힌상태
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleReviewModalClose = () => {
    setIsOpen(false);
    console.log("Modal is closed."); // 모달이 닫힐 때 콘솔에 메시지 출력
  };

  return (
    <div className="review-modal-background">
      <div className="hotelreview_wrap">
        {/* 후기 - 헤더 영역 */}
        <div className="hotelreview-header-wrap">
          <div className="roomreview">숙소 후기</div>
          {/* 어떻게 닫을 수 있을까? */}
          <div
            onClick={() => handleReviewModalClose()}
            className="roomreviewClose"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelReviewClose.svg`}
              alt=""
            />
          </div>
        </div>
        {/* 후기 - 메인 영역 */}
        <div className="review-main">
          {/* 메인's 헤더(숙소 이름) 영역 */}
          <div className="review-header">
            {/* <div className="review-star"> */}
            {/* </div> */}
            <img
              className="review-star"
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/filledStar.svg`}
              alt=""
            />
            <div>
              <span className="review-number">5.0</span>
              <span className="review-hotel">교동 쉽독호텔 & 리조트</span>
              <span className="review-spot">대구광역시 중구</span>
            </div>
          </div>
          <img
            className="review-main-line"
            src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelMainLine.svg`}
            alt=""
          />
          {/* 메인's 헤더(별점 및 한줄평) 영역 */}
          <div className="review-wrap-scroll">
            <div className="review_wrap">
              <div className="review_small_stars">
                <img
                  className="review_SmFilledStar"
                  src={`${process.env.PUBLIC_URL}/images/hotelDetail/reviewFilledStar.svg`}
                  alt=""
                />
                <img
                  className="review_SmFilledStar"
                  src={`${process.env.PUBLIC_URL}/images/hotelDetail/reviewFilledStar.svg`}
                  alt=""
                />
                <img
                  className="review_SmFilledStar"
                  src={`${process.env.PUBLIC_URL}/images/hotelDetail/reviewFilledStar.svg`}
                  alt=""
                />
                <img
                  className="review_SmFilledStar"
                  src={`${process.env.PUBLIC_URL}/images/hotelDetail/reviewFilledStar.svg`}
                  alt=""
                />
                <img
                  className="review_SmFilledStar"
                  src={`${process.env.PUBLIC_URL}/images/hotelDetail/reviewFilledStar.svg`}
                  alt=""
                />
              </div>
              <div className="review_nickname">닉네임</div>
              <div className="review_desc">
                저희 집 주인님 팔자는 항상 부럽지만 이렇게 부러운 적은 또
                없습니다. 사람도 받아주시나요?
              </div>
              <img
                className="review-part-line"
                src={`${process.env.PUBLIC_URL}/images/hotelDetail/reviewWrapLine.svg`}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* 더보기(후기 - 푸터) 영역 */}
        <div className="review_more">
          <img
            src={`${process.env.PUBLIC_URL}/images/hotelDetail/bt_moreReview.svg`}
            alt=""
          />
          <button className="review_more_bt">더 보기</button>
        </div>
      </div>
    </div>
  );
};

export default HotelReview;
