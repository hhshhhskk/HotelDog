import React, { useEffect, useRef, useState } from "react";
// import { Wrapper } from "../../../styles/Common/layoutStyle";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import "../../../styles/Detail/reserveformstyle.css";
import ReserveDate from "../../Common/ReserveDate";
// 반려견 정보 초기값
const initState = {
  dogname: "",
  dogage: "",
  dogsize: "",
  dogdesc: "",
};
const ReserveFormFixed = styled.div`
  position: fixed;
  width: 420px;
  min-height: 921px;
  top: 122px;
  right: 360px;
  padding-bottom: 122px;
  bottom: 0px;
  z-index: 2;
  @media (max-height: 921px) {
    padding-bottom: 0;
    height: calc(100vh - 122px);
    overflow-y: auto;
  }
`;

const ReserveForm = ({ selectedRoom, detailId, resDay, setResDay }) => {
  const navigate = useNavigate();
  const handleMoveCompletedPage = e => {
    navigate("/reservecomplete");
  };

  const [dogInfo, setDogInfo] = useState(initState);
  const [dogDesc, setDogDesc] = useState(""); // textarea의 값을 저장할 상태

  const [showDogSizeOptions, setShowDogSizeOptions] = useState(false); // 강아지 크기 옵션 표시 여부를 관리하는 상태
  const dogSizeOptionsRef = useRef(null); // ul 요소의 ref 설정
  const toggleDogSizeOptions = () => {
    setShowDogSizeOptions(!showDogSizeOptions); // 상태를 반전시켜 강아지 크기 옵션의 표시 여부를 변경
  };

  useEffect(() => {
    // ul 바깥의 영역을 클릭했을 때 ul을 숨기는 이벤트 핸들러
    const handleClickOutside = event => {
      if (
        dogSizeOptionsRef.current &&
        !dogSizeOptionsRef.current.contains(event.target)
      ) {
        setShowDogSizeOptions(false);
      }
    };
    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dogSizeOptionsRef]);

  const handleDogSizeButtonClick = () => {
    setShowDogSizeOptions(!showDogSizeOptions);
  };

  const [selectedDogSize, setSelectedDogSize] = useState(""); // 선택된 강아지 크기를 저장하는 상태
  const handleDogSizeSelect = size => {
    setSelectedDogSize(size); // 선택된 강아지 크기를 상태에 저장
    setShowDogSizeOptions(false); // 옵션을 선택하면 옵션 창을 닫음
  };

  // form 제출
  const handleSubmit = e => {
    // 새로 고침 막기
    e.preventDefault();
    // input 및 textarea 초기화
    setDogInfo(initState);
    setDogDesc("");
    // 예약 중인 객실로 담아지도록 함수 구현해야함.

    dogInfo[e.target.name] = e.target.value;
    setDogInfo({ ...dogInfo });
  };
  const formDataArray = [
    {
      key: "dogname",
      value: dogInfo.dogname,
    },
    {
      key: "dogage",
      value: dogInfo.dogage,
    },
    {
      key: "dogsize",
      value: dogInfo.dogsize,
    },

    {
      key: "dogdesc",
      value: dogInfo.dogdesc,
    },
  ];

  const handleChange = e => {
    dogInfo[e.target.name] = e.target.value;
    setDogInfo({ ...dogInfo });

    //  setDogDesc(e.target.value); // textarea의 값 변경 시 상태 업데이트
    console.log(e);
    console.log(dogInfo);
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
              className="reserveLine"
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelreserveLine.svg`}
              alt=""
            />

            {/* 체크 인/아웃 선택 영역 */}
            <ReserveDate
              detailId={detailId}
              resDay={resDay}
              setResDay={setResDay}
            />
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
            {/* {selectedRoom && (
              <p className="selected-room">선택된 객실: {selectedRoom}</p>
            )} */}
            <p className="selected-room">선택된 객실 : {selectedRoom}</p>
          </div>

          {/* 반려견 정보 */}
          <div className="reserve-dog">
            <form onSubmit={e => handleSubmit(e)}>
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
                  {/* <span className="reserve-dog-info">버튼을 누르면 새롭게 입력가능 합니다.</span> */}
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
                    placeholder="이름을 입력해 주세요."
                    className="dog-input-style"
                    name="dogname"
                    value={dogInfo.dogname}
                    onChange={e => handleChange(e)}
                  ></input>
                </div>
                <div className="dog_input_flex">
                  <span className="dog_input_title">강아지 나이</span>
                  <input
                    type="number"
                    min="1"
                    max="25"
                    placeholder="나이를 선택해 주세요."
                    className="dog-input-style"
                    name="dogage"
                    value={dogInfo.dogage}
                    onChange={e => handleChange(e)}
                  ></input>
                </div>
                <div className="dog_input_flex">
                  <span className="dog_input_title">강아지 크기</span>
                  <button
                    type="button"
                    className="dog-input-style"
                    onClick={() => {
                      toggleDogSizeOptions();
                      handleDogSizeButtonClick();
                    }}
                    // 상태 변경 함수로 변경
                    name="dogsize"
                    value={dogInfo.dogsize}
                  >
                    {selectedDogSize || "크기를 선택해 주세요."}
                    {/* 선택된 강아지 크기를 표시 */}
                  </button>
                  {showDogSizeOptions && (
                    <ul ref={dogSizeOptionsRef} className="dog-size-ul visible">
                      <li>
                        <button
                          type="button"
                          className="dog-size-li"
                          name="smalldog"
                          onClick={() => handleDogSizeSelect("소형견")}
                        >
                          소형견
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dog-size-li"
                          name="middledog"
                          onClick={() => handleDogSizeSelect("중형견")}
                        >
                          중형견
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dog-size-li"
                          name="bigdog"
                          onClick={() => handleDogSizeSelect("대형견")}
                        >
                          대형견
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dog-size-li"
                          name="extrabigdog"
                          onClick={() => handleDogSizeSelect("초대형견")}
                        >
                          초대형견
                        </button>
                      </li>
                    </ul>
                  )}
                </div>

                <textarea
                  name="dogdesc"
                  value={dogDesc}
                  onChange={e => {
                    setDogDesc(e.target.value);
                  }}
                  className="dog-input-textarea"
                  placeholder="특이사항 및 요청 사항을 입력해 주세요."
                  spellCheck="false"
                ></textarea>
              </div>
            </form>
          </div>
          <div>
            <button
              className="reserve-button"
              type="submit"
              onClick={handleSubmit}
            >
              담기
            </button>
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
          <div>
            {formDataArray.map(item => {
              return (
                <p key={item.key}>
                  {item.value}/{selectedRoom}
                </p>
              );
            })}
            {/* button */}
            <button type="button" className="reserve_bt_plus">
              <img
                src={`${process.env.PUBLIC_URL}/images/bt_plus.svg`}
                alt=""
              />
            </button>
          </div>
          {/* 총 금액 나타나는 영역 */}
          <div>
            <span className="reserved-price">
              <b>총 금액</b>
              {}원
            </span>
          </div>

          <button
            className="reserve-button"
            onClick={() => {
              handleMoveCompletedPage();
              // !!!!!!!!!!!!!!!!예약 정보들이 마이페이지 예약 내역에 나타나야함
            }}
            type="submit"
          >
            예약하기
          </button>
        </div>
      </div>
    </ReserveFormFixed>
  );
};

export default ReserveForm;
