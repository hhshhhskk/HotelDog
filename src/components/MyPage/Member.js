import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Password from "./Password";
import jwtAxios from "../../utils/jwtUtil";

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

  color: #9d9d9d;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  // 비밀번호 입력하면 컨텐츠 보여주기
  const [showMemberContents, setShowMemberContents] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState(false);

  const handlePasswordVerified = () => {
    setPasswordVerified(true); // 비밀번호 확인 완료 시 상태 변경
  };

  useEffect(() => {
    if (passwordVerified) {
      setShowMemberContents(true); // 비밀번호 확인 완료 후 MemberContents 표시
    }
  }, [passwordVerified]);

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
        // API 요청 보낼 때 헤더에 토큰 추가
        const response = await jwtAxios.post("/api/user/info", {
          upw: "0405dbals",
        });

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

  const handleUpdateMemberInfo = async () => {
    try {
      const response = await jwtAxios.put("/api/user/info", {
        // 수정할 데이터 전송
        nickname: memberInfo.nickname,
        phoneNum: memberInfo.phoneNum,
        userAddress: memberInfo.userAddress,
        addressEntity: {
          addressName: memberInfo.addressEntity.addressName,
          region1DepthName: memberInfo.addressEntity.region1DepthName,
          region2DepthName: memberInfo.addressEntity.region2DepthName,
          region3DepthName: memberInfo.addressEntity.region3DepthName,
          zoneNum: memberInfo.addressEntity.zoneNum,
          x: memberInfo.addressEntity.x,
          y: memberInfo.addressEntity.y,
          detailAddress: memberInfo.addressEntity.detailAddress,
        },
      });
      // 서버에서 응답 데이터의 형식에 따라서 새로운 회원 정보 업데이트
      const newMemberInfo = response.data; // 새로운 회원 정보
      setMemberInfo(newMemberInfo); // 상태 갱신

      console.log("Member info updated:", newMemberInfo);
      alert("정보 수정이 완료되었습니다.");
      // 수정이 성공했을 때 사용자에게 메시지 표시 등의 작업 수행
    } catch (error) {
      console.error("Error updating member info:", error);
      alert("정보 수정을 실패하였습니다.");
      // 오류 발생 시 사용자에게 알림 등의 작업 수행
    }
  };

  return (
    <MemberPage>
      {!passwordVerified && !showMemberContents && (
        <Password onPasswordVerified={handlePasswordVerified} />
      )}
      {showMemberContents && (
        <>
          <PageTitle>
            <p>회원정보</p>
          </PageTitle>
          <MemberContents>
            <MemberId>
              <p>아이디</p>
              <span>{memberInfo.userEmail}</span>
            </MemberId>
            {/* <MemberPassword>
          <p>비밀번호</p>
          <InfoBox>{memberInfo.password}</InfoBox>
        </MemberPassword>
        <PasswordCheck>
          <p>비밀번호 확인</p>
          <InfoBox>{memberInfo.password}</InfoBox>
        </PasswordCheck> */}
            <MemberNm>
              <p>닉네임</p>
              <InfoBox
                type="text"
                value={memberInfo.nickname}
                onChange={e =>
                  setMemberInfo({ ...memberInfo, nickname: e.target.value })
                }
                placeholder="수정할 닉네임을 입력하세요"
              />
            </MemberNm>
            <MemberNb>
              <p>전화번호(+82)</p>
              <InfoBox
                defaultValue={memberInfo.phoneNum}
                placeholder="수정할 전화번호를 입력하세요"
              />
            </MemberNb>
            <MemberAd>
              <p>주소</p>
              <InfoBox
                defaultValue={memberInfo.userAddress}
                placeholder="수정할 주소를 입력하세요"
              />
            </MemberAd>
            <InfoFetch>
              <InfoFetchBt onClick={handleUpdateMemberInfo}>
                <p>회원정보 수정하기</p>
              </InfoFetchBt>
            </InfoFetch>
          </MemberContents>
        </>
      )}
    </MemberPage>
  );
};

export default Member;
