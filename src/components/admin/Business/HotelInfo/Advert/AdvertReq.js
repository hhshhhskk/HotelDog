import styled from "@emotion/styled";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdvertComplete from "./AdvertComplete";

const ModalWrapper = styled.div`
  position: relative;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 650px;

  padding: 29px 58px;
  z-index: 600;
`;

const ReqTop = styled.div`
  margin-top: 70px;
  margin-bottom: 18px;

  color: #666;
  text-align: right;
  font-family: "Noto Sans";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ReqForm = styled.form``;

const InputDiv = styled.div`
  height: 30px;
  display: flex;
`;

const ReqText = styled.div`
  width: 185px;
  height: 30px;

  color: #000;
  font-family: "Noto Sans";
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
`;

const ReqInput = styled.input`
  width: 300px;
  padding: 4px 11px;
  font-family: "Noto Sans";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ValidDiv = styled.div`
  width: 300px;
  height: 40px;
  margin-left: 185px;

  color: red;
  font-family: "Noto Sans";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BusinessNum = styled.div`
  position: absolute;
  top: 58%;
  left: 60px;
  color: #666;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const PaymentInfo = styled.div`
  color: #666;
  text-align: center;
  margin-top: 79px;
  font-family: "Noto Sans";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InfoBtnBox = styled.div`
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const CancelBtn = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #323232;
  background: #fff;

  color: #323232;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;

  cursor: pointer;
`;

const AdvertBtn = styled.button`
  background-color: #323232;
  width: 120px;
  height: 50px;
  border-radius: 5px;
  border: none;

  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;

  cursor: pointer;
`;

const AdvertReq = ({ setAdvertModalState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [complete, setComplete] = useState(false);

  const onValid = async data => {
    console.log(data);
    setComplete(true);
  };

  return (
    <>
      {complete ? (
        <AdvertComplete setAdvertModalState={setAdvertModalState} />
      ) : (
        <ModalWrapper>
          <ReqTop>카드 정보와 일치해야 합니다</ReqTop>
          <ReqForm onSubmit={handleSubmit(onValid)}>
            <InputDiv>
              <ReqText>카드번호</ReqText>
              <ReqInput
                {...register("cardNum", {
                  required: "카드번호를 입력해 주세요.",
                })}
              />
            </InputDiv>
            <ValidDiv>{errors?.cardNum?.message}</ValidDiv>
            <InputDiv>
              <ReqText>카드 유효기간</ReqText>
              <ReqInput
                {...register("cardDate", {
                  required: "카드 유효기간을 입력해 주세요.",
                })}
              />
            </InputDiv>
            <ValidDiv>{errors?.cardDate?.message}</ValidDiv>
            <InputDiv>
              <ReqText>이름</ReqText>
              <ReqInput
                {...register("name", {
                  required: "이름을 입력해 주세요.",
                })}
              />
            </InputDiv>
            <ValidDiv>{errors?.name?.message}</ValidDiv>
            <InputDiv>
              <ReqText>생년월일 6자리</ReqText>
              <ReqInput
                {...register("birthDate", {
                  required: "생년월일 6자리를 입력해 주세요.",
                })}
              />
            </InputDiv>
            <ValidDiv>{errors?.birthDate?.message}</ValidDiv>
            <BusinessNum>사업자 번호 10자리</BusinessNum>
            <PaymentInfo>
              월 50,000원(VAT 포함)이 자동으로 결제됩니다.
            </PaymentInfo>
            <InfoBtnBox>
              <CancelBtn
                onClick={e => {
                  e.preventDefault();
                  setAdvertModalState(false);
                }}
              >
                취소
              </CancelBtn>
              <AdvertBtn>결제</AdvertBtn>
            </InfoBtnBox>
          </ReqForm>
        </ModalWrapper>
      )}
    </>
  );
};

export default AdvertReq;
