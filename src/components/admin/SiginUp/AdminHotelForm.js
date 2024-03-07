import React, { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import AddressPopup from "../../SignUp/AddressPopup";
import { AdminSignUpAPI } from "../../../api/admin/Common/adminSignUpApi";
import { useNavigate } from "react-router-dom";

const AddressBox = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
  width: 750px;

  margin-bottom: 20px;
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
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  line-height: normal;
`;

const AddressBtn = styled.div`
  position: absolute;
  top: 0;
  right: -60px;

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
const normFile = e => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const AdminHotelForm = ({ data, setData, setTitleNum }) => {
  const [address, setAddress] = useState();
  const [popUp, setPopUp] = useState(false);
  const [fileList, setFileList] = useState([]);
  const navigator = useNavigate();

  const [form] = Form.useForm();
  console.log(address);

  const onFinish = async values => {
    // FormData 생성
    const formData = new FormData();
    console.log(values);
    const sendData = {
      businessUserDto: {
        emailResponseVo: {
          email: data.businessUserDto.emailResponseVo.email,
          result: data.businessUserDto.emailResponseVo.result,
        },
        upw: data.businessUserDto.upw,
        phoneNum: data.businessUserDto.phoneNum,
        businessName: data.businessUserDto.businessName,
      },
      hotelDto: {
        hotelNm: values.hotelNm,
        hotelDetailInfo: values.hotelInfo,
        businessNum: values.businessNum,
        hotelCall: values.phone,
        hotelOption: values.hotelOption,
        hotelAddressInfo: {
          addressName: address.address_name,
          region1DepthName: address.region_1depth_name,
          region2DepthName: address.region_2depth_name,
          region3DepthName: address.region_3depth_name,
          zoneNum: address.zone_no,
          x: address.x,
          y: address.y,
          detailAddress: values.addressDetail,
        },
      },
      businessCertificationFile: values.businessUpload,
      hotelPics: values.hotelUpload,
    };
    // console.log("sendData: ", sendData);
    // businessUserDto 데이터 추가
    formData.append(
      "businessUserDto",
      new Blob(
        [
          JSON.stringify({
            emailResponseVo: {
              email: data.businessUserDto.emailResponseVo.email,
              result: data.businessUserDto.emailResponseVo.result,
            },
            upw: data.businessUserDto.upw,
            phoneNum: data.businessUserDto.phoneNum,
            businessName: data.businessUserDto.businessName,
          }),
        ],
        { type: "application/json" },
      ),
    );

    // hotelDto 데이터 추가
    formData.append(
      "hotelDto",
      new Blob(
        [
          JSON.stringify({
            hotelNm: values.hotelNm,
            hotelDetailInfo: values.hotelInfo,
            businessNum: values.businessNum,
            hotelCall: values.phone,
            hotelOption: values.hotelOption,
            hotelAddressInfo: {
              addressName: address.address_name,
              region1DepthName: address.region_1depth_name,
              region2DepthName: address.region_2depth_name,
              region3DepthName: address.region_3depth_name,
              zoneNum: address.zone_no,
              x: address.x,
              y: address.y,
              detailAddress: values.addressDetail,
            },
          }),
        ],
        { type: "application/json" },
      ),
    );

    // 파일을 formData에 추가
    sendData.businessCertificationFile.forEach(file => {
      formData.append(`businessCertificationFile`, file.originFileObj);
    });

    sendData.hotelPics.forEach(file => {
      console.log(file.originFileObj);
      formData.append(`hotelPics`, file.originFileObj);
    });

    // Axios를 사용하여 API 호출
    const result = await AdminSignUpAPI(formData);

    if (result === 1) {
      alert("회원가입 되셨습니다.");
      navigator("/admin/login");
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="82">+82</Option>
        <Option value="85">+85</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  console.log(data);
  return (
    <>
      {popUp && <AddressPopup setPopUp={setPopUp} setAddress={setAddress} />}
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
          name="businessUpload"
          label="사업자등록증"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "사업자등록증을 첨부해 주세요.",
            },
          ]}
        >
          <Upload name="logo" listType="text" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>문서첨부</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="businessNum"
          label="사업자등록번호"
          rules={[
            {
              required: true,
              message: "사업자등록번호를 입력해 주세요.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="hotelNm"
          label="호텔이름"
          rules={[
            {
              required: true,
              message: "호텔이름을 입력해 주세요.",
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
        {!address ? (
          <>
            <Form.Item
              name="address"
              label="주소"
              rules={[
                {
                  required: true,
                  message: "주소를 입력해 주세요.",
                },
              ]}
            >
              <div>
                <Input readOnly />
                <AddressBtn
                  onClick={() => {
                    setPopUp(true);
                  }}
                >
                  찾기
                </AddressBtn>
              </div>
            </Form.Item>
          </>
        ) : (
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
        )}
        <Form.Item
          name="addressDetail"
          label="상세주소"
          rules={[
            {
              required: true,
              message: "상세주소를 입력해 주세요.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="hotelUpload"
          label="호텔사진"
          getValueFromEvent={normFile}
          valuePropName="fileList"
          rules={[
            {
              required: true,
              message: "호텔사진을 추가해 주세요.",
            },
          ]}
        >
          <Upload
            name="logo"
            listType="picture"
            beforeUpload={file => {
              setFileList(fileList.concat(file));
              return false; // 파일 선택시 바로 업로드 하지 않고 후에 한꺼번에 전송하기 위함
            }}
          >
            <Button icon={<UploadOutlined />}>사진첨부</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="hotelOption" label="호텔옵션">
          <Checkbox.Group>
            <Row>
              <Col span={5}>
                <Checkbox value={1} style={{ lineHeight: "32px" }}>
                  수영장
                </Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value={2} style={{ lineHeight: "32px" }}>
                  운동장
                </Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value={3} style={{ lineHeight: "32px" }}>
                  수제식
                </Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value={4} style={{ lineHeight: "32px" }}>
                  셔틀운행
                </Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value={5} style={{ lineHeight: "32px" }}>
                  프로그램
                </Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value={6} style={{ lineHeight: "32px" }}>
                  산책
                </Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value={7} style={{ lineHeight: "32px" }}>
                  미용
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          name="hotelInfo"
          label="호텔설명"
          rules={[
            {
              required: true,
              message: "호텔설명을 입력해 주세요.",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={1000} />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("이용약관동의를 해주세요.")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>이용약관동의</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            onClick={e => {
              e.preventDefault();
              setTitleNum(1);
            }}
            style={{
              marginRight: 10,
            }}
          >
            이전
          </Button>
          <Button type="primary" htmlType="submit">
            완료
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AdminHotelForm;
