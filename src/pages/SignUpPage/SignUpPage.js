import styled from "@emotion/styled";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";
import AgreeModal from "../../components/SignUp/AgreeModal";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";

const globalStyles = css`
  body.modal-open {
    overflow: hidden;
  }
`;

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
  width: 550px;
  height: 20px;
  font-size: 1.4rem;
  color: #654222;
  margin-bottom: 11px;
`;

const InputBox = styled.input`
  width: 550px;
  height: 40px;
  margin-bottom: 23px;
  font-size: 1.4rem;
  padding-left: 10px;
  border: 1px solid #654222;
  border-radius: 10px;
`;

const AddressBox = styled.div`
  width: 550px;
  height: 40px;
  margin-bottom: 30px;
  font-size: 1.4rem;
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
  top: 36px;
  right: 10px;
  width: 80px;
  height: 30px;
  background-color: #654222;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  line-height: 3rem;

  border-radius: 6px;
`;

const AgreeDiv = styled.div`
  width: 550px;
  font-size: 1.5rem;
  color: #654222;
  margin-bottom: 64px;
`;

const AgreeImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const SignUpBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #654222;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
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

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalOpen(false);
    setAgree(false);
    document.body.classList.remove("modal-open");
  };

  const handleComplete = data => {
    console.log(data);
    setAddress(data.address);
  };
  console.log(agree);
  return (
    <>
      <Global styles={globalStyles} />
      {isModalOpen && <AgreeModal closeModal={closeModal} />}
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
              <InputBox
                type="text"
                placeholder="이메일 ex) example@gmail.com"
                style={styleBtn}
              />
              <InnerBtn>메일인증</InnerBtn>
            </InnerDiv>
            <InputName>비밀번호</InputName>
            <InputBox type="password" placeholder="4자리 이상 특수문자 조합" />
            <InputName>비밀번호 확인</InputName>
            <InputBox
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <InnerDiv>
              <InputName>닉네임</InputName>
              <InputBox type="text" placeholder="" />
              <InnerBtn>중복체크</InnerBtn>
            </InnerDiv>
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
                    openModal();
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
    </>
  );
};

export default SignUpPage;
