import React from "react";
import TopButton from "../../components/Common/TopButton";
import {
  ListDiv,
  MainPageDiv,
  SearchForm,
  VisualDiv,
  VisualForm,
  VisualImg,
  VisualInner,
  VisualText,
} from "./mainPageStyle";

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
              <select>
                <option disabled selected hidden>
                  지역을 선택해주세요
                </option>
                <option>서울특별시</option>
                <option>대구광역시</option>
              </select>

              {/* 날짜 선택 */}
              <input type="date" />

              {/* 마리 선택 */}
              <select>
                <option selected>1마리</option>
                <option>2마리</option>
              </select>

              {/* 추가 필터 선택 */}
              <button type="button">필터</button>
              <button type="submit">적용</button>
            </SearchForm>
          </VisualForm>
        </VisualInner>
      </VisualDiv>

      {/* 호텔 리스트 출력 영역 */}
      <ListDiv></ListDiv>
      <TopButton />
    </MainPageDiv>
  );
};

export default MainPage;
