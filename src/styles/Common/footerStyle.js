import styled from "@emotion/styled";

export const FooterDiv = styled.div`
  /* position: relative; */
  background-color: #654222;
  width: 100%;
  min-width: 1250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 15px;
  color: #fff;
  bottom: 0;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const FooterTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  border-bottom: 1px solid #fff;
`;

export const FooterTopItem = styled.div`
  width: 1200px;
  button {
    border: none;
    background-color: #654222;
    color: #fff;
    cursor: pointer;
  }
  span {
    padding: 0px 22px;
  }
`;

export const FooterBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 64px;
`;

export const FooterBottomContent = styled.div`
  display: flex;
  width: 1200px;
`;

export const FooterBottomLogo = styled.div`
  padding-right: 66px;
  display: flex;
`;

export const FooterBottomItem = styled.div`
  width: 675px;
  display: block;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding-right: 24px;
      padding-bottom: 6px;
    }
  }
  span {
    display: flex;
    align-self: flex-start;
    padding-top: 17px !important;
  }
`;
