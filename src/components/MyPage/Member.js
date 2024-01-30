import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Password from "./Password";

const MemberPage = styled.div`
  margin-left: 85px;
  position: relative;
  width: 865px;
`;

const PageTitle = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 35px;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #654222;
  }
`;
const MemberContents = styled.div`
  position: relative;
  display: flex;
  width: 550px;
  height: 700px;
  flex-direction: column;
  p {
    color: #654222;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 7px;
  }
`;
const MemberId = styled.div`
  position: relative;
  margin-bottom: 17px;
  span {
    color: #654222;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 7px;
  }
`;
const MemberPassword = styled.div`
  position: relative;
`;
const InfoBox = styled.input`
  position: relative;
  width: 550px;
  height: 40px;
  border: 1px solid #654222;
  border-radius: 10px;
  margin-bottom: 17px;
  padding-left: 20px;
`;
const PasswordCheck = styled.div`
  position: relative;
`;
const PasswordCheckBox = styled.div`
  position: relative;
`;
const MemberNm = styled.div`
  position: relative;
`;
const MemberNmBox = styled.div`
  position: relative;
`;
const MemberNb = styled.div`
  position: relative;
`;
const MemberNbBox = styled.div`
  position: relative;
`;
const MemberAd = styled.div`
  position: relative;
`;
const MemberAdBox = styled.div`
  position: relative;
`;
const InfoFetch = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
const InfoFetchBt = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background: #654222;
  border: none;
  cursor: pointer;
  p {
    position: relative;
    color: #fff;
    font-size: 12px;
    margin-bottom: 0;
  }
`;

const Member = () => {
  // 회원 정보 상태 정의
  const [memberInfo, setMemberInfo] = useState({
    userPk: 0,
    userEmail: "",
    nickname: "",
    phoneNum: "",
    userAddress: "",
  });

  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        // 토큰 값 가져오기 // 여기에 실제 토큰 값을 넣어주세요.
        const jwtToken =
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1widXNlclBrXCI6ODN9IiwiaWF0IjoxNzA2NTk3NjMxLCJleHAiOjE3MDY2MDQ4MzF9.dBpJ_Vhkm4tMfWJ7-64EaCyfBrvR06oLz1-cyfQki6s";
        // API 요청 보낼 때 헤더에 토큰 추가
        const response = await axios.post(
          "/api/user/info",
          {
            upw: "0405dbals",
          },
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          },
        );

        // API 요청이 성공했을 때 받아온 데이터를 상태에 저장
        setMemberInfo(response.data);
      } catch (error) {
        // API 요청이 실패했을 때의 처리
        console.error("Error fetching member info:", error);
      }
    };

    fetchMemberInfo(); // 함수 호출
  }, []); // 빈 배열을 넣어서 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정
  console.log(memberInfo);
  return (
    <MemberPage>
      <Password />
      <PageTitle>
        <p>회원정보</p>
      </PageTitle>
      <MemberContents>
        <MemberId>
          <p>아이디</p>
          <span>{memberInfo.userEmail}</span>
        </MemberId>
        <MemberPassword>
          <p>비밀번호</p>
          <InfoBox>{memberInfo.password}</InfoBox>
        </MemberPassword>
        <PasswordCheck>
          <p>비밀번호 확인</p>
          <InfoBox>{memberInfo.password}</InfoBox>
        </PasswordCheck>
        <MemberNm>
          <p>닉네임</p>
          <InfoBox></InfoBox>
        </MemberNm>
        <MemberNb>
          <p>전화번호(+82)</p>
          <InfoBox></InfoBox>
        </MemberNb>
        <MemberAd>
          <p>주소</p>
          <InfoBox></InfoBox>
        </MemberAd>
        <InfoFetch>
          <InfoFetchBt>
            <p>회원정보 수정하기</p>
          </InfoFetchBt>
        </InfoFetch>
      </MemberContents>
    </MemberPage>
  );
};

export default Member;
