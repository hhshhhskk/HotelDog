import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  background-color: ${props =>
    props.scrollPosition > 50 ? "#fff" : "rgba(0, 0, 0, 0.5)"};
  width: 100%;
  min-width: 1250px;
  height: ${props => (props.scrollPosition > 50 ? "100px" : "150px")};

  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: ${props =>
    props.scrollPosition > 50 ? "1px solid #654222" : "none"};

  z-index: 1000;
  font-size: 1.5rem;
  color: ${props => (props.scrollPosition > 50 ? "#654222" : "#fff")};

  transition: background-color 0.5s ease, height 0.5s ease, color 0.5s ease;
`;

export const HeaderTop = styled.div`
  opacity: ${props => (props.scrollPosition > 50 ? 0 : 1)};
  display: ${props => (props.scrollPosition > 50 ? "none" : "block")};
  background-color: #654222;
  width: 100%;
  height: 50px;
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

export const HeaderContent = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 180px;
  height: 40px;
  cursor: pointer;
`;

export const InputDiv = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchBox = styled.input`
  width: 600px;
  height: 50px;
  padding-left: 30px;
  border: 1px solid #654222;
  border-right: none;
  border-radius: 50px 0 0 50px;
`;
export const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #654222;
  border-left: none;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
`;
export const SearchBtnImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const HeaderCategory = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderCategoryItem = styled.span`
  cursor: pointer;
`;
