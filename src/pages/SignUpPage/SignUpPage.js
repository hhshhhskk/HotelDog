import styled from "@emotion/styled";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AgreeModal from "../../components/SignUp/AgreeModal";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import AddressPopup from "../../components/SignUp/AddressPopup";
import MailModal from "../../components/SignUp/MailModal";

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
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpTitle = styled.div`
  color: #654222;
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 40px;
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
  line-height: 38px;
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
  margin-bottom: 30px;
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
  border-radius: 7px;
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
  const [isMailModalOpen, setMailModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = agree => {
    if (agree === "no") {
      setAgree(false);
    }

    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const onValid = data => {
    console.log(data);
  };

  const onInValid = data => {
    let id = "";
    let password = "";
    let passwordcheck = "";
    if (data?.id?.message !== undefined) {
      id = data?.title?.message;
    }
    if (data?.password?.message !== undefined) {
      password = data?.content?.message;
    }
    if (data?.passwordcheck?.message !== undefined) {
      passwordcheck = data?.hashtag?.message;
    }
    alert(`${id}\n${password}\n${passwordcheck}`);
  };

  return (
    <>
      <Global styles={globalStyles} />
      {isMailModalOpen && <MailModal setMailModalOpen={setMailModalOpen} />}
      {isModalOpen && <AgreeModal closeModal={closeModal} />}
      <SignUpWrap>
        <SignUpContent>
          {popUp && (
            <AddressPopup setPopUp={setPopUp} setAddress={setAddress} />
          )}
          <SignUpForm onSubmit={handleSubmit(onValid, onInValid)}>
            <SignUpTitle>회원가입</SignUpTitle>
            <InnerDiv>
              <InputName>아이디</InputName>
              <InputBox
                {...register("id", {
                  required: "Id는 필수사항입니다.",
                })}
                placeholder="Id를 입력해주세요."
                style={styleBtn}
              />
              <InnerBtn
                onClick={() => {
                  setMailModalOpen(true);
                }}
              >
                메일인증
              </InnerBtn>
            </InnerDiv>
            <InputName>비밀번호</InputName>
            <InputBox
              {...register("password", {
                required: "비밀번호는 필수사항입니다.",
              })}
              placeholder="4자리 이상 특수문자 조합"
            />
            <InputName>비밀번호 확인</InputName>
            <InputBox
              {...register("passwordcheck", {
                required: "비밀번호 확인은 필수사항입니다.",
              })}
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <InnerDiv>
              <InputName>닉네임</InputName>
              <InputBox
                {...register("nickname", {
                  required: "닉네임은 필수사항입니다.",
                })}
                placeholder="닉네임을 입력해주세요."
              />
              <InnerBtn>중복체크</InnerBtn>
            </InnerDiv>
            <InputName>전화번호(+82)</InputName>
            <InputBox
              {...register("telnum", {
                required: "전화번호는 필수사항입니다.",
              })}
              placeholder="전화번호를 입력해주세요(-제외)"
            />
            <InnerDiv>
              <InputName style={styleBtn}>주소</InputName>
              <AddressBox>{address}</AddressBox>
              <InnerBtn
                onClick={() => {
                  setPopUp(true);
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
