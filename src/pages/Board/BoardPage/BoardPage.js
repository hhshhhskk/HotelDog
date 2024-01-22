import React, { useState } from "react";
import Dog from "../../../components/Common/Dog";
import BoardTable from "../../../components/Board/BoardTable";
import { useNavigate } from "react-router-dom";
import {
  BoardBigText,
  BoardBtnImg,
  BoardCategory,
  BoardCategoryItem,
  BoardContent,
  BoardCreateBtn,
  BoardCreateBtnDiv,
  BoardFilter,
  BoardFilterItem,
  BoardImg,
  BoardSearchBox,
  BoardSearchBtn,
  BoardSearchInput,
  BoardSearchSelect,
  BoardSmallText,
  BoardTitle,
  BoardTitleLeft,
  BoardTitleRight,
  BoardTop,
  BoardWrap,
} from "../../../styles/BoardPageStyle/boardStyle";
import BoardPagination from "../../../components/Board/BoardPagination";

const BoardPage = () => {
  const category = ["전체글", "공지", "정보", "자유게시판"];
  const [cateNum, setCateNum] = useState(0);
  const categoryLength = category.length;
  const navigate = useNavigate();
  const [page, setPage] = useState([1, 2, 3, 4, 5]);
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
        <BoardSearchBox>
          <BoardSearchSelect>
            <option value="제목">제목</option>
            <option value="작성자">작성자</option>
          </BoardSearchSelect>
          <BoardSearchInput type="text" />
          <BoardSearchBtn type="button" value="검색" />
        </BoardSearchBox>
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardPage;
