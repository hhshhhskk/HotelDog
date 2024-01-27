import React from "react";
import "../../styles/Detail/roomtype.css";

const RoomType = () => {
  const hotel_room_info = [
    {
      hotel_room_pk: 1, // 방 pk
      pic: "string", // 사진
      maximum: 5, // 방당 수용가능 마리수
      hotel_room_nm: "1호 개인실", // 호텔 방 이름
      hotel_room_ea: 3, // 호텔 방 개수
      hotel_room_cost: 70000, // 방 가격
      size: 3, // 방에 수용가능한 사이즈(클수록 큰 강아지 수용가능)
    },
    {
      hotel_room_pk: 2, // 방 pk
      pic: "string", // 사진
      maximum: 5, // 방당 수용가능 마리수
      hotel_room_nm: "2호 개인실", // 호텔 방 이름
      hotel_room_ea: 1, // 호텔 방 개수
      hotel_room_cost: 50000, // 방 가격
      size: 3, // 방에 수용가능한 사이즈(클수록 큰 강아지 수용가능)
    },
    {
      hotel_room_pk: 3, // 방 pk
      pic: "string", // 사진
      maximum: 5, // 방당 수용가능 마리수
      hotel_room_nm: "3호 개인실", // 호텔 방 이름
      hotel_room_ea: 2, // 호텔 방 개수
      hotel_room_cost: 90000, // 방 가격
      size: 3, // 방에 수용가능한 사이즈(클수록 큰 강아지 수용가능)
    },
    {
      hotel_room_pk: 4, // 방 pk
      pic: "string", // 사진
      maximum: 5, // 방당 수용가능 마리수
      hotel_room_nm: "4호 개인실", // 호텔 방 이름
      hotel_room_ea: 1, // 호텔 방 개수
      hotel_room_cost: 110000, // 방 가격
      size: 3, // 방에 수용가능한 사이즈(클수록 큰 강아지 수용가능)
    },
  ];

  return (
    <div className="roomtype-flex">
      <p className="roomtype-text-flex">
        객실 둘러보기
        <span className="roomtype-info">
          * 객실 먼저 선택 후, 반려견 정보를 입력해 주세요.
        </span>
      </p>
      {hotel_room_info.map(function (item, index) {
        return (
          <div className="roomtype-wrap" key={index}>
            <div className="img-wrap">
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.pic}.svg`}
                alt=""
              />
            </div>

            <div className="roomtype-contents">
              <div className="roomtype-desc-wrap">
                <div className="roomtype-desc_title">{item.hotel_room_nm}</div>
                <div className="roomtype-desc_desc">
                  소형견(7kg 이하 ~) 기준
                </div>
              </div>

              <div className="roomtype-price-wrap">
                <div className="roomtype-price">
                  <span>
                    <h3>{item.hotel_room_cost}</h3>원
                  </span>
                </div>
                <button className="button-wrap">예약하기</button>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="roomtype-wrap">
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
      </div> */}
    </div>
  );
};

export default RoomType;
