import { Checkbox, Table } from "antd";
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
import { getRoomList } from "../../../../api/admin/Room/RoomApi";

const RoomListPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // 선택된 행의 키 값들을 저장하는 상태
  const [selectedRows, setSelectedRows] = useState([]); // 선택된 행들의 정보를 저장하는 상태

  // 초기값 설정해보기
  const [initData, setInitData] = useState([]);
  /* -------------------------- 체크박스  start ------------------------ */
  // 각 행의 선택 여부를 저장하는 상태
  const [rowSelections, setRowSelections] = useState({});

  // 체크박스가 변경될 때 호출되는 함수
  const handleSelectionChange = (Keys, Rows) => {
    if (Keys.length > 1) {
      // 선택된 행이 하나 이상인 경우, 첫 번째 행의 키 값만 선택하도록 설정
      setSelectedRowKeys([selectedRowKeys[0]]);
      setSelectedRows([selectedRows[0]]);
      console.log("1개의 행만 선택되니?");
    } else {
      // 선택된 행이 하나인 경우, 선택된 행의 키 값과 정보를 업데이트
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
      console.log("1개의 행만 선택되니?");
    }
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows,
      );
    },
  };
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
    // {
    //   title: "✔", // 컬럼 제목을 "Checkbox"로 변경
    //   key: "selection",
    //   render: (text, record) => (
    //     <Checkbox
    //       checked={rowSelections[record.resPk]} // 해당 행의 선택 여부를 체크박스에 반영합니다.
    //       onChange={() => handleCheckboxChange(record)} // 체크박스 변경 이벤트 핸들러를 등록합니다.
    //     />
    //   ),
    // },
    {
      title: "번호",
      dataIndex: "resPk",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.number - b.number,
      defaultSortOrder: null, // 이 부분을 추가하여 기본 정렬을 해제합니다.
      key: "resPk",
    },
    {
      title: "예약번호",
      dataIndex: "resNum",
      key: "resNum",
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
      key: "hotelRoomNm",
    },
    {
      title: "반려견정보",
      dataIndex: "resDogPk",
      key: "resDogPk",
      // 반려견정보 버튼 클릭 시, 모달 창 뜨도록 하게!
      render: (text, row) => {
        if (!text) {
          return null; // resDogPk 없을 때 빈 값 반환
        }
        return (
          <DogInfoButton onClick={() => dogInfoModalOpen(text)}>
            {"반려견정보"}
          </DogInfoButton>
        );
      },
    },
    {
      title: "예약날짜(체크인아웃)",
      dataIndex: "reservationData",
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
      key: "userPhoneNum",
      render: (text, row) => {
        if (!text) {
          return null; // row 또는 userPhoneNum이 없으면 빈 값 반환
        }
        // 전화번호를 '-'로 구분하여 세 부분으로 나누고 합치는 방법
        const formattedPhoneNumber = `${row.userPhoneNum.slice(
          0,
          3,
        )}-${row.userPhoneNum.slice(3, 7)}-${row.userPhoneNum.slice(7)}`;
        return <span>{formattedPhoneNumber}</span>;
      },
    },
    {
      title: "결제금액",
      dataIndex: "payment",
      key: "payment",
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
            <DogInfoButton onClick={() => cancelModalOpen(text)}>
              {"예약취소"}
            </DogInfoButton>
          );
        } else {
          return null;
        }
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

  // // 선택된 행의 정보 저장
  // const rowSelection = {
  //   // 선택된 행의 키 값, 선택된행의 정보를 매개변수로 받아
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       "selectedRows: ",
  //       selectedRows,
  //     );
  //   },
  // };

  // // 체크박스가 변경될 때 호출되는 함수
  // const handleSelectionChange = (selectedRowKeys, selectedRows) => {
  //   setSelectedRowKeys(selectedRowKeys); // 선택된 행의 키 값들을 업데이트
  //   setSelectedRows(selectedRows); // 선택된 행들의 정보를 업데이트
  //   console.log("체크박스에 선택되냐?");

  //   // 위의 두 줄을 추가하여 선택된 행의 정보를 업데이트합니다.
  // };

  // 체크->(예약승인) 버튼 클릭 시, 상태 변경 함수
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
  const handleCheckInCom = () => {};
  const handleCheckOutCom = () => {};

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

  fromDate: "2024-03-05"
  hotelNm: "멍뭉이 스타일 애견 호텔"
  nickname: "백서윤"
  payment: 150000
  resNum: "R2435874146183"
  resPk: 1
  resStatus: 2
  toDate: "2024-03-07"
  userPhoneNum: "01023885447"
  */
  // 첫페이지는 1이므로 초기값을 1로 설정
  const [page, setPage] = useState(1);
  useEffect(() => {
    // 페이지 처음 불러들일 때 실행
    getRoomList(page, successGetRoomList, failGetRoomList, errorGetRoomList);
    console.log("현재 페이지: ", page);
    //page의 값이 바뀌면 useEffect를 다시 실행하겠다.
  }, [page]);

  const successGetRoomList = result => {
    console.log("성공했습니다.", result);
    setInitData(result.reservationInfoList); // 서버에서 받은 데이터를 설정
  };
  const failGetRoomList = result => {
    console.log("다시 시도해주세요.", result);
  };
  const errorGetRoomList = result => {
    console.log("서버 에러입니다.", result);
  };

  /* ---------------------- 💛 axios 연동 end --------------------*/

  /* ----------------------💭 모달 open & close start  --------------------*/
  const [dogInfoOpen, setDogInfoOpen] = useState(false); // 반려견 정보 모달 오픈 여부 관리
  const [cancelOpen, setCancelOpen] = useState(false); // 예약 취소 모달 오픈 여부 관리
  // 💥 반려견 정보 모달 관련 내용 추가!
  // RoomPage 컴포넌트에서 선택된 행 정보를 저장할 상태 추가
  const [selectedDogInfo, setSelectedDogInfo] = useState(null);

  const cancelModalOpen = row => {
    // setSelectedRow(row); // 선택된 행 정보 저장0
    setCancelOpen(true); // 예약 취소 모달 오픈
    setDogInfoOpen(false); // 반려견 정보 모달 닫기
  };
  const dogInfoModalOpen = row => {
    // setSelectedRow(row); // 선택된 행 정보 저장
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

  return (
    <RmPageWrap>
      {/* header 영역 */}
      <div>
        <RmMenuSearchFlex>
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
            <RmPageBt onClick={() => handleCheckInCom()}>입실완료</RmPageBt>
            <RmPageBt onClick={() => handleCheckOutCom()}>퇴실완료</RmPageBt>
          </RmBtFlex>
          <StyledTableWrap>
            <Table
              // rowSelection={rowSelection}
              rowSelection={{
                type: "checkbox", // 하나의 체크박스만 선택할 수 있도록 설정
                onChange: handleSelectionChange, // handleSelectionChange 함수로 변경
              }}
              dataSource={
                filteredData.length > 0
                  ? filteredData.map(item => ({ ...item, key: item.resPk }))
                  : initData.map(item => ({ ...item, key: item.resPk }))
              }
              // dataSource={filteredData.length > 0 ? filteredData : initData}
              columns={columns}
              pagination={{
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
              {/* <img
                src={`${process.env.PUBLIC_URL}/admin/images/RmToday/exampleimg.svg`}
                alt=""
              /> */}
              <RmDogInfo>
                <span>강아지 이름 : {selectedDogInfo.resDogNm}</span>
                <span>강아지 나이 : {selectedDogInfo.resDogAge}</span>
                <span>강아지 크기 : {selectedDogInfo.dogSizeNm}</span>
              </RmDogInfo>
            </RmModalDogContent>
          </RmPageModal>
        </ModalBackground>
      )}
    </RmPageWrap>
  );
};

export default RoomListPage;
