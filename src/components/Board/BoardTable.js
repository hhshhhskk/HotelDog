import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  boardListAPI,
  boardMyCommentListAPI,
  boardMyListAPI,
} from "../../api/board/boardApi";

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
      ? "580px"
      : props.idx === 3
      ? "180px"
      : "130px"};
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
  color: ${props => (props.nickname === "관리자" ? "#654222" : "#969696")};
`;

const BoardTd = styled.td`
  width: ${props =>
    props.propKey === "number"
      ? "70px"
      : props.propKey === "title"
      ? "580px"
      : props.propKey === "nickname"
      ? "180px"
      : "130px"};
  text-align: ${props =>
    props.propKey === "title"
      ? "left"
      : props.propKey === "nickname"
      ? "left"
      : "center"};
  border-bottom: 0.5px solid #654222;

  cursor: ${props => (props.propKey === "title" ? "pointer" : "default")};
`;

function BoardTable({ nowPage, setTotalPage, cateNum }) {
  const rows = ["번호", "카테고리", "제목", "작성자", "날짜", "조회수"];
  const navigate = useNavigate();

  const { data, isSuccess } = useQuery(["boardList", cateNum, nowPage], () => {
    const fetchData = async () => {
      try {
        let result = "";
        if (cateNum <= 4) {
          result = await boardListAPI(cateNum, nowPage);
        } else if (cateNum === 5) {
          result = await boardMyListAPI(nowPage);
        } else {
          result = await boardMyCommentListAPI(nowPage);
        }
        return result;
      } catch {
        console.log("에러");
      }
    };

    return fetchData();
  });

  // let dataFil = "";
  // if (cateNum === 1) {
  //   dataFil = data.filter(item => item.category === "공지");
  // } else if (cateNum === 2) {
  //   dataFil = data.filter(item => item.category === "정보");
  // } else if (cateNum === 3) {
  //   dataFil = data.filter(item => item.category === "자유게시판");
  // }

  let sortedData = [];

  if (isSuccess) {
    // 데이터가 성공적으로 불러와진 경우에만 정렬 작업 수행
    if (data?.simpleBoardVoList) {
      sortedData = data?.simpleBoardVoList.sort((a, b) => {
        if (a.nickname === "관리자" && b.nickname !== "관리자") {
          return -1;
        } else if (a.nickname !== "관리자" && b.nickname === "관리자") {
          return 1;
        }

        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    } else if (data?.userCommentVoList) {
      sortedData = data?.userCommentVoList.sort((a, b) => {
        if (a.nickname === "관리자" && b.nickname !== "관리자") {
          return -1;
        } else if (a.nickname !== "관리자" && b.nickname === "관리자") {
          return 1;
        }

        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    }
  }

  useEffect(() => {
    setTotalPage(data?.maxPage);
  }, [data?.maxPage]);
  const itmeClick = (key, boardPk) => {
    if (key === "title") {
      navigate(`/boardDetail/${boardPk}`);
    }
  };

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
        {isSuccess &&
          sortedData.map((item, idx) => (
            <BoardTr key={idx} writer={item.nickname}>
              <BoardTd propKey="number">{idx + 1}</BoardTd>
              {[
                "categoryNm",
                "title",
                "nickname",
                "createdAt",
                "boardViewCount",
              ].map(key => (
                <BoardTd
                  key={key}
                  propKey={key}
                  onClick={() => {
                    return itmeClick(key, item.boardPk);
                  }}
                >
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
