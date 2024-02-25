import styled from "@emotion/styled";
import React from "react";

// 모달을 감싸는 컨테이너 스타일 정의
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); // 배경에 반투명한 검은색 추가
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// 모달 내용을 담는 영역 스타일 정의
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 750px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

// 닫기 버튼 스타일 정의
const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
const ModalTitle = styled.div`
  position: relative;
  margin-bottom: 10px;
  margin-top: 20px;

  h2 {
    color: #654222;
    /* font-family: "Noto Sans"; */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ReviewTxt = styled.form`
  position: relative;
  textarea {
    position: relative;
    width: 590px;
    height: 290px;
    resize: none;
    border-radius: 5px;
    border: 1px solid #eee;
    background: #fafafa;
    padding: 20px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span {
    width: 150px;
    height: 50px;
  }
`;

const ReviewComplete = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  /* margin-top: 50px; */
  border-radius: 10px;
  border: 1px solid #654222;
  background: #654222;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const ImgContetnts = styled.div`
  position: relative;
  display: flex;
  width: 590px;
  height: 100px;
  gap: 10px;

  margin-top: 20px;

  cursor: pointer;
  img {
    position: relative;
  }
  input {
    position: relative;

    background-color: red;
  }
  button {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: #fafafa;
    border: 1px solid #eee;
    border-radius: 5px;
  }
`;
const ModalTxtContents = styled.div`
  position: relative;
  width: 580px;
  height: 200px;
  border-radius: 10px;
  background: #fffaf0;
  cursor: pointer;
  margin-bottom: 25px;
  padding: 30px;
  line-height: 16px;
  h2 {
    position: relative;
    margin-bottom: 2px;
  }
  p {
    position: relative;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  span {
    position: relative;
    margin-left: 10px;
  }
`;
const ResignModal = ({ onCloseModal }) => {
  const handleModalClose = () => {
    onCloseModal(); // 부모 컴포넌트로부터 전달받은 함수를 호출하여 모달을 닫습니다.
  };
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>
          <h2>환불정책</h2>
        </ModalTitle>
        <ModalTxtContents>
          <h2>1. 환불 기간 및 비율</h2>
          <span>예약 취소 시점에 따라 환불 비율이 다릅니다.</span>
          <p>
            • 예약 취소가 7일 전에 이뤄진 경우: 100%
            <br />
            • 환불 예약 취소가 3일 전에 이뤄진 경우: 결제 금액의 80%
            <br />• 환불 예약 취소가 1일전 또는 이후에 이뤄진 경우: 환불 불가
          </p>
          <h2>2. 환불 방법</h2>
          <p>
            • 환불 방법 환불은 원래 결제 방법을 통해 처리됩니다. <br />• 예를
            들어, 신용카드로 결제한 경우, 환불은 해당 신용카드로 이루어집니다.
          </p>
        </ModalTxtContents>
        <ModalTitle>
          <h2>환불 예약 내역</h2>
        </ModalTitle>
        <ReviewTxt>
          <p></p>
        </ReviewTxt>

        <ImgContetnts></ImgContetnts>

        <ReviewComplete>
          <p>탈퇴 하기</p>
        </ReviewComplete>
        <CloseButton onClick={handleModalClose}>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/close.svg`} />
        </CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ResignModal;
