import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  SearchBtn,
  SearchBtnImg,
  SearchBt,
} from "../../styles/Common/headerStyle";

const Header = () => {
  const categoryItems = ["게시판", "이벤트", "로그인"];
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

  // 로고 클릭 시 메인홈으로 전환
  const handleClickLogo = () => {
    navigate("/");
  };

  const searchBtnClick = () => {
    alert("호텔검색버튼클릭!");
  };

  // SNS 선택 시 페이지 전환
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

  // 카테고리 선택 시 페이지 전환
  const handleClickCate = e => {
    const spanText = e.target.innerText;
    if (spanText === "게시판") {
      navigate("/event");
    } else if (spanText === "마이페이지") {
      navigate("/mypage");
    } else if (spanText === "로그인") {
      navigate("/login");
    } else if (item === "게시판") {
      navigate("/board");
    }
  };

  return (
    <HeaderDiv scrollPosition={scrollPosition}>
      {/* SNS 카테고리 바 */}
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

      <HeaderContent>
        {scrollPosition > 40 ? (
          <HeaderLogo
            onClick={handleClickLogo}
            src={`${process.env.PUBLIC_URL}/images/logoAfter.svg`}
            alt=""
          />
        ) : (
          <HeaderLogo
            onClick={handleClickLogo}
            src={`${process.env.PUBLIC_URL}/images/logoBefore.svg`}
            alt=""
          />
        )}
        <InputDiv>
          <SearchBox />
          <SearchBt onClick={searchBtnClick}>
            {scrollPosition > 40 ? (
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/images/searchBtAfter.svg`}
                alt=""
              />
            ) : (
              <SearchBtnImg
                src={`${process.env.PUBLIC_URL}/images/searchBtBefore.svg`}
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
            {/* 로그인 유무로 삼항 연산자 작성 예정 */}
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
