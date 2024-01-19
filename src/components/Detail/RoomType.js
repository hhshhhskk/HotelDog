import React from "react";
import "../../styles/Detail/roomtype.css";

const RoomType = () => {
  return (
    <div className="roomtype-wrap">
      <div className="img-wrap">
        <img src={`${process.env.PUBLIC_URL}/images/roomtype.svg`} alt="" />
      </div>

      <div className="roomtype-contents">
        <div className="roomtype-desc-wrap">
          <div className="roomtype-desc_title">4호 개인실</div>
          <div className="roomtype-desc_desc">소형견(7kg 이하 ~) 기준</div>
        </div>

        <div className="roomtype-price-wrap">
          <div className="roomtype-price">
            <span>
              <h3>30,000</h3>원
            </span>
          </div>
          <button className="button-wrap">예약하기</button>
        </div>
      </div>
    </div>
  );
};

export default RoomType;
