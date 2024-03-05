import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AdminLoginApi } from "../../../api/admin/Common/loginApi";
import doLogin from "../../../hooks/admin/adminCustomLogin";

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
  const navigate = useNavigate();
  // const { doLogin } = adminCustomLogin();
  const savedId = localStorage.getItem("savedId");
  const [idSaved, setIdSaved] = useState(savedId ? true : false);

  const onFinish = values => {
    console.log("Received values of form: ", values);
    const loginParam = { userEmail: values?.username, upw: values?.password };
    doLogin({ loginParam });
    if (idSaved) {
      localStorage.setItem("savedId", values?.username);
    }
  };
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
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
            placeholder="Username"
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
            <Checkbox>아이디 저장</Checkbox>
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
