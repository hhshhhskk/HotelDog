import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutAPI } from "../../../api/Login/logoutApi";
import useCustomAdminLogin from "../../../hooks/admin/useAdminCustomLogin";
import { getJwtHotelInfoAPI } from "../../../api/admin/Business/HotelManagement/HotelInfoApi";

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

const SideCategorysEnd = styled.div`
  height: 50px;
  font-family: "Noto Sans";
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-left: 40px;

  color: ${props => (props.cateState === props.itemState ? "#fff" : "#666")};
  background-color: ${props => (props.cateState === 5 ? "#346fff" : "none")};

  cursor: pointer;
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

const LogoutBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #292929;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  div {
    height: 20px;
    color: #666;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

const LogoutImg = styled.img`
  width: 20px;
  height: 17.5px;
  margin-left: 40px;
`;

const SideBar = () => {
  const navigate = useNavigate();
  const { doLogout } = useCustomAdminLogin();
  const [adminName, setAdminName] = useState();
  const [adminEmail, setAdminEmail] = useState();
  const [cateState, setCateState] = useState();
  // 임시 유저 구분
  const location = useLocation();
  const pathName = location.pathname;
  const pathArray = pathName.split("/");
  const userType = pathArray[1];

  useEffect(() => {
    const pathName = location.pathname;
    const pathArray = pathName.split("/");
    const userType = pathArray[1];
    const currentCate = pathArray[2];

    // 사업자
    userType === "admin"
      ? currentCate === "roomlist"
        ? setCateState(1)
        : currentCate === "hotelinfo"
        ? setCateState(2)
        : currentCate === "hotelmodify"
        ? setCateState(3)
        : currentCate === "roommodify"
        ? setCateState(4)
        : currentCate === "deleteIdPage"
        ? setCateState(5)
        : setCateState(0)
      : // 최고관리자
      userType === "superadmin"
      ? currentCate === "business"
        ? setCateState(1)
        : currentCate === "businessreq"
        ? setCateState(2)
        : currentCate === "hotellist"
        ? setCateState(3)
        : setCateState(0)
      : setCateState(0);
  }, [location]);
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
    {
      category: "운영 관리 및 탈퇴",
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

  useEffect(() => {
    setAdminEmail(sessionStorage.getItem("adminEmail"));
    setAdminName(sessionStorage.getItem("adminName"));
  }, [adminName]);

  const categoryClicked = (e, value, cateNum) => {
    e.preventDefault();
    setCateState(cateNum);

    // 사업자
    userType === "admin"
      ? value === "일일 내역"
        ? navigate("/admin")
        : value === "예약 관리"
        ? navigate("/admin/roomlist")
        : value === "호텔 정보"
        ? navigate("/admin/hotelinfo")
        : value === "호텔 수정"
        ? navigate("/admin/hotelmodify")
        : value === "객실 수정"
        ? navigate("/admin/roommodify")
        : value === "운영 관리 및 탈퇴"
        ? navigate("/admin/deleteIdPage")
        : null
      : // 최고관리자
      userType === "superadmin"
      ? value === "일반회원"
        ? navigate("/superadmin")
        : value === "사업자 회원"
        ? navigate("/superadmin/business")
        : value === "사업자 회원가입 요청"
        ? navigate("/superadmin/businessreq")
        : value === "호텔 리스트"
        ? navigate("/superadmin/hotellist")
        : null
      : null;
  };

  const logoutClicked = async () => {
    await logoutAPI();
    doLogout();
    navigate("/admin/login");
  };

  if (userType === "admin") {
    return (
      <SideWrapper>
        <SideHeader>
          <SideHeaderNameBox>
            <SideHeaderName>{adminName}</SideHeaderName>
            <SideHeaderGreet>님, 안녕하세요 :)</SideHeaderGreet>
          </SideHeaderNameBox>
          <SideHeaderEmailBox>{adminEmail}</SideHeaderEmailBox>
        </SideHeader>
        <SideContents>
          {categorys.map((item, idx) => (
            <div key={idx}>
              {item.category === "운영 관리 및 탈퇴" ? (
                <SideCategorysEnd
                  itemState={5}
                  cateState={cateState}
                  onClick={e => {
                    const cateNum = 5;
                    const value = "운영 관리 및 탈퇴";
                    categoryClicked(e, value, cateNum);
                  }}
                >
                  {item.category}
                </SideCategorysEnd>
              ) : (
                <SideCategorys>{item.category}</SideCategorys>
              )}
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
          <LogoutBox onClick={logoutClicked}>
            <LogoutImg
              src={`${process.env.PUBLIC_URL}/admin/images/Sidebar/logout.svg`}
            />
            <div>로그아웃</div>
          </LogoutBox>
        </SideContents>
      </SideWrapper>
    );
  } else if (userType === "superadmin") {
    return (
      <SideWrapper>
        <SideHeader>
          <SideHeaderNameBox>
            <SideHeaderName>{adminName}</SideHeaderName>
            <SideHeaderGreet>님, 안녕하세요 :)</SideHeaderGreet>
          </SideHeaderNameBox>
          <SideHeaderEmailBox>{adminEmail}</SideHeaderEmailBox>
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
        <LogoutBox onClick={logoutClicked}>
          <LogoutImg
            src={`${process.env.PUBLIC_URL}/admin/images/Sidebar/logout.svg`}
          />
          <div>로그아웃</div>
        </LogoutBox>
      </SideWrapper>
    );
  } else {
    return null;
  }
};

export default SideBar;
