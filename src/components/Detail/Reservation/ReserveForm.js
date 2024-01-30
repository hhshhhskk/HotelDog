import React, { useState } from "react";
// import { Wrapper } from "../../../styles/Common/layoutStyle";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import "../../../styles/Detail/reserveformstyle.css";
import ReserveDate from "../../Common/ReserveDate";

const ReserveForm = ({ selectedRoom, setSelectedRoom }) => {
  const navigate = useNavigate();
  const handleMoveCompletedPage = e => {
    navigate("/reservecomplete");
  };
  const ReserveFormFixed = styled.div`
    position: fixed;
    width: 420px;
    min-height: 921px;

    top: 122px;
    right: 360px;
    padding-bottom: 122px;
  `;

  const [showDogSizeOptions, setShowDogSizeOptions] = useState(false); // 강아지 크기 옵션 표시 여부를 관리하는 상태

  const toggleDogSizeOptions = () => {
    setShowDogSizeOptions(!showDogSizeOptions); // 상태를 반전시켜 강아지 크기 옵션의 표시 여부를 변경
  };

  return (
    <ReserveFormFixed>
      <div className="reserveform">
        <div className="reserveform-margin">
          <div className="reserve-selectdate-wrap">
            {/* 체크 인/아웃 날짜 선택 */}
            <div className="reserve-header">
              <img
                className="reserve-icon"
                src={`${process.env.PUBLIC_URL}/images/calendarImage.svg`}
                alt=""
              />
              <div className="reserveFormTitle">체크 인/아웃 날짜 선택</div>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelreserveLine.svg`}
              alt=""
            />

            {/* 체크 인/아웃 선택 영역 */}
            <ReserveDate />
          </div>

          {/* 선택된 객실 정보 영역 */}
          <div className="reseved-room-wrap">
            <div className="reserve-header">
              <img
                className="reserve-icon"
                src={`${process.env.PUBLIC_URL}/images/pawImage.svg`}
                alt=""
              />
              <div className="reserveFormTitle">선택된 객실 정보</div>
            </div>
            <img
              className="reserveLine"
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelreserveLine.svg`}
              alt=""
            />

            {/* 선택된 방 이름 출력 */}
            {selectedRoom && (
              <p className="selected-room">선택된 객실: {selectedRoom}</p>
            )}
            {/* <p className="selected-room">선택된 객실 : {selectedRoom}</p> */}
          </div>

          {/* 반려견 정보 */}
          <div className="reserve-dog">
            <form>
              <div className="reserve-header">
                <div className="reserve-dog-flex">
                  {/* 이미지 */}
                  <img
                    className="reserve-icon"
                    src={`${process.env.PUBLIC_URL}/images/pawImage.svg`}
                    alt=""
                  />
                  {/* title */}
                  <div className="reserveFormTitle">반려견 정보</div>
                  {/* button */}
                  <button type="button" className="reserve_bt_plus">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/bt_plus.svg`}
                      alt=""
                    />
                  </button>
                </div>
                <img
                  className="reserveLine"
                  src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelreserveLine.svg`}
                  alt=""
                />
              </div>
              {/* 반려견 정보 입력 영역 */}
              <div className="dog_input_wrap">
                <div className="dog_input_flex">
                  <span className="dog_input_title">강아지 이름</span>
                  <input
                    type="text"
                    placeholder="  이름을 입력해 주세요."
                    className="dog-input-style"
                  ></input>
                </div>
                <div className="dog_input_flex">
                  <span className="dog_input_title">강아지 나이</span>
                  <input
                    type="number"
                    placeholder="  나이를 선택해 주세요."
                    className="dog-input-style"
                  ></input>
                </div>
                <div className="dog_input_flex">
                  <span className="dog_input_title">강아지 크기</span>
                  <button
                    type="button"
                    className="dog-input-style"
                    onClick={toggleDogSizeOptions}
                  >
                    크기를 선택해 주세요.
                  </button>
                  {showDogSizeOptions && ( // showDogSizeOptions 값이 true일 때만 ul 요소를 렌더링
                    <ul
                      className={`dog-size-ul ${
                        showDogSizeOptions ? "visible" : ""
                      }`}
                    >
                      <li>
                        <button type="button" className="dog-size-li">
                          소형견
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dog-size-li">
                          중형견
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dog-size-li">
                          대형견
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dog-size-li">
                          초대형견
                        </button>
                      </li>
                    </ul>
                  )}
                </div>

                <textarea
                  className="dog-input-textarea"
                  placeholder="특이사항 및 요청 사항을 입력해 주세요."
                  spellCheck="false"
                ></textarea>
              </div>
            </form>
          </div>
          <div>
            <button className="reserve-button">담기</button>
          </div>
        </div>
      </div>

      {/* 선택된 예약 목록 나타내는 영역 */}
      <div className="reserved-wrap">
        <div className="reserved-margin">
          <div className="reserve-header">
            <img
              className="reserve-icon"
              src={`${process.env.PUBLIC_URL}/images/footicon.svg`}
              alt=""
            />
            <div className="reserveFormTitle">예약 중인 객실</div>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelreserveLine.svg`}
            alt=""
          />
          {/* 선택된 예약 목록 출력 */}
          <div></div>
          {/* 총 금액 나타나는 영역 */}
          <div>
            <span className="reserved-price">
              <b>총 금액</b>220,000원
            </span>
          </div>

          <button
            className="reserve-button"
            onClick={() => {
              handleMoveCompletedPage();
            }}
          >
            예약하기
          </button>
        </div>
      </div>
    </ReserveFormFixed>
  );
};

export default ReserveForm;
