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

  // Header 카테고리 선택 시 페이지 전환 이벤트
  const handleClickCate = e => {
    const spanText = e.target.innerText;
    if (spanText === "게시판") {
      navigate("/event");
    } else if (spanText === "마이페이지") {
      navigate("/mypage");
    } else if (spanText === "로그인") {
      navigate("/login");
    }
  };

  return (
    <HeaderDiv scrollPosition={scrollPosition}>
      <HeaderTop scrollPosition={scrollPosition} />
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
          <ul>
            <li>
              <span onClick={e => handleClickCate(e)}>게시판</span>
            </li>
            <li>
              <span onClick={e => handleClickCate(e)}>마이페이지</span>
            </li>
            {/* 로그인 정보로 삼항 연산자 작성 예정 */}
            <li>
              <span onClick={e => handleClickCate(e)}>로그인</span>
            </li>
          </ul>
        </HeaderCategory>
      </HeaderContent>
    </HeaderDiv>
  );
};

export default Header;
