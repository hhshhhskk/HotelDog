import styled from "@emotion/styled";
import axios from "axios";
import React, { useState } from "react";
import jwtAxios from "../../utils/jwtUtil";

const PasswordPage = styled.div`
  position: relative;
  width: 250px;
  height: 700px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  margin-top: 80px;
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
`;
const PasswordCheck = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border: 1px solid #654222;
  border-radius: 10px;
  overflow: hidden;
  input {
    position: absolute;
    width: 170px;
    height: 60px;
    left: 5px;
    border-radius: 10px;
    color: #654222;
    font-size: 4.2rem;
    padding-bottom: 10px;
    border: none;
  }
`;
const PasswordCheckBt = styled.div`
  position: absolute;
  right: 0;
  padding-right: 5px;
`;
const PasswordPostBt = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 28px;
  background-color: #654222;
  border-radius: 7px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Password = ({ onPasswordVerified }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await jwtAxios.post("/api/user/info", { upw: password });
      alert("비밀번호가 확인되었습니다");
      onPasswordVerified(); // 부모 컴포넌트로 비밀번호 확인 완료를 알림
      console.log("비밀번호가 확인되었습니다.", response.data);
    } catch (error) {
      alert("비밀번호 확인에 실패했습니다");
      console.error("비밀번호 확인에 실패했습니다:", error);
    }
  };
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleSubmit(); // 엔터 키 입력 시 handleSubmit 함수 호출
    }
  };
  return (
    <PasswordPage>
      <img src={`${process.env.PUBLIC_URL}/images/MyPage/unlock.svg`} />
      <p>비밀번호를 다시 한 번 입력해주세요.</p>
      <PasswordCheck>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />
        <PasswordCheckBt>
          <PasswordPostBt onClick={handleSubmit}>확인</PasswordPostBt>
        </PasswordCheckBt>
      </PasswordCheck>
    </PasswordPage>
  );
};

export default Password;
