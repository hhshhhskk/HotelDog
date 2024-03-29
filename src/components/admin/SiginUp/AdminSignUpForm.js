import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import styled from "@emotion/styled";
import AddressPopup from "../../SignUp/AddressPopup";
import AdminMailModal from "./AdminMailModal";
import { AdminMailAuthApi } from "../../../api/admin/Common/adminSignUpApi";

const MailCheckedDiv = styled.div`
  width: 500px;
  height: 32px;

  background-color: #c9c9c9;
  color: #9d9d9d;

  padding: 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const InnerBtn = styled.div`
  position: absolute;
  top: 0;
  right: -62px;

  width: 57px;
  height: 32px;
  background-color: #1677ff;
  color: #fff;
  font-weight: 400;
  text-align: center;
  line-height: 31px;

  border-radius: 6px;

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
  const [mail, setMail] = useState("");
  const [mailChecked, setMailChecked] = useState(false);
  const [isMailModalOpen, setMailModalOpen] = useState(false);

  const onFinish = values => {
    if (mailChecked === false) {
      return alert("메일인증을 해주세요.");
    }

    setData({
      businessUserDto: {
        emailResponseVo: {
          email: values?.email,
          result: 1,
        },
        upw: values?.password,
        phoneNum: values?.phone,
        businessName: values?.name,
      },
    });
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
        <Option value="82">+82</Option>
        <Option value="83">+83</Option>
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
      </Select>
    </Form.Item>
  );

  const openMailModal = () => {
    setMailModalOpen(true);
    AdminMailAuthApi(mail);
  };

  const closeMailModal = () => {
    setMailModalOpen(false);
  };

  return (
    <>
      {popUp && <AddressPopup setPopUp={setPopUp} setAddress={setAddress} />}
      {isMailModalOpen && (
        <AdminMailModal
          mail={mail}
          closeMailModal={closeMailModal}
          setMailChecked={setMailChecked}
        />
      )}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "82",
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
              message: "이메일 형식이 아닙니다.",
            },
            {
              required: true,
              message: "이메일을 입력해 주세요.",
            },
          ]}
        >
          <div>
            {mailChecked ? (
              <MailCheckedDiv>{mail}</MailCheckedDiv>
            ) : (
              <Input
                onChange={e => {
                  setMail(e.target.value);
                }}
              />
            )}

            {mailChecked ? (
              <InnerBtn
                onClick={() => {
                  form
                    .validateFields(["email"])
                    .then(() => {
                      openMailModal();
                    })
                    .catch(() => {
                      console.log("이메일형식아님");
                    });
                }}
              >
                메일수정
              </InnerBtn>
            ) : (
              <InnerBtn
                onClick={() => {
                  form
                    .validateFields(["email"])
                    .then(() => {
                      openMailModal();
                    })
                    .catch(() => {
                      console.log("이메일형식아님");
                    });
                }}
              >
                메일인증
              </InnerBtn>
            )}
          </div>
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
          name="name"
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
        <Form.Item style={{ marginTop: 50 }} {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            다음
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AdminSignUpForm;
