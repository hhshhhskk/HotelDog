import styled from "@emotion/styled";
import React, { useState } from "react";

const MainSearchFrom = () => {
  const SearchForm = styled.form`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 43px;
    font-size: 1.4rem;
    width: 1200px;
    height: 85px;
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

  const DogSelectDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
    height: 42px;
    padding: 10px 15px;
    border-radius: 9px;
    border: none;
    background-color: #fff;
  `;

  const DogSelect = styled.div`
    position: absolute;
    /* display: flex;
    justify-content: center; */
    top: 65px;
    left: 735px;
    width: 140px;
    background-color: #fff;
    padding: 10px;
    z-index: 1;
    border-radius: 9px;
    border: 1px solid #654222;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      /* align-items: center; */
      li {
        display: flex;
        align-items: center;
        padding: 10px 0px;
        /* height: 40px; */
        label {
          padding-right: 15px;
        }
        button {
          border: none;
          background-color: #fff;
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }
  `;

  const DogNumber = styled.input`
    width: 30px;
    border: none;
    /* text-align: center; */
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    background-color: hotpink;
    padding-left: 10px;
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

  const [dogInfo, setDogInfo] = useState([
    { size: "소형견", count: 0 },
    { size: "중형견", count: 0 },
    { size: "대형견", count: 0 },
    { size: "초대형견", count: 0 },
  ]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleIncrement = index => {
    setDogInfo(prevDogInfo => {
      const newDogInfo = [...prevDogInfo];
      newDogInfo[index].count += 1;
      return newDogInfo;
    });
  };

  const handleDecrement = index => {
    setDogInfo(prevDogInfo => {
      const newDogInfo = [...prevDogInfo];
      if (newDogInfo[index].count > 0) {
        newDogInfo[index].count -= 1;
      }
      return newDogInfo;
    });
  };

  return (
    <div>
      {/* !!!form 전송을 위한 작업 예정*/}
      <SearchForm method="post" action="">
        {/* 지역 선택 */}
        <LocationSelect>
          <option disabled selected hidden>
            지역을 선택해주세요
          </option>
          {/* !!!데이터오면 map으로 변경 */}
          <option>서울특별시</option>
          <option>대구광역시</option>
        </LocationSelect>

        {/* !!!날짜 선택 : 달력 삽입하기*/}
        <DateSelect type="date" />

        {/* 마리 선택 */}
        <DogSelectDiv>
          <div onClick={() => setDropdownVisible(!dropdownVisible)}>
            <img src={`${process.env.PUBLIC_URL}/images/footicon.svg`} alt="" />
            <span>사이즈 / 마리</span>
          </div>
          {dropdownVisible && (
            <DogSelect>
              <ul>
                {dogInfo.map((dog, index) => (
                  <li key={index}>
                    <label>{dog.size}</label>
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <DogNumber type="number" value={dog.count} readOnly />
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </li>
                ))}
              </ul>
            </DogSelect>
          )}
        </DogSelectDiv>

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
