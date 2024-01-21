import React, { useState } from "react";
import styled from "@emotion/styled";
import Dog from "../../components/Common/Dog";
import BoardTable from "../../components/Board/BoardTable";

const BoardWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const BoardContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  margin-top: 150px;
  flex-direction: column;
  align-items: center;
`;

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
    props.categoryLength === props.idx + 1 ? "none" : "1px solid black"};

  cursor: pointer;
`;

const BoardFilter = styled.div`
  width: 50%;
`;

const BoardPage = () => {
  const category = ["전체글", "공지", "정보", "자유게시판"];
  const [cateNum, setCateNum] = useState(0);
  const categoryLength = category.length;

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
          <BoardFilter></BoardFilter>
        </BoardTop>
        <BoardTable cateNum={cateNum} />
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardPage;
