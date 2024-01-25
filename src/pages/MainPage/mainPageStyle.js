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
  height: 650px;
  /* overflow: hidden; */
`;

export const VisualImg = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
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
    position: relative;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 650px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const VisualInner = styled.div`
  position: absolute;
  width: 1200px;
  height: 650px;
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
  bottom: 100px;
  /* margin-top: -130px; */
  span {
    position: relative;
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const VisualForm = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 85px;
  bottom: -40px;
  border-radius: 15px;
  background-color: #654222;
`;

export const HotelListDiv = styled.div`
  position: relative;
  /* background-color: aquamarine; */
  margin: 100px 0px;
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
  padding-bottom: 13px;
  width: 100%;
  span {
    color: #9c9c9c;
    font-size: 1.4rem;
  }
`;

export const AdTitle = styled.h1`
  position: relative;
  color: #654222;
`;

export const HotelCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const FilterListDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const FilterText = styled.div`
  position: relative;
  display: block;
  padding-bottom: 13px;
  width: 100%;
  span {
    color: #9c9c9c;
    font-size: 1.4rem;
  }
  form {
    position: absolute;
    right: 0;
    bottom: 15px;
    select {
      padding: 3px 17px;
      border-radius: 5px;
      border: 1px solid #969696;
      color: #969696;
    }
  }
`;

// 화면에 마진이 왜 들어가 있지?
export const FilterTitle = styled.h1`
  position: relative;
  color: #654222;
`;
