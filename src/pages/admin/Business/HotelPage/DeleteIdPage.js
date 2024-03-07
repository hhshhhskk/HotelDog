import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const DeleteIdWrap = styled.div`
  position: relative;
  padding: 80px 210px;
  width: 1620px;
  height: 915px;
  background-color: #eee;
`;

export const DeleteIdDiv = styled.div`
  position: relative;
  background-color: #fff;
`;

export const DeleteIdTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 75px;
  border-bottom: 1px solid #eee;
  p {
    padding-left: 25px;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const DeleteIdContentsDiv = styled.div`
  position: relative;
  font-size: 1.6rem;
  padding: 25px 45px;
  /* height: 900px; */
`;

export const DeleteIdContent = styled.div`
  position: relative;
  padding-bottom: 25px;
`;

export const DeleteIdContentTitle = styled.p`
  position: relative;
  font-weight: 700;
`;

export const NavigationButton = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 25px;
  button {
    border: none;
    color: #346fff;
    background-color: rgba(52, 111, 255, 0);
    font-size: 1.6rem;
    font-weight: 700;
  }
`;
export const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-top: 300px;
  button {
    position: relative;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #323232;
    font-size: 1.6rem;
  }
`;

const DeleteIdPage = e => {
  const navigate = useNavigate;

  const handleClickNavi = e => {
    navigate(`/admin/roomlist`);
  };

  return (
    <>
      <DeleteIdWrap>
        {/* 버튼포함 */}
        <DeleteIdDiv>
          <DeleteIdTitle>
            <p>운영 중지 및 탈퇴 정책</p>
          </DeleteIdTitle>

          <DeleteIdContentsDiv>
            <DeleteIdContent>
              <DeleteIdContentTitle>1.운영중지</DeleteIdContentTitle>
              <p>
                호텔 관리자는 원할 경우 해당 시스템을 통해 호텔 운영을 중지할 수
                있습니다.
                <br />
                운영 중지 시점부터 홈페이지를 통한 호텔 노출이 중지되며, 고객
                예약이 불가합니다.
              </p>
            </DeleteIdContent>
            <DeleteIdContent>
              <DeleteIdContentTitle>
                2. 예약 건에 대한 처리
              </DeleteIdContentTitle>
              <p>
                이미 결제된 예약 건에 대해서는 다음 방법으로 처리합니다.
                <br />
                정상 운영 : 운영 중지 전 접수된 예약을 정상적으로 완료합니다.
              </p>
            </DeleteIdContent>
            <DeleteIdContent>
              <DeleteIdContentTitle>3. 회원탈퇴 가능 여부</DeleteIdContentTitle>
              <p>
                회원탈퇴는 호텔 운영 중지 상태에서 모든 예약 건이 이용완료
                처리된 후에만 가능합니다.
              </p>
            </DeleteIdContent>
          </DeleteIdContentsDiv>
          <NavigationButton>
            <button
              onClick={e => {
                handleClickNavi(e);
              }}
            >
              예약 내역 바로가기
            </button>
          </NavigationButton>
        </DeleteIdDiv>
        <ButtonDiv>
          <button>회원탈퇴</button>
          <button>운영 중지</button>
          <button>운영 재개</button>
        </ButtonDiv>
      </DeleteIdWrap>
    </>
  );
};

export default DeleteIdPage;
