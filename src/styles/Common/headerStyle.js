import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  background-color: ${props =>
    props.scrollPosition > 40 ? "#fff" : "rgba(0, 0, 0, 0.6)"};
  width: 100%;
  min-width: 1250px;
  height: ${props => (props.scrollPosition > 40 ? "100px" : "140px")};

  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: ${props =>
    props.scrollPosition > 40 ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};

  z-index: 1000;
  font-size: 1.5rem;
  color: ${props => (props.scrollPosition > 40 ? "#654222" : "#fff")};

  /* 애니메이션 효과 */
  transition: background-color 0.5s ease, height 0.5s ease, color 0.5s ease;
`;

// Header 상단 : SNS 카테고리 바
export const HeaderTop = styled.div`
  display: ${props => (props.scrollPosition > 40 ? "none" : "flex")};
  background-color: #654222;
  width: 100%;
  height: 40px;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  justify-content: center;
`;

export const HeaderTopContent = styled.div`
  position: relative;
  width: 1200px;
  display: flex;
  align-items: center;
`;

export const HeaderTopItem = styled.div`
  position: relative;
  width: 135px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  cursor: pointer;
`;

// Header 하단
export const HeaderContent = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 180px;
  height: 40px;
  cursor: pointer;
`;

export const InputDiv = styled.div`
  width: 700px;
  /* height: 100px; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const SearchBox = styled.input`
  width: 600px;
  height: 50px;
  padding-left: 30px;
  /* 왜 안 먹지??? */
  border: ${props =>
    props.scrollPosition > 40 ? "1px solid #654222" : "none"};
  /* border: 1px solid #654222; */
  border-right: none;
  border-radius: 50px 0 0 50px;
  background-color: ${props =>
    props.scrollPosition > 40 ? "#fff" : "rgba(255, 255, 255, 0.3)"};
  transition: border 0.5s ease;
`;

export const SearchBt = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  background-color: ${props =>
    props.scrollPosition > 40 ? "#fff" : "rgba(255, 255, 255, 0.3)"};
  border: ${props =>
    props.scrollPosition > 40 ? "1px solid #654222" : "none"};
  /* border: 1px solid #654222; */
  border-left: none;
`;

export const SearchBtnImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const HeaderCategory = styled.div`
  width: 183px;
  ul {
    display: flex;
    justify-content: space-between;
    li span {
      cursor: pointer;
    }
  }
`;
