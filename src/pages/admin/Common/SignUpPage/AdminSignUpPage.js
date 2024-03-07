import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import AdminSignUpForm from "../../../../components/admin/SiginUp/AdminSignUpForm";
import AdminHotelForm from "../../../../components/admin/SiginUp/AdminHotelForm";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const SiginUpBox = styled.div`
  width: 1200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SiginUpTitleBox = styled(motion.div)`
  position: relative;
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 70px;
  margin-bottom: 50px;
`;

const TitleBoxItemBorder = styled(motion.div)`
  position: absolute;
  width: 90px;
  height: 90px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: ${props =>
    props.titlenum === 1 ? "80px" : props.titlenum === 2 ? "330px" : null};
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
  const [data, setData] = useState();
  const [titleNum, setTitleNum] = useState(1);
  console.log("현재 데이터 상태: ", data);
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
        </SiginUpTitleBox>
        {titleNum === 1 ? (
          <AdminSignUpForm setData={setData} setTitleNum={setTitleNum} />
        ) : titleNum === 2 ? (
          <AdminHotelForm
            data={data}
            setData={setData}
            setTitleNum={setTitleNum}
          />
        ) : null}
      </SiginUpBox>
    </Wrapper>
  );
};

export default AdminSignUpPage;
