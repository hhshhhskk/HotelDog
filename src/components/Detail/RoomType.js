import React from "react";
import "../../styles/Detail/roomtype.css";

const RoomType = () => {
  return (
    <div className="roomtype-wrap">
      <div>
        <div className="image-wrap">
          <img src="" alt="" />
        </div>
        <div className="desc-wrap">
          <h3>4호 개인실</h3>
          <p>소형견 ( 7kg 이하 ~ ) 기준</p>
        </div>
        <div className="price-wrap">
          <h3>30,000</h3>
          <span>원</span>
        </div>
        <div className="button-wrap">
          <button>예약하기</button>
        </div>
      </div>
    </div>
  );
};

export default RoomType;
