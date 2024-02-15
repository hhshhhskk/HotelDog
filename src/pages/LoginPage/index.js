import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import {
  FormDiv,
  IdSave,
  IdSaveImgBtn,
  InputDiv,
  LoginArea,
  LoginBox,
  LoginBtn,
  LoginBusiness,
  LoginCommon,
  LoginContent,
  LoginForm,
  LoginInput,
  LoginLogo,
  LoginType,
  LoginWrap,
  SignUpBox,
  SignUpBtn,
} from "../../styles/LoginPageStyle/loginPageStyle";

// 상요자 정보
// {
//   "userEmail": "testid@naver.com",
//   "upw": "test123"
// }

// {
//   "userEmail": "testid2@naver.com",
//   "upw": "test123"
// }

// 로그인 페이지
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [userType, setUserType] = useState(1);
  const savedId = localStorage.getItem("savedId");
  const [idSaved, setIdSaved] = useState(savedId ? true : false);
  const { doLogin, moveToPath } = useCustomLogin();

  const saveClicked = () => {
    if (idSaved === true) {
      //로컬스토리지에 아이디 제거
      localStorage.removeItem("savedId");
    }
    setIdSaved(!idSaved);
  };

  const onValid = data => {
    // console.log(data);
    const loginParam = { id: data.id, pw: data.password };
    doLogin({ loginParam, successFn, failFn, errorFn });
    if (idSaved) {
      localStorage.setItem("savedId", data.id);
    }
  };
  const successFn = result => {
    // console.log("성공", result);
    moveToPath("/");
  };

  const failFn = result => {
    console.log("실패", result);
    alert("이메일 및 비밀번호 확인하세요.");
  };

  const errorFn = result => {
    console.log("서버 에러", result);
    alert(result);
  };

  const onInValid = data => {
    // console.log(data);
    let id = data.id?.message;
    let password = data.password?.message;

    const req = [id, password];

    const reqFil = req.filter(item => item !== undefined);
    const message = reqFil.join("\n");

    alert(`${message}`);
  };
  return (
    <LoginWrap>
      <LoginContent>
        <LoginBox>
          <LoginLogo
            src={`${process.env.PUBLIC_URL}/images/Login/loginLogo.svg`}
            alt=""
          />
          <LoginArea>
            <LoginType>
              <LoginCommon
                userType={userType}
                onClick={() => {
                  setUserType(1);
                }}
              >
                일반회원
              </LoginCommon>
              <LoginBusiness
                userType={userType}
                onClick={() => {
                  setUserType(2);
                }}
              >
                사업자
              </LoginBusiness>
            </LoginType>
            <LoginForm onSubmit={handleSubmit(onValid, onInValid)}>
              <FormDiv>
                <InputDiv>
                  <LoginInput
                    {...register("id", {
                      required: "아이디는 필수사항입니다.",
                    })}
                    defaultValue={savedId ? savedId : ""}
                    placeholder="아이디 (example@gmail.com)"
                  />
                  <LoginInput
                    {...register("password", {
                      required: "비밀번호는 필수사항입니다.",
                    })}
                    type="password"
                    placeholder="비밀번호"
                  />
                </InputDiv>
                <LoginBtn>로그인</LoginBtn>
              </FormDiv>
              <IdSave>
                {idSaved ? (
                  <IdSaveImgBtn
                    src={`${process.env.PUBLIC_URL}/images/Login/idSaveBtn1.svg`}
                    onClick={saveClicked}
                  />
                ) : (
                  <IdSaveImgBtn
                    src={`${process.env.PUBLIC_URL}/images/Login/idSaveBtn2.svg`}
                    onClick={saveClicked}
                  />
                )}
                아이디 저장
              </IdSave>
              <SignUpBox>
                아직 회원이 아니신가요?
                <SignUpBtn
                  onClick={() => {
                    navigate(`/signup/${userType}`);
                  }}
                >
                  회원가입
                </SignUpBtn>
              </SignUpBox>
            </LoginForm>
          </LoginArea>
        </LoginBox>
      </LoginContent>
    </LoginWrap>
  );
};

export default LoginPage;
