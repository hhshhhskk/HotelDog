import styled from "@emotion/styled";
import React from "react";

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
  height: 980px;
  margin-top: 199px;
`;
const MyPageSide = styled.div`
  position: relative;
  padding: 35px;
  width: 250px;
  height: 330px;
  background-color: #fffaf0;
  border-radius: 10px;
`;
const SideTop = styled.div`
  position: relative;
`;
const SideTopTitle = styled.div`
  position: relative;
  p {
    width: 82px;
    height: 25px;
    font-size: 18px;
    color: #654222;
    font-weight: 600;
    border-bottom: 1px solid #654222;
  }
`;

const SideTopCate = styled.div`
  position: relative;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 260px;
  width: 300px;
  height: 168px;
  background-color: #ffffff;
`;

const MyPageRrightContent = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  p {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    color: #654222;
  }

  img {
    position: relative;
    width: 60px;
    height: 62px;
  }
  input {
    position: relative;
    color: #654222;
    width: 250px;
    height: 30px;
    overflow: hidden;
    font-size: 4rem;
    border: 1px solid #654222;
    border-radius: 10px;
    padding-bottom: 10px;
    padding-left: 10px;

    overflow: hidden;
  }
`;

// 마이페이지
const MyPage = () => {
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
                <ul>
                  <li>
                    <p>회원 정보</p>
                  </li>
                  <li>
                    <p>예약내역</p>
                  </li>
                  <li>
                    <p>반려견 정보</p>
                  </li>
                  <li>
                    <p>찜한 호텔</p>
                  </li>
                  <li>
                    <p>이용 후기</p>
                  </li>
                </ul>
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
              <img src={`${process.env.PUBLIC_URL}/images/MyPage/unlock.svg`} />
              <p>비밀번호를 다시 한 번 입력해주세요.</p>
              <input type="password" />
            </MyPageRrightContent>
          </MyPageRright>
        </MyPageContents>
      </MyPageWrap>
    </div>
  );
};

export default MyPage;
