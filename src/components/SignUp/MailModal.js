import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
`;

const Modal = styled.div`
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

const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const CloseImg = styled.img`
  margin-top: 24px;
  margin-right: 24px;
`;

const MailImg = styled.img`
  margin-top: 84px;
  margin-bottom: 18px;
`;

const BigText = styled.div`
  color: #654222;
  text-align: center;
  font-family: Noto Sans;
  font-size: 2.4rem;
  font-weight: 700;

  margin-bottom: 10px;
`;

const SmallText = styled.div`
  color: #000;

  text-align: center;
  font-family: Noto Sans;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const ReSendBtn = styled.div`
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

  margin-top: 31px;
  margin-bottom: 77px;
`;

const ModalInnerBox = styled.div`
  width: 650px;
  height: 182px;
  background-color: #fffaf0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  width: 500px;
  height: 90px;
`;

const TextFlexBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ModalInnerBigText = styled.div`
  color: #654222;
  text-align: center;
  font-family: Noto Sans;
  font-size: 1.8rem;
  font-weight: 700;

  margin-top: 24px;
  margin-bottom: 21px;
`;

const TextNum = styled.div`
  color: #654222;
  font-family: Noto Sans;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.28px;
  margin-right: 5px;
`;

const ModalInnerSmallText = styled.div`
  color: #654222;
  font-family: Noto Sans;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.28px;
`;

const MailModal = ({ setMailModalOpen }) => {
  return (
    <Wrapper>
      <Overlay></Overlay>
      <Modal>
        <CloseDiv>
          <CloseImg
            onClick={() => {
              setMailModalOpen(false);
            }}
            src={`${process.env.PUBLIC_URL}/images/closeBtn.svg`}
            alt=""
          />
        </CloseDiv>
        <MailImg
          src={`${process.env.PUBLIC_URL}/images/SignUp/emailCheck.svg`}
          alt=""
        />
        <BigText>인증메일이 발송되었습니다.</BigText>
        <SmallText>
          메일함에서(example@gmail.com) 인증 메일을 확인 바랍니다.
        </SmallText>
        <SmallText>
          이메일의 인증 버튼을 선택하면 회원가입이 완료됩니다.
        </SmallText>
        <ReSendBtn>인증 메일 재발송</ReSendBtn>
        <ModalInnerBox>
          <ModalInnerBigText>유의사항</ModalInnerBigText>
          <TextBox>
            <TextFlexBox>
              <TextNum>1.</TextNum>
              <ModalInnerSmallText>
                인증 메일은 발송 시점으로부터 24시간 동안만 유효하며, 재발송 시
                기존 인증은 만료됩니다. 반드시 마지막에 수신된 메일을 확인
                바랍니다.
              </ModalInnerSmallText>
            </TextFlexBox>
            <TextFlexBox>
              <TextNum>2.</TextNum>
              <ModalInnerSmallText>
                메일이 도착하지 않았다면 스팸함을 확인해 주시기 바랍니다.
              </ModalInnerSmallText>
            </TextFlexBox>
          </TextBox>
        </ModalInnerBox>
      </Modal>
    </Wrapper>
  );
};

export default MailModal;
