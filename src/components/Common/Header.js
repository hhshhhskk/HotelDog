import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutAPI } from "../../api/Login/logoutApi";
import {
  postHotelListAPI,
  postJwtHotelListAPI,
  postSearchHotelListAPI,
  postSearchJwtHotelListAPI,
} from "../../api/Main/HotelApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import {
  HeaderCategory,
  HeaderContent,
  HeaderDiv,
  HeaderLogo,
  HeaderTop,
  HeaderTopContent,
  HeaderTopItem,
  InputDiv,
  SearchBox,
  SearchBt,
  SearchBtnImg,
} from "../../styles/Common/headerStyle";
import { useDispatch } from "react-redux";
import {
  postHotelListAsync,
  postJwtHotelListAsync,
} from "../../redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  // 메인페이지 주소
  const mainPage = location.pathname === "/";

  // 로그인 상태 값 받기
  const { isLogin, doLogout } = useCustomLogin();

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
  const handleClickSearch = async () => {
    // !!! 검색 기능 넣어주기
    // 1. 사용자가 입력한 글자를 포함하여서
    // 2. 검색을 하는 데이터형태를 갖추고
    // 3. 전손을 시켜줌.
    const filter = {
      search: "대구",
      address: "",
      main_filter: 0,
      from_date: "",
      to_date: "",
      dog_info: [],
      hotel_option_pk: [],
      filter_type: 0,
    };

    if (isLogin) {
      // 만약 로그인이 되었다면
      dispatch(postJwtHotelListAsync({ page: 1, setPostData: filter }));
    } else {
      // 만약 로그인이 아니라면
      dispatch(postHotelListAsync({ page: 1, setPostData: filter }));
    }

    navigate("/");
  };

  // 카테고리 클릭 시 페이지 이동
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

  // 로그아웃 클릭 시 쿠키 삭제 및 페이지 이동
  const handleClickLogOut = async e => {
    // 리프레쉬 토큰 삭제
    await logoutAPI();
    doLogout();
    navigate("/");
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
          {isLogin ? (
            <ul>
              <li>
                <span onClick={handleClickCate}>게시판</span>
              </li>
              <li>
                <span onClick={handleClickCate}>마이페이지</span>
              </li>
              <li>
                <span onClick={handleClickLogOut}>로그아웃</span>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <span onClick={handleClickCate}>게시판</span>
              </li>
              <li>
                <span onClick={handleClickCate}>로그인</span>
              </li>
            </ul>
          )}
        </HeaderCategory>
      </HeaderContent>
    </HeaderDiv>
  );
};

export default Header;
