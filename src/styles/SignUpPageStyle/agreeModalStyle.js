import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 680px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;

export const ModalInner = styled.div`
  padding: 33px 50px 33px 50px;
  width: 600px;
  height: 600px;
  border-radius: 10px;
  background-color: #f9f9f9;

  overflow: auto;
`;

export const ModalTop = styled.div`
  width: 600px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #654222;
  margin-top: 33px;
  margin-bottom: 23px;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 104px;
  font-size: 1.4rem;
  margin-bottom: 20px;
  font-family: Noto Sans;
`;

export const TextTitle = styled.div`
  margin-bottom: 9px;
`;

export const TextContent = styled.div`
  color: #9d9d9d;
`;

export const AgreeBtn = styled.div`
  width: 120px;
  height: 50px;

  margin-top: 23px;

  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;

  border-radius: 10px;
  border: 1px solid #654222;
  background: #654222;
`;
