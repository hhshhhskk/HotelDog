import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import AdminSignUpForm from "../../../../components/admin/SiginUp/AdminSignUpForm";
import AdminHotelForm from "../../../../components/admin/SiginUp/AdminHotelForm";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 100px;
`;

const SiginUpBox = styled.div`
  background-color: beige;
  width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SiginUpTitleBox = styled(motion.div)`
  position: relative;
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 50px;
`;

const TitleBoxItemBorder = styled(motion.div)`
  position: absolute;
  width: 90px;
  height: 90px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: ${props =>
    props.titlenum === 1
      ? "38px"
      : props.titlenum === 2
      ? "none"
      : props.titlenum === 3
      ? "372px"
      : null};
`;

const TitleBoxItem = styled.div`
  width: 80px;
  height: 80px;
`;

const TitleImg = styled.img`
  width: 80px;
  height: 60px;
`;

const TitleText = styled.div`
  text-align: center;
  font-size: 1.6rem;
`;

const AdminSignUpPage = () => {
  const [titleNum, setTitleNum] = useState(1);

  return (
    <Wrapper>
      <SiginUpBox>
        <SiginUpTitleBox>
          <TitleBoxItemBorder layout titlenum={titleNum} />
          <TitleBoxItem>
            <TitleImg
              src={`${process.env.PUBLIC_URL}/admin/images/SignUp/signupUser.svg`}
            />
            <TitleText>회원가입</TitleText>
          </TitleBoxItem>
          <TitleBoxItem>
            <TitleImg
              src={`${process.env.PUBLIC_URL}/admin/images/SignUp/signupHotel.svg`}
            />
            <TitleText>호텔등록</TitleText>
          </TitleBoxItem>
          <TitleBoxItem>
            <TitleImg
              src={`${process.env.PUBLIC_URL}/admin/images/SignUp/signupRoom.svg`}
            />
            <TitleText>객실등록</TitleText>
          </TitleBoxItem>
        </SiginUpTitleBox>
        {titleNum === 1 ? (
          <AdminSignUpForm setTitleNum={setTitleNum} />
        ) : titleNum === 2 ? (
          <AdminHotelForm />
        ) : null}
      </SiginUpBox>
    </Wrapper>
  );
};

export default AdminSignUpPage;
