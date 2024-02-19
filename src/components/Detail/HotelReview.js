import React, { useEffect, useState } from "react";
import "../../../src/styles/Detail/hotelreview.css";
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
  hotel_pk,
  hotelList,
  setReviewModalOpen,
  reviewModalOpen,
}) => {
  // review 상태 관리
  const [reviewData, setReviewData] = useState("");
  const [page, setPage] = useState(1);
  // hotel_pk
  // console.log(reviewId);

  const handleMoreReview = e => {
    setPage(page + 1);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const successFnReview = result => {
    // console.log("성공", result);
    setReviewData([...reviewData, ...result]);
    console.log(reviewData);
  };

  const failFnReview = result => {
    console.log("다시 시도해주세요.", result);
  };
  const errorFnReview = result => {
    console.log("서버에러", result);
  };

  useEffect(() => {
    // 컴포넌트 처음 불러올때 실행
    getReview(hotel_pk, page, successFnReview, failFnReview, errorFnReview);
    console.log("현재 페이지: ", page);

    //page의 값이 바뀌면 useEffect를 다시 실행하겠다.
  }, [page]);

  // 데이터를 불러오기전이면 null값을 반환
  if (!reviewData) return null;

  // reviewData는 useState이므로 값이 변화면 화면을 새로 리렌더링한다. 
  // 데이터가 없다가 데이터를 불러오면 리렌더링함

  // 데이터가 불러와지면 아래 코드 실행
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
            {reviewData?.map((item, index) => (
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
                  <div className="review_nickname">{item?.nick_name}</div>
                  <div className="review_desc">{item?.comment}</div>
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
