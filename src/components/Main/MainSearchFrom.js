import styled from "@emotion/styled";
import React from "react";

const MainSearchFrom = () => {
  const SearchForm = styled.form`
    position: relative;
    display: flex;
    justify-content: space-between;
    /* 왜 안먹지 */
    align-items: center;
    /* background-color: aquamarine; */
    padding: 20px 43px;
    font-size: 1.4rem;
  `;

  const LocationSelect = styled.select`
    width: 420px;
    height: 42px;
    padding: 10px 25px;
    border-radius: 9px;
    border: none;
    color: #9c9c9c;
  `;

  const DateSelect = styled.input`
    width: 250px;
    height: 42px;
    padding: 10px 25px;
    border-radius: 9px;
    border: none;
  `;

  const NumberSelect = styled.select`
    width: 140px;
    height: 42px;
    padding: 10px 25px;
    border-radius: 9px;
    border: none;
  `;

  const OptionSelect = styled.button`
    width: 140px;
    height: 42px;
    padding: 10px 25px;
    border-radius: 9px;
    border: none;
    color: #9c9c9c;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const SubmitButton = styled.button`
    width: 120px;
    height: 42px;
    /* padding: 10px 25px; */
    border-radius: 9px;
    border: none;
    background-color: #ccb197;
    color: #654222;
    font-weight: 700;
    cursor: pointer;
  `;

  return (
    <div>
      <SearchForm>
        {/* 지역 선택 */}
        <LocationSelect>
          <option disabled selected hidden>
            지역을 선택해주세요
          </option>
          {/* !!!데이터오면 map으로 변경 */}
          <option>서울특별시</option>
          <option>대구광역시</option>
        </LocationSelect>

        {/* 날짜 선택 */}
        <DateSelect type="date" />

        {/* 마리 선택 */}
        <NumberSelect>
          {/* <li>
            <label>
              <input type="checkbox" name="소형견" />
              소형견
            </label>
            <input type="number">마리</input>
          </li> */}
          <option selected>
            <img src={`${process.env.PUBLIC_URL}/images/footicon.svg`} alt="" />
            1 마리
          </option>
          <option>2 마리</option>
          <option>3 마리+</option>
        </NumberSelect>

        {/* 추가 필터 선택 */}
        <OptionSelect type="button">
          <img src={`${process.env.PUBLIC_URL}/images/filtericon.svg`} alt="" />
          필터
        </OptionSelect>
        <SubmitButton type="submit">적용</SubmitButton>
      </SearchForm>
    </div>
  );
};

export default MainSearchFrom;
