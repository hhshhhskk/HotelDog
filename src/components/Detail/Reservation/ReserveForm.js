import React, { useEffect, useRef, useState } from "react";
// import { Wrapper } from "../../../styles/Common/layoutStyle";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import "../../../styles/Detail/reserveformstyle.css";
import ReserveDate from "../../Common/ReserveDate";
import Calendar from "../../Common/Calendar";
import {
  getSelDateRmId,
  postReservation,
} from "../../../api/Detail/hoteldetailApi";

const ReserveFormFixed = styled.div`
  position: fixed; /* 이 부분이 수정되었습니다. */
  width: 420px;
  // min-height: 921px;
  max-height: 1500px;
  top: 150px;
  left: 1140px;
`;
// 반려견 정보 초기값
const initState = {
  dogname: "",
  dogage: "",
  dogsize: "",
  dogdesc: "",
  hotel_room_pk: "",
};

const ReserveForm = ({
  calendarOpen,
  calendarNow,
  calendarClose,
  setCalendarOpen,
  setCalendarNow,
  selectedRoom,
  hotel_pk,
  resDay,
}) => {
  console.log("selectedRoom : ", selectedRoom);
  const navigate = useNavigate();
  const [showDogSizeOptions, setShowDogSizeOptions] = useState(false); // 강아지 크기 옵션 표시 여부를 관리하는 상태
  const dogSizeOptionsRef = useRef(null); // ul 요소의 ref 설정
  // 초기 룸 값 받기
  const [dogInfo, setDogInfo] = useState(initState);
  // 담아준 목록을 관리를 함.
  const [reserveList, setReserveList] = useState([]);
  // 선택된 강아지 크기를 저장하는 상태
  const [selectedDogSize, setSelectedDogSize] = useState("");

  // 상태를 반전시켜 강아지 크기 옵션의 표시 여부를 변경
  const toggleDogSizeOptions = () => {
    setShowDogSizeOptions(!showDogSizeOptions);
  };
  // ul 바깥의 영역을 클릭했을 때 ul을 숨기는 이벤트 핸들러
  useEffect(() => {
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

  useEffect(() => {
    setDogInfo({ ...initState, hotel_room_pk: dogInfo.hotel_room_pk });
  }, [selectedRoom]);
  // const [dogDesc, setDogDesc] = useState(""); // textarea의 값을 저장할 상태
  const handleChange = e => {
    dogInfo[e.target.name] = e.target.value;
    setDogInfo({ ...dogInfo, hotel_room_pk: dogInfo.hotel_room_pk });
    //  setDogDesc(e.target.value); // textarea의 값 변경 시 상태 업데이트
    console.log(dogInfo);
  };

  // form 제출
  const handleSubmit = e => {
    e.preventDefault();
    // 예약 중인 객실로 담아지도록 함수 구현해야함.
    // dogInfo[e.target.name] = e.target.value;
    setDogInfo({ ...dogInfo });
    console.log(dogInfo);
    // setDogDesc("");
    // setDogInfo("");
    // setDogInfo(initState);
  };

  const handleListPlus = e => {
    // 담기가 정상처리가된다면...
    e.preventDefault();

    // 무조건 안됩니다.
    // 방은 오로지 1개만 추가하실 수 있습니다.

    if (!selectedRoom) {
      alert("방을 선택하세요.");
      return;
    }

    if (!dogInfo.dogname) {
      alert("이름을 입력해 주세요.");
      return;
    }

    if (!dogInfo.dogage) {
      alert("나이를 입력해 주세요.");
      return;
    }
    if (!dogInfo.dogsize) {
      alert("크기를 선택해 주세요.");
      return;
    }

    if (!dogInfo.dogdesc) {
      alert("특이사항 및 요청 사항을 입력해 주세요.");
      return;
    }
    console.log(selectedRoom);
    let tempSize = 1;
    if (dogInfo.dogsize === "소형견") {
      tempSize = 1;
    } else if (dogInfo.dogsize === "중형견") {
      tempSize = 2;
    } else if (dogInfo.dogsize === "대형견") {
      tempSize = 3;
    } else if (dogInfo.dogsize === "초대형견") {
      tempSize = 4;
    }

    const data = {
      information: dogInfo.dogdesc,
      size_pk: tempSize,
      dog_nm: dogInfo.dogname,
      dog_age: parseInt(dogInfo.dogage),
      hotel_room_pk: selectedRoom.hotel_room_pk,
    };

    console.log("data : ", data);

    // 동일한 방을 선택하지 못하게 처리
    const checkRookPK = reserveList.filter(
      item => item.hotel_room_pk === data.hotel_room_pk,
    );
    if (checkRookPK.length > 0) {
      // return;
    }
    setReserveList(prev => [...prev, data]);
    // setCheckReservation(true);
    dogInfo.dogdesc = "";
    dogInfo.dogsize = "";
    setSelectedDogSize(false);
    dogInfo.dogname = "";
    dogInfo.dogage = "";
  };

  // useEffect(() => {
  //   console.log(reserveList);
  // }, [reserveList]);

  const handleDogSizeSelect = size => {
    // 선택된 강아지 크기가 현재 선택한 크기와 같으면 초기화
    if (selectedDogSize === size) {
      setSelectedDogSize(""); // 선택된 강아지 크기 초기화
      setDogInfo(prevState => ({
        ...prevState,
        dogsize: "", // dogsize 초기화
      }));
    } else {
      setSelectedDogSize(size); // 선택된 강아지 크기를 상태에 저장
      setShowDogSizeOptions(false); // 옵션을 선택하면 옵션 창을 닫음

      // 선택된 강아지 크기를 dogInfo에 저장
      setDogInfo(prevState => ({
        ...prevState,
        dogsize: size,
      }));
      console.log(dogInfo.dogsize);
    }
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

  const removeFromReservedList = idx => {
    // 임시 목록 필터링
    const arr = reserveList.filter((item, index) => index != idx);
    setReserveList(arr);
  };

  // 자식 컴포넌트 즉, calendar 에서 알려줘야 다른 컴포넌트에 전달할 수 있다.
  const [reserveDay, setReserveDay] = useState({ startDay: "", endDay: "" });
  const changeSelectDay = (_st, _ed) => {
    console.log("시작", _st);
    console.log("완료", _ed);

    setReserveDay(prev => {
      // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
      return { startDay: _st, endDay: _ed };
    });
  };

  const handleMoveCalendar = () => {
    setCalendarOpen(true);
    // document.body.style.overflow = "hidden";
  };

  // 예약 완료 시, 데이터 보내기 sendData
  const handleMoveCompletedPage = e => {
    if (!calendarNow.startDay) {
      alert("날짜를 선택하세요.");
      return;
    }

    if (reserveList.length === 0) {
      // 아직 안담았다면 안내창
      alert("객실 및 반려견 정보를 담아야해요");
      return;
    }
    // 예약정보 보내기
    // 성공적으로 등록이 되면 이동한다.
    // [
    //   {
    //     "hotel_pk": 0,
    //     "from_date": "2024-02-02",
    //     "to_date": "2024-02-02",
    //     "dog_info": [
    //       {
    //         "information": "string",
    //         "size_pk": 0,
    //         "dog_nm": "string",
    //         "dog_age": 0,
    //         "hotel_room_pk": 0
    //       },
    //       {
    //         "information": "string",
    //         "size_pk": 0,
    //         "dog_nm": "string",
    //         "dog_age": 0,
    //         "hotel_room_pk": 0
    //       }
    //     ]
    //   },
    // ]
    const sendData = [
      {
        hotel_pk: parseInt(hotel_pk),
        from_date: calendarNow.startDay,
        to_date: calendarNow.endDay,
        dog_info: reserveList,
      },
    ];
    postReservation({ sendData, successFn, failFn, errorFn });
  };

  const successFn = result => {
    console.log("성공", result);
    // ------
    navigate("/reservecomplete");
  };
  const failFn = result => {
    console.log("다시 시도해주세요.", result);
  };
  const errorFn = result => {
    console.log("서버에러", result);
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
              <div className="reserveFormTitle">1. 체크 인/아웃 날짜 선택</div>
            </div>
            <img
              className="reserveLine"
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelreserveLine.svg`}
              alt=""
            />

            {/* 체크 인/아웃 선택 영역 */}
            {/* {calendarOpen ? "참" : "거짓"} */}
            {calendarOpen && (
              <Calendar
                // props로 상태 전달
                // setReviewModalOpen 함
                calendarClose={calendarClose}
                calendarOpen={calendarOpen}
                setCalendarOpen={setCalendarOpen}
              />
            )}
            <ReserveDate
              resDay={resDay}
              handleMoveCalendar={handleMoveCalendar}
              // changeSelectDay={changeSelectDay}
              // calendarValue={calendarValue}
              calendarNow={calendarNow}
              setCalendarNow={setCalendarNow}
            />
          </div>

          {/* 선택된 객실 정보 영역
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

            선택된 방 이름 출력
            <p className="selected-room">
              선택된 객실 : {selectedRoom?.hotel_room_nm}
            </p>
          </div> */}

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
                  <div className="reserveFormTitle">2. 반려견 정보</div>
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
                  value={dogInfo.dogdesc}
                  onChange={e => {
                    handleChange(e);
                  }}
                  className="dog-input-textarea"
                  placeholder="특이사항 및 요청 사항을 입력해 주세요."
                  spellCheck="false"
                ></textarea>
              </div>
              <span className="roomtype-info">
                새로운 날짜와 반려견 정보를 선택 후, 하단의 버튼을 눌러주세요.
              </span>
              <div>
                <button
                  className="reserve-button"
                  type="submit"
                  onClick={e => handleListPlus(e)}
                >
                  다시 선택하기
                </button>
              </div>
            </form>
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
          <div className="reserved-list-wrap">
            {reserveList.map((item, index) => (
              // const data = {
              //   information: dogInfo.dogdesc,
              //   size_pk: dogInfo.dogsize,
              //   dog_nm: dogInfo.dogname,
              //   dog_age: dogInfo.dogage,
              //   hotel_room_pk: selectedRoom.hotel_room_pk,
              // };

              <div key={index} style={{ width: "100%" }}>
                <p className="reserved-list">
                  {/* {resDay.startDay}~{resDay.endDay}/{dogInfo.dogname}/{selectedRoom} */}
                  {index + 1}. {item.dog_nm} / {item.dog_age} /
                  {selectedRoom.hotel_room_nm}
                </p>
                {/* button */}
                <button
                  type="button"
                  className="reserve_bt_plus"
                  onClick={() => removeFromReservedList(index)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/hotelDetail/bt_minusreservation.svg`}
                    alt=""
                  />
                </button>
              </div>
            ))}
          </div>

          <button
            className="reserve-button"
            onClick={() => {
              handleMoveCompletedPage();
              // !!!!!!!!!!!!!!!!예약 정보들이 마이페이지 예약 내역에 나타나야함
            }}
            type="button"
          >
            예약하기
          </button>
        </div>
      </div>
    </ReserveFormFixed>
  );
};

export default ReserveForm;
