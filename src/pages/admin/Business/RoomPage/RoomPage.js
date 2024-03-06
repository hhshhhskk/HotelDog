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
  // const [cancelOpen, setCancelOpen] = useState(false); // 예약 취소 모달 오픈 여부 관리
  const [selectedRow, setSelectedRow] = useState(null); // 선택된 행 정보를 저장하는 상태

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
  const [initData, setInitData] = useState([
    // {
    //   key: 1,
    //   reserveNumber: 66666,
    //   nickname: "누룽지",
    //   roomType: "소형견(3kg ~7kg)이하 기준",
    //   dogInfo: "반려견정보",
    //   reservationData: "20240101-20240103",
    //   phoneNumber: "010-3333-5555",
    //   status: "예약취소",
    // },
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
        item.resNum.toString().includes(value) || item.nickname.includes(value),
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
      dataIndex: "resNum",
      key: "reserveNumber",
      ...getColumnSearchProps("resNum"),
    },
    {
      title: "닉네임",
      dataIndex: "nickname",
      key: "nickname",
      ...getColumnSearchProps("nickname"),
    },
    {
      title: "객실유형",
      dataIndex: "hotelRoomNm",
      key: "roomType",
    },
    {
      title: "반려견정보",
      dataIndex: "resDogPk",
      key: "dogInfo",
      // 반려견정보 버튼 클릭 시, 모달 창 뜨도록 하게!
      render: (resDogPk, row) => {
        if (!resDogPk) {
          return null; // resDogPk 없을 때 빈 값 반환
        }
        return (
          <DogInfoButton onClick={() => dogInfoModalOpen(row)}>
            {"반려견정보"}
          </DogInfoButton>
        );
      },
    },
    {
      title: "예약날짜(체크인아웃)",
      key: "reservationData",
      render: (text, row) => (
        <span>
          {row.fromDate} - {row.toDate}
        </span>
      ),
    },
    {
      title: "전화번호",
      dataIndex: "userPhoneNum",
      key: "phoneNumber",
      render: (text, row) => {
        // 전화번호를 '-'로 구분하여 세 부분으로 나누고 합치는 방법
        const formattedPhoneNumber = `${row.userPhoneNum.slice(
          0,
          3,
        )}-${row.userPhoneNum.slice(3, 7)}-${row.userPhoneNum.slice(7)}`;
        return <span>{formattedPhoneNumber}</span>;
      },
    },
    {
      title: "상태",
      key: "resStatus",
      dataIndex: "resStatus",
      render: (text, row) => {
        if (row.resStatus === 0) {
          return "예약대기중";
        } else if (row.resStatus === 1) {
          return "예약완료";
        } else if (row.resStatus === 2) {
          return "이용중";
        } else if (row.resStatus === 3) {
          return "이용완료";
        } else if (row.resStatus === 4 || row.resStatus === 5) {
          return (
            <DogInfoButton onClick={() => cancelModalOpen(row)}>
              {"예약취소"}
            </DogInfoButton>
          );
        } else {
          return null;
        }
      },
    },
  ];

  /* ---------------------- menu tab status start  --------------------*/
  const [reAllData, setAllData] = useState(""); // 전체 목록 저장 상태관리
  const ShowReserveAllData = () => {
    const reAllData = initData.filter(
      item => item.resStatus >= 0 && item.resStatus <= 5,
    );
    setFilteredData(reAllData); // setFilteredData를 사용하여 필터링된 데이터를 업데이트
  };

  const [rePendingData, setRePendingData] = useState(""); // 예약 대기중 목록 저장 상태관리
  // 예약 대기중 상태일 떄, 대기 목록 렌더링 함수
  const showReservePending = () => {
    const reservePendingData = initData.filter(item => item.resStatus === 0); // resStatus가 0인 경우 필터링
    setRePendingData(rePendingData);
  };
  const [reComfirmedData, setReComfirmedData] = useState(""); // 예약 대기중 목록 저장 상태관리
  // 예약 대기중 상태일 떄, 대기 목록 렌더링 함수
  const showReserveComfirmed = () => {
    const reComfirmedData = initData.filter(item => item.resStatus === 1); // resStatus가 1인 경우 필터링
    setReComfirmedData(reComfirmedData);
  };

  const [reCheckInData, setReCheckInData] = useState(""); // 이용중(체크인 상태) 목록 저장 상태 관리
  const showReserveCheckIn = () => {
    const reCheckInData = initData.filter(item => item.resStatus === 2); // resStatus가 2인 경우 필터링
    setFilteredData(reCheckInData); // 이용중인 데이터로 필터링된 데이터 업데이트
  };

  const [reCheckOutData, setReCheckOutData] = useState(""); // 이용완료(체크아웃 상태) 목록 저장 상태 관리
  const showReserveCheckOut = () => {
    const reCheckOutData = initData.filter(item => item.resStatus === 3); // resStatus가 3인 경우 필터링
    setFilteredData(reCheckOutData); // 이용중인 데이터로 필터링된 데이터 업데이트
  };

  /* ---------------------- menu tab status end  --------------------*/
  /* ----------------------💭 모달 open & close start  --------------------*/
  const [dogInfoOpen, setDogInfoOpen] = useState(false); // 반려견 정보 모달 오픈 여부 관리
  const [cancelOpen, setCancelOpen] = useState(false); // 예약 취소 모달 오픈 여부 관리
  // 💥 반려견 정보 모달 관련 내용 추가!
  // RoomPage 컴포넌트에서 선택된 행 정보를 저장할 상태 추가
  const [selectedDogInfo, setSelectedDogInfo] = useState(null);

  const cancelModalOpen = row => {
    setSelectedRow(row); // 선택된 행 정보 저장
    setCancelOpen(true); // 예약 취소 모달 오픈
    setDogInfoOpen(false); // 반려견 정보 모달 닫기
  };
  const dogInfoModalOpen = row => {
    setSelectedRow(row); // 선택된 행 정보 저장
    setSelectedDogInfo(row); // 선택된 행의 반려견 정보 저장
    setDogInfoOpen(true); // 반려견 정보 모달 오픈
    setCancelOpen(false); // 예약 취소 모달 닫기
  };
  // 모달 close 버튼 클릭시, 닫도록
  const cancelModalClose = () => {
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
    setInitData(result.reservationTodayInfoList); // 서버에서 받은 데이터를 설정
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
            <RmTodayMenuBt onClick={ShowReserveAllData}>전체</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt onClick={showReservePending}>대기중</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt onClick={showReserveComfirmed}>
              예약완료
            </RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt onClick={showReserveCheckIn}>이용중</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt onClick={showReserveCheckOut}>
              이용완료
            </RmTodayMenuBt>
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
            // dataSource={filteredData}
            dataSource={filteredData.length > 0 ? filteredData : initData}
            columns={columns}
            pagination={{
              // 페이지 네이션
              pageSize: 10,
              position: ["bottomCenter"],
              hideOnSinglePage: false,
            }}
          ></Table>
        </StyledTableWrap>
      </RmTableBtFlex>
      {/* 반려견 정보 모달 */}
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
              <RmPageTitle>반려견 정보</RmPageTitle>
            </RmPageModalHead>
            <RmModalDogContent>
              <RmModalDogHead>
                <RmModalDogTitle>
                  객실유형 : {selectedDogInfo.hotelRoomNm}
                </RmModalDogTitle>
              </RmModalDogHead>
              <img
                src={`${process.env.PUBLIC_URL}/admin/images/RmToday/exampleimg.svg`}
                alt=""
              />
              <RmDogInfo>
                <span>강아지 이름 : {selectedDogInfo.resDogNm}</span>
                <span>강아지 나이 : {selectedDogInfo.resDogAge}</span>
                <span>강아지 크기 : {selectedDogInfo.dogSizeNm}</span>
              </RmDogInfo>
            </RmModalDogContent>
          </RmPageModal>
        </ModalBackground>
      )}
      {/* 예약 취소 모달 */}
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
    </RmPageWrap>
  );
};

export default RoomPage;
