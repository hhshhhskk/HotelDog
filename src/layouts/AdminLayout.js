import React from "react";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import SideBar from "../components/admin/Common/SideBar";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1250px;
  display: flex;
`;

const Contents = styled.div``;

const adminLayout = () => {
  return (
    <Wrapper>
      <SideBar />
      <Contents>
        {/* <h1>어드민 페이지 레이아웃</h1> */}
        <Outlet />
      </Contents>
    </Wrapper>
  );
};

export default adminLayout;
