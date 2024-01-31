import React, { useCallback, useState } from "react";
import {
  ChoiceDiv,
  ChoiceOptionDiv,
  ChoiceOptionRadio,
  DateSelect,
  DateSelectDiv,
  DateSelectTitle,
  DogNumber,
  DogNumberDiv,
  DogSelect,
  DogSelectDiv,
  DogSelectTitle,
  DogTitle,
  ExtraDogNumber,
  FilterSelect,
  FilterSelectDiv,
  FilterSelectTitle,
  FilterTitle,
  LocationOption,
  LocationSelect,
  LocationSelectDiv,
  LocationSelectTitle,
  MinusBt,
  OtherDiv,
  OtherOptionBt,
  PlusBt,
  SearchForm,
  SubmitButton,
} from "../../styles/MainPageStyle/MainSearchFromStyle";
import Calendar from "../Common/Calendar";

const MainSearchFrom = () => {
  // 미리보기 useState
  const [locationValue, setLocationValue] = useState("지역을 선택해주세요");
  const [calendarValue, setCalendarValue] = useState("오늘날짜");
  const [dogValue, setDogValue] = useState("소형견 1");
  const [filterValue, setFilterValue] = useState();

  // 드롭다운 useState
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [calendarDropdown, setCalendarDropdown] = useState(false);
  const [dogDropdown, setDogDropdown] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState(false);

  // 필터에 대한 useState
  const [selectFilter, setSelectFilter] = useState([]);
  const [selectRadio, setSelectRadio] = useState({
    프로그램: "no",
    산책: "no",
    미용: "no",
  });

  // !!! 데이터 연동 시 변경 예정
  const locationOption = ["서울특별시", "대구광역시"];

  // 사이즈/마리에 대한 useState
  const [dogOption, setDogOption] = useState([
    { size: "소형견", count: 1 },
    { size: "중형견", count: 0 },
    { size: "대형견", count: 0 },
    { size: "초대형견", count: 0 },
  ]);

  // const filterOption = [
  //   { option: "프로그램" },
  //   { option: "산책" },
  //   { option: "미용" },
  // ];

  // 지역 선택 시 미리보기 내용 변경
  const handleChangeLocation = e => {
    const location = e.target.innerText;
    setLocationValue(location);
    // 드롭다운 닫기
    setLocationDropdown(false);
  };

  // const handleChangeDog = (size, count) => {
  // !!! 뭘 선택해야 내용이 바뀔지
  // const dogSize = e.target.value;
  // const dogCount = e.target.innerText;
  //   setDogValue(`${size} ${count}`);
  // }, [setDogValue];

  const handleChangeDog = useCallback(
    (size, count) => {
      setDogValue(`${size} ${count}`);
    },
    [setDogValue],
  );

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

  // 필터 선택에 따른 이벤트
  const handleClickFilter = theme => {
    const Selected = selectFilter.includes(theme);
    if (Selected) {
      // 이미 선택된 경우 선택 해제
      setSelectFilter(prevFilters =>
        prevFilters.filter(filter => filter !== theme),
      );
    } else {
      // 선택되지 않은 경우 선택
      setSelectFilter(prevFilters => [...prevFilters, theme]);
    }
  };

  // 필터 라디오 버튼 선택에 따른 이벤트
  const handleClickRadio = theme => {
    setSelectRadio(prevState => ({
      ...prevState,
      [theme]: prevState[theme] === "yes" ? "no" : "yes",
    }));
  };

  // [수정예정] 검색폼 데이터 전송을 위한 작업
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      location: locationValue,

      // 다른 필요한 데이터 추가
    };
  };

  return (
    <>
      {/* !!!form 전송을 위한 작업 예정 */}
      <SearchForm method="post" action="" onSubmit={handleSubmit}>
        {/* 지역 선택 */}
        <LocationSelectDiv
          onClick={() => setLocationDropdown(!locationDropdown)}
        >
          <LocationSelectTitle>
            <label>{locationValue}</label>
            <img src={`${process.env.PUBLIC_URL}/images/toggleArrow.svg`} />
          </LocationSelectTitle>
          {locationDropdown && (
            <LocationSelect>
              <ul>
                {locationOption.map((location, index) => (
                  <li key={index} onClick={handleChangeLocation}>
                    {location}
                  </li>
                ))}
              </ul>
            </LocationSelect>
          )}
        </LocationSelectDiv>

        {/* !!!날짜 선택 : 달력 삽입하기*/}
        <DateSelectDiv>
          <DateSelectTitle
            onClick={() => setCalendarDropdown(!calendarDropdown)}
          >
            <span>날짜 출력</span>
            <img src={`${process.env.PUBLIC_URL}/images/toggleArrow.svg`} />
          </DateSelectTitle>
          {calendarDropdown && (
            <DateSelect>
              <Calendar />
            </DateSelect>
          )}
        </DateSelectDiv>

        {/* 반려견 정보 선택 */}
        <DogSelectDiv>
          <DogSelectTitle onClick={() => setDogDropdown(!dogDropdown)}>
            <img src={`${process.env.PUBLIC_URL}/images/footicon.svg`} alt="" />
            <span>{dogValue}</span>
          </DogSelectTitle>

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
                          onChange={handleChangeDog(dog.size, dog.count)}
                        />
                      ) : (
                        <DogNumber
                          type="number"
                          value={dog.count}
                          readOnly
                          onChange={handleChangeDog(dog.size, dog.count)}
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
          <FilterSelectTitle onClick={() => setFilterDropdown(!filterDropdown)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/filtericon.svg`}
              alt=""
            />
            <span>필터</span>
          </FilterSelectTitle>

          {filterDropdown && (
            <FilterSelect>
              {/* 필터-기타 영역 */}
              <OtherDiv>
                <FilterTitle>기타</FilterTitle>
                <OtherOptionBt>
                  {["수영장", "운동장", "수제식", "셔틀운행"].map(
                    (theme, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleClickFilter(theme)}
                        className={selectFilter.includes(theme) ? "active" : ""}
                      >
                        {theme}
                      </button>
                    ),
                  )}
                </OtherOptionBt>
              </OtherDiv>

              {/* 필터-프로그램,산책,미용 영역 */}
              <ChoiceDiv>
                {["프로그램", "산책", "미용"].map((option, index) => (
                  <ChoiceOptionDiv key={index}>
                    <FilterTitle>{option}</FilterTitle>
                    <ChoiceOptionRadio>
                      <label>
                        <input
                          type="radio"
                          value="yes"
                          checked={selectRadio[option] === "yes"}
                          onClick={() => handleClickRadio(option)}
                        />
                        <span>선택</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="no"
                          checked={selectRadio[option] === "no"}
                          onClick={() => handleClickRadio(option)}
                        />
                        <span>미선택</span>
                      </label>
                    </ChoiceOptionRadio>
                  </ChoiceOptionDiv>
                ))}
              </ChoiceDiv>
            </FilterSelect>
          )}
        </FilterSelectDiv>
        <SubmitButton type="submit">적용</SubmitButton>
      </SearchForm>
    </>
  );
};

export default MainSearchFrom;
