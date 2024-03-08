import { Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  DogInfoButton,
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

const RoomListTest = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // 선택된 행의 키 값들을 저장하는 상태
  const [selectedRows, setSelectedRows] = useState([]); // 선택된 행들의 정보를 저장하는 상태
  const [showAllData, setShowAllData] = useState(false); // 전체 목록을 보여줄지 여부를 저장하는 상태
  const [cancelOpen, setCancelOpen] = useState(false); // 예약 취소 모달 오픈 여부 관리

  // 체크박스가 변경될 때 호출되는 함수
  const handleSelectionChange = (keys, rows) => {
    setSelectedRowKeys(keys); // 선택된 행의 키 값들을 업데이트
    setSelectedRows(rows); // 선택된 행들의 정보를 업데이트
  };
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
    {
      checkbox: 1,
      key: 1,
      reserveNumber: 66666,
      nickname: "누룽지",
      roomType: "소형견(3kg ~7kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "룽지",
      dogage: "4",
      dogsize: "소형견",
      reservationData: "20240101-20240103",
      phoneNumber: "010-3333-5555",
      paymentAmount: 45000,
      status: "예약취소",
    },
    {
      checkbox: 1,
      key: 2,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "콩지",
      dogage: "7",
      dogsize: "중형견",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "이용완료",
    },
    {
      checkbox: 1,
      key: 3,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "콩지마미",
      dogage: "10",
      dogsize: "중형견",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "이용완료",
    },
    {
      checkbox: 1,
      key: 4,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "콩지대디",
      dogage: "10",
      dogsize: "중형견",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "이용완료",
    },
    {
      checkbox: 1,
      key: 5,
      reserveNumber: 718382,
      nickname: "나강아지키운다",
      roomType: "소형견(7kg ~)이하 기준",
      dogInfo: "반려견정보",
      dogname: "미미",
      dogage: "2",
      dogsize: "소형견",
      reservationData: "20240308-20240310",
      phoneNumber: "010-1412-9321",
      paymentAmount: 50000,
      status: "입실완료",
    },
    {
      checkbox: 1,
      key: 6,
      reserveNumber: 718382,
      nickname: "나강아지키운다",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "포포",
      dogage: "5",
      dogsize: "소형견",
      reservationData: "20240308-20240310",
      phoneNumber: "010-1412-9321",
      paymentAmount: 50000,
      status: "입실완료",
    },
    {
      checkbox: 1,
      key: 7,
      reserveNumber: 111423,
      nickname: "랩탈리언",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "포포",
      dogage: "5",
      dogsize: "소형견",
      reservationData: "20240310-20240311",
      phoneNumber: "010-5134-6281",
      paymentAmount: 72000,
      status: "예약취소",
    },
    {
      checkbox: 1,
      key: 8,
      reserveNumber: 81945,
      nickname: "바다의왕자",
      roomType: "대형견(15kg ~40kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "포포",
      dogage: "5",
      dogsize: "소형견",
      reservationData: "20240320-20240322",
      phoneNumber: "010-8415-6319",
      paymentAmount: 49000,
      status: "예약대기중",
    },
    {
      checkbox: 1,
      key: 9,
      reserveNumber: 81945,
      nickname: "머피",
      roomType: "소형견(7kg ~)이하 기준",
      dogInfo: "반려견정보",
      dogname: "포포",
      dogage: "5",
      dogsize: "소형견",
      reservationData: "20240314-20240315",
      phoneNumber: "010-2496-8195",
      paymentAmount: 77000,
      status: "예약취소",
    },
    {
      checkbox: 1,
      key: 10,
      reserveNumber: 0,
      nickname: "",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "",
      reservationData: "",
      phoneNumber: "",
      paymentAmount: 0,
      status: "예약없음",
    },
    {
      checkbox: 1,
      key: 11,
      reserveNumber: 3022961,
      nickname: "유저11",
      roomType: "대형견(15kg ~40kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "풍랑",
      dogage: "4",
      dogsize: "대형견",
      reservationData: "20240314-20240320",
      phoneNumber: "01046858912",
      paymentAmount: 248000,
      status: "예약대기중",
    },
    {
      checkbox: 1,
      key: 12,
      reserveNumber: 3022961,
      nickname: "유저11",
      roomType: "대형견(15kg ~40kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "파파",
      dogage: "7",
      dogsize: "대형견",
      reservationData: "20240314-20240320",
      phoneNumber: "01046858912",
      paymentAmount: 248000,
      status: "예약대기중",
    },
    {
      checkbox: 1,
      key: 13,
      reserveNumber: 3022961,
      nickname: "유저11",
      roomType: "대형견(15kg ~40kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "자갈치",
      dogage: "2",
      dogsize: "대형견",
      reservationData: "20240314-20240320",
      phoneNumber: "01046858912",
      paymentAmount: 248000,
      status: "예약대기중",
    },
    {
      checkbox: 1,
      key: 14,
      reserveNumber: 3022961,
      nickname: "유저11",
      roomType: "대형견(15kg ~40kg)이하 기준",
      dogInfo: "반려견정보",
      dogname: "뭉탱",
      dogage: "6",
      dogsize: "대형견",
      reservationData: "20240314-20240320",
      phoneNumber: "01046858912",
      paymentAmount: 248000,
      status: "예약대기중",
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
      title: "번호",
      dataIndex: "key",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.number - b.number,
      key: "key",
    },
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
      render: (text, record) => {
        return text ? (
          <DogInfoButton onClick={() => openDogInfoModal(record)}>
            {text}
          </DogInfoButton>
        ) : null;
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
      title: "결제금액",
      dataIndex: "paymentAmount",
      key: "paymentAmount",
      render: text => {
        if (!text) {
          return null; // 값이 없을 경우 빈 값 반환
        }
        // 숫자를 천 단위마다 쉼표로 구분하여 포맷팅
        const formattedAmount = Number(text).toLocaleString();
        return formattedAmount;
      },
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
        ) : text === "이용완료" ? (
          "이용완료"
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

  // 선택된 행의 정보 저장
  const rowSelection = {
    // 선택된 행의 키 값, 선택된행의 정보를 매개변수로 받아
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows,
      );
    },
  };

  // 체크->(예약승인)버튼 클릭 시, 상태 변경 함수
  const handleReservationAp = (selectedRowKeys, selectedRows) => {
    // 체크박스가 선택되지 않았을 때 알림창 표시
    if (selectedRowKeys.length === 0) {
      alert("예약할 항목을 선택해주세요.");
      return; // 함수 종료
    }
    console.log("selectedRowKeys:", selectedRowKeys);
    console.log("selectedRows:", selectedRows);
    // 기존의 데이터를 복제하여 새로운 배열 생성
    const updatedData = [...initData];
    // 업데이트된 데이터를 새로운 배열에 추가
    updatedData.forEach(row => {
      if (selectedRowKeys.includes(row.key) && row.status !== "예약완료") {
        row.status = "예약완료";
      }
    });
    // 새로운 배열로 initData 업데이트
    setInitData(updatedData);
    console.log("Updated data:", updatedData);
  };
  const handleCheckInCom = (selectedRowKeys, selectedRows) => {
    // 체크박스가 선택되지 않았을 때 알림창 표시
    if (selectedRowKeys.length === 0) {
      alert("예약할 항목을 선택해주세요.");
      return; // 함수 종료
    }
    console.log("selectedRowKeys:", selectedRowKeys);
    console.log("selectedRows:", selectedRows);
    // 기존의 데이터를 복제하여 새로운 배열 생성
    const updatedData = [...initData];
    // 업데이트된 데이터를 새로운 배열에 추가
    updatedData.forEach(row => {
      if (selectedRowKeys.includes(row.key) && row.status !== "이용완료") {
        row.status = "이용완료";
      }
    });
    // 새로운 배열로 initData 업데이트
    setInitData(updatedData);
    console.log("Updated data:", updatedData);
  };
  const handleCheckOutCom = (selectedRowKeys, selectedRows) => {
    // 체크박스가 선택되지 않았을 때 알림창 표시
    if (selectedRowKeys.length === 0) {
      alert("예약할 항목을 선택해주세요.");
      return; // 함수 종료
    }
    console.log("selectedRowKeys:", selectedRowKeys);
    console.log("selectedRows:", selectedRows);
    // 기존의 데이터를 복제하여 새로운 배열 생성
    const updatedData = [...initData];
    // 업데이트된 데이터를 새로운 배열에 추가
    updatedData.forEach(row => {
      if (selectedRowKeys.includes(row.key) && row.status !== "퇴실완료") {
        row.status = "퇴실완료";
      }
    });
    // 새로운 배열로 initData 업데이트
    setInitData(updatedData);
    console.log("Updated data:", updatedData);
  };

  /* ----------------------💭 모달 open & close start  --------------------*/
  // 예약 취소 및 반려견정보 선택 시, 모달 오픈

  const [dogInfoOpen, setDogInfoOpen] = useState(false);
  const [selectedDogInfo, setSelectedDogInfo] = useState(null);

  const cancelModalOpen = text => {
    // 여기에 조건부 논리 추가
    if (text === "예약취소") {
      setCancelOpen(true);
      setDogInfoOpen(false); // 반려견 정보 모달 닫기 ?????
    }
  };
  // 반려견 정보 모달 열기
  const openDogInfoModal = dogInfo => {
    setSelectedDogInfo(dogInfo);
    setDogInfoOpen(true);
  };
  // 모달 close 버튼 클릭시, 닫도록
  const cancelModalClose = input => {
    console.log("콘솔은 닫힌다.");
    setCancelOpen(false); // 취소 모달 닫기
    setDogInfoOpen(false); // 반려견 정보 모달 닫기
  };
  /* ----------------------💭 모달 open & close end --------------------*/

  return (
    <RmPageWrap>
      {/* header 영역 */}
      <div>
        <RmMenuSearchFlex>
          {/* <RmTodayMenu>
            <RmTodayMenuBt>전체</RmTodayMenuBt>
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
          </RmTodayMenu> */}
          <div>
            <RmTodaySearch
              type="text"
              placeholder="예약번호 또는 닉네임"
              onChange={handleSearch} // 텍스트 입력 시 검색어 업데이트
              value={searchText} // 입력된 검색어 표시
            ></RmTodaySearch>
          </div>
        </RmMenuSearchFlex>
      </div>
      {/* middle 영역 */}
      <div>
        <RmTableBtFlex>
          <RmBtFlex>
            <RmPageBt
              onClick={() => handleReservationAp(selectedRowKeys, selectedRows)}
            >
              예약완료
            </RmPageBt>
            <RmPageBt
              onClick={() => handleCheckInCom(selectedRowKeys, selectedRows)}
            >
              입실완료
            </RmPageBt>
            <RmPageBt
              onClick={() => handleCheckOutCom(selectedRowKeys, selectedRows)}
            >
              퇴실완료
            </RmPageBt>
          </RmBtFlex>
          <StyledTableWrap>
            <Table
              // 행 선택
              rowSelection={{
                type: "checkbox",
                // 체크박스가 변경될 때 호출되는 콜백 함수
                onChange: handleSelectionChange,
              }}
              dataSource={filteredData}
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
      </div>

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
      {/* 반려견 정보 모달 */}
      {/* {cancelModalOpen && (
        <RmPageModal cancelModalClose={cancelModalClose(setCancelOpen)} />
      )} */}
      {dogInfoOpen && selectedDogInfo && (
        <ModalBackground>
          <RmPageModal>
            <RmModalClose
              onClick={() => setDogInfoOpen(false)}
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/close.svg`}
              alt=""
            />
            <RmPageModalHead>
              <RmPageTitle>반려견 정보</RmPageTitle>
            </RmPageModalHead>
            <RmModalDogContent>
              <RmModalDogHead>
                <RmModalDogTitle>
                  객실유형 : {selectedDogInfo.roomType}
                </RmModalDogTitle>
              </RmModalDogHead>
              <RmDogInfo>
                <span>강아지 이름 : {selectedDogInfo.dogname}</span>
                <span>강아지 나이 : {selectedDogInfo.dogage}</span>
                <span>강아지 크기 : {selectedDogInfo.dogsize}</span>
              </RmDogInfo>
            </RmModalDogContent>
          </RmPageModal>
        </ModalBackground>
      )}
    </RmPageWrap>
  );
};

export default RoomListTest;
