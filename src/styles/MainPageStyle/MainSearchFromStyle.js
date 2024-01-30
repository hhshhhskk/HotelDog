import styled from "@emotion/styled";

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 45px;
  font-size: 1.4rem;
  width: 1200px;
`;

// 지역 선택
export const LocationSelectDiv = styled.div`
  background-color: #fff;
  width: 420px;
  height: 42px;
  padding: 10px 25px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  color: #9c9c9c;
`;

export const LocationSelectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
`;

export const LocationSelect = styled.div`
  position: absolute;
  top: 62px;
  left: 45px;
  width: 420px;
  background-color: #fff;
  padding: 10px 0;
  z-index: 1;
  border-radius: 9px;
  border: 1px solid #654222;
`;

export const LocationOption = styled.li`
  padding: 10px 25px;
  &:hover {
    background-color: #fffaf0;
    color: #654222;
  }
`;

// 날짜 선택
export const DateSelectDiv = styled.div`
  background-color: #fff;
  width: 250px;
  height: 42px;
  padding: 10px 25px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  color: #9c9c9c;
`;

export const DateSelectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 200px;
  /* background-color: aqua; */
`;

export const DateSelect = styled.div`
  position: absolute;
  z-index: 2;
  top: 62px;
  left: 475px;
`;

// 사이즈/마리 선택
export const DogSelectDiv = styled.div`
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

export const DogSelectTitle = styled.div`
  display: flex;
  align-items: center;
  color: #9c9c9c;
  span {
    padding-left: 10px;
  }
`;

export const DogSelect = styled.div`
  position: absolute;
  top: 62px;
  left: 735px;
  width: 140px;
  background-color: #fff;
  padding: 10px 0;
  z-index: 1;
  border-radius: 9px;
  border: 1px solid #654222;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 10px 0px;
      &:hover {
        background-color: #fffaf0;
        color: #654222;
      }
    }
  }
`;

export const DogTitle = styled.label`
  padding-left: 15px;
  padding-right: 18px;
  /* background-color: aqua; */
`;

export const DogNumberDiv = styled.div`
  display: flex;
`;

export const MinusBt = styled.img`
  position: absolute;
  left: 75px;
`;

export const ExtraDogNumber = styled.input`
  width: 40px;
  border: none;
  padding-left: 13px;
  background: transparent;
`;

export const DogNumber = styled.input`
  width: 50px;
  border: none;
  padding-left: 25px;
  background: transparent;
`;

export const PlusBt = styled.img`
  position: absolute;
  left: 110px;
`;

// 필터 선택
export const FilterSelectDiv = styled.div`
  width: 140px;
  height: 42px;
  padding: 10px 25px;
  border-radius: 9px;
  border: none;
  color: #9c9c9c;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  /* align-items: center; */
`;

export const FilterSelectTitle = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  span {
    padding-left: 20px;
  }
`;

export const FilterSelect = styled.div`
  position: absolute;
  top: 62px;
  left: 885px;
  width: 380px;
  background-color: #fff;
  padding: 20px 25px;
  z-index: 1;
  border-radius: 9px;
  border: 1px solid #654222;
`;

export const OtherDiv = styled.div`
  position: relative;
`;

export const FilterTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: #654222;
`;

export const OtherOptionBt = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  button {
    padding: 8px 20px;
    background-color: #fffaf0;
    color: #654222;
    border-radius: 20px;
    border: 1px solid #654222;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    :hover {
      background-color: #654222;
      color: #fff;
    }
    &.active {
      background-color: #654222;
      color: #fff;
    }
  }
`;

export const ChoiceDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 330px;
  /* background-color: azure; */
`;

export const ChoiceOptionDiv = styled.div`
  padding-top: 20px;
  padding-right: 35px;
  /* background-color: azure; */
`;

export const ChoiceOptionRadio = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  width: 130px;
  label {
    input {
      appearance: none;
      border: 1px solid #654222;
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      :checked {
        border: 0.4em solid #654222;
      }
    }
    span {
      color: black;
      padding-left: 5px;
      font-size: 1.4rem;
    }
  }
`;

// 서버 전송 버튼
export const SubmitButton = styled.button`
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
