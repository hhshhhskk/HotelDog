import React from "react";
import TopButton from "../../components/Main/TopButton";
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
import MainSearchFrom from "../../components/Main/MainSearchFrom";

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
          <VisualForm>
            {/* 메인 검색창 */}
            <MainSearchFrom />
          </VisualForm>
        </VisualInner>
      </VisualDiv>

      {/* 호텔 리스트 영역 */}
      <ListDiv>
        {/* 광고 호텔 */}
        <EventListDiv>
          <EventText>
            <h1>지금, 🔥 HOTDOG</h1>
          </EventText>
          <HotelListDiv>
            {/* 맵을 돌리자^^ */}
            <HotelCardForm />
          </HotelListDiv>

          {/* 호텔 */}
          <HotelListDiv>
            <h1>호텔리스트</h1>
            <span>정렬방식</span>
          </HotelListDiv>
        </EventListDiv>
      </ListDiv>
      <TopButton />
    </MainPageDiv>
  );
};

export default MainPage;
