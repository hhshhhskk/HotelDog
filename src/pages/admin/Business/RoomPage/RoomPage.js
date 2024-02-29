import { Table } from "antd";
import React, { useState } from "react";
import {
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

// Define your row shape
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

const RoomPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // 선택된 행의 키 값들을 저장하는 상태
  const [selectedRows, setSelectedRows] = useState([]); // 선택된 행들의 정보를 저장하는 상태

  // 체크박스가 변경될 때 호출되는 함수
  const handleSelectionChange = (keys, rows) => {
    setSelectedRowKeys(keys); // 선택된 행의 키 값들을 업데이트
    setSelectedRows(rows); // 선택된 행들의 정보를 업데이트
  };

  // table data 담을 useState ( 상태관리用 )
  // const [data, setData] = React.useState([]);

  // react-table 사용하기위한 함수 호출
  // const table = useReactTable({ columns, data });

  // const columnHelper = createColumnHelper<RmReserve>()
  // const columns = [
  //   columnHelper.accessor('checkbox', {
  //     header: () => '체크',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '번호',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '예약번호',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '닉네임',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '객실유형',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '반려견정보',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '예약날짜 (체크 인/아웃)',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '전화번호',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '결제금액',
  //     cell: info => info.getValue()
  //   }),
  //   columnHelper.accessor('checkbox', {
  //     header: () => '상태',
  //     cell: info => info.getValue()
  //   })

  // ]
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
  const data = [
    {
      checkbox: 1,
      key: 1,
      reserveNumber: 66666,
      nickname: "누룽지",
      roomType: "소형견(3kg ~7kg)이하 기준",
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "",
    },
    {
      checkbox: 1,
      key: 6,
      reserveNumber: 81945,
      nickname: "콩지",
      roomType: "중형견(7kg ~15kg)이하 기준",
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
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
      dogInfo: <button>반려견정보</button>,
      reservationData: "20240301-20240303",
      phoneNumber: "010-2222-7777",
      paymentAmount: 68000,
      status: "",
    },
  ];
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
      render: (text, record) => {
        return record.status === "예약승인" ? (
          "예약승인"
        ) : (
          <button onClick={() => handleReservationAp([record.key], [record])}>
            {record.status}
          </button>
        );
      },
      // 행 필터 추가
      filters: [
        {
          text: "예약대기중",
          value: "reservationPending",
        },
        {
          text: "예약취소",
          value: "reservationCancellation",
          // 예약취소 모달 뜨도록
          render: (text, record) => {
            console.log(text);
            return (
              <>
                <button
                  onClick={() => handleReservationAp([record.key], [record])}
                >
                  {text}
                </button>
              </>
            );
          },
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
  const [initdata, setInitData] = useState(data);

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
  // 체크->버튼 클릭 시, 상태 변경 함수
  const handleReservationAp = (selectedRowKeys, selectedRows) => {
    console.log("selectedRowKeys:", selectedRowKeys);
    console.log("selectedRows:", selectedRows);
    // 버튼 클릭 시, key값과 해당 row 값은 불러와진다.
    // 다음으로 해야할것이 💥 rows 에서 status 값을 "예약승인" 으로 표시해야한다.
    // selectedRows 배열에서 각 열의 status 값을 콘솔에 출력하고, "예약승인"으로 변경
    selectedRows.forEach(row => {
      console.log("원래 열의 status 값 :", row.status);
      // status 값이 이미 "예약승인"인 경우는 처리하지 않음
      if (row.status === "예약승인") {
        return;
      }
      // status 값을 "예약승인"으로 변경
      row.status = "예약승인";
      console.log("변경된 열의 status 값 :", row.status);
    });
    // 변경된 데이터를 React 상태로 설정하여 화면에 반영
    const updateStatus = (index, newStatus) => {
      const updatedData = [...data]; // 주어진 배열 객체를 복사합니다.
      updatedData[index].status = newStatus; // 주어진 인덱스의 status 값을 변경합니다.
      return updatedData; // 변경된 배열 객체를 반환합니다.
    };
  };
  const handleCheckInCom = () => {};
  const handleCheckOutCom = () => {};
  return (
    <RmPageWrap>
      {/* header 영역 */}
      <div>
        <RmMenuSearchFlex>
          <RmTodayMenu>
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
              예약승인
            </RmPageBt>
            {/* <RmPageBt
              onClick={(selectedRowKeys, selectedRows) =>
                handleReservationAp(selectedRowKeys, selectedRows)
              }
            >
              예약승인
            </RmPageBt> */}
            <RmPageBt onClick={() => handleCheckInCom()}>입실완료</RmPageBt>
            <RmPageBt onClick={() => handleCheckOutCom()}>퇴실완료</RmPageBt>
          </RmBtFlex>
          <StyledTableWrap>
            <Table
              //
              rowSelection={{
                type: "checkbox",
                // 체크박스가 변경될 때 호출되는 콜백 함수
                onChange: handleSelectionChange,
              }}
              dataSource={data}
              columns={columns}
              pagination={{
                // 페이지 네이션
                pageSize: 15,
                position: ["bottomCenter"],
                hideOnSinglePage: false,
                // style: {
                //   marginBottom: 20, // 원하는 간격으로 수정하세요
                // },
              }}
            >
              {/* <thead>
                {table.getHeaderGroups().map(headerGroupd => (
                  <tr key={headerGroup.id} width="100%">
                    {headerGroup.headers.map(header => (
                      <th key={header.id} width="50px" scope="col">
                        체크
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead> */}
              {/* <thead>
                <tr>
                  <th width="50px">체크</th>
                  <th width="50px">번호</th>
                  <th width="80px">예약번호</th>
                  <th width="120px">닉네임</th>
                  <th width="195px">객실유형</th>
                  <th width="120px">반려견 정보</th>
                  <th width="220px">예약날짜 (체크 인/아웃)</th>
                  <th width="130px">전화번호</th>
                  <th width="110px">결제금액</th>
                  <th width="130px">상태</th>
                </tr>
              </thead> */}

              <tbody>
                {/* {table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} scope="row">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))} */}
                {/* <tr>
                  <td scope="row">
                    <input type="checkbox"></input>
                  </td>
                  <td>2</td>
                  <td>65813</td>
                  <td>누룽지호랑이</td>
                  <td>소형견 (3kg~ 7kg) 기준</td>
                  <td>
                    <button>정보보기</button>
                  </td>
                  <td>2024-02-13 / 2024-02-15</td>
                  <td>010-1234-5678</td>
                  <td>97,000원</td>
                  <td>
                    <button>예약취소</button>
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </StyledTableWrap>
        </RmTableBtFlex>
      </div>

      {/* 예약 취소 및 정보보기 모달 */}
      <RmPageModal>
        <RmModalClose
          src={`${process.env.PUBLIC_URL}/admin/images/RmToday/close.svg`}
          alt=""
        />
        <RmPageModalHead>
          <RmPageTitle>반려견 정보</RmPageTitle>
        </RmPageModalHead>
        <RmModalDogContent>
          <RmModalDogHead>
            <RmModalDogTitle>대형견 (15kg 이상 ~) 기준</RmModalDogTitle>
          </RmModalDogHead>
          <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/exampleimg.svg`}
            alt=""
          />
          <RmDogInfo>
            <span>강아지 이름 : 누룽지</span>
            <span>강아지 나이 : 4살</span>
            <span>강아지 크기 : 소형견</span>
          </RmDogInfo>
        </RmModalDogContent>
      </RmPageModal>
      <RmPageModal>
        <RmModalClose
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
      </RmPageModal>
    </RmPageWrap>
  );
};

export default RoomPage;
