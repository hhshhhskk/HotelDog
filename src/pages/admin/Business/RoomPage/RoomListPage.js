import { Table } from "antd";
import React, { useEffect, useState } from "react";
import {
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

const RoomListPage = () => {
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
  // const [initData, setInitData] = useState(data);
  const [initData, setInitData] = useState([
    {
      checkbox: 1,
      key: 1,
      reserveNumber: 66666,
      nickname: "누룽지",
      roomType: "소형견(3kg ~7kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240101-20240103",
      phoneNumber: "010-3333-5555",
      paymentAmount: 45000,
      // status: initData.status,
      status: "예약취소",
    },
    {
      checkbox: 1,
      key: 2,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "",
    },
    {
      checkbox: 1,
      key: 3,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "예약대기중",
    },
    {
      checkbox: 1,
      key: 4,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "",
    },
    {
      checkbox: 1,
      key: 5,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "입실완료",
    },
    {
      checkbox: 1,
      key: 6,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "예약대기중",
    },
    {
      checkbox: 1,
      key: 7,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "",
    },
    {
      checkbox: 1,
      key: 8,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "예약대기중",
    },
    {
      checkbox: 1,
      key: 9,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "",
    },
    {
      checkbox: 1,
      key: 10,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: "반려견정보",
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "",
    },
  ]);
  const columns = [
    {
      title: "번호",
      dataIndex: "key",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.number - b.number,
      key: "key",
    },
    {
      title: "예약번호",
      dataIndex: "reserveNumber",
      key: "reserveNumber",
    },
    {
      title: "닉네임",
      dataIndex: "nickname",
      key: "nickname",
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
        return <button onClick={() => cancelModalOpen(row.key)}>{text}</button>;
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
          <button onClick={cancelModalOpen(row.key)}>{text}</button>
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

  const handleCheckInCom = () => {};
  const handleCheckOutCom = () => {};

  /* 💭 모달 open & close  */
  // 예약 취소 선택 시, 모달 오픈
  const cancelModalOpen = () => {
    setCancelOpen(true);
  };
  // 모달 close 버튼 클릭시, 닫도록
  const cancelModalClose = () => {
    console.log("콘솔은 닫힌다.");
    setCancelOpen(false);
  };

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
            <form>
              <RmTodaySearch type="text">
                {/* <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg`}
            alt=""
          /> */}
                {/* <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg`}
            alt=""
          /> */}
              </RmTodaySearch>
            </form>
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
            <RmPageBt onClick={() => handleCheckInCom()}>입실완료</RmPageBt>
            <RmPageBt onClick={() => handleCheckOutCom()}>퇴실완료</RmPageBt>
          </RmBtFlex>
          <StyledTableWrap>
            <Table
              // 행 선택
              rowSelection={{
                type: "checkbox",
                // 체크박스가 변경될 때 호출되는 콜백 함수
                onChange: handleSelectionChange,
              }}
              dataSource={initData}
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
      </div>

      {/* 모달이 열려있을 때만 렌더링? */}
      {/* {cancelModalOpen && (
        <RmPageModal cancelModalClose={cancelModalClose(setCancelOpen)} />
      )} */}
      {/* 모달이 열려있을 때만 렌더링 */}
      {/* {cancelOpen && (
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
      )} */}

      {/* 예약 취소 모달 */}
      {/* <RmPageModal>
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
              호텔 사정 : &quot;호텔 내부 사정으로 인해 예약을 변경하거나 취소
              해야 합니다. &quot;
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
              법적 요구 사항 : &quot;법률적인 요구 사항 또는 규정에 따라 예약을
              취소해야 합니다. &quot;
            </span>
          </RmModalCancelInfo>
          <div>
            <RmPageBt>확인</RmPageBt>
          </div>
        </RmPageModalContents>
      </RmPageModal> */}
    </RmPageWrap>
  );
};

export default RoomListPage;
