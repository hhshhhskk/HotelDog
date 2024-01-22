import React, { useState } from "react";
import styled from "@emotion/styled";
import Dog from "../../../components/Common/Dog";
import {
  BoardBigText,
  BoardContent,
  BoardImg,
  BoardSmallText,
  BoardTitle,
  BoardTitleLeft,
  BoardTitleRight,
  BoardWrap,
} from "../../../styles/BoardPageStyle/boardStyle";

const BoardCreateBox = styled.div`
  width: 100%;
  height: 620px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardCreateTitleBox = styled.div`
  width: 1100px;
  height: 30px;

  display: flex;
`;

const BoardCreateTitleImg = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 2px;
  margin-right: 6px;
`;

const BoardCreateTitle = styled.div`
  color: #654222;
  font-size: 2rem;
  font-weight: 700;
`;

const BoardCreateForm = styled.form`
  width: 1100px;
  height: 580px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #969696;
  border-bottom: 1px solid #969696;
  background-color: #fff;
`;

const FormNickName = styled.div`
  background-color: red;
  width: 860px;
  height: 30px;
`;

const FormTitle = styled.div`
  background-color: orange;

  width: 860px;
  height: 30px;
`;

const FormCategory = styled.div`
  background-color: yellow;
  width: 860px;
  height: 30px;
`;

const FormContent = styled.div`
  background-color: green;
  width: 860px;
  height: 350px;
`;

const FormFile = styled.div`
  background-color: blue;
  width: 860px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const File = styled.div`
  width: 800px;
  height: 24px;

  border: 1px solid #eee;
  background-color: #fafafa;
`;

const FormBtnDiv = styled.div`
  width: 860px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;

const FormBtn = styled.button`
  width: 64px;
  height: 30px;

  border-radius: 5px;
  border: 1px solid #654222;
  background-color: ${props => (props.bg === "cancle" ? "#fff" : "#654222")};

  color: ${props => (props.bg === "cancle" ? "#654222" : "#fff")};
  font-size: 1.2rem;
  font-weight: 600;

  cursor: pointer;
`;

const BoardCreatePage = () => {
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
        <BoardCreateBox>
          <BoardCreateTitleBox>
            <BoardCreateTitleImg
              src={`${process.env.PUBLIC_URL}/images/board/boardCreateBtn2.svg`}
              alt=""
            />
            <BoardCreateTitle>글작성하기</BoardCreateTitle>
          </BoardCreateTitleBox>
          <BoardCreateForm>
            <FormNickName>
              <label htmlFor="nickname">닉네임:</label>
              <input type="text" id="nickname" name="nickname" />
            </FormNickName>
            <FormTitle>
              <label htmlFor="title">제목:</label>
              <input type="text" id="title" name="title" />
            </FormTitle>
            <FormCategory>
              <label htmlFor="category">카테고리:</label>
              <input type="text" id="category" name="category" />
            </FormCategory>
            <FormContent>
              <label htmlFor="content">내용:</label>
              <input type="text" id="content" name="content" />
            </FormContent>
            <FormFile>
              <label htmlFor="file">첨부파일:</label>
              <input
                style={{ opacity: "0", position: "absolute", width: "800px" }}
                type="file"
                id="file"
                name="file"
              />
              <File></File>
            </FormFile>
            <FormBtnDiv>
              <FormBtn bg="cancle">취소</FormBtn>
              <FormBtn>확인</FormBtn>
            </FormBtnDiv>
          </BoardCreateForm>
        </BoardCreateBox>
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardCreatePage;
