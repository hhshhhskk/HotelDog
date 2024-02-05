import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  boardListAPI,
  boardMyCommentListAPI,
  boardMyListAPI,
  boardSearchListAPI,
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
      ? "62px"
      : props.idx === 2
      ? "550px"
      : props.idx === 3
      ? "180px"
      : "136px"};
  width: ${props => (props.idx === 6 ? "50px" : "none")};
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
      ? "62px"
      : props.propKey === "title"
      ? "550px"
      : props.propKey === "nickname"
      ? "180px"
      : "136px"};
  width: ${props => (props.idx === 6 ? "50px" : "none")};

  text-align: ${props =>
    props.propKey === "title"
      ? "left"
      : props.propKey === "nickname"
      ? "left"
      : "center"};
  border-bottom: 0.5px solid #654222;

  cursor: ${props => (props.propKey === "title" ? "pointer" : "default")};
`;

function BoardTable({
  nowPage,
  setTotalPage,
  cateNum,
  checkboxStates,
  setCheckboxStates,
  searchType,
  searchKeyword,
}) {
  const rows = ["번호", "카테고리", "제목", "작성자", "날짜", "조회수"];
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);

  const { data, isSuccess } = useQuery(["boardList", cateNum, nowPage], () => {
    const fetchData = async () => {
      try {
        let result = "";
        if (cateNum <= 4) {
          result = await boardListAPI(cateNum, nowPage);
        } else if (cateNum === 5) {
          result = await boardMyListAPI(nowPage);
        } else if (cateNum === 6) {
          result = await boardMyCommentListAPI(nowPage);
        } else {
          result = await boardSearchListAPI(nowPage, searchKeyword, searchType);
        }
        return result.data;
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

  // 게시판 체크박스 전체 선택
  const handleCheckboxAllChange = () => {
    if (selectAll) {
      // 전체 체크가 되어 있을 때, 빈 배열로 초기화
      setCheckboxStates([]);
    } else {
      // 전체 체크가 안되어 있을 때, 각 항목의 boardPk를 담은 배열로 설정
      setCheckboxStates(sortedData.map(item => item.boardPk));
    }
    // selectAll 상태를 반전시킴
    setSelectAll(!selectAll);
  };
  // 게시판 체크박스 선택시 boardPk 배열에 담기
  const handleCheckboxChange = (item, idx) => {
    // checkboxStates 배열에 item.boardPk가 이미 있다면 해당 항목을 제거하고,
    // 없다면 추가한 새로운 배열을 만들어 설정
    const updatedCheckboxStates = checkboxStates.includes(item.boardPk)
      ? checkboxStates.filter(pk => pk !== item.boardPk)
      : [...checkboxStates, item.boardPk];

    setCheckboxStates(updatedCheckboxStates);
  };

  // 게시판 댓글 체크박스 전체 선택
  const handleCommentCheckboxAllChange = () => {
    if (selectAll) {
      // 전체 체크가 되어 있을 때, 빈 배열로 초기화
      setCheckboxStates([]);
    } else {
      // 전체 체크가 안되어 있을 때, 각 항목의 commentPk를 담은 배열로 설정
      setCheckboxStates(sortedData.map(item => item.commentPk));
    }
    // selectAll 상태를 반전시킴
    setSelectAll(!selectAll);
  };
  // 게시판 댓글 체크박스 선택시 commentPk 배열에 담기
  const handleCommentCheckboxChange = (item, idx) => {
    // checkboxStates 배열에 item.commentPk가 이미 있다면 해당 항목을 제거하고,
    // 없다면 추가한 새로운 배열을 만들어 설정
    const updatedCheckboxStates = checkboxStates.includes(item.commentPk)
      ? checkboxStates.filter(pk => pk !== item.commentPk)
      : [...checkboxStates, item.commentPk];

    setCheckboxStates(updatedCheckboxStates);
  };

  let sortedData = [];
  if (isSuccess) {
    // 데이터가 성공적으로 불러와진 경우에만 정렬 작업 수행
    if (data?.simpleBoardVoList) {
      sortedData = data?.simpleBoardVoList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        // 우선 "관리자"인 경우 우선순위를 둡니다.
        if (a.nickname === "관리자" && b.nickname !== "관리자") {
          return -1;
        } else if (a.nickname !== "관리자" && b.nickname === "관리자") {
          return 1;
        }

        // 그 다음에는 날짜를 기준으로 최신순으로 정렬합니다.
        return dateB - dateA;
      });
    } else if (data?.userCommentVoList) {
      sortedData = data?.userCommentVoList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        // 우선 "관리자"인 경우 우선순위를 둡니다.
        if (a.nickname === "관리자" && b.nickname !== "관리자") {
          return -1;
        } else if (a.nickname !== "관리자" && b.nickname === "관리자") {
          return 1;
        }

        // 그 다음에는 날짜를 기준으로 최신순으로 정렬합니다.
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
          {(cateNum === 5 || cateNum === 6) && (
            <BoardTh idx={6}>
              <input
                type="checkbox"
                checked={selectAll}
                name="select"
                onChange={
                  cateNum === 5
                    ? handleCheckboxAllChange
                    : handleCommentCheckboxAllChange
                }
              />
            </BoardTh>
          )}
          {rows.map((item, idx) => (
            <BoardTh key={idx} idx={idx}>
              {cateNum === 6 && item === "제목" ? "게시글 / 댓글" : item}
            </BoardTh>
          ))}
        </BoardTr>
      </BoardThead>
      <BoardTbody>
        {isSuccess &&
          sortedData.map((item, idx) => (
            <BoardTr key={idx} writer={item.nickname}>
              {(cateNum === 5 || cateNum === 6) && (
                <BoardTd idx={6}>
                  <input
                    type="checkbox"
                    name="select"
                    checked={
                      cateNum === 5
                        ? checkboxStates.includes(item.boardPk)
                        : checkboxStates.includes(item.commentPk)
                    }
                    onChange={() =>
                      cateNum === 5
                        ? handleCheckboxChange(item)
                        : handleCommentCheckboxChange(item)
                    }
                  />
                </BoardTd>
              )}
              <BoardTd propKey="number">{idx + 1 + (nowPage - 1) * 8}</BoardTd>
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
                  {cateNum === 6 && key === "title" ? (
                    <>
                      <div style={{ marginBottom: 6 }}>{item[key]}</div>
                      <div>💬 {item["comment"]}</div>
                    </>
                  ) : (
                    item[key]
                  )}
                </BoardTd>
              ))}
            </BoardTr>
          ))}
      </BoardTbody>
    </BoardBox>
  );
}

export default BoardTable;
