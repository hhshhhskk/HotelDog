import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AgreeModal from "../../components/SignUp/AgreeModal";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import AddressPopup from "../../components/SignUp/AddressPopup";
import MailModal from "../../components/SignUp/MailModal";
import {
  AddressBox,
  AgreeDiv,
  AgreeImg,
  InnerBtn,
  InnerDiv,
  InputBox,
  InputName,
  SignUpBtn,
  SignUpContent,
  SignUpForm,
  SignUpTitle,
  SignUpWrap,
} from "../../styles/SignUpPageStyle/signUpPageStyle";
import { MailAuthAPI, signUpAPi } from "../../api/SignUp/addressApi";

const globalStyles = css`
  body.modal-open {
    overflow: hidden;
  }
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
  const [address, setAddress] = useState();
  const [mail, setMail] = useState("");

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

  const openMailModal = () => {
    if (mail) {
      setMailModalOpen(true);
      document.body.classList.add("modal-open");
    }
    // MailAuthAPI();
  };

  const closeMailModal = () => {
    setMailModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const onValid = data => {
    console.log(data);

    const postData = {
      emailResponseVo: {
        email: "string",
        result: 0,
      },
      upw: "password",
      nickname: "string",
      phoneNum: "01702462778",
      userAddress: "string",
      addressEntity: {
        addressName: "string",
        region1depthName: "string",
        region2depthName: "string",
        region3depthName: "string",
        zoneNo: "string",
        x: "string",
        y: "string",
        detail: "string",
      },
    };

    signUpAPi(postData);
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
      {isMailModalOpen && <MailModal closeMailModal={closeMailModal} />}
      {isModalOpen && <AgreeModal closeModal={closeModal} />}
      <SignUpWrap>
        <SignUpContent>
          {popUp && (
            <AddressPopup setPopUp={setPopUp} setAddress={setAddress} />
          )}
          <SignUpForm onSubmit={handleSubmit(onValid, onInValid)}>
            <SignUpTitle>회원가입</SignUpTitle>
            <InnerDiv>
              <InputName>이메일 아이디</InputName>
              <InputBox
                {...register("email", {
                  required: "Email은 필수사항입니다.",
                })}
                placeholder="Email을 입력해주세요."
                style={styleBtn}
                onChange={e => {
                  setMail(e.currentTarget.value);
                }}
              />
              <InnerBtn onClick={openMailModal}>메일인증</InnerBtn>
            </InnerDiv>
            <InputName>비밀번호</InputName>
            <InputBox
              {...register("password", {
                required: "비밀번호는 필수사항입니다.",
              })}
              placeholder="영문 숫자 8자리 이상"
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
              <AddressBox>{address?.address_name}</AddressBox>
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
