import styled from "@emotion/styled";
import React from "react";
import { useFormAction } from "react-router-dom";

const SignUpWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const SignUpContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SignUpForm = styled.form`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputName = styled.div`
  width: 650px;
  height: 25px;
  font-size: 1.8rem;
  color: #654222;
`;

const InputBox = styled.input`
  width: 650px;
  height: 60px;
  margin-bottom: 30px;
  border: 1px solid #654222;
  border-radius: 15px;
`;

const SignUpBtn = styled.button`
  width: 395px;
  height: 60px;
  background-color: #654222;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 15px;
`;

// 회원가입 페이지
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormAction();
  return (
    <SignUpWrap>
      <SignUpContent>
        <SignUpForm>
          <InputName>아이디</InputName>
          <InputBox />
          <InputName>비밀번호</InputName>
          <InputBox />
          <InputName>닉네임</InputName>
          <InputBox />
          <InputName>전화번호(+82)</InputName>
          <InputBox />
          <InputName>주소</InputName>
          <InputBox />
          <div>이용약관동의</div>
          <SignUpBtn>회원가입 신청하기</SignUpBtn>
        </SignUpForm>
      </SignUpContent>
    </SignUpWrap>
  );
};

export default SignUpPage;
