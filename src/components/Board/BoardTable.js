import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";

const BoardBox = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-spacing: 0;
  background-color: green;
`;

const BoardThead = styled.thead`
  background-color: #fff;
  width: 100%;
  font-size: 1.4rem;
  color: #969696;

  font-family: Noto Sans;
  font-weight: 500;
  border-top: 0.5px solid #654222;
  border-bottom: 0.5px solid #654222;
`;

const BoardTh = styled.th`
  width: ${props =>
    props.idx === 0
      ? "70px"
      : props.idx === 2
      ? "590px"
      : props.idx === 3
      ? "180px"
      : "120px"};
  text-align: ${props =>
    props.idx === 2 ? "left" : props.idx === 3 ? "left" : "center"};
`;

const BoardTbody = styled.tbody`
  background-color: #fff;
  width: 100%;
  font-size: 1.4rem;
`;

const BoardTr = styled.tr`
  width: 100%;
  height: ${props => (props.tr === "head" ? "35px" : "50px")};
  background-color: ${props =>
    props.writer === "관리자" ? "#FFF9EC" : "#fff"};
`;

const BoardTd = styled.td`
  width: ${props =>
    props.idx === 0
      ? "70px"
      : props.idx === 2
      ? "590px"
      : props.idx === 3
      ? "180px"
      : "120px"};
  text-align: ${props =>
    props.idx === 2 ? "left" : props.idx === 3 ? "left" : "center"};
  border-bottom: 0.5px solid #654222;
`;

function BoardTable() {
  const columns = useMemo(
    () => [
      {
        accessor: "number",
        Header: "번호",
      },
      {
        accessor: "category",
        Header: "카테고리",
      },
      {
        accessor: "title",
        Header: "제목",
      },
      {
        accessor: "writer",
        Header: "작성자",
      },
      {
        accessor: "date",
        Header: "날짜",
      },
      {
        accessor: "views",
        Header: "조회수",
      },
    ],
    [],
  );

  const data = [
    {
      number: 1,
      category: "공지",
      title: "공지입니다.",
      writer: "관리자",
      date: "2024.1.18",
      views: 402,
    },
    {
      number: 2,
      category: "자유게시판",
      title: "룽지쵝오",
      writer: "유밍구",
      date: "2024.1.18",
      views: 300,
    },
    {
      number: 3,
      category: "자유게시판",
      title: "콩이최고",
      writer: "콩준서",
      date: "2024.1.18",
      views: 510,
    },
    {
      number: 4,
      category: "정보",
      title: "닭꼬치의 비밀",
      writer: "학재",
      date: "2024.1.14",
      views: 2024,
    },
  ];
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <BoardBox {...getTableProps()}>
      <BoardThead>
        {headerGroups.map((headerGroup, idx) => (
          <BoardTr key={idx} tr="head" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx) => (
              <BoardTh key={idx} idx={idx} {...column.getHeaderProps()}>
                {column.render("Header")}
              </BoardTh>
            ))}
          </BoardTr>
        ))}
      </BoardThead>
      <BoardTbody {...getTableBodyProps()}>
        {rows.map((row, trIdx) => {
          prepareRow(row);
          return (
            <BoardTr
              key={trIdx}
              tr="body"
              writer={row.cells[3].value}
              {...row.getRowProps()}
            >
              {row.cells.map((cell, tdIdx) => (
                <BoardTd key={tdIdx} idx={tdIdx} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </BoardTd>
              ))}
            </BoardTr>
          );
        })}
      </BoardTbody>
    </BoardBox>
  );
}

export default BoardTable;
