import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
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
const AdminHotelForm = ({ setTitleNum }) => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log("Received values of form: ", values);
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
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
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
              return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
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

      <Form.Item
        name="intro"
        label="호텔설명"
        rules={[
          {
            required: true,
            message: "Please input Intro",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item name="checkbox-group" label="Checkbox.Group">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: "32px" }}>
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: "32px" }} disabled>
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C" style={{ lineHeight: "32px" }}>
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D" style={{ lineHeight: "32px" }}>
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E" style={{ lineHeight: "32px" }}>
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F" style={{ lineHeight: "32px" }}>
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          다음
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AdminHotelForm;
