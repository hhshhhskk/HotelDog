import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

import { MainContent, Wrapper } from "../../styles/Common/layoutStyle";
import TopButton from "../Common/TopButton";
import DefaultButton from "../Common/DefaultButton";

// 기본 Wrapper
const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <TopButton />
      <DefaultButton />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
