import React, { useEffect, useState } from "react";
import { mailAuthAPI, mailAuthCodeAPI } from "../../api/SignUp/addressApi";
import {
  BigText,
  CloseDiv,
  CloseImg,
  CodeBox,
  CodeBtn,
  CodeInput,
  CodeTime,
  MailImg,
  Modal,
  ModalInnerBigText,
  ModalInnerBox,
  ModalInnerSmallText,
  Overlay,
  ReSendBtn,
  SmallText,
  TextBox,
  TextFlexBox,
  TextNum,
  Wrapper,
} from "../../styles/SignUpPageStyle/mailModalStyle";

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
