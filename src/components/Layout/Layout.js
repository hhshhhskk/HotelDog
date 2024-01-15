import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

import { MainContent, Wrapper } from "../../styles/Common/layoutStyle";

// 기본 Wrapper
const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
