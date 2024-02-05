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
  position: relative;
  width: 100%;
  height: 630px;
`;

export const VisualImg = styled.div`
  position: relative;
  width: 100%;
  height: 630px;
  /* overflow: hidden; */
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* color: black; */
  }
  /* 이미지 앞에 검은색 투명도 주기 */
  &::before {
    /* position: relative; */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 630px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const VisualInner = styled.div`
  position: absolute;
  width: 1200px;
  height: 630px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const VisualText = styled.div`
  position: absolute;
  width: 1200px;
  bottom: 100px;
  /* margin-top: -130px; */
  span {
    position: relative;
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const VisualForm = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  /* height: 85px; */
  bottom: -40px;
  border-radius: 15px;
  background-color: #654222;
`;

export const HotelListDiv = styled.div`
  position: relative;
  /* display: flex;
  flex-wrap: wrap; */
  /* background-color: aquamarine; */
  margin: 80px 0px;
  width: 1200px;
`;

export const AdListDiv = styled.div`
  position: relative;
  /* padding-top: 50px; */
  width: 100%;
`;

export const AdText = styled.div`
  position: relative;
  display: block;
  padding-bottom: 20px;
  width: 100%;
  span {
    color: #9c9c9c;
    font-size: 1.4rem;
    /* padding-top: 5px; */
    /* background-color: aqua; */
  }
`;

export const AdTitle = styled.h1`
  position: relative;
  color: #654222;
  /* background-color: beige; */
  margin: 0;
  padding-bottom: 5px;
`;

export const HotelCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 1200px; */
  /* background-color: red; */
`;

export const FilterListDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const FilterText = styled.div`
  position: relative;
  display: block;
  padding-bottom: 20px;
  width: 100%;
  span {
    color: #9c9c9c;
    font-size: 1.4rem;
  }
  form {
    position: absolute;
    right: 0;
    bottom: 20px;
    select {
      /* background-color: beige; */
      font-size: 1.4rem;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #969696;
      color: #969696;
    }
  }
`;

export const FilterTitle = styled.h1`
  position: relative;
  color: #654222;
  margin: 0;
  padding-bottom: 5px;
`;

export const HotelPlusBtDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  img {
    padding-left: 5px;
  }
`;

export const HotelPlusBt = styled.div`
  position: relative;
  font-size: 1.5rem;
  border: none;
  color: #654222;
  font-weight: 700;
`;
