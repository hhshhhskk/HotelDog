import styled from "@emotion/styled";
import React from "react";
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
  TableWrap,
} from "../../../styles/AdminPageStyle/RoomPageStyle/roomPageStyle";
import { createColumnHelper, flexRender, useReactTable } from "@tanstack/react-table";

// Define your row shape
type RmReserve = {
  checkbox: string, // 체크 : checkbox
  number: string, // 번호 : number
  reserveNumber: number, // 예약번호 : reserveNumber
  nickname: number, // 닉네임 : nickname
  roomType: string, // 객실유형 : roomType
  dogInfo: number, // 반려견정보 : dogInfo
  reservationData: number, // 예약날짜(체크인아웃) : reservationData
  phoneNumber: number, // 전화번호 : phoneNumber
  paymentAmount: number, // 결제금액 : paymentAmount
  status: number, // 상태 : status
};

const RoomPage = () => {
  // table data 담을 useState ( 상태관리用 )
  const [data, setData] = React.useState([]);

  // react-table 사용하기위한 함수 호출
  const table = useReactTable({ columns, data });

  const columnHelper = createColumnHelper<RmReserve>()
  const columns = [
    columnHelper.accessor('checkbox', {
      header: () => '체크',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '번호',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '예약번호',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '닉네임',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '객실유형',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '반려견정보',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '예약날짜 (체크 인/아웃)',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '전화번호',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '결제금액',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('checkbox', {
      header: () => '상태',
      cell: info => info.getValue()
    })
    
  ]

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
            <RmPageBt>예약승인</RmPageBt>
            <RmPageBt>입실완료</RmPageBt>
            <RmPageBt>퇴실완료</RmPageBt>
          </RmBtFlex>
          <TableWrap>
            <table>
              <thead>
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
              </thead>
              {/* <thead>
                <th width="50px">번호</th>
                <th width="80px">예약번호</th>
                <th width="120px">닉네임</th>
                <th width="195px">객실유형</th>
                <th width="120px">반려견 정보</th>
                <th width="220px">예약날짜 (체크 인/아웃)</th>
                <th width="130px">전화번호</th>
                <th width="110px">결제금액</th>
                <th width="130px">상태</th>
              </thead> */}

              <tbody>
                {table.getRowModel().rows.map(row => (
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
                ))}
                {/* <td>1</td>
                <td>65813</td>
                <td>누룽지호랑이</td>
                <td>소형견 (3kg~ 7kg) 기준</td>
                <td>
                  <button>정보보기</button>
                </td>
                <td>2024-02-13 / 2024-02-15</td>
                <td>010-1234-5678</td>
                <td>97,000원</td>
                <td>이용완료</td> */}
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
                <tr>
                  <td scope="row"></td>
                  <td>3</td>
                  <td>65813</td>
                  <td>누룽지호랑이</td>
                  <td>소형견 (3kg~ 7kg) 기준</td>
                  <td>
                    <button>정보보기</button>
                  </td>
                  <td>2024-02-13 / 2024-02-15</td>
                  <td>010-1234-5678</td>
                  <td>97,000원</td>
                  <td>예약완료</td>
                </tr>
              </tbody>
            </table>
          </TableWrap>
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
