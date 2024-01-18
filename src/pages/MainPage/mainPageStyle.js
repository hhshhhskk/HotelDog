import styled from "@emotion/styled";

export const MainPageDiv = styled.div`
  position: relative;
  width: 100%;
  min-width: 1250px;
  display: flex;
  /* flex 요소들을 세로로 정렬 */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VisualDiv = styled.div`
  width: 100%;
  height: 860px;
  background-color: yellowgreen;
  /* overflow: hidden; */
`;

export const VisualImg = styled.div`
  width: 100%;
  height: 860px;
  /* overflow: hidden; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* color: black; */
  }
  /* 이미지 앞에 검은색 투명도 주기 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 860px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const VisualInner = styled.div`
  position: absolute;
  width: 1200px;
  height: 860px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* background-color: hotpink; */
`;

export const VisualText = styled.div`
  position: absolute;
  width: 1200px;
  bottom: 130px;
  /* margin-top: -130px; */
  span {
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const VisualForm = styled.div`
  position: absolute;
  width: 1200px;
  height: 85px;
  bottom: -40px;
  border-radius: 15px;
  background-color: #654222;
  /* background-color: aqua; */
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* 왜 안먹지 */
  align-items: center;
  /* background-color: aquamarine; */
  padding: 20px 43px;
  font-size: 1.4rem;
`;

export const LocationSelect = styled.select`
  width: 420px;
  height: 42px;
  padding: 10px 25px;
  border-radius: 9px;
  border: none;
  color: #9c9c9c;
`;

export const DateSelect = styled.input`
  width: 250px;
  height: 42px;
  padding: 10px 25px;
  border-radius: 9px;
  border: none;
`;

export const NumberSelect = styled.select`
  width: 140px;
  height: 42px;
  padding: 10px 25px;
  border-radius: 9px;
  border: none;
`;

export const OptionSelect = styled.button`
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

export const ListDiv = styled.div`
  /* background-color: aquamarine; */
  margin-top: 40px;
  height: 500px;
  width: 1200px;
`;

export const EventListDiv = styled.div`
  background-color: hotpink;
  height: 460px;
  width: 100%;
`;

export const HotelListDiv = styled.div`
  background-color: hotpink;
  height: 460px;
  width: 100%;
`;

export const EventText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: plum; */
  /* height: 460px; */
  width: 100%;
  height: 27px;
  h1 {
    /* font-size: 2rem; */
    color: #654222;
  }
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: #654222;
  }
`;
