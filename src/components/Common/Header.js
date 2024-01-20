import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderCategory,
  HeaderContent,
  HeaderDiv,
  HeaderTop,
  HeaderTopContent,
  HeaderTopItem,
  InputDiv,
  HeaderLogo,
  SearchBox,
  SearchBtnImg,
  SearchBt,
} from "../../styles/Common/headerStyle";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 메인페이지 주소
  const mainPage = location.pathname === "/";

  // 스크롤 위치에 대한 useState
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // 스크롤 위치 업데이트
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SNS 클릭 시 페이지 전환
  const handleClickSns = e => {
    const snsImg = e.target.id;
    if (snsImg === "facebook") {
      navigate("/");
    } else if (snsImg === "instagram") {
      navigate("/");
    } else if (snsImg === "twitter") {
      navigate("/");
    } else if (snsImg === "youtube") {
      navigate("/");
    }
  };

  // 로고 클릭 시 메인홈으로 전환
  const handleClickLogo = () => {
    navigate("/");
  };

  // 검색할 시 검색에 대한 필터 작동
  const handleClickSearch = () => {
    // !!! 검색 기능 넣어주기
    alert("호텔 검색");
  };

  // 카테고리 선택 시 페이지 전환
  const handleClickCate = e => {
    const spanText = e.target.innerText;
    if (spanText === "게시판") {
      navigate("/board");
    } else if (spanText === "마이페이지") {
      navigate("/mypage");
    } else if (spanText === "로그인") {
      navigate("/login");
    }
  };

  return (
    <HeaderDiv scrollPosition={scrollPosition} mainPage={mainPage}>
      {/* Header 상단 : SNS */}
      {mainPage && (
        <HeaderTop scrollPosition={scrollPosition}>
          <HeaderTopContent>
            <HeaderTopItem>
              <img
                id="facebook"
                src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                alt=""
                onClick={handleClickSns}
              />
              <img
                id="instagram"
                src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                alt=""
                onClick={handleClickSns}
              />
              <img
                id="twitter"
                src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                alt=""
                onClick={handleClickSns}
              />
              <img
                id="youtube"
                src={`${process.env.PUBLIC_URL}/images/youtube.svg`}
                alt=""
                onClick={handleClickSns}
              />
            </HeaderTopItem>
          </HeaderTopContent>
        </HeaderTop>
      )}

      {/* Header 하단 : 로고, 검색, 카테고리*/}
      <HeaderContent>
        {scrollPosition < 40 && mainPage ? (
          <HeaderLogo
            onClick={handleClickLogo}
            src={`${process.env.PUBLIC_URL}/images/logoBefore.svg`}
            alt=""
          />
        ) : (
          <HeaderLogo
            onClick={handleClickLogo}
            src={`${process.env.PUBLIC_URL}/images/logoAfter.svg`}
            alt=""
          />
        )}
        <InputDiv>
          <SearchBox scrollPosition={scrollPosition} mainPage={mainPage} />
          <SearchBt
            scrollPosition={scrollPosition}
            mainPage={mainPage}
            onClick={handleClickSearch}
          >
            {scrollPosition < 40 && mainPage ? (
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/images/searchBtBefore.svg`}
                alt=""
              />
            ) : (
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/images/searchBtAfter.svg`}
                alt=""
              />
            )}
          </SearchBt>
        </InputDiv>

        <HeaderCategory>
          <ul>
            <li>
              <span onClick={handleClickCate}>게시판</span>
            </li>
            <li>
              <span onClick={handleClickCate}>마이페이지</span>
            </li>
            {/* !!! 로그인 유무로 삼항 연산자 작성 예정 */}
            <li>
              <span onClick={handleClickCate}>로그인</span>
            </li>
          </ul>
        </HeaderCategory>
      </HeaderContent>
    </HeaderDiv>
  );
};

export default Header;
