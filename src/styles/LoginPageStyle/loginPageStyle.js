import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const LoginContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const LoginLogo = styled.img`
  width: 200px;
  height: 200px;

  margin-top: 30px;
`;

export const LoginArea = styled.div`
  width: 475px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const LoginType = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  line-height: 50px;
  font-size: 1.6rem;
  text-align: center;
  border: none;
`;

export const LoginCommon = styled.div`
  width: 50%;
  height: 100%;
  color: #fff;
  background-color: ${props => (props.userType === 1 ? "#654222" : "#d9d9d9")};

  cursor: pointer;
  border-top: 1px solid #d9d9d9;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const LoginBusiness = styled(LoginCommon)`
  background-color: ${props => (props.userType === 1 ? "#D9D9D9" : "#654222")};
`;

export const LoginForm = styled.form`
  position: relative;
  width: 100%;
  height: 210px;
  border: 1px solid #d9d9d9;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 290px;
  height: 75px;
`;

export const LoginInput = styled.input`
  width: 290px;
  height: 35px;
  font-size: 1.2rem;
  padding-left: 10px;
  border: 1px solid #654222;
  border-radius: 10px;
`;

export const LoginBtn = styled.button`
  width: 90px;
  height: 75px;

  font-size: 1.2rem;
  color: #fff;
  background-color: #654222;

  border: none;
  border-radius: 10px;
  &:hover {
    background-color: rgba(101, 66, 34, 0.9);
  }
  cursor: pointer;
`;

export const IdSave = styled.div`
  width: 384px;
  font-size: 1rem;
  color: gray;
  margin-top: 10px;
  margin-bottom: 17px;
`;

export const IdSaveImgBtn = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;

  cursor: pointer;
`;

export const SignUpBox = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

export const SignUpBtn = styled.span`
  font-size: 1.2rem;
  color: #654222;
  margin-left: 10px;
  cursor: pointer;
`;
