import React, { useEffect, useState } from "react";
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
  BoardDeleteBtn,
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
import useCustomLogin from "../../../hooks/useCustomLogin";
import { boardDeleteAPI, boardListAPI } from "../../../api/board/boardApi";
import { commentDeleteAPI } from "../../../api/board/boardCommentApi";

const BoardPage = () => {
  const category = ["전체글", "공지", "자유게시판", "질문", "정보"];
  const [cateNum, setCateNum] = useState(0);
  const categoryLength = category.length;
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const { isLogin } = useCustomLogin();
  const [checkboxStates, setCheckboxStates] = useState([]);
  const [searchType, setSearchType] = useState("0");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    isLogin === false && alert("로그인 후 이용해주세요.", navigate(`/login`));
  });

  const searchClick = e => {
    e.preventDefault();
    if (cateNum === 7) {
      setCateNum(8);
    } else {
      setCateNum(7);
    }
  };

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
                    setNowPage(1);
                    setCheckboxStates([]);
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
                  idx={idx + 5}
                  cateNum={cateNum}
                  onClick={() => {
                    setCateNum(idx + 5);
                    setCheckboxStates([]);
                  }}
                >
                  {item}
                </BoardFilterItem>
              );
            })}
          </BoardFilter>
        </BoardTop>
        <BoardTable
          nowPage={nowPage}
          setTotalPage={setTotalPage}
          cateNum={cateNum}
          checkboxStates={checkboxStates}
          setCheckboxStates={setCheckboxStates}
          searchType={searchType}
          searchKeyword={searchKeyword}
        />
        <BoardCreateBtnDiv>
          {cateNum === 5 ? (
            <BoardDeleteBtn
              onClick={async () => {
                const result = await boardDeleteAPI(checkboxStates);
                if (result === 1) {
                  setCateNum(0);
                }
              }}
            >
              글 삭제하기
            </BoardDeleteBtn>
          ) : cateNum === 6 ? (
            <BoardDeleteBtn
              onClick={async () => {
                const result = await commentDeleteAPI(checkboxStates);

                if (result === 1) {
                  setCateNum(0);
                }
              }}
            >
              댓글 삭제하기
            </BoardDeleteBtn>
          ) : (
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
          )}
        </BoardCreateBtnDiv>
        <BoardPagination
          totalPage={totalPage}
          nowPage={nowPage}
          setNowPage={setNowPage}
        />
        <BoardSearchBox>
          <BoardSearchSelect
            value={searchType}
            onChange={e => setSearchType(e.target.value)}
          >
            <option value="0">제목</option>
            <option value="1">내용</option>
            <option value="2">닉네임</option>
          </BoardSearchSelect>
          <BoardSearchInput
            type="text"
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
          />
          <BoardSearchBtn onClick={searchClick} type="button" value="검색" />
        </BoardSearchBox>
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardPage;
