import { Button, Input, Table } from "antd";
// import Highlighter from "react-highlight-words";
import React, { useEffect, useState } from "react";
import {
  DogInfoButton,
  MenuTable,
  ModalBackground,
  RmBtFlex,
  RmDogInfo,
  RmMenuSearchFlex,
  RmModalCancelInfo,
  RmModalClose,
  RmModalContentsTitle,
  RmModalDogContent,
  RmModalDogHead,
  RmModalDogTitle,
  RmPageBt,
  RmPageModal,
  RmPageModalContents,
  RmPageModalHead,
  RmPageTitle,
  RmPageWrap,
  RmTableBtFlex,
  RmTodayMenu,
  RmTodayMenuBt,
  RmTodaySearch,
  StyledTableWrap,
} from "../../../../styles/AdminPageStyle/RoomPageStyle/roomPageStyle";
import { getRoomToday } from "../../../../api/admin/Room/RoomApi";

// const { Search } = Input;

const RoomPage = () => {
  const [showAllData, setShowAllData] = useState(false); // 전체 목록을 보여줄지 여부를 저장하는 상태
  const [cancelOpen, setCancelOpen] = useState(false); // 예약 취소 모달 오픈 여부 관리

  /* 🙂 ant design table 적용해보자 */
  // type RmReserve = {
  //   checkbox: string, // 체크 : checkbox
  //   number: string, // 번호 : number
  //   reserveNumber: number, // 예약번호 : reserveNumber
  //   nickname: number, // 닉네임 : nickname
  //   roomType: string, // 객실유형 : roomType
  //   dogInfo: number, // 반려견정보 : dogInfo
  //   reservationData: number, // 예약날짜(체크인아웃) : reservationData
  //   phoneNumber: number, // 전화번호 : phoneNumber
  //   paymentAmount: number, // 결제금액 : paymentAmount
  //   status: number, // 상태 : status
  // };

  // 초기값 설정해보기
  // const [initData, setInitData] = useState(data);
  const [initData, setInitData] = useState([
    {
      key: 1,
      reserveNumber: 66666,
      nickname: "누룽지",
      roomType: "소형견(3kg ~7kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240101-20240103",
      phoneNumber: "010-3333-5555",
      status: "예약취소",
    },
    {
      key: 2,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "",
    },
    {
      key: 3,
      reserveNumber: 43591,
      nickname: "코오리",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "예약대기중",
    },
    {
      key: 4,
      reserveNumber: 75151,
      nickname: "머피",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "",
    },
    {
      key: 5,
      reserveNumber: 2222,
      nickname: "성공",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "입실완료",
    },
    {
      key: 6,
      reserveNumber: 61751,
      nickname: "우항항",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "예약대기중",
    },
    {
      key: 7,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "",
    },
    {
      key: 8,
      reserveNumber: 0,
      nickname: "",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "",
      reservationData: "",
      phoneNumber: "",
      status: "예약없음",
    },
    {
      key: 9,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "",
    },
    {
      key: 10,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      status: "",
    },
  ]);
  /* -------------------------- 필터 start ------------------------ */
  /* 💚💚💚예약번호, 닉네임 검색 -> 해당 row 가 뜨도록하는 함수 */
  const [searchText, setSearchText] = useState(""); // 검색어 상태 관리
  const [searchedColumn, setSearchedColumn] = useState("");
  const [filteredData, setFilteredData] = useState(initData); // 필터링된 데이터를 저장하는 상태

  // 검색어 입력 시 필터링 함수
  const handleSearch = e => {
    const { value } = e.target;
    setSearchText(value); // 검색어 업데이트
    // 검색어에 해당하는 행 필터링하여 새로운 데이터 생성
    const filtered = initData.filter(
      item =>
        item.reserveNumber.toString().includes(value) ||
        item.nickname.includes(value),
    );
    setFilteredData(filtered); // 필터링된 데이터 업데이트
  };

  const getColumnSearchProps = dataIndex => ({
    // 필터링 함수
    // value는 필터링할 값이고, record는 현재 행의 데이터
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: text => (searchedColumn === dataIndex ? text : text),
  });
  /* -------------------------- 필터 end ------------------------ */

  const columns = [
    {
      title: "예약번호",
      dataIndex: "reserveNumber",
      key: "reserveNumber",
      ...getColumnSearchProps("reserveNumber"),
    },
    {
      title: "닉네임",
      dataIndex: "nickname",
      key: "nickname",
      ...getColumnSearchProps("nickname"),
    },
    {
      title: "객실유형",
      dataIndex: "roomType",
      key: "roomType",
    },
    {
      title: "반려견정보",
      dataIndex: "dogInfo",
      key: "dogInfo",
      // 반려견정보 버튼 클릭 시, 모달 창 뜨도록 하게!
      render: (text, row) => {
        if (!text) {
          return null; // text가 없을 때 빈 값 반환
        }

        return (
          <DogInfoButton onClick={() => dogInfoModalOpen(text)}>
            {text}
          </DogInfoButton>
        );
      },
    },
    {
      title: "예약날짜(체크인아웃)",
      dataIndex: "reservationData",
      key: "reservationData",
    },
    {
      title: "전화번호",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "상태",
      key: "status",
      dataIndex: "status",
      /* 
      render 옵션은 Array.map()처럼 작동합니다.
      render: (text, row, index) => {};
      text: name의 data [String]
      row: 하나의 row data [Object]
      index: row index [Number]
      */
      // 예약취소일때는 button 추가하여 모달 뜨도록 하도록 render
      render: (text, row) => {
        return text === "예약취소" ? (
          <DogInfoButton onClick={() => cancelModalOpen(text)}>
            {text}
          </DogInfoButton>
        ) : text === "예약완료" ? (
          "예약완료"
        ) : text === "입실완료" ? (
          "입실완료"
        ) : text === "퇴실완료" ? (
          "퇴실완료"
        ) : text === "예약없음" ? (
          "예약없음"
        ) : text === "예약대기중" ? (
          "예약대기중"
        ) : null;
      },
      // 💥💥💥💥💥💥 변경요함
      // 행 필터 추가
      filters: [
        {
          text: "예약대기중",
          value: "reservationPending",
        },
        {
          text: "예약취소",
          value: "reservationCancellation",
        },
        {
          text: "예약완료",
          value: "reservationConfirmed",
        },
        {
          text: "이용중",
          value: "roomInUse",
        },
        {
          text: "이용완료",
          value: "reservationComplete",
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: false,
      width: "130px",
    },
  ];

  // // /* 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 전체 버튼 누르면 전체 table 뜨도록 해야한다.!  */
  // const [allData, setAllData] = useState(initData); // 전체 예약 목록을 저장하는 상태

  // // 전체 버튼 클릭 시 전체 예약 목록을 렌더링하는 함수
  // const handleShowAllData = () => {
  //   console.log("전체 버튼은 눌리냐? : ok ");
  //   // 어떻게해야 목록을 가져올 수 있을까?
  //   setAllData(initData); // 전체 목록을 가져와서 상태에 업데이트
  //   console.log(allData);
  //   // 💥 문제 : initData에 status가 업데이트된 목록만 담겨져 있네?...
  //   setShowAllData(true); // 전체 목록을 보여주는 상태로 설정
  // };

  // useEffect(() => {
  //   // initData가 변경될 때마다 useEffect 실행
  //   // 전체 목록을 보여줄지 여부에 따라 데이터 설정
  //   setAllData(showAllData ? initData : selectedRows);
  // }, [initData, showAllData]);

  // // const [initData, setInitData] = useState([]);

  // // 전체 버튼 클릭 시 전체 예약 목록을 렌더링하는 함수
  // const handleShowAllData = () => {
  //   setAllData(initData); // 초기 데이터를 전체 예약 목록으로 설정
  //   console.log("전체 버튼이 눌리니 ? ");
  // };

  // // 예약 완료 및 체크인, 체크아웃 버튼 클릭 시 전체 목록을 보여줄지 여부에 따라 데이터 설정
  // const getData = () => {
  //   return showAllData ? initData : selectedRows;
  // };

  /* ----------------------💭 모달 open & close start  --------------------*/
  // 예약 취소 및 반려견정보 선택 시, 모달 오픈

  const [dogInfoOpen, setDogInfoOpen] = useState(false);

  // const cancelModalOpen = text => {
  //   // 여기에 조건부 논리 추가
  //   if (text === "예약취소") {
  //     setCancelOpen(true);
  //   }
  // };
  // const dogInfoModalOpen = text => {
  //   if (text === "반려견정보") {
  //     setDogInfoOpen(true);
  //   }
  // };
  const cancelModalOpen = text => {
    // 여기에 조건부 논리 추가
    if (text === "예약취소") {
      setCancelOpen(true);
      setDogInfoOpen(false); // 반려견 정보 모달 닫기 ?????
    }
  };
  const dogInfoModalOpen = text => {
    if (text === "반려견정보") {
      setDogInfoOpen(true);
      setCancelOpen(false); // 예약 취소 모달 닫기 ?????
    }
  };
  // 모달 close 버튼 클릭시, 닫도록
  const cancelModalClose = () => {
    console.log("콘솔은 닫힌다.");
    setCancelOpen(false);
    setDogInfoOpen(false);
  };

  /* ----------------------💭 모달 open & close end --------------------*/

  /* ---------------------- 💛 axios 연동 start --------------------*/
  /* room today 초기값
  dogSizeNm: "소형견"
  dogSizePk: 1
  fromDate: "2024-03-05"
  hotelRoomNm: "소형견(7kg 이하)"
  hotelRoomPk: 1
  nickname: "백서윤"
  paymentAmount: 150000
  resDogAge: 4
  resDogInfo: "안물어요"
  resDogNm: "뽀송이"
  resDogPk: 1
  resNum: "R2435874146183"
  resPk: 1
  resStatus: 0
  toDate: "2024-03-07"
  userPhoneNum: "01023885447"
    
  */
  // 첫페이지는 1이므로 초기값을 1로 설정
  const [page, setPage] = useState(1);
  useEffect(() => {
    // 페이지 처음 불러들일 때 실행
    getRoomToday(
      page,
      successGetRoomToday,
      failGetRoomToday,
      errorGetRoomToday,
    );
    console.log("현재 페이지: ", page);
    //page의 값이 바뀌면 useEffect를 다시 실행하겠다.
  }, [page]);

  const successGetRoomToday = result => {
    console.log("성공했습니다.", result);
  };
  const failGetRoomToday = result => {
    console.log("다시 시도해주세요.", result);
  };
  const errorGetRoomToday = result => {
    console.log("서버 에러입니다.", result);
  };
  /* ---------------------- 💛 axios 연동 end --------------------*/

  return (
    <RmPageWrap>
      {/* header 영역 */}
      <div>
        <RmMenuSearchFlex>
          <RmTodayMenu>
            <RmTodayMenuBt>전체</RmTodayMenuBt>
            {/* <RmTodayMenuBt onClick={handleShowAllData}>전체</RmTodayMenuBt> */}
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>이용중</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>예약완료</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>대기중</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>이용완료</RmTodayMenuBt>
          </RmTodayMenu>
          <div>
            <RmTodaySearch
              type="text"
              placeholder="예약번호 또는 닉네임"
              onChange={handleSearch} // 텍스트 입력 시 검색어 업데이트
              value={searchText} // 입력된 검색어 표시
            >
              {/* <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg`}
            alt=""
          /> */}
              {/* <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg`}
            alt=""
          /> */}
            </RmTodaySearch>
          </div>
        </RmMenuSearchFlex>
      </div>
      {/* middle 영역 */}
      <MenuTable></MenuTable>
      <RmTableBtFlex>
        <StyledTableWrap>
          <Table
            dataSource={filteredData}
            columns={columns}
            pagination={{
              // 페이지 네이션
              pageSize: 15,
              position: ["bottomCenter"],
              hideOnSinglePage: false,
            }}
          ></Table>
        </StyledTableWrap>
      </RmTableBtFlex>
      {/* 예약 취소 모달 */}
      {dogInfoOpen && (
        <ModalBackground>
          <RmPageModal>
            <RmModalClose
              // 모달 창 닫을때 함수 실행
              onClick={cancelModalClose}
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/close.svg`}
              alt=""
            />
            <RmPageModalHead>
              <RmPageTitle>예약 취소</RmPageTitle>
            </RmPageModalHead>
            <RmPageModalContents>
              <RmModalContentsTitle>취소 사유</RmModalContentsTitle>
              <RmModalCancelInfo>
                <input type="checkbox"></input>
                <span>
                  비상 상황 : &quot; 죄송하지만 예기치 않은 상황으로 인해 해당
                  객실을 제공할 수 없게 되었습니다. &quot;
                </span>
              </RmModalCancelInfo>
              <RmModalCancelInfo>
                <input type="checkbox"></input>
                <span>
                  기술적 문제 : &quot;시스템 오류 또는 기술적 문제로 인해 예약을
                  취소해야 합니다. &quot;
                </span>
              </RmModalCancelInfo>
              <RmModalCancelInfo>
                <input type="checkbox"></input>
                <span>
                  호텔 사정 : &quot;호텔 내부 사정으로 인해 예약을 변경하거나
                  취소 해야 합니다. &quot;
                </span>
              </RmModalCancelInfo>
              <RmModalCancelInfo>
                <input type="checkbox"></input>
                <span>
                  객실 불가능 : &quot;객실의 예기치 못한 문제로 인해 해당 객실을
                  사용할 수 없게 되었습니다. &quot;
                </span>
              </RmModalCancelInfo>
              <RmModalCancelInfo>
                <input type="checkbox"></input>
                <span>
                  법적 요구 사항 : &quot;법률적인 요구 사항 또는 규정에 따라
                  예약을 취소해야 합니다. &quot;
                </span>
              </RmModalCancelInfo>
              <div>
                <RmPageBt onClick={cancelModalClose}>확인</RmPageBt>
              </div>
            </RmPageModalContents>
          </RmPageModal>
        </ModalBackground>
      )}
      {/* 반려견 정보 모달 */}
      {/* {cancelModalOpen && (
        <RmPageModal cancelModalClose={cancelModalClose(setCancelOpen)} />
      )} */}
      {cancelOpen && (
        <ModalBackground>
          <RmPageModal>
            <RmModalClose
              // 모달 창 닫을때 함수 실행
              onClick={cancelModalClose}
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/close.svg`}
              alt=""
            />
            <RmPageModalHead>
              <RmPageTitle>반려견 정보</RmPageTitle>
            </RmPageModalHead>
            <RmModalDogContent>
              <RmModalDogHead>
                <RmModalDogTitle>객실유형 : {}</RmModalDogTitle>
              </RmModalDogHead>
              <img
                src={`${process.env.PUBLIC_URL}/admin/images/RmToday/exampleimg.svg`}
                alt=""
              />
              <RmDogInfo>
                <span>강아지 이름 : {}</span>
                <span>강아지 나이 : {}</span>
                <span>강아지 크기 : {}</span>
              </RmDogInfo>
            </RmModalDogContent>
          </RmPageModal>
        </ModalBackground>
      )}
    </RmPageWrap>
  );
};

export default RoomPage;
