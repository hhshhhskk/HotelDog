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
import { useLocation, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { boardUpdateAPI } from "../../../api/board/boardApi";

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
  width: 500px;
  height: 24px;
  background-color: #eeeeee;
  border: none;
  font-size: 1.2rem;
  padding-left: 10px;
`;

const FormTextArea = styled.textarea`
  width: 800px;
  height: 350px;
  background-color: #eeeeee;
  resize: none;
  font-size: 1.2rem;
  border: none;
  padding: 10px;
  ::placeholder {
    color: #969696;
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
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

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

const BoardUpdatePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const postData = state ? state.data : null;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [viewFile, setViewFile] = useState([]);
  const cancleClick = e => {
    e.preventDefault();
    const answer = confirm(
      "취소를 하시면 작성한 내용을 모두 잃게 됩니다. 정말 취소 하시겠습니까?",
    );

    if (answer) {
      navigate(-1);
    }
  };
  const onValid = async data => {
    try {
      console.log(data);
      // FormData 생성
      const formData = new FormData();

      // 텍스트 데이터 추가 (JSON.stringify를 사용하여 문자열로 변환 후 직접 FormData에 추가)
      formData.append(
        "dto",
        new Blob(
          [
            JSON.stringify({
              boardPk: postData.boardPk,
              boardCategoryPk: data.selectOption,
              title: data.title,
              contents: data.contents,
            }),
          ],
          { type: "application/json" },
        ),
      );

      if (data.files !== undefined) {
        // 선택된 파일들을 FormData에 추가
        data.files.forEach((file, index) => {
          formData.append(`pics`, file);
        });
      } else {
        formData.append(`pics`, []);
      }

      const result = await boardUpdateAPI(formData);
      if (result === 1) {
        navigate(-1);
      }
    } catch (error) {
      // 에러 처리
      console.error("Error uploading files:", error);
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
            <BoardCreateTitle>글수정하기</BoardCreateTitle>
          </BoardCreateTitleBox>
          <BoardCreateForm onSubmit={handleSubmit(onValid)}>
            <FormTitle>
              <FormLabel htmlFor="title">제목</FormLabel>
              <FormInput
                defaultValue={postData?.title}
                {...register("title", {
                  required: "제목은 필수사항입니다.",
                })}
              />
            </FormTitle>
            <FormCategory>
              <FormLabel htmlFor="category">카테고리</FormLabel>
              <Controller
                name="selectOption"
                control={control}
                defaultValue="" // 선택된 옵션을 초기화할 경우 빈 문자열로 설정
                render={({ field }) => (
                  <CategorySelect {...field}>
                    <option value="" disabled hidden>
                      카테고리
                    </option>
                    <option value="2">자유게시판</option>
                    <option value="3">질문</option>
                    <option value="4">정보</option>
                  </CategorySelect>
                )}
              />
            </FormCategory>
            <FormContent>
              <FormLabel htmlFor="contents" id="contents">
                내용
              </FormLabel>
              <FormTextArea
                {...register("contents", {
                  required: "내용은 필수사항입니다.",
                })}
                defaultValue={postData?.contents}
                placeholder="정보통신망을 통하여 불법촬영물등, 음란, 저작권 침해 명예훼손, 청소년 유해물, 기타 위법 자료 들을 게시 또는 배포하면 해당 게시물은 경고 없이 삭제되며, 게시자는 법률에 따라 징역형 또는 벌금형에 처해질 수 있습니다."
              />
              {/* <Editor>
                <QuillEditor />
              </Editor> */}
            </FormContent>
            <FormFile>
              <FormLabel htmlFor="file">첨부파일</FormLabel>
              <Controller
                name="files"
                control={control}
                render={({ field }) => (
                  <FileInput
                    type="file"
                    onChange={e => {
                      // 최대 3개까지만 선택하도록 제한
                      const selectedFiles = Array.from(e.target.files).slice(
                        0,
                        3,
                      );
                      setViewFile([...selectedFiles]);
                      field.onChange(selectedFiles);
                    }}
                    multiple
                  />
                )}
              />
              <File>
                {viewFile.map((file, idx) => {
                  return <span key={idx}>{file.name}</span>;
                })}
              </File>
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

export default BoardUpdatePage;
