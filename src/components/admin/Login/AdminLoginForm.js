import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "@emotion/styled";
import useCustomAdminLogin from "../../../hooks/admin/useAdminCustomLogin";
import { useNavigate } from "react-router-dom";

const NavBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  font-size: 1.4rem;
  color: #696969;

  span {
    margin-right: 30px;
    cursor: pointer;
  }
`;

const AdminLoginForm = () => {
  const savedAdminId = localStorage.getItem("savedAdminId");
  const navigate = useNavigate();
  const { doLogin } = useCustomAdminLogin();
  const [initialValue, setInitialValue] = useState(savedAdminId);
  const [idSaved, setIdSaved] = useState(savedAdminId ? true : false);

  const handleCheckboxChange = e => {
    setIdSaved(e.target.checked);
  };

  const onFinish = async values => {
    console.log("전송할 로그인 데이터: ", values);
    const loginParam = { userEmail: values?.useremail, upw: values?.password };
    try {
      setIdSaved(values.remember);
      const result = await doLogin({ loginParam });

      if (idSaved) {
        localStorage.setItem("savedAdminId", values?.useremail);
      } else {
        localStorage.removeItem("savedAdminId");
      }

      if (result === "BUSINESS_USER") {
        navigate(`/admin`);
      } else if (result === "ADMIN") {
        navigate(`/superadmin`);
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      // 로그인 실패 시 처리할 내용 추가
    }
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: idSaved,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="useremail"
          initialValue={initialValue}
          rules={[
            {
              required: true,
              message: "아이디를 입력해주세요.",
            },
          ]}
        >
          <Input
            style={{ width: 350 }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="UserEmail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요.",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onChange={handleCheckboxChange}>아이디 저장</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ backgroundColor: "#346FFF" }}
          >
            로그인
          </Button>
        </Form.Item>
      </Form>
      <NavBox>
        <span onClick={() => navigate("/admin/signup")}>
          회원이 아니신가요?
        </span>
        <span>비밀번호를 잊으셨나요?</span>
      </NavBox>
    </>
  );
};
export default AdminLoginForm;
