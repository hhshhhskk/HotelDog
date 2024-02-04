import React, { useState } from "react";
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
import Calendar, { getCurrentDate } from "../Common/Calendar";

const MainSearchFrom = ({
  searchValue,
  changeSelectDay,
  setSaveFilterData,
}) => {
  // calendar 현재 날짜 불러오기
  const currentDate = getCurrentDate();

  // 미리보기 및 선택된 데이터 useState
  const [locationValue, setLocationValue] = useState("지역을 선택해주세요");
  const [calendarValue, setCalendarValue] = useState(`${currentDate}`);
  const [dogValue, setDogValue] = useState("사이즈 / 마리");
  const [filterValue, setFilterValue] = useState(0);

  // 드롭다운 useState
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [calendarDropdown, setCalendarDropdown] = useState(false);
  const [dogDropdown, setDogDropdown] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState(false);

  // 드롭다운 선택 시 나타나기 및 사라지기
  const handleDropdownSelect = dropdownType => {
    setLocationDropdown(dropdownType === "location");
    setCalendarDropdown(dropdownType === "calendar");
    setDogDropdown(dropdownType === "dog");
    setFilterDropdown(dropdownType === "filter");
  };

  // 드롭다운 모두 닫기
  const handleCLickSubmit = () => {
    setLocationDropdown(false);
    setCalendarDropdown(false);
    setDogDropdown(false);
    setFilterDropdown(false);
    // allHide();
  };
  const handleCLickLocationSelect = () => handleDropdownSelect("location");
  const handleCLickCalendarSelect = () => handleDropdownSelect("calendar");
  const handleCLickDogSelect = () => handleDropdownSelect("dog");
  const handleCLickFilterSelect = () => handleDropdownSelect("filter");

  // 캘린더에서 날짜 선택 시 적용
  const calendarClose = (_sd, _ed) => {
    changeSelectDay(_sd, _ed);
    handleCLickSubmit();
    // allHide();
    // setCalendarDropdown(false);
  };

  // 드롭다운 데이터
  const locationOption = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종특별자치시",
    "경기",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주특별자치도",
    "강원특별자치도",
  ];

  // 반려견 정보에 대한 useState
  const [dogOption, setDogOption] = useState([
    { size: "소형견", count: 0 },
    { size: "중형견", count: 0 },
    { size: "대형견", count: 0 },
    { size: "초대형견", count: 0 },
  ]);
  // 반려견 총 count 계산
  const totalDogCount = dogOption.reduce((sum, dog) => sum + dog.count, 0);

  // 필터에 대한 useState
  const [selectFilter, setSelectFilter] = useState([]);
  const [selectRadio, setSelectRadio] = useState({
    프로그램: "no",
    산책: "no",
    미용: "no",
  });

  // 지역 선택 시 미리보기 내용 변경
  const handleChangeLocation = e => {
    const location = e.target.innerText;
    setLocationValue(location);
    // ???드롭다운 닫기 왜 안 먹히지
    handleCLickSubmit();
    // setLocationDropdown(false);
    // allHide();
  };

  // 전체 목록 닫기
  // const allHide = () => {
  //   // console.log("모두 닫아요..");
  //   setLocationDropdown(false);
  //   setCalendarDropdown(false);
  //   setDogDropdown(false);
  //   setFilterDropdown(false);
  // };

  // 반려견 마리수 증감에 따른 연산
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
    // console.log("라디오 ", theme);
    setSelectRadio(prevState => ({
      ...prevState,
      [theme]: prevState[theme] === "yes" ? "no" : "yes",
    }));
  };

  // 필터폼 형식에 맞게 변환
  const dog = {
    소형견: 1,
    중형견: 2,
    대형견: 3,
    초대형견: 4,
  };
  const dogInfo = dogOption
    .filter(({ count }) => count > 0)
    .map(({ size, count }) => ({
      dogSize: dog[size],
      dogCount: count,
    }));

  // POST 데이터 전송을 위한 작업
  const handleSubmit = e => {
    console.log("선택완료");

    if (totalDogCount === 0) {
      alert(`반려견을 최소 1마리 이상 선택해주세요.`);
      e.preventDefault();
      return;
    }

    let optionValue = [];
    // console.log("selectFilter", selectFilter);
    if (selectFilter[0] === "수영장") {
      optionValue.push(1);
    }
    if (selectFilter[1] === "운동장") {
      optionValue.push(2);
    }
    if (selectFilter[2] === "수제식") {
      optionValue.push(3);
    }
    if (selectFilter[3] === "셔틀운행") {
      optionValue.push(4);
    }
    console.log("selectRadio", selectRadio);
    if (selectRadio["프로그램"] === "yes") {
      optionValue.push(5);
    }
    if (selectRadio["산책"] === "yes") {
      optionValue.push(6);
    }
    if (selectRadio["미용"] === "yes") {
      optionValue.push(7);
    }

    // console.log("optionValue", optionValue);

    e.preventDefault();

    const formData = {
      address: locationValue,
      search: searchValue ? searchValue : "", // 3차 프로젝트에 구현
      main_filter: 0,
      from_date: "", // (필수)2023-01-01 형식으로 전송
      to_date: "", // (필수)2023-01-01 형식으로 전송
      dog_info: dogInfo,
      hotel_option_pk: optionValue,
      filter_type: filterValue,
    };

    // 필터 데이터가 하나라도 있으면 main_filter: 1
    if (
      formData.address ||
      formData.from_date ||
      formData.to_date ||
      formData.dog_info.length > 0 ||
      formData.hotel_option_pk.length > 0
    ) {
      formData.main_filter = 1;
    }

    console.log(formData);
    setSaveFilterData(formData);
    // 필터 적용된 호텔 리스트로 이동
    // window.scrollTo({ top: 1550, behavior: "smooth" });
  };

  return (
    <>
      {/* !!!form 전송을 위한 작업 예정 */}
      <SearchForm method="post" action="" onSubmit={handleSubmit}>
        {/* 지역 선택 */}
        <LocationSelectDiv
          onClick={() => handleCLickLocationSelect(!locationDropdown)}
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
            <span>{calendarValue}</span>
            <img src={`${process.env.PUBLIC_URL}/images/toggleArrow.svg`} />
          </DateSelectTitle>
          {calendarDropdown && (
            <DateSelect>
              <Calendar calendarClose={calendarClose} />
            </DateSelect>
          )}
        </DateSelectDiv>

        {/* 반려견 정보 선택 */}
        <DogSelectDiv>
          <DogSelectTitle onClick={() => handleCLickDogSelect(!dogDropdown)}>
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
                          onClick={() =>
                            handleDecrement(index, dog.size, dog.count)
                          }
                        />
                      </div>

                      {dog.size === "초대형견" ? (
                        <>
                          <ExtraDogNumber
                            type="number"
                            value={dog.count}
                            readOnly
                            // onChange={() =>
                            //   handleChangeDogGo(dog.size, dog.count)
                            // }
                          />
                        </>
                      ) : (
                        <DogNumber
                          type="number"
                          value={dog.count}
                          readOnly
                          // onChange={() =>
                          //   handleChangeDogGo(dog.size, dog.count)
                          // }
                        />
                      )}
                      <div>
                        <PlusBt
                          src={`${process.env.PUBLIC_URL}/images/plusBt.svg`}
                          onClick={() =>
                            handleIncrement(index, dog.size, dog.count)
                          }
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
          <FilterSelectTitle
            onClick={() => handleCLickFilterSelect(!filterDropdown)}
          >
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
        <SubmitButton type="submit" onClick={handleCLickSubmit}>
          적용
        </SubmitButton>
      </SearchForm>
    </>
  );
};

export default MainSearchFrom;
