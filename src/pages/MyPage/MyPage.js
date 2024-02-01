import { ClassNames } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Member from "./Member";
import Password from "../../components/MyPage/Member/Password";
import Mydog from "./Mydog";
import LikeList from "./LikeList";
import Review from "./Review";
import Booking from "./Booking";

const MyPageWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1200px;
  height: auto;
  /* background-color: lavender; */
`;
const MyPageContents = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  /* height: 980px; */
  margin-top: 199px;
`;
const MyPageSide = styled.div`
  position: relative;
  padding: 35px;
  width: 250px;
  height: 320px;
  background-color: #fffaf0;
  border-radius: 10px;
`;
const SideTop = styled.div`
  position: relative;
`;
const SideTopTitle = styled.div`
  position: relative;
  p {
    width: 90px;
    height: 25px;
    font-size: 18px;
    color: #654222;
    font-weight: 600;
    border-bottom: 1px solid #654222;
  }
`;

const SideTopCate = styled.div`
  position: relative;
`;

const SideBut = styled.div`
  position: relative;
  margin-top: 35px;
  ul {
    position: relative;
    margin-top: 10px;
    li {
      position: relative;
      margin-bottom: 6px;
      cursor: pointer;
      p {
        font-size: 14px;
        color: #969696;
      }
    }
  }
`;

const MyPageRright = styled.div`
  position: relative;
`;

const MyPageRrightContent = styled.div`
  position: relative;
  width: 950px;
  /* height: 980px; */
  justify-content: center;
  align-items: center;
  /* background-color: lavender; */
`;

const SideTopCateItem = styled.div`
  position: relative;
  margin-top: 10px;
  li {
    position: relative;
    margin-bottom: 6px;

    span {
      font-size: 14px;
      color: #969696;
      cursor: pointer;
    }
  }
`;
const Content = styled.div``;

// 마이페이지
const MyPage = () => {
  const categoryTop = [
    "회원 정보",
    "예약 내역",
    "반려견 정보",
    "찜한 호텔",
    "이용 후기",
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  const clickMenu = index => {
    setSelectedCategory(index);
  };

  const myPageCate = () => {
    switch (selectedCategory) {
      case 0:
        return <Member />;
      case 1:
        return <Booking />;
      case 2:
        return <Mydog />;
      case 3:
        return <LikeList />;
      case 4:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <div>
      <MyPageWrap>
        <MyPageContents>
          <MyPageSide>
            <SideTop>
              <SideTopTitle>
                <p>마이페이지</p>
              </SideTopTitle>
              <SideTopCate>
                <SideTopCateItem>
                  {categoryTop.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => clickMenu(index)}
                      className={selectedCategory === index ? "selected" : ""}
                    >
                      <span
                        style={{
                          color:
                            selectedCategory === index ? "#654222" : "#969696",
                          fontWeight:
                            selectedCategory === index ? "600" : "400",
                        }}
                      >
                        {category}
                      </span>
                    </li>
                  ))}
                </SideTopCateItem>
              </SideTopCate>
            </SideTop>
            <SideBut>
              <ul>
                <li>
                  <p>설정</p>
                </li>
                <li>
                  <p>QnA</p>
                </li>
                <li>
                  <p>고객센터</p>
                </li>
              </ul>
            </SideBut>
          </MyPageSide>
          <MyPageRright>
            <MyPageRrightContent>
              {selectedCategory !== null && myPageCate()}
            </MyPageRrightContent>
          </MyPageRright>
        </MyPageContents>
      </MyPageWrap>
    </div>
  );
};

export default MyPage;
