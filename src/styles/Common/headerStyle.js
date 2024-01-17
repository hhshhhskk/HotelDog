import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  background-color: ${props =>
    props.scrollPosition > 40 ? "#fff" : "rgba(0, 0, 0, 0.5)"};
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

  transition: background-color 0.5s ease, height 0.5s ease, color 0.5s ease;
`;

// SNS 카테고리 바
export const HeaderTop = styled.div`
  opacity: ${props => (props.scrollPosition > 40 ? 0 : 1)};
  display: ${props => (props.scrollPosition > 40 ? "none" : "block")};
  background-color: #654222;
  width: 100%;
  height: 40px;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  display: flex;
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
  /* background-color: aqua; */
`;

export const InputDiv = styled.div`
  /* width: 700px; */
  /* height: 100px; */
  display: flex;
  /* justify-content: center;
  align-items: center; */
  /* background-color: greenyellow; */
`;
export const SearchBox = styled.input`
  width: 600px;
  height: 50px;
  /* padding-left: 30px; */
  /* border: 1px solid #654222; */
  border: ${props =>
    props.scrollPosition > 40 ? "1px solid #654222" : "none"};
  border-right: none;
  border-radius: 50px 0 0 50px;
  background-color: ${props =>
    props.scrollPosition > 40 ? "#fff" : "rgba(255, 255, 255, 0.3)"};
`;
export const SearchBt = styled.button`
  width: 50px;
  height: 50px;
  /* background-color: #fff; */
  /* border: 1px solid #654222; */
  border-left: none;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  background-color: ${props =>
    props.scrollPosition > 40 ? "#fff" : "rgba(255, 255, 255, 0.3)"};
  border: ${props =>
    props.scrollPosition > 40 ? "1px solid #654222" : "none"};
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
