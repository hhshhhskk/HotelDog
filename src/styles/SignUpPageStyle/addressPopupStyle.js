import styled from "@emotion/styled";

export const PopupWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;

  width: 500px;
  height: 500px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 500;
`;

export const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const CloseImg = styled.img``;
