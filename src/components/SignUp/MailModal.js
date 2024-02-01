import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { mailAuthAPI, mailAuthCodeAPI } from "../../api/SignUp/addressApi";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
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
  margin-top: 67px;
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

const CodeBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

const CodeInput = styled.input`
  width: 250px;
  height: 40px;

  border: 1px solid #654222;
  border-radius: 10px;
  font-size: 1.2rem;
  padding-left: 10px;
  padding-right: 80px;
`;

const CodeBtn = styled.input`
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

const CodeTime = styled.div`
  width: 100px;
  height: 30px;
  margin-top: 7px;

  color: #654222;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
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

  margin-top: 10px;
  margin-bottom: 52px;

  cursor: pointer;
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

const MailModal = ({ mail, closeMailModal, setMailChecked }) => {
  const [count, setCount] = useState(60 * 5 - 1); // 5분을 초로 계산
  const [mailCode, setMailCode] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 매 초마다 count를 1씩 감소
      setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    if (count === 0) {
      alert("인증시간이 만료되었습니다.");
      closeMailModal();
      setCount(60 * 5);
    }
    // 컴포넌트가 언마운트되면 타이머를 정리
    return () => clearInterval(intervalId);
  }, [count]);

  // 분과 초를 계산
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  const mailCodeChanged = e => {
    // console.log(e.target.value);
    setMailCode(e.target.value);
  };
  const mailCodeClick = async e => {
    e.preventDefault();

    if (mailCode === "") {
      alert("인증코드를 입력해주세요");
    } else {
      const result = await mailAuthCodeAPI(mail, mailCode);
      if (result === 1) {
        alert("인증되었습니다.");
        setMailChecked(true);
        closeMailModal();
      } else {
        alert("인증코드가 틀렸습니다.");
      }
    }
  };
  return (
    <Wrapper>
      <Overlay></Overlay>
      <Modal>
        <CloseDiv>
          <CloseImg
            onClick={closeMailModal}
            src={`${process.env.PUBLIC_URL}/images/closeBtn.svg`}
            alt=""
          />
        </CloseDiv>
        <MailImg
          src={`${process.env.PUBLIC_URL}/images/SignUp/emailCheck.svg`}
          alt=""
        />
        <BigText>인증메일이 발송되었습니다.</BigText>
        <SmallText>메일함에서 인증 코드 확인 바랍니다.</SmallText>
        <SmallText>이메일의 인증 코드를 확인 후 입력해 주세요.</SmallText>
        <CodeBox>
          <CodeInput
            type="text"
            onChange={mailCodeChanged}
            placeholder="인증코드를 입력해주세요."
          />
          <CodeBtn onClick={mailCodeClick} type="button" value="확 인" />
        </CodeBox>
        <CodeTime>
          {minutes}:{seconds - 10 < 0 ? `0${seconds}` : seconds}
        </CodeTime>
        <ReSendBtn
          onClick={() => {
            mailAuthAPI(mail);
            setCount(60 * 5 - 1);
          }}
        >
          인증 코드 재발송
        </ReSendBtn>
        <ModalInnerBox>
          <ModalInnerBigText>유의사항</ModalInnerBigText>
          <TextBox>
            <TextFlexBox>
              <TextNum>1.</TextNum>
              <ModalInnerSmallText>
                인증 메일은 발송 시점으로부터 5분간 유효하며, 재발송 시 기존
                인증은 만료됩니다. 반드시 마지막에 수신된 메일을 확인 바랍니다.
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
