import styled from "@emotion/styled";

export const BoardWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  margin-top: 120px;
`;

export const BoardContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardTitle = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  background-color: #654222;
  display: flex;
  border-radius: 10px;
`;

export const BoardTitleLeft = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 35px;
`;

export const BoardBigText = styled.div`
  color: #fff;

  font-family: Noto Sans;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
`;

export const BoardSmallText = styled.div`
  color: #fff;
  font-family: Noto Sans;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const BoardTitleRight = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
`;

export const BoardImg = styled.img`
  width: 140px;
  height: 124px;
  transform: translateX(20%);
`;

export const BoardTop = styled.div`
  width: 100%;
  height: 16px;
  color: black;
  font-size: 1.2rem;

  display: flex;

  margin-top: 40px;
  margin-bottom: 10px;
`;

export const BoardCategory = styled.div`
  width: 50%;

  display: flex;
`;

export const BoardCategoryItem = styled.div`
  padding: 0 7px 0 7px;
  line-height: 16px;

  color: ${props => (props.cateNum === props.idx ? "#654222" : "#969696")};
  font-weight: ${props => (props.cateNum === props.idx ? "600" : "500")};
  border-right: ${props =>
    props.categoryLength === props.idx + 1 ? "none" : "1px solid #969696"};

  cursor: pointer;
`;

export const BoardFilter = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
`;
export const BoardFilterItem = styled(BoardCategoryItem)`
  border-right: ${props => (props.idx === 4 ? "1px solid #969696" : "none")};
`;

export const BoardCreateBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BoardCreateBtn = styled.div`
  width: 120px;
  height: 40px;
  background-color: #654222;
  color: #fff;
  border-radius: 5px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 40px;

  margin-top: 17px;
  text-align: center;

  cursor: pointer;
`;

export const BoardBtnImg = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 3px;
  margin-right: 5px;
`;

export const BoardSearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BoardSearchSelect = styled.select`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #654222;

  color: #969696;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const BoardSearchInput = styled.input`
  width: 500px;
  height: 30px;
  border: 1px solid #654222;
  border-radius: 5px 0 0 5px;
`;

export const BoardSearchBtn = styled.input`
  width: 64px;
  height: 30px;
  border: none;
  border-radius: 0 5px 5px 0;
  background: #654222;

  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
`;
