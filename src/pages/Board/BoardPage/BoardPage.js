import React, { useState } from "react";
import styled from "@emotion/styled";
import Dog from "../../../components/Common/Dog";
import BoardTable from "../../../components/Board/BoardTable";
import { useNavigate } from "react-router-dom";
import {
  BoardContent,
  BoardWrap,
} from "../../../styles/BoardPageStyle/boardStyle";
import BoardPagination from "../../../components/Board/BoardPagination";

const BoardTitle = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  background-color: #654222;
  display: flex;
  border-radius: 10px;
  margin-bottom: 53px;
`;

const BoardTitleLeft = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 35px;
`;

const BoardBigText = styled.div`
  color: #fff;

  font-family: Noto Sans;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
`;

const BoardSmallText = styled.div`
  color: #fff;
  font-family: Noto Sans;
  font-size: 1.6rem;
  font-weight: 500;
`;

const BoardTitleRight = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
`;

const BoardImg = styled.img`
  width: 140px;
  height: 124px;
  transform: translateX(20%);
`;

const BoardTop = styled.div`
  width: 100%;
  height: 16px;
  color: black;
  font-size: 1.2rem;

  display: flex;
  margin-bottom: 10px;
`;

const BoardCategory = styled.div`
  width: 50%;

  display: flex;
`;

const BoardCategoryItem = styled.div`
  padding: 0 7px 0 7px;
  line-height: 16px;

  color: ${props => (props.cateNum === props.idx ? "#654222" : "#969696")};
  font-weight: ${props => (props.cateNum === props.idx ? "600" : "500")};
  border-right: ${props =>
    props.categoryLength === props.idx + 1 ? "none" : "1px solid #969696"};

  cursor: pointer;
`;

const BoardFilter = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
`;
const BoardFilterItem = styled(BoardCategoryItem)`
  border-right: ${props => (props.idx === 4 ? "1px solid #969696" : "none")};
`;

const BoardCreateBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const BoardCreateBtn = styled.div`
  width: 120px;
  height: 40px;
  background-color: #654222;
  color: #fff;
  border-radius: 5px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 40px;

  margin-top: 17px;
  text-align: center;

  cursor: pointer;
`;

const BoardBtnImg = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 3px;
  margin-right: 5px;
`;

const BoardPage = () => {
  const category = ["전체글", "공지", "정보", "자유게시판"];
  const [cateNum, setCateNum] = useState(0);
  const categoryLength = category.length;
  const navigate = useNavigate();
  const [page, setPage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <BoardWrap>
      <BoardContent>
        <BoardTitle>
          <BoardTitleLeft>
            <BoardBigText>게시판</BoardBigText>
            <BoardSmallText>
              나의 강아지를 위한 커뮤니티 공간입니다.
            </BoardSmallText>
          </BoardTitleLeft>
          <BoardTitleRight>
            <Dog />
            <BoardImg
              src={`${process.env.PUBLIC_URL}/images/board/boardImg.svg`}
              alt=""
            />
          </BoardTitleRight>
        </BoardTitle>
        <BoardTop>
          <BoardCategory>
            {category.map((item, idx) => {
              return (
                <BoardCategoryItem
                  key={idx}
                  idx={idx}
                  cateNum={cateNum}
                  categoryLength={categoryLength}
                  onClick={() => {
                    setCateNum(idx);
                  }}
                >
                  {item}
                </BoardCategoryItem>
              );
            })}
          </BoardCategory>
          <BoardFilter>
            {["내가 쓴 게시글", "내가 쓴 댓글"].map((item, idx) => {
              return (
                <BoardFilterItem
                  key={idx}
                  idx={idx + 4}
                  cateNum={cateNum}
                  onClick={() => {
                    setCateNum(idx + 4);
                  }}
                >
                  {item}
                </BoardFilterItem>
              );
            })}
          </BoardFilter>
        </BoardTop>
        <BoardTable cateNum={cateNum} />
        <BoardCreateBtnDiv>
          <BoardCreateBtn
            onClick={() => {
              navigate("/boardcreate");
            }}
          >
            <BoardBtnImg
              src={`${process.env.PUBLIC_URL}/images/board/boardCreateBtn.svg`}
              alt=""
            />
            글 작성하기
          </BoardCreateBtn>
        </BoardCreateBtnDiv>
        <BoardPagination page={page} />
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardPage;
