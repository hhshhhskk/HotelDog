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
import {
  mailAuthAPI,
  nickNameCheckAPI,
  signUpAPi,
} from "../../api/SignUp/addressApi";

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
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [popUp, setPopUp] = useState(false);
  const [agree, setAgree] = useState(false);
  const [address, setAddress] = useState();
  const [mail, setMail] = useState("");
  const [mailChecked, setMailChecked] = useState(false);
  const [nickName, setNickName] = useState("");
  const [nickNameChecked, setNickNameChecked] = useState(false);
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mailChecked = false;
    // 이메일 형식이 맞지 않으면 알림창 띄우기
    if (!emailRegex.test(mail)) {
      alert("올바른 이메일 형식이 아닙니다.");
    } else {
      mailChecked = true;
    }
    if (mailChecked) {
      setMailModalOpen(true);
      document.body.classList.add("modal-open");
      mailAuthAPI(mail);
    }
  };

  const closeMailModal = () => {
    setMailModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const nickNameCheck = async e => {
    e.preventDefault();
    const result = await nickNameCheckAPI(nickName);
    if (result === 1) {
      setNickNameChecked(true);
    }
  };

  const onValid = data => {
    // console.log(data);
    let result = 0;
    if (mailChecked) {
      result = 1;
      if (nickNameChecked) {
        if (address) {
          if (agree) {
            const postData = {
              emailResponseVo: {
                email: mail,
                result,
              },
              upw: data.password,
              nickname: data.nickname,
              phoneNum: data.telnum,
              userAddress: "string",
              addressEntity: {
                addressName: address.address_name,
                region1depthName: address.region_1depth_name,
                region2depthName: address.region_2depth_name,
                region3depthName: address.region_3depth_name,
                zoneNo: address.zone_no,
                x: address.x,
                y: address.y,
                detail: data.detail,
              },
            };
            console.log(postData);
            signUpAPi(postData);
          } else {
            alert("이용약관동의를 해주세요.");
          }
        } else {
          alert("주소를 입력해주세요.");
        }
      } else {
        alert("닉네임 체크를 해주세요.");
      }
    } else {
      alert("메일인증을 해주세요.");
    }
  };

  const onInValid = data => {
    const email = data.email?.message;
    const password = data.password?.message;
    const passwordcheck = data.passwordcheck?.message;
    const nickname = data.nickname?.message;
    const telnum = data.telnum?.message;

    const req = [email, password, passwordcheck, nickname, telnum];

    const reqFil = req.filter(item => item !== undefined);
    const message = reqFil.join("\n");

    alert(`${message}`);
  };

  return (
    <>
      <Global styles={globalStyles} />
      {isMailModalOpen && (
        <MailModal
          mail={mail}
          closeMailModal={closeMailModal}
          setMailChecked={setMailChecked}
        />
      )}
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
              {mailChecked ? (
                <>
                  <InputBox
                    {...register("email", {
                      required: "Email은 필수사항입니다.",
                    })}
                    placeholder="Email을 입력해주세요."
                    value={mail}
                    style={styleBtn}
                    check="checked"
                    readOnly
                  />
                  <InnerBtn
                    onClick={() => {
                      setMail("");
                      setMailChecked(false);
                    }}
                  >
                    메일수정
                  </InnerBtn>
                </>
              ) : (
                <>
                  <InputBox
                    {...register("email", {
                      required: "Email은 필수사항입니다.",
                    })}
                    placeholder="Email을 입력해주세요."
                    style={styleBtn}
                    value={mail}
                    onChange={e => {
                      setMail(e.currentTarget.value);
                    }}
                  />
                  <InnerBtn onClick={openMailModal}>메일인증</InnerBtn>
                </>
              )}
            </InnerDiv>
            <InputName>비밀번호</InputName>
            <InputBox
              {...register("password", {
                required: "비밀번호는 필수사항입니다.",
                validate: value => {
                  // 영문숫자조합 8자 이상인지 확인
                  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                  return (
                    regex.test(value) ||
                    "비밀번호는 영문숫자조합 8자 이상이어야 합니다."
                  );
                },
              })}
              placeholder="영문 숫자 8자리 이상"
            />
            <InputName>비밀번호 확인</InputName>
            <InputBox
              {...register("passwordcheck", {
                required: "비밀번호 확인은 필수사항입니다.",
                validate: value =>
                  value === watch("password") ||
                  "비밀번호와 일치하지 않습니다.",
              })}
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <InnerDiv>
              <InputName>닉네임</InputName>
              {nickNameChecked ? (
                <>
                  <InputBox
                    {...register("nickname", {
                      required: "닉네임은 필수사항입니다.",
                    })}
                    defaultValue={nickName}
                    placeholder="닉네임을 입력해주세요."
                    check="checked"
                    readOnly
                  />
                  <InnerBtn
                    onClick={() => {
                      setNickNameChecked(false);
                    }}
                  >
                    다시입력
                  </InnerBtn>
                </>
              ) : (
                <>
                  <InputBox
                    {...register("nickname", {
                      required: "닉네임은 필수사항입니다.",
                    })}
                    onChange={e => {
                      e.preventDefault;
                      setNickName(e.currentTarget.value);
                    }}
                    placeholder="닉네임을 입력해주세요."
                  />
                  <InnerBtn onClick={nickNameCheck}>중복체크</InnerBtn>
                </>
              )}
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
            <InputBox
              {...register("detail")}
              placeholder="상세주소를 입력해주세요"
            />
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
