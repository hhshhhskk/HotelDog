import styled from "@emotion/styled";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";

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
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputName = styled.div`
  width: 430px;
  height: 20px;
  font-size: 1.1rem;
  color: #654222;
`;

const InputBox = styled.input`
  width: 430px;
  height: 40px;
  margin-bottom: 30px;
  font-size: 1.3rem;
  padding-left: 10px;
  border: 1px solid #654222;
  border-radius: 10px;
`;

const AddressBox = styled.div`
  width: 430px;
  height: 40px;
  margin-bottom: 30px;
  font-size: 1.3rem;
  line-height: 40px;
  padding-left: 10px;
  border: 1px solid #654222;
  border-radius: 10px;
`;

const InnerDiv = styled.div`
  position: relative;
`;

const InnerBtn = styled.div`
  position: absolute;
  top: 29px;
  right: 10px;
  width: 85px;
  height: 23px;
  background-color: #654222;
  color: #fff;
  text-align: center;
  line-height: 22px;

  border-radius: 6px;
`;

const AgreeDiv = styled.div`
  width: 430px;
  font-size: 1.5rem;
  color: #654222;
  margin-bottom: 15px;
`;

const AgreeImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const SignUpBtn = styled.button`
  width: 255px;
  height: 40px;
  background-color: #654222;
  color: #fff;
  font-size: 1.3rem;
  border: none;
  border-radius: 15px;
`;

const styleBtn = {
  paddingRight: 90,
};

// 회원가입 페이지
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [popUp, setPopUp] = useState(false);
  const [agree, setAgree] = useState(false);
  const [address, setAddress] = useState("");

  const handleComplete = data => {
    console.log(data);
    setAddress(data.address);
  };

  return (
    <SignUpWrap>
      <SignUpContent>
        {popUp && (
          <div>
            <DaumPostcode onComplete={handleComplete} />
          </div>
        )}
        <SignUpForm>
          <InnerDiv>
            <InputName>아이디</InputName>
            <InputBox type="text" placeholder="" style={styleBtn} />
            <InnerBtn>메일인증</InnerBtn>
          </InnerDiv>
          <InputName>비밀번호</InputName>
          <InputBox type="password" placeholder="" />
          <InputName>닉네임</InputName>
          <InputBox type="text" placeholder="" />
          <InputName>전화번호(+82)</InputName>
          <InputBox type="text" placeholder="" />
          <InnerDiv>
            <InputName style={styleBtn}>주소</InputName>
            <AddressBox>{address}</AddressBox>
            <InnerBtn
              onClick={() => {
                setPopUp(!popUp);
              }}
            >
              주소찾기
            </InnerBtn>
          </InnerDiv>
          <AgreeDiv>
            이용약관동의
            {agree ? (
              <AgreeImg
                onClick={() => {
                  setAgree(!agree);
                }}
                src={`${process.env.PUBLIC_URL}/images/SignUp/signUpAgreeBtn1.svg`}
                alt=""
              />
            ) : (
              <AgreeImg
                onClick={() => {
                  setAgree(!agree);
                }}
                src={`${process.env.PUBLIC_URL}/images/SignUp/signUpAgreeBtn2.svg`}
                alt=""
              />
            )}
          </AgreeDiv>
          <SignUpBtn>회원가입 신청하기</SignUpBtn>
        </SignUpForm>
      </SignUpContent>
    </SignUpWrap>
  );
};

export default SignUpPage;
