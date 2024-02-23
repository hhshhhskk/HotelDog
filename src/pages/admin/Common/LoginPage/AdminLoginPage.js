import React from "react";
import AdminLoginForm from "../../../../components/admin/Login/AdminLoginForm";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background-color: #fff;
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 70px;

  border: 1px solid #696969;
  border-radius: 20px;
`;

const Logo = styled.img`
  width: 200px;
  height: 50px;
`;

const ModeText = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-bottom: 50px;

  font-size: 1.6rem;

  span {
    margin-right: 100px;
    color: #323232;
  }
`;

const AdminLoginPage = () => {
  return (
    <Wrapper>
      <LoginBox>
        <Logo
          src={`${process.env.PUBLIC_URL}/admin/images/Login/adminLogo.svg`}
        />
        <ModeText>
          <span>관리자 로그인</span>
        </ModeText>
        <AdminLoginForm />
      </LoginBox>
    </Wrapper>
  );
};

export default AdminLoginPage;
