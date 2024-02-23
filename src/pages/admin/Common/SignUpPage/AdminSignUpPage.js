import React from "react";
import styled from "@emotion/styled";
import AdminSignUpForm from "../../../../components/admin/SiginUp/AdminSignUpForm";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminSignUpPage = () => {
  return (
    <Wrapper>
      <AdminSignUpForm />
    </Wrapper>
  );
};

export default AdminSignUpPage;
