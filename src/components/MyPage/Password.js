import styled from "@emotion/styled";
import React from "react";

const PasswordPage = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  p {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    color: #654222;
    margin-bottom: 10px;
  }

  img {
    position: relative;
    width: 60px;
    height: 62px;
    margin-bottom: 18px;
  }
  input {
    position: relative;
    color: #654222;
    width: 250px;
    height: 30px;
    overflow: hidden;
    font-size: 4rem;
    border: 1px solid #654222;
    border-radius: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    overflow: hidden;
  }
`;

const Password = () => {
  return (
    <PasswordPage>
      <img src={`${process.env.PUBLIC_URL}/images/MyPage/unlock.svg`} />
      <p>비밀번호를 다시 한 번 입력해주세요.</p>
      <input type="password" />
    </PasswordPage>
  );
};

export default Password;
