import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  margin-top: 40px;
`;

export const SignUpContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SignUpForm = styled.form`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpTitle = styled.div`
  color: #654222;
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 40px;
`;

export const InputName = styled.div`
  width: 550px;
  height: 20px;
  font-size: 1.4rem;
  color: #654222;
  margin-bottom: 11px;
`;

export const InputBox = styled.input`
  width: 550px;
  height: 40px;
  margin-bottom: 18px;
  font-size: 1.4rem;
  padding-left: 10px;
  border: 1px solid #654222;
  border-radius: 10px;

  background-color: ${props =>
    props.check === "checked" ? "#c9c9c9" : "#fff"};
  color: ${props => (props.check === "checked" ? "#9D9D9D" : "#000")};
`;

export const AddressBox = styled.div`
  width: 550px;
  height: 40px;
  margin-bottom: 5px;
  font-size: 1.4rem;
  line-height: 38px;
  padding-left: 10px;
  border: 1px solid #654222;
  border-radius: 10px;
`;

export const InnerDiv = styled.div`
  position: relative;
`;

export const InnerBtn = styled.div`
  position: absolute;
  top: 36px;
  right: 5px;
  width: 80px;
  height: 30px;
  background-color: #654222;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  line-height: 3rem;

  border-radius: 6px;
`;

export const AgreeDiv = styled.div`
  width: 550px;
  font-size: 1.5rem;
  color: #654222;
  margin-bottom: 30px;
`;

export const AgreeImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const SignUpBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #654222;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  border-radius: 7px;
`;
