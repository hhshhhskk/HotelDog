import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Password from "../../components/MyPage/Member/Password";
import jwtAxios from "../../utils/jwtUtil";
import AddressPopup from "../../components/SignUp/AddressPopup";
import { nickNameCheckAPI } from "../../api/SignUp/addressApi";
import { fetchMemberInfo, getNickNameUpdate } from "../../api/mypage/mypageApi";

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
const AdBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  height: 40px;
  border: 1px solid #654222;
  border-radius: 10px;
  margin-bottom: 17px;
  padding-left: 20px;
  overflow: hidden;
`;
const AddInfoBox = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  width: 420px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #9d9d9d;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const AddressBt = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 28px;
  margin-right: 5px;
  background-color: #654222;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
`;
const AddressPutBt = styled.div`
  position: relative;
  display: flex;
`;
const DetailAddress = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  height: 40px;
  border: 1px solid #654222;
  border-radius: 10px;
  margin-bottom: 17px;
  padding-left: 20px;
  overflow: hidden;

  color: #9d9d9d;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const NickBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  height: 40px;
  border: 1px solid #654222;
  border-radius: 10px;
  margin-bottom: 17px;
  padding-left: 20px;
  overflow: hidden;
`;
const NickFetchBox = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  width: 420px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #9d9d9d;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const NickBt = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 28px;
  margin-right: 5px;
  background-color: #654222;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
`;
const NickCheckBt = styled.div`
  position: relative;
  display: flex;
`;

const Member = () => {
  // 비밀번호 입력하면 컨텐츠 보여주기
  const [showMemberContents, setShowMemberContents] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [memberInfo, setMemberInfo] = useState({
    userPk: 0,
    userEmail: "",
    nickname: "",
    phoneNum: "",
    userAddress: "",
  });
  // 주소관련
  const [popUp, setPopUp] = useState(false);
  const [address, setAddress] = useState();
  // 닉네임 보관
  const [originInfo, setOriginInfo] = useState(null);
  const handlePasswordVerified = () => {
    setPasswordVerified(true); // 비밀번호 확인 완료 시 상태 변경
  };

  useEffect(() => {
    if (passwordVerified) {
      setShowMemberContents(true);
      fetchMemberInfo(password, { successFn, failFn, erroFn }); // 비밀번호 확인 완료 후 MemberContents 표시
    }
  }, [passwordVerified]);

  const successFn = result => {
    console.log("성공", result);
    setMemberInfo(result);
    setOriginInfo(result);
  };
  const failFn = result => {
    console.log("에러", result);
  };
  const erroFn = result => {
    console.log("서버에러", result);
  };

  const handleChangeNicname = e => {
    if (originInfo.nickname === memberInfo.nickname) {
      alert("새로운 닉네임을 입력하세요.");
      return;
    }
    // 닉넹
    const result = getNickNameUpdate(memberInfo.nickname);
    console.log(result);
  };

  const handleClickAddress = () => {};

  return (
    <MemberPage>
      {popUp && <AddressPopup setPopUp={setPopUp} setAddress={setAddress} />}

      {!passwordVerified && !showMemberContents && (
        <Password
          onPasswordVerified={handlePasswordVerified}
          password={password}
          setPassword={setPassword}
        />
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
            <MemberNm>
              <p>닉네임</p>
              <NickBox>
                <NickFetchBox
                  type="text"
                  value={memberInfo.nickname}
                  onChange={e =>
                    setMemberInfo({ ...memberInfo, nickname: e.target.value })
                  }
                  placeholder="수정할 닉네임을 입력하세요"
                  name="nickname"
                />
                <NickBt onClick={handleChangeNicname}>
                  <NickCheckBt>중복 확인</NickCheckBt>
                </NickBt>
              </NickBox>
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
              <AdBox>
                <AddInfoBox
                  defaultValue={memberInfo.userAddress}
                  placeholder="수정할 주소를 입력하세요"
                />

                <AddressBt onClick={handleClickAddress}>
                  <AddressPutBt>주소 찾기</AddressPutBt>
                </AddressBt>
              </AdBox>
              <DetailAddress
                placeholder="상세 주소"
                defaultValue={memberInfo.userAddress}
              ></DetailAddress>
            </MemberAd>
            <InfoFetch>
              {/* <InfoFetchBt onClick={handleUpdateMemberInfo}> */}
              <InfoFetchBt>
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
