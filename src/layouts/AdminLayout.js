import React from "react";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import SideBar from "../components/admin/Common/SideBar";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1250px;
  display: flex;
`;

const Contents = styled.div`
  margin-left: 300px;
`;

const AdminLayout = () => {
  return (
    <Wrapper>
      <SideBar />
      <Contents>
        <Outlet />
      </Contents>
    </Wrapper>
  );
};

export default AdminLayout;
