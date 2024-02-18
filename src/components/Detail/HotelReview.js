import React, { useEffect, useState } from "react";
import "../../../src/styles/Detail/hotelreview.css";
import { useParams } from "react-router-dom";
import { getReview } from "../../api/Detail/hoteldetailApi";
// 리뷰 페이지 네이션 초기값
const initState = [
  {
    comment: "",
    score: 0,
    pics: [""],
    review_pk: 0,
    nick_name: "",
    updated_at: "",
    fav_count: 0,
  },
];

const HotelReview = ({
  hotelList,
  setReviewModalOpen,
  reviewModalOpen,
  hoteLpk,
  // page,
}) => {
  // params 읽기
  const { page } = useParams();
  console.log(page);
  // review 상태 관리
  const [reviewData, setReviewData] = useState(initState);
  // hotel_pk
  // console.log(reviewId);

  const handleMoreReview = e => {
    console.log("review pagination 의 hotel_pk :");
    getReview(page);
    console.log("review pagination 의 page :", page);
    // reviewHotel_pk();
  };
  // useEffect(() => {
  // }, []);

  const closeReviewModal = () => {
    setReviewModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="review-modal-background">
        <div className="hotelreview_wrap">
          {/* 후기 - 헤더 영역 */}
          <div className="hotelreview-header-wrap">
            <div className="roomreview">숙소 후기</div>
            <button onClick={closeReviewModal} className="roomreviewClose">
              <img
                src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelReviewClose.svg`}
                alt=""
              />
            </button>
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
                <span className="review-hotel">
                  {hotelList.hotel_info_vo.hotel_nm}
                </span>
                <span className="review-spot">
                  {hotelList.hotel_info_vo.road_address}
                </span>
              </div>
            </div>
            <img
              className="review-main-line"
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelMainLine.svg`}
              alt=""
            />
            {/* 메인's 헤더(별점 및 한줄평) 영역 */}
            {/* 맵을 돌려야 할 거 같은데? 얘는.... */}
            {reviewData.map((item, index) => (
              <div className="review-wrap-scroll" key={index}>
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
                  <div className="review_nickname">{reviewData.nick_name}</div>
                  <div className="review_desc">{reviewData.comment}</div>
                  {/* 호텔 리뷰 param : {reviewId} */}
                  <img
                    className="review-part-line"
                    src={`${process.env.PUBLIC_URL}/images/hotelDetail/reviewWrapLine.svg`}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 더보기(후기 - 푸터) 영역 */}
          <div className="review_more">
            <img
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/bt_moreReview.svg`}
              alt=""
            />
            <button
              className="review_more_bt"
              onClick={e => handleMoreReview(e)}
            >
              더 보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelReview;
