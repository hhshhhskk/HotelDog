import React from "react";
import TopButton from "../../components/Common/TopButton";
import {
  DateSelect,
  EventListDiv,
  EventText,
  HotelListDiv,
  ListDiv,
  LocationSelect,
  MainPageDiv,
  NumberSelect,
  OptionSelect,
  SearchForm,
  SubmitButton,
  VisualDiv,
  VisualForm,
  VisualImg,
  VisualInner,
  VisualText,
} from "./mainPageStyle";
import HotelCardForm from "../../components/Main/HotelCardForm";

const MainPage = () => {
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

          {/* 필터 검색 기능 : 컴포넌트로 빼기 */}
          <VisualForm>
            <SearchForm>
              {/* 지역 선택 */}
              <LocationSelect>
                <option disabled selected hidden>
                  지역을 선택해주세요
                </option>
                <option>서울특별시</option>
                <option>대구광역시</option>
              </LocationSelect>

              {/* 날짜 선택 */}
              <DateSelect type="date" />

              {/* 마리 선택 */}
              <NumberSelect>
                <option selected>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/footicon.svg`}
                    alt=""
                  />
                  1 마리
                </option>
                <option>2 마리</option>
                <option>3 마리+</option>
              </NumberSelect>

              {/* 추가 필터 선택 */}
              <OptionSelect type="button">
                <img
                  src={`${process.env.PUBLIC_URL}/images/filtericon.svg`}
                  alt=""
                />
                필터
              </OptionSelect>
              <SubmitButton type="submit">적용</SubmitButton>
            </SearchForm>
          </VisualForm>
        </VisualInner>
      </VisualDiv>

      {/* 호텔 리스트 출력 영역 */}
      <ListDiv>
        {/* EventListDiv */}
        <EventListDiv>
          <EventText>
            <h1>지금, 🔥 HOTDOG</h1>
            <button>전체보기</button>
          </EventText>

          <HotelListDiv>
            {/* 맵을 돌리자^^ */}
            <HotelCardForm />
          </HotelListDiv>

          {/* HotelListDiv */}
          <div>
            <h1>호텔리스트</h1>
            <span>정렬방식</span>
          </div>
        </EventListDiv>
      </ListDiv>
      <TopButton />
    </MainPageDiv>
  );
};

export default MainPage;
