import React from "react";
import "../../../src/styles/Detail/hotelreview.css";

const HotelReview = () => {
  return (
    <div className="hotelreview_wrap">
      {/* 후기 - 헤더 영역 */}
      <div className="roomreview">숙소 후기</div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelReviewClose.svg`}
          alt=""
        />
      </div>
      {/* 후기 - 메인 영역 */}
      <div>
        {/* 메인's 헤더(숙소 이름) 영역 */}
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/board/boardImg.svg`}
            alt=""
          />
          <span>5. 0</span>
          <span>교동 쉽독호텔 & 리조트</span>
          <span>대구광역시 중구</span>
        </div>
        {/* 메인's 헤더(별점 및 한줄평) 영역 */}
      </div>

      {/* 더보기(후기 - 푸터) 영역 */}
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/board/boardImg.svg`}
          alt=""
        />
        <button>더 보기</button>
      </div>
    </div>
  );
};

export default HotelReview;
