import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 680px;
  height: 920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;

const ModalInner = styled.div`
  padding: 33px 50px 33px 50px;
  width: 600px;
  height: 743px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const TextBox = styled.div`
  width: 500px;
  height: 104px;
  font-size: 1.4rem;
  margin-bottom: 20px;
  font-family: Noto Sans;
`;

const TextTitle = styled.div`
  margin-bottom: 9px;
`;

const TextContent = styled.div`
  color: #9d9d9d;
`;

const AgreeModal = ({ closeModal }) => {
  return (
    <Wrapper
      onClick={() => {
        closeModal();
      }}
    >
      <Modal>
        <div>이용약관</div>
        <ModalInner>
          <TextBox>
            <TextTitle>1. 회원 가입 및 계정</TextTitle>
            <TextContent>
              1.1 본 플랫폼의 서비스를 이용하려면 회원으로 가입하여야 합니다.
            </TextContent>
            <TextContent>
              1.2 회원은 본 플랫폼에 제공하는 모든 정보가 정확하고 최신임을
              보증해야 합니다.
            </TextContent>
            <TextContent>
              1.3 회원은 자신의 계정 정보를 안전하게 관리하고, 다른 개인 또는
              단체에게 양도하거나 대여해서는 안 됩니다.
            </TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>2. 개인 정보 수집 및 보호</TextTitle>
            <TextContent>
              2.1 플랫폼은 회원의 개인 정보를 수집하며, 이에 대한 처리는
              플랫폼의 개인 정보 처리 정책에 따릅니다.
            </TextContent>
            <TextContent>
              2.2 회원은 개인 정보를 정확하게 제공하고, 플랫폼의 정책에 동의하지
              않을 경우 회원가입이 제한될 수 있습니다.
            </TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>3. 서비스 이용 규칙</TextTitle>
            <TextContent>
              3.1 회원은 플랫폼의 서비스를 법률 및 플랫폼 정책에 따라 이용하여야
              합니다.
            </TextContent>
            <TextContent>
              3.2 불법적인 행동, 다른 회원에게 피해를 주는 행동 등 플랫폼
              서비스를 부정적으로 이용하는 경우, 플랫폼은 회원의 이용을
              제한하거나 서비스를 중단할 수 있습니다.
            </TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>4. 결제 및 요금</TextTitle>
            <TextContent>
              4.1 플랫폼의 유료 서비스를 이용하는 경우, 회원은 플랫폼이 정한
              결제 및 요금 규정에 따라야 합니다.
            </TextContent>
            <TextContent>
              4.2 결제 정보의 정확성은 회원의 책임으로, 정확하지 않은 정보로
              인한 문제는 회원이 책임지게 됩니다.
            </TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>5. 책임 제한</TextTitle>
            <TextContent>
              5.1 플랫폼은 기술적인 문제, 서비스 중단, 데이터 손실 등으로 인한
              문제에 대해 책임을 지지 않습니다.
            </TextContent>
            <TextContent>
              5.2 회원은 자신의 반려견에 대한 책임을 가지며, 플랫폼은 강아지
              호텔의 서비스 중에서 발생한 문제에 대한 책임을 지지 않습니다.
            </TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>6. 분쟁 해결</TextTitle>
            <TextContent>
              6.1 본 약관에 관한 분쟁은 당사자 간 협의에 의거하여 해결되며,
              협의가 어려운 경우 관할 법원의 결정을 따릅니다.
            </TextContent>
          </TextBox>
        </ModalInner>
      </Modal>
    </Wrapper>
  );
};

export default AgreeModal;
