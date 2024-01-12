import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderCategory,
  HeaderCategoryItem,
  HeaderContent,
  HeaderDiv,
  HeaderTop,
  InputDiv,
  LogoImg,
  SearchBox,
  SearchBtn,
  SearchBtnImg,
} from "../../styles/Common/headerStyle";

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
  };

  const searchBtnClick = () => {
    alert("호텔검색버튼클릭!");
  };

  const categoryBtnClick = item => {
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
          {categoryItems.map((item, idx) => {
            return (
              <HeaderCategoryItem
                key={idx}
                onClick={() => categoryBtnClick(item)}
              >
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
