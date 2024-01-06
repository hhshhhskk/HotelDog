import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  background-color: ${(props) =>
    props.scrollPosition > 50 ? "#fff" : "rgba(0, 0, 0, 0.5)"};
  width: 100%;
  min-width: 1250px;
  height: ${(props) => (props.scrollPosition > 50 ? "100px" : "150px")};

  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: ${(props) =>
    props.scrollPosition > 50 ? "1px solid #654222" : "none"};

  z-index: 1000;
  font-size: 1.8rem;
  color: ${(props) => (props.scrollPosition > 50 ? "#654222" : "#fff")};

  transition: background-color 0.5s ease, height 0.5s ease, color 0.5s ease;
`;

export const HeaderTop = styled.div`
  opacity: ${(props) => (props.scrollPosition > 50 ? 0 : 1)};
  display: ${(props) => (props.scrollPosition > 50 ? "none" : "block")};
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
`;
