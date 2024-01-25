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
  LocationOption,
  LocationSelect,
  LocationSelectDiv,
  MinusBt,
  OptionSelect,
  PlusBt,
  SearchForm,
  SubmitButton,
} from "../../styles/MainPageStyle/MainSearchFromStyle";

const MainSearchFrom = () => {
  // 드롭다운 useState
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [dogDropdown, setDogDropdown] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState(false);

  // 강아지(사이즈/마리) useState 및 초기 데이터
  const [dogInfo, setDogInfo] = useState([
    { size: "소형견", count: 0 },
    { size: "중형견", count: 0 },
    { size: "대형견", count: 0 },
    { size: "초대형견", count: 0 },
  ]);

  // !!! 데이터 연동 시 변경 예정
  const locationInfo = ["서울특별시", "대구광역시"];

  const [locationValue, setLocationValue] = useState("지역을 선택해주세요");
  const [dogValue, setDogValue] = useState("사이즈 / 마리");

  const handleChangeLocation = e => {
    const location = e.target.innerText;
    setLocationValue(location);
    // 드롭다운 닫기
    setLocationDropdown(false);
  };

  const handleChangeDog = e => {
    const Dog = e.target.innerText;
    setDogValue(Dog);
  };

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
                {locationInfo.map((location, index) => (
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
        <DogSelectDiv onClick={() => setDogDropdown(!dogDropdown)}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/footicon.svg`} alt="" />
            <span>{dogValue}</span>
          </div>
          {dogDropdown && (
            <DogSelect>
              <ul>
                {dogInfo.map((dog, index) => (
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
                          onClick={handleChangeDog}
                        />
                      ) : (
                        <DogNumber
                          type="number"
                          value={dog.count}
                          readOnly
                          onClick={handleChangeDog}
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
        <OptionSelect>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/filtericon.svg`}
              alt=""
            />
            <span>필터</span>
          </div>
          {filterDropdown && <div></div>}
        </OptionSelect>
        <SubmitButton type="submit">적용</SubmitButton>
      </SearchForm>
    </>
  );
};

export default MainSearchFrom;
