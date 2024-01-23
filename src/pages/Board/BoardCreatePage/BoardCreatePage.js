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
import { useNavigate } from "react-router-dom";
import QuillEditor from "../../../components/Board/QuillEditor";

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
  width: 860px;
  height: 30px;
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 70px;
  color: #000;
  font-size: 1.4rem;
  font-weight: 400;

  &#content {
    height: 350px;
    line-height: 350px;
  }
`;

const FormInput = styled.input`
  height: 24px;
  background-color: #eeeeee;
  border: none;

  &#nickname {
    width: 150px;
  }

  &#title {
    width: 500px;
  }

  &#content {
    width: 800px;
    height: 350px;
  }
`;

const FormTitle = styled.div`
  width: 860px;
  height: 30px;
`;

const FormCategory = styled.div`
  width: 860px;
  height: 30px;
`;

const CategorySelect = styled.select`
  width: 80px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #969696;
  background-color: #fff;

  option {
    color: #969696;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContent = styled.div`
  width: 860px;
  height: 350px;
  display: flex;
`;

const FormFile = styled.div`
  position: relative;
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

const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  right: 0;
  width: 790px;
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
  const navigate = useNavigate();

  const cancleClick = e => {
    e.preventDefault();
    const answer = confirm(
      "취소를 하시면 작성한 내용을 모두 잃게 됩니다. 정말 취소 하시겠습니까?",
    );

    if (answer) {
      navigate(-1);
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
              <FormLabel htmlFor="nickname">닉네임</FormLabel>
              <FormInput type="text" id="nickname" name="nickname" />
            </FormNickName>
            <FormTitle>
              <FormLabel htmlFor="title">제목</FormLabel>
              <FormInput type="text" id="title" name="title" />
            </FormTitle>
            <FormCategory>
              <FormLabel htmlFor="category">카테고리</FormLabel>
              <CategorySelect>
                <option value="정보">정보</option>
                <option value="자유게시판">자유게시판</option>
              </CategorySelect>
            </FormCategory>
            <FormContent>
              <FormLabel htmlFor="content" id="content">
                내용
              </FormLabel>
              {/* <FormInput type="text" id="content" name="content" /> */}
              <Editor>
                <QuillEditor />
              </Editor>
            </FormContent>
            <FormFile>
              <FormLabel htmlFor="file">첨부파일</FormLabel>
              <FileInput type="file" id="file" name="file" />
              <File></File>
            </FormFile>
            <FormBtnDiv>
              <FormBtn bg="cancle" onClick={cancleClick}>
                취소
              </FormBtn>
              <FormBtn>확인</FormBtn>
            </FormBtnDiv>
          </BoardCreateForm>
        </BoardCreateBox>
      </BoardContent>
    </BoardWrap>
  );
};

export default BoardCreatePage;
