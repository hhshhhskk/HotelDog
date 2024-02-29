import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import styled from "@emotion/styled";
import AddressPopup from "../../SignUp/AddressPopup";

const AddressBox = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
  width: 810px;

  margin-bottom: 50px;
`;

const AddressName = styled.div`
  width: 60px;
  height: 32px;
  text-align: right;
  margin-right: 7px;
  padding-top: 4px;
`;

const AddressDiv = styled.div`
  width: 500px;
  height: 32px;
  padding: 4px 11px;
  margin-right: 5px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  line-height: normal;
`;

const AddressBtn = styled.div`
  width: 57px;
  height: 32px;
  padding-top: 4px;
  text-align: center;
  color: #fff;
  border-radius: 6px;
  background-color: #1677ff;

  cursor: pointer;

  :hover {
    background-color: #4096ff;
  }
`;

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const AdminSignUpForm = ({ setData, setTitleNum }) => {
  const [form] = Form.useForm();
  const [popUp, setPopUp] = useState(false);
  const [address, setAddress] = useState();

  const onFinish = values => {
    setData([values, address]);
    console.log("회원정보 데이터: ", values);
    setTitleNum(2);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      {popUp && <AddressPopup setPopUp={setPopUp} setAddress={setAddress} />}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "86",
        }}
        style={{
          width: 750,
          marginRight: 250,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail 아이디"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "이메일을 입력해 주세요.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해 주세요.",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호 확인을 입력해 주세요.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다."),
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="Name"
          label="실명"
          rules={[
            {
              required: true,
              message: "실명을 입력해 주세요.",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="전화번호"
          rules={[
            {
              required: true,
              message: "전화번호를 입력해 주세요.",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <AddressBox>
          <AddressName>
            <span style={{ color: "#ff4d4f" }}>*</span> 주소 :
          </AddressName>
          <AddressDiv>{address?.address_name}</AddressDiv>
          <AddressBtn
            onClick={() => {
              setPopUp(true);
            }}
          >
            찾기
          </AddressBtn>
        </AddressBox>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            다음
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AdminSignUpForm;
