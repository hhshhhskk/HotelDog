import styled from "@emotion/styled";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #323232;
  width: 300px;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const SideHeader = styled.div`
  width: 100%;
  height: 168px;

  padding: 85px 0 0 40px;
  border-bottom: 1px solid #666666;
`;

const SideHeaderNameBox = styled.div``;

const SideHeaderName = styled.span`
  color: #fff;
  font-family: "Noto Sans";
  font-size: 2.2rem;
  font-weight: 600;

  margin-right: 8px;
  margin-bottom: 6px;
`;

const SideHeaderGreet = styled.span`
  color: #346fff;
  font-family: "Noto Sans";
  font-size: 1.6rem;
  font-weight: 500;
`;

const SideHeaderEmailBox = styled.span`
  color: #666;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SideContents = styled.div`
  width: 100%;

  padding-top: 52px;
`;

const SideCategorys = styled.div`
  color: #fff;
  font-family: "Noto Sans";
  font-size: 1.8rem;
  font-weight: 600;

  // 상 우 하 좌
  margin: 22px 0 12px 40px;
`;

const SideCategoryItems = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  color: ${props => (props.cateState === props.itemState ? "#fff" : "#666")};
  background-color: ${props =>
    props.cateState === props.itemState ? "#346fff" : "none"};

  cursor: pointer;
`;

const SideCategoryItemImg = styled.img`
  width: 20px;
  height: 22px;

  margin: 0 20px 0 40px;
`;

const SideCategoryItemText = styled.div`
  font-family: "Noto Sans";
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
`;

const SideBar = () => {
  const navigate = useNavigate();

  // 임시 유저 구분
  const location = useLocation();
  const pathName = location.pathname;
  const pathArray = pathName.split("/");
  const userType = pathArray[1];

  // 사업자 카테고리
  const categorys = [
    {
      category: "객실관리",
      day: "일일 내역",
      booking: "예약 관리",
    },
    {
      category: "호텔관리",
      info: "호텔 정보",
      hotelUpdate: "호텔 수정",
      roomUpdate: "객실 수정",
    },
  ];
  // 최고 관리자 카테고리
  const adminCategorys = [
    {
      category: "회원관리",
      user: "일반회원",
      admin: "사업자 회원",
      adminReq: "사업자 회원가입 요청",
    },
    {
      category: "호텔관리",
      list: "호텔 리스트",
    },
  ];

  const [cateState, setCateState] = useState(0);

  const categoryClicked = (e, value, cateNum) => {
    e.preventDefault();
    setCateState(cateNum);

    // 사업자
    userType === "admin"
      ? value === "일일내역"
        ? navigate("/admin")
        : value === "예약관리"
        ? navigate("/admin")
        : value === "호텔 정보"
        ? navigate("/admin/hotelinfo")
        : value === "호텔 수정"
        ? navigate("/admin")
        : value === "객실 수정"
        ? navigate("/admin")
        : null
      : // 최고관리자
      userType === "superadmin"
      ? value === "일반회원"
        ? navigate("/superadmin")
        : value === "사업자 회원"
        ? navigate("/superadmin/business")
        : value === "호텔 리스트"
        ? navigate("/superadmin/hotellist")
        : null
      : null;
  };

  if (userType === "admin") {
    return (
      <SideWrapper>
        <SideHeader>
          <SideHeaderNameBox>
            <SideHeaderName>테스트</SideHeaderName>
            <SideHeaderGreet>님, 안녕하세요 :)</SideHeaderGreet>
          </SideHeaderNameBox>
          <SideHeaderEmailBox>testId@naver.com</SideHeaderEmailBox>
        </SideHeader>
        <SideContents>
          {categorys.map((item, idx) => (
            <div key={idx}>
              <SideCategorys>{item.category}</SideCategorys>
              {Object.values(item)
                .slice(1)
                .map((value, key) => (
                  <SideCategoryItems
                    key={key}
                    itemState={idx === 0 ? key : key + 2}
                    cateState={cateState}
                    onClick={e => {
                      const cateNum = idx === 0 ? key : key + 2;
                      categoryClicked(e, value, cateNum);
                    }}
                  >
                    <SideCategoryItemImg
                      src={`${
                        process.env.PUBLIC_URL
                      }/admin/images/Sidebar/business/sideIcon${
                        idx === 0 ? key : key + 2
                      }_${
                        cateState === (idx === 0 ? key : key + 2) ? 1 : 0
                      }.svg`}
                    />
                    <SideCategoryItemText>{value}</SideCategoryItemText>
                  </SideCategoryItems>
                ))}
            </div>
          ))}
        </SideContents>
      </SideWrapper>
    );
  } else if (userType === "superadmin") {
    return (
      <SideWrapper>
        <SideHeader>
          <SideHeaderNameBox>
            <SideHeaderName>최관리</SideHeaderName>
            <SideHeaderGreet>님, 안녕하세요 :)</SideHeaderGreet>
          </SideHeaderNameBox>
          <SideHeaderEmailBox>최고관리자@naver.com</SideHeaderEmailBox>
        </SideHeader>
        <SideContents>
          {adminCategorys.map((item, idx) => (
            <div key={idx}>
              <SideCategorys>{item.category}</SideCategorys>
              {Object.values(item)
                .slice(1)
                .map((value, key) => (
                  <SideCategoryItems
                    key={key}
                    itemState={idx === 0 ? key : key + 3}
                    cateState={cateState}
                    onClick={e => {
                      const cateNum = idx === 0 ? key : key + 3;
                      categoryClicked(e, value, cateNum);
                    }}
                  >
                    <SideCategoryItemImg
                      src={`${
                        process.env.PUBLIC_URL
                      }/admin/images/Sidebar/superAdmin/adminSideIcon${
                        idx === 0 ? key : key + 3
                      }_${
                        cateState === (idx === 0 ? key : key + 3) ? 1 : 0
                      }.svg`}
                    />
                    <SideCategoryItemText>{value}</SideCategoryItemText>
                  </SideCategoryItems>
                ))}
            </div>
          ))}
        </SideContents>
      </SideWrapper>
    );
  } else {
    return null;
  }
};

export default SideBar;
