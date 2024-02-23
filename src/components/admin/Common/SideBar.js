import styled from "@emotion/styled";
import React, { useState } from "react";

const SideWrapper = styled.div`
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

  const adminCategorys = [
    {
      category: "회원관리",
      user: "일반화원",
      admin: "사업자 회원",
    },
    {
      category: "호텔관리",
      list: "호텔 리스트",
    },
  ];
  const [cateState, setCateState] = useState(0);

  const categoryClicked = (e, cateNum) => {
    e.preventDefault();
    setCateState(cateNum);
  };

  // return (
  //   <SideWrapper>
  //     <SideHeader>
  //       <SideHeaderNameBox>
  //         <SideHeaderName>테스트</SideHeaderName>
  //         <SideHeaderGreet>님, 안녕하세요 :)</SideHeaderGreet>
  //       </SideHeaderNameBox>
  //       <SideHeaderEmailBox>testId@naver.com</SideHeaderEmailBox>
  //     </SideHeader>
  //     <SideContents>
  //       {categorys.map((item, idx) => (
  //         <div key={idx}>
  //           <SideCategorys>{item.category}</SideCategorys>
  //           {Object.values(item)
  //             .slice(1)
  //             .map((value, key) => (
  //               <SideCategoryItems
  //                 key={key}
  //                 itemState={idx === 0 ? key : key + 2}
  //                 cateState={cateState}
  //               >
  //                 <SideCategoryItemImg
  //                   src={`${
  //                     process.env.PUBLIC_URL
  //                   }/admin/images/Sidebar/sideIcon${
  //                     idx === 0 ? key : key + 2
  //                   }_${cateState === (idx === 0 ? key : key + 2) ? 1 : 0}.svg`}
  //                 />
  //                 <SideCategoryItemText
  //                   onClick={e => {
  //                     const cateNum = idx === 0 ? key : key + 2;
  //                     categoryClicked(e, cateNum);
  //                   }}
  //                 >
  //                   {value}
  //                 </SideCategoryItemText>
  //               </SideCategoryItems>
  //             ))}
  //         </div>
  //       ))}
  //     </SideContents>
  //   </SideWrapper>
  // );

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
                    categoryClicked(e, cateNum);
                  }}
                >
                  <SideCategoryItemImg
                    src={`${
                      process.env.PUBLIC_URL
                    }/admin/images/Sidebar/buisness/sideIcon${
                      idx === 0 ? key : key + 2
                    }_${cateState === (idx === 0 ? key : key + 2) ? 1 : 0}.svg`}
                  />
                  <SideCategoryItemText>{value}</SideCategoryItemText>
                </SideCategoryItems>
              ))}
          </div>
        ))}
      </SideContents>
    </SideWrapper>
  );
};

export default SideBar;
