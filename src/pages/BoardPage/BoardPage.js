import React from "react";
import styled from "@emotion/styled";
import Dog from "../../components/Common/Dog";

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
  flex-direction: column;
  justify-content: center;
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

const BoardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: yellowgreen;
`;

const BoardBoxTitle = styled.div`
  background-color: red;
  width: 100%;
  height: 35px;

  border-top: 0.5px solid #654222;
  border-bottom: 0.5px solid #654222;
`;

const BoardBoxItem = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 0.5px solid #654222;
`;

const BoardPage = () => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7];

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
        <BoardBox>
          <BoardBoxTitle>
            {data.map((data, idx) => {
              return <BoardBoxItem key={idx}></BoardBoxItem>;
            })}
          </BoardBoxTitle>
        </BoardBox>
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardPage;
