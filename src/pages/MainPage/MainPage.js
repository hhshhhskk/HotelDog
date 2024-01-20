import React, { useState } from "react";
import HotelCardForm from "../../components/Main/HotelCardForm";
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
  MainPageDiv,
  VisualDiv,
  VisualForm,
  VisualImg,
  VisualInner,
  VisualText,
} from "./mainPageStyle";

const MainPage = () => {
  const [selectOption, setSelectOption] = useState();

  //  호텔리스트 정렬방식(별점순, 리뷰순) 선택
  const handleChangeOption = e => {
    const selectedValue = e.target.value;
    setSelectOption(selectedValue);
    filterData(selectedValue);
  };

  // 호텔리스트 정렬방식(별점순, 리뷰순) 필터
  const filterData = selectedValue => {
    // 선택된 값을 이용해서 데이터 필터링
    console.log("선택된 값 :", selectedValue);
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
              나의 반려견에게 <br /> 최고의 하루를 선물하세요
            </span>
          </VisualText>

          <VisualForm>
            {/* 메인 검색창 */}
            <MainSearchFrom />
          </VisualForm>
        </VisualInner>
      </VisualDiv>

      {/* 호텔 리스트 */}
      <HotelListDiv>
        {/* 광고 호텔 */}
        <AdListDiv>
          <AdText>
            <AdTitle>지금, 🔥 HOTDOG</AdTitle>
            <span>핫한 광고 상품을 추천드립니다!</span>
          </AdText>
          <HotelCardDiv>
            {/* 맵을 돌리자^^ */}
            <HotelCardForm />
          </HotelCardDiv>
        </AdListDiv>

        {/* 필터 호텔 */}
        <FilterListDiv>
          <FilterText>
            <FilterTitle>호텔 리스트 </FilterTitle>
            <span>등록된 주소 기준으로 보여드립니다</span>
            <form>
              <select onChange={handleChangeOption}>
                <option disabled selected hidden>
                  정렬방식
                </option>
                <option value="별점순">별점순</option>
                <option value="리뷰순">리뷰순</option>
              </select>
            </form>
          </FilterText>

          <HotelCardDiv>
            {/* 맵을 돌리자^^ */}
            <HotelCardForm />
          </HotelCardDiv>
        </FilterListDiv>
      </HotelListDiv>
      <TopButton />
    </MainPageDiv>
  );
};

export default MainPage;
