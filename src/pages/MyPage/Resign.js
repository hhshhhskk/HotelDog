import styled from "@emotion/styled";
import React, { useState } from "react";
import ResignModal from "../../components/MyPage/ResignModal";
const ResignPage = styled.div`
  margin-left: 85px;
  position: relative;
  /* display: flex; */
  width: 865px;
  /* height: 980px; */
  /* background-color: lightblue; */
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
const ResignContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
const ResignContentsTxt = styled.div`
  width: 860px;
  height: auto;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 40px;
`;
const DetailTxt = styled.div`
  position: relative;
  margin-top: 10px;
  font-size: 12px;
  line-height: 16px;
  p {
    position: relative;
    margin-top: 20px;
  }
  span {
    position: relative;
    left: 10px;
  }
`;
const LinkBt = styled.div`
  position: relative;
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  color: #654222;
  font-weight: 700;
  img {
    margin-right: 5px;
  }
`;
const ModalBt = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  background-color: #654222;
  border-radius: 7px;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 14px;
  }
`;
const Resign = ({ setSelectedCategory }) => {
  const [showModal, setShowModal] = useState(false);

  // 모달을 열고 닫는 함수
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  // 모달을 닫는 함수
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ResignPage>
      <PageTitle>
        <p>회원 탈퇴</p>
      </PageTitle>
      <ResignContents>
        <ResignContentsTxt>
          <h2>회원 탈퇴 정책</h2>
          <DetailTxt>
            <p>1. 회원 탈퇴 절차</p>
            <span>
              • 회원은 계정 설정 또는 고객 서비스 센터를 통해 탈퇴를 요청할 수
              있습니다.
              <br />
              • 탈퇴 처리가 완료되면 회원은 사이트에 다시 로그인할 수 없으며,
              계정 정보와 관련된 모든 데이터는 삭제됩니다.
              <br />• 회원은 탈퇴 전 예약된 숙소에 대한 금액을 예약 취소를 통해
              전액, 또는 일부 환불 받을 수 있습니다.
            </span>
            <p>2. 정보 보관 기간</p>
            <span>
              • 회원 탈퇴 후, 법적 요구사항을 준수하고 서비스 운영을 위한
              목적으로 필요한 경우를 제외하고, 개인정보는 즉시 삭제됩니다.
              <br />• 법적 요구사항이나 서비스 제공을 위한 목적을 위해 일부
              정보는 일정 기간 동안 보관될 수 있습니다. 이러한 기간은 해당 법률
              및 규정에 따라 결정됩니다.
            </span>
            <p>3. 개인정보 보호</p>
            <span>
              • 회원 탈퇴 후, 개인정보는 외부로 유출되지 않도록 안전하게
              보호됩니다.
              <br />• 보안 조치는 개인정보가 안전하게 저장되고 처리되도록
              보장합니다.
            </span>
            <p>4. 연락처 정보 제거</p>
            <span>
              • 회원이 탈퇴할 경우, 회원의 연락처 정보를 포함한 모든 개인정보가
              완전히 삭제됩니다.
              <br />• 이메일 주소, 전화번호 등 개인정보는 데이터베이스에서
              영구적으로 제거됩니다.
            </span>
            <p>5. 서비스 접근 제한</p>
            <span>
              • 회원 탈퇴 후, 해당 회원은 사이트에 다시 액세스할 수 없도록
              접근이 제한됩니다.
              <br />• 회원은 새로운 계정을 만들거나 서비스를 이용하기 위해
              새로운 등록 프로세스를 완료해야 합니다.
            </span>
            <p>6. 법적 요구사항 준수</p>
            <span>
              • 회원 탈퇴 정책은 관련 법규 및 규정을 준수합니다.
              <br />• 특히, 개인정보 보호법 등의 법률을 준수하고 회원 탈퇴와
              관련된 법적 요구사항을 따릅니다.
            </span>
            <p>
              ※ 정책 개정 : 이 정책은 필요할 때 수정될 수 있으며, 이에 대한 변경
              사항은 사이트에서 공지됩니다.
            </p>
          </DetailTxt>
        </ResignContentsTxt>
        <LinkBt onClick={() => setSelectedCategory(1)}>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/linkBt.svg`} />
          예약내역바로가기
        </LinkBt>
        <ModalBt onClick={handleModalToggle}>
          <p>환불 및 탈퇴하기</p>
        </ModalBt>
      </ResignContents>
      {showModal && <ResignModal onCloseModal={handleCloseModal} />}
    </ResignPage>
  );
};

export default Resign;
