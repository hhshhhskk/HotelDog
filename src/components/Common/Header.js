import React, { useEffect, useState } from "react";
import {
  HeaderContent,
  HeaderDiv,
  HeaderTop,
  LogoImg,
} from "../../styles/Common/headerStyle";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const InputDiv = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBox = styled.input`
  width: 600px;
  height: 50px;
  padding-left: 30px;
  border: 1px solid #654222;
  border-right: none;
  border-radius: 50px 0 0 50px;
`;
const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #654222;
  border-left: none;
  border-radius: 0 50px 50px 0;
`;
const SearchBtnImg = styled.img`
  width: 20px;
  height: 20px;
`;

const HeaderCategory = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const HeaderCategoryItem = styled.span``;

const Header = () => {
  const categoryItems = ["이벤트", "로그인"];
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoBtnClick = () => {
    navigate("/");
    alert("호텔검색버튼클릭!");
  };

  const searchBtnClick = () => {
    alert("호텔검색버튼클릭!");
  };

  const categoryBtnClick = (item) => {
    if (item === "이벤트") {
      navigate("/event");
    } else if (item === "로그인") {
      navigate("/login");
    }
  };

  return (
    <HeaderDiv scrollPosition={scrollPosition}>
      <HeaderTop scrollPosition={scrollPosition}></HeaderTop>
      <HeaderContent>
        {scrollPosition > 50 ? (
          <LogoImg
            onClick={logoBtnClick}
            src={`${process.env.PUBLIC_URL}/images/logoAfter.svg`}
            alt=""
          />
        ) : (
          <LogoImg
            onClick={logoBtnClick}
            src={`${process.env.PUBLIC_URL}/images/logoBefore.svg`}
            alt=""
          />
        )}
        <InputDiv>
          <SearchBox />
          <SearchBtn onClick={searchBtnClick}>
            <SearchBtnImg
              src={`${process.env.PUBLIC_URL}/images/searchBtn.svg`}
              alt=""
            />
          </SearchBtn>
        </InputDiv>
        <HeaderCategory>
          {categoryItems.map((item) => {
            return (
              <HeaderCategoryItem onClick={categoryBtnClick(item)}>
                {item}
              </HeaderCategoryItem>
            );
          })}
        </HeaderCategory>
      </HeaderContent>
    </HeaderDiv>
  );
};

export default Header;
