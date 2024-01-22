import styled from "@emotion/styled";
import React from "react";

const BoardBox = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-spacing: 0;
`;

const BoardThead = styled.thead`
  background-color: #fff;
  width: 100%;
  font-size: 1.4rem;

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
  color: ${props => (props.writer === "관리자" ? "#654222" : "#969696")};
`;

const BoardTd = styled.td`
  width: ${props =>
    props.propKey === "number"
      ? "70px"
      : props.propKey === "title"
      ? "590px"
      : props.propKey === "writer"
      ? "180px"
      : "120px"};
  text-align: ${props =>
    props.propKey === "title"
      ? "left"
      : props.propKey === "writer"
      ? "left"
      : "center"};
  border-bottom: 0.5px solid #654222;
`;

function BoardTable({ cateNum }) {
  const rows = ["번호", "카테고리", "제목", "작성자", "날짜", "조회수"];

  let data = [
    {
      category: "공지",
      title: "욕설과 비난은 영구정지입니다. 바른말 고운말을 사용합시다.",
      writer: "관리자",
      date: "2024.1.18",
      views: 402,
    },
    {
      category: "자유게시판",
      title: "룽지쵝오",
      writer: "유밍구",
      date: "2024.1.15",
      views: 1997,
    },
    {
      category: "자유게시판",
      title: "콩이최고",
      writer: "준수르",
      date: "2024.1.18",
      views: 510,
    },
    {
      category: "정보",
      title: "닭꼬치의 비밀",
      writer: "학재",
      date: "2024.1.14",
      views: 2024,
    },

    {
      category: "정보",
      title: "팀원 몰래 닭꼬치 먹는법",
      writer: "학재",
      date: "2024.1.17",
      views: 568,
    },

    {
      category: "자유게시판",
      title: "하... 방금 헤어졌다 질문받는다",
      writer: "배구이",
      date: "2024.1.22",
      views: 23,
    },

    {
      category: "정보",
      title: "성공한 인생",
      writer: "준수르",
      date: "2024.1.14",
      views: 5234,
    },

    {
      category: "자유게시판",
      title: "교수 엿맥이는법좀..",
      writer: "지은초이",
      date: "2024.1.19",
      views: 232,
    },
  ];

  if (cateNum === 1) {
    data = data.filter(item => item.category === "공지");
  } else if (cateNum === 2) {
    data = data.filter(item => item.category === "정보");
  } else if (cateNum === 3) {
    data = data.filter(item => item.category === "자유게시판");
  }

  const sortedData = data.sort((a, b) => {
    // "관리자" 카테고리를 맨 위로 올리기
    if (a.writer === "관리자" && b.writer !== "관리자") {
      return -1;
    } else if (a.writer !== "관리자" && b.writer === "관리자") {
      return 1;
    }

    // 날짜가 최신순으로 정렬
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA;
  });

  return (
    <BoardBox>
      <BoardThead>
        <BoardTr tr="head">
          {rows.map((item, idx) => (
            <BoardTh key={idx} idx={idx}>
              {item}
            </BoardTh>
          ))}
        </BoardTr>
      </BoardThead>
      <BoardTbody>
        {sortedData.map((item, idx) => (
          <BoardTr key={idx} writer={item.writer}>
            <BoardTd propKey="number">{idx + 1}</BoardTd>
            {["category", "title", "writer", "date", "views"].map(key => (
              <BoardTd key={key} propKey={key}>
                {item[key]}
              </BoardTd>
            ))}
          </BoardTr>
        ))}
      </BoardTbody>
    </BoardBox>
  );
}

export default BoardTable;
