import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;

export const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const CloseImg = styled.img`
  margin-top: 24px;
  margin-right: 24px;
`;

export const MailImg = styled.img`
  margin-top: 67px;
  margin-bottom: 18px;
`;

export const BigText = styled.div`
  color: #654222;
  text-align: center;
  font-family: Noto Sans;
  font-size: 2.4rem;
  font-weight: 700;

  margin-bottom: 10px;
`;

export const SmallText = styled.div`
  color: #000;

  text-align: center;
  font-family: Noto Sans;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

export const CodeBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

export const CodeInput = styled.input`
  width: 250px;
  height: 40px;

  border: 1px solid #654222;
  border-radius: 10px;
  font-size: 1.2rem;
  padding-left: 10px;
  padding-right: 80px;
`;

export const CodeBtn = styled.input`
  position: absolute;
  right: 5px;
  width: 70px;
  height: 32px;
  background-color: #654222;
  color: #fff;

  text-align: center;
  font-weight: 700;
  font-size: 1.6rem;
  border: none;
  border-radius: 7px;
`;

export const CodeTime = styled.div`
  width: 100px;
  height: 30px;
  margin-top: 7px;

  color: #654222;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const ReSendBtn = styled.div`
  width: 160px;
  height: 40px;
  font-family: Noto Sans;
  line-height: 38px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #654222;
  text-align: center;

  border-radius: 10px;
  border: 1px solid #654222;

  background: #fff;

  margin-top: 10px;
  margin-bottom: 52px;

  cursor: pointer;
`;

export const ModalInnerBox = styled.div`
  width: 650px;
  height: 182px;
  background-color: #fffaf0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 90px;
`;

export const TextFlexBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const ModalInnerBigText = styled.div`
  color: #654222;
  text-align: center;
  font-family: Noto Sans;
  font-size: 1.8rem;
  font-weight: 700;

  margin-top: 24px;
  margin-bottom: 21px;
`;

export const TextNum = styled.div`
  color: #654222;
  font-family: Noto Sans;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.28px;
  margin-right: 5px;
`;

export const ModalInnerSmallText = styled.div`
  color: #654222;
  font-family: Noto Sans;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.28px;
`;
