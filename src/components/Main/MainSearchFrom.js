import React, { useState } from "react";
import {
  DateSelect,
  DogNumber,
  DogNumberDiv,
  DogSelect,
  DogSelectDiv,
  DogTitle,
  ExtraDogNumber,
  ExtraLabel,
  FilterOption,
  FilterOptionDiv,
  FilterRadio,
  FilterSelect,
  FilterSelectDiv,
  FilterTitle,
  LocationOption,
  LocationSelect,
  LocationSelectDiv,
  MinusBt,
  OptionSelect,
  OptionSelectDiv,
  PlusBt,
  SearchForm,
  SubmitButton,
} from "../../styles/MainPageStyle/MainSearchFromStyle";

const MainSearchFrom = () => {
  const [locationValue, setLocationValue] = useState("지역을 선택해주세요");
  const [dogValue, setDogValue] = useState("사이즈 / 마리");

  // 드롭다운 useState
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [dogDropdown, setDogDropdown] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState(false);

  const [selectRadio, setSelectRadio] = useState("no");

  // !!! 데이터 연동 시 변경 예정
  const locationOption = ["서울특별시", "대구광역시"];
  // 강아지(사이즈/마리) useState 및 초기 데이터
  const [dogOption, setDogOption] = useState([
    { size: "소형견", count: 0 },
    { size: "중형견", count: 0 },
    { size: "대형견", count: 0 },
    { size: "초대형견", count: 0 },
  ]);
  const filterOption = [
    { option: "프로그램" },
    { option: "산책" },
    { option: "미용" },
  ];

  const handleChangeLocation = e => {
    const location = e.target.innerText;
    setLocationValue(location);
    // 드롭다운 닫기
    setLocationDropdown(false);
  };
  const handleChangeDog = e => {
    // !!! 뭘 선택해야 내용이 바뀔지
    const dogPick = e.target.value;
    setDogValue(dogPick);
  };

  // 반려견 마리수 -,+ 에 따른 연산
  const handleIncrement = index => {
    setDogOption(prevDogOption => {
      const newDogOption = [...prevDogOption];
      newDogOption[index].count += 1;
      return newDogOption;
    });
  };
  const handleDecrement = index => {
    setDogOption(prevDogOption => {
      const newDogOption = [...prevDogOption];
      if (newDogOption[index].count > 0) {
        newDogOption[index].count -= 1;
      }
      return newDogOption;
    });
  };

  const handleChangeFilter = e => {
    setSelectRadio(e.target.value);
  };

  return (
    <>
      {/* !!!form 전송을 위한 작업 예정 */}
      <SearchForm method="post" action="">
        {/* 지역 선택 */}
        <LocationSelectDiv
          onClick={() => setLocationDropdown(!locationDropdown)}
        >
          <div>
            <label>{locationValue}</label>
            <img src={`${process.env.PUBLIC_URL}/images/toggleArrow.svg`} />
          </div>
          {locationDropdown && (
            <LocationSelect>
              <ul>
                {locationOption.map((location, index) => (
                  <LocationOption key={index} onClick={handleChangeLocation}>
                    {location}
                  </LocationOption>
                ))}
              </ul>
            </LocationSelect>
          )}
        </LocationSelectDiv>

        {/* !!!날짜 선택 : 달력 삽입하기*/}
        <DateSelect type="date" />

        {/* 사이즈/마리 선택*/}
        <DogSelectDiv>
          <div onClick={() => setDogDropdown(!dogDropdown)}>
            <img src={`${process.env.PUBLIC_URL}/images/footicon.svg`} alt="" />
            <span>{dogValue}</span>
          </div>
          {dogDropdown && (
            <DogSelect>
              <ul>
                {dogOption.map((dog, index) => (
                  <li key={index}>
                    <DogTitle>{dog.size}</DogTitle>
                    <DogNumberDiv>
                      <div>
                        <MinusBt
                          src={`${process.env.PUBLIC_URL}/images/minusBt.svg`}
                          onClick={() => handleDecrement(index)}
                        />
                      </div>
                      {dog.size === "초대형견" ? (
                        <ExtraDogNumber
                          type="number"
                          value={dog.count}
                          readOnly
                          onChange={handleChangeDog}
                        />
                      ) : (
                        <DogNumber
                          type="number"
                          value={dog.count}
                          readOnly
                          onChange={handleChangeDog}
                        />
                      )}
                      <div>
                        <PlusBt
                          src={`${process.env.PUBLIC_URL}/images/plusBt.svg`}
                          onClick={() => handleIncrement(index)}
                        />
                      </div>
                    </DogNumberDiv>
                  </li>
                ))}
              </ul>
            </DogSelect>
          )}
        </DogSelectDiv>

        {/* 필터 선택*/}
        <FilterSelectDiv>
          <div onClick={() => setFilterDropdown(!filterDropdown)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/filtericon.svg`}
              alt=""
            />
            <span>필터</span>
          </div>
          {filterDropdown && (
            <FilterSelect>
              <div>
                <FilterTitle>기타</FilterTitle>
                <FilterOption>
                  <button type="button">수영장</button>
                  <button type="button">운동장</button>
                  <button type="button">운동장</button>
                  <button type="button">운동장</button>
                </FilterOption>
              </div>
              <div>
                {filterOption.map((option, index) => (
                  <FilterOptionDiv key={index}>
                    <FilterTitle>{option.option}</FilterTitle>
                    <FilterRadio>
                      <label>
                        <input
                          type="radio"
                          name={option.option}
                          value="yes"
                          checked={selectRadio === "yes"}
                          onChange={handleChangeFilter}
                        />
                        <span>선택</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={option.option}
                          value="no"
                          checked={selectRadio === "no"}
                          onChange={handleChangeFilter}
                        />
                        <span>미선택</span>
                      </label>
                    </FilterRadio>
                  </FilterOptionDiv>
                ))}
              </div>
            </FilterSelect>
          )}
        </FilterSelectDiv>
        <SubmitButton type="submit">적용</SubmitButton>
      </SearchForm>
    </>
  );
};

export default MainSearchFrom;
