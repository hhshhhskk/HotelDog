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
  img {
    position: absolute;
    top: 38px;
    left: 430px;
  }
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
export const DateSelect = styled.input`
  width: 250px;
  height: 42px;
  padding: 10px 25px;
  border-radius: 9px;
  border: none;
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
  div {
    /* width: 140px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: aqua; */
    span {
      padding-left: 10px;
    }
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
export const OptionSelect = styled.div`
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
  background-color: #fff;
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
