import React, { useState } from "react";
import MainSearchFrom from "../../components/Main/MainSearchFrom";
import TopButton from "../../components/Main/TopButton";
import {
  AdListDiv,
  AdText,
  AdTitle,
  FilterListDiv,
  FilterText,
  FilterTitle,
  HotelCardDiv,
  HotelListDiv,
  HotelPlusBt,
  HotelPlusBtDiv,
  MainPageDiv,
  VisualDiv,
  VisualForm,
  VisualImg,
  VisualInner,
  VisualText,
} from "../../styles/MainPageStyle/mainPageStyle";
import HotelCardForm from "../../components/Common/HotelCardForm";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const MainPage = () => {
  const navigate = useNavigate();
  // 필터 폼 클릭 시 스크롤 이동
  const handleClickForm = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // 정렬방식에 대한 useState, 초기값은 추천순
  const [selectSorting, setSelectSorting] = useState("추천순");

  //  정렬방식(별점순, 리뷰순) 선택
  const handleChangeSorting = e => {
    const selectedValue = e.target.value;
    setSelectSorting(selectedValue);
    filterData(selectedValue);
  };

  // 호텔리스트 정렬방식(별점순, 리뷰순) 필터
  const filterData = selectedValue => {
    // 선택된 값을 이용해서 데이터 필터링
    console.log("선택된 값 :", selectedValue);
  };

  // 날짜 넘겨주기(자식 컴포넌트인 calendar에서 알려 줌)
  const [reserveDay, setReserveDay] = useState({ startDay: "", endDay: "" });

  const changeSelectDay = (_sd, _ed) => {
    console.log("시작 :", _sd);
    console.log("완료 :", _ed);
    setReserveDay(prev => {
      return { startDay: _sd, endDay: _ed };
    });
  };

  // 이게 필요하나???
  useEffect(() => {
    console.log(reserveDay);
  }, [reserveDay]);

  const handleSelectGo = _hotel_pk => {
    console.log("상세페이지 보기", _hotel_pk);
    console.log(reserveDay);
    // useNavigate를 이용하여 이동과 정보를 함께 보내기
    navigate(`/hoteldetail/${_hotel_pk}`, { state: { day: reserveDay } });
  };

  return (
    <MainPageDiv>
      <VisualDiv>
        <VisualImg>
          <img src={`${process.env.PUBLIC_URL}/images/main.png`} alt="" />
        </VisualImg>

        <VisualInner>
          <VisualText>
            <span>
              나의 반려견에게 <br />
              최고의 하루를 선물하세요
            </span>
          </VisualText>

          {/* 검색 */}
          <VisualForm onClick={handleClickForm}>
            <MainSearchFrom changeSelectDay={changeSelectDay} />
          </VisualForm>
        </VisualInner>
      </VisualDiv>

      {/* 호텔리스트 */}
      <HotelListDiv>
        {/* 광고호텔 */}
        <AdListDiv>
          <AdText>
            <AdTitle>지금, 🔥 HOTDOG</AdTitle>
            <span>핫한 광고 상품을 추천드립니다!</span>
          </AdText>
          <HotelCardDiv>
            <HotelCardForm handleSelectGo={handleSelectGo} />
          </HotelCardDiv>
        </AdListDiv>

        {/* 필터호텔 */}
        <FilterListDiv>
          <FilterText>
            <FilterTitle>호텔 리스트 </FilterTitle>
            <span>등록된 주소 기준으로 보여드립니다</span>

            {/* 필터호텔 정렬방식 */}
            <form>
              <select value={selectSorting} onChange={handleChangeSorting}>
                <option value="추천순">추천순</option>
                <option value="별점순">별점순</option>
                <option value="리뷰순">리뷰순</option>
              </select>
            </form>
          </FilterText>
          <HotelCardDiv>
            <HotelCardForm handleSelectGo={handleSelectGo} />
          </HotelCardDiv>
          {/* 호텔 더 불러오기 버튼 */}
          <HotelPlusBtDiv>
            <HotelPlusBt>더 불러오기</HotelPlusBt>
            <img
              src={`${process.env.PUBLIC_URL}/images/hotelPlusArrow2.svg`}
              alt=""
            />
          </HotelPlusBtDiv>
        </FilterListDiv>
      </HotelListDiv>
      <TopButton />
    </MainPageDiv>
  );
};

export default MainPage;
