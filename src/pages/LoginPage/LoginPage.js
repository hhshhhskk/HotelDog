import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const LoginContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const LoginLogo = styled.img`
  width: 200px;
  height: 200px;

  margin-top: 30px;
`;

const LoginArea = styled.div`
  width: 475px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const LoginType = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  line-height: 50px;
  font-size: 1.8rem;
  text-align: center;
  border: none;
`;

const LoginCommon = styled.div`
  width: 50%;
  height: 100%;
  color: #fff;
  background-color: ${props => (props.userType === 1 ? "#654222" : "#d9d9d9")};

  cursor: pointer;
  border-top: 1px solid #d9d9d9;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const LoginBusiness = styled(LoginCommon)`
  background-color: ${props => (props.userType === 1 ? "#d9d9d9" : "#654222")};
`;

const LoginForm = styled.form`
  position: relative;
  width: 100%;
  height: 210px;
  border: 1px solid #d9d9d9;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 290px;
  height: 90px;
`;

const LoginInput = styled.input`
  width: 290px;
  height: 40px;
  font-size: 1.5rem;
  padding-left: 10px;
  border: 1px solid #654222;
  border-radius: 10px;
`;

const LoginBtn = styled.button`
  width: 110px;
  height: 90px;

  font-size: 1.5rem;
  color: #fff;
  background-color: #654222;

  border: none;
  border-radius: 10px;
`;

const IdSave = styled.div`
  width: 100%;
  height: 20px;

  font-size: 1.2rem;
  color: gray;

  margin-top: 10px;
  margin-left: 65px;
`;

const IdSaveImgBtn = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  cursor: pointer;
`;

const SignUpBox = styled.div`
  font-size: 1.5rem;
  color: gray;
`;

const SignUpBtn = styled.span`
  font-size: 1.5rem;
  color: #654222;
  margin-left: 10px;
  cursor: pointer;
`;

// 로그인 페이지
const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(1);
  const [idSaved, setIdSaved] = useState(false);

  const saveClicked = () => {
    setIdSaved(!idSaved);
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
            <LoginForm>
              <FormDiv>
                <InputDiv>
                  <LoginInput
                    type="text"
                    placeholder="아이디 (example@gmail.com)"
                  />
                  <LoginInput type="password" placeholder="비밀번호" />
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
                    navigate("/signup");
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
