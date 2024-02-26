import styled from "@emotion/styled";
import React from "react";
const RmPageWrap = styled.div`
  position: relative;
  top: 100px;
`;
const RmMenuSearchFlex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1240px;
  height: 50px;

  left: 170px;
  margin-bottom: 34px;
`;
const RmTodaySearch = styled.input`
  position: relative;
  background: url(${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg);
  // no-repeat 5px center;
  background-size: 15px;
  color: #000;
  font-size: 12px;
  border: 1px solid #b9b9b9;
  border-radius: 50px;
  padding: 3px 7px;
  text-align: center;
  width: 300px;
  height: 30px;
`;
const RmTodayMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 520px;
  height: 50px;
  img {
    font-size: 20px;
    color: #999999;
    font-weight: 600;
    text-align: center;
    margin-right: 22px;
  }
`;
const RmTodayMenuBt = styled.span`
  position: relative;
  font-size: 20px;
  color: #999999;
  font-weight: 600;
  text-align: center;
  margin-right: 22px;
  cursor: pointer;
  &:active {
    color: #346fff;
    transition: color 0.2s ease-out;
  }
`;

const RmTableBtFlex = styled.div`
  position: relative;
  display: flex;
`;
const RmBtFlex = styled.div`
  position: relative;
  margin: 40px 40px;
  display: flex;
  width: 130px;
  height: 260px;
  flex-direction: column;
  justify-content: space-between;
`;
const RmPageBt = styled.button`
  position: relative;
  width: 130px;
  height: 50px;
  background-color: #346fff;
  opacity: 85%;
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 13px 30px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  &:active {
    background-color: #346fff;
    opacity: 100%;
  }
`;
const TableWrap = styled.div`
  width: 1200px;
  height: 612px;
  background-color: #fff;

  border: 1px solid #b9b9b9;
  border-radius: 4px;

  table {
    font-size: 12px;
    text-align: center;
    border-collapse: collapse;

    // border-collapse: separate;
    // border-spacing: 0 10px;

    th,
    td {
      padding: 10px;
      border: 1px solid #999999;
      height: 38px;
    }
    thead {
      background-color: #323232;
      color: #fff;
    }
  }
  button {
    outline: none;
    border: 1px solid #b9b9b9;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fff;
    padding: 5px;
    &:active {
      background-color: #b9b9b9;
    }
  }
`;
/* modal 영역*/
const RmPageModal = styled.div`
  position: relative;
  width: 650px;
  height: 700px;
  border-radius: 15px;
  border: 1px solid #b9b9b9;
`;
const RmPageModalHead = styled.div`
  position: relative;
  font-size: 20px;
  color: #999999;
  font-weight: 600;
  text-align: center;
  margin: 87px 231px 50px 231px;
`;
const RmModalClose = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  top: 25px;
  left: 25px;
  cursor: pointer;
`;
const RmPageTitle = styled.span`
  font-size: 33px;
  color: #346fff;
  position: relative;
  font-weight: 700;
`;
const RmPageModalContents = styled.div`
  position: relative;
  color: #fff;
  font-size: 12px;
  background-color: #b9b9b9;
  height: 450px;
  width: 550px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  div {
    text-align: center;
  }
  // margin: 40px 50px; 50px 70px;
`;
const RmModalContentsTitle = styled.span`
  position: relative;
  font-size: 24px;
  text-align: center;
  margin: 30px 227px 58px 227px;
  font-weight: 600;
`;
const RmModalCancelInfo = styled.div`
  position: relative;
  font-size: 12px;
  color: #fff;
  text-align: center;
  input {
    border: 1px solid #326fff;
    margin-right: 8px;
  }
  margin-bottom: 33px;
`;

const RmModalDogContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b9b9b9;
  font-size: 15px;
  height: 450px;
  width: 550px;
  color: #fff;
  border-radius: 10px;
  margin: 50px 50px 50px 70px;
  img {
    display: block;
    margin: 30px 0;
    width: 210px;
    height: 160px;
    border-radius: 10px;
  }
`;

const RmDogInfo = styled.div`
  position: relative;
  width: 140px;
  height: 120px;
  span {
    display: block;
    margin-bottom: 30px;
  }
`;
const RmModalDogHead = styled.div`
  position: relative;
  margin-top: 20px;
`;
const RmModalDogTitle = styled.span`
  position: relative;
  font-size: 24px;
  text-align: center;
  font-weight: 600;
`;

const RoomPage = () => {
  return (
    <RmPageWrap>
      {/* header 영역 */}
      <div>
        <RmMenuSearchFlex>
          <RmTodayMenu>
            <RmTodayMenuBt>전체</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>이용중</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>예약완료</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>대기중</RmTodayMenuBt>
            <img
              src={`${process.env.PUBLIC_URL}/admin/images/RmToday/bar.svg`}
              alt=""
            />
            <RmTodayMenuBt>이용완료</RmTodayMenuBt>
          </RmTodayMenu>
          <div>
            <form>
              <RmTodaySearch type="text">
                {/* <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg`}
            alt=""
          /> */}
                {/* <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg`}
            alt=""
          /> */}
              </RmTodaySearch>
            </form>
          </div>
        </RmMenuSearchFlex>
      </div>

      {/* middle 영역 */}
      <div>
        <RmTableBtFlex>
          <RmBtFlex>
            <RmPageBt>예약승인</RmPageBt>
            <RmPageBt>예약취소</RmPageBt>
            <RmPageBt>입실완료</RmPageBt>
            <RmPageBt>퇴실완료</RmPageBt>
          </RmBtFlex>
          <TableWrap>
            <table>
              <thead>
                <tr width="100%">
                  <th width="50px" scope="col">
                    체크
                  </th>
                  <th width="50px">번호</th>
                  <th width="80px">예약번호</th>
                  <th width="120px">닉네임</th>
                  <th width="195px">객실유형</th>
                  <th width="120px">반려견 정보</th>
                  <th width="220px">예약날짜 (체크 인/아웃)</th>
                  <th width="130px">전화번호</th>
                  <th width="110px">결제금액</th>
                  <th width="130px">상태</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td scope="row"></td>
                  <td>1</td>
                  <td>65813</td>
                  <td>누룽지호랑이</td>
                  <td>소형견 (3kg~ 7kg) 기준</td>
                  <td>
                    <button>정보보기</button>
                  </td>
                  <td>2024-02-13 / 2024-02-15</td>
                  <td>010-1234-5678</td>
                  <td>97,000원</td>
                  <td>이용완료</td>
                </tr>
                <tr>
                  <td scope="row">
                    <input type="checkbox"></input>
                  </td>
                  <td>2</td>
                  <td>65813</td>
                  <td>누룽지호랑이</td>
                  <td>소형견 (3kg~ 7kg) 기준</td>
                  <td>
                    <button>정보보기</button>
                  </td>
                  <td>2024-02-13 / 2024-02-15</td>
                  <td>010-1234-5678</td>
                  <td>97,000원</td>
                  <td>
                    <button>예약취소</button>
                  </td>
                </tr>
                <tr>
                  <td scope="row"></td>
                  <td>3</td>
                  <td>65813</td>
                  <td>누룽지호랑이</td>
                  <td>소형견 (3kg~ 7kg) 기준</td>
                  <td>
                    <button>정보보기</button>
                  </td>
                  <td>2024-02-13 / 2024-02-15</td>
                  <td>010-1234-5678</td>
                  <td>97,000원</td>
                  <td>예약완료</td>
                </tr>
              </tbody>
            </table>
          </TableWrap>
        </RmTableBtFlex>
      </div>

      {/* 예약 취소 및 정보보기 모달 */}
      <RmPageModal>
        <RmModalClose
          src={`${process.env.PUBLIC_URL}/admin/images/RmToday/close.svg`}
          alt=""
        />
        <RmPageModalHead>
          <RmPageTitle>반려견 정보</RmPageTitle>
        </RmPageModalHead>
        <RmModalDogContent>
          <RmModalDogHead>
            <RmModalDogTitle>대형견 (15kg 이상 ~) 기준</RmModalDogTitle>
          </RmModalDogHead>
          <img
            src={`${process.env.PUBLIC_URL}/admin/images/RmToday/exampleimg.svg`}
            alt=""
          />
          <RmDogInfo>
            <span>강아지 이름 : 누룽지</span>
            <span>강아지 나이 : 4살</span>
            <span>강아지 크기 : 소형견</span>
          </RmDogInfo>
        </RmModalDogContent>
      </RmPageModal>
      <RmPageModal>
        <RmModalClose
          src={`${process.env.PUBLIC_URL}/admin/images/RmToday/close.svg`}
          alt=""
        />
        <RmPageModalHead>
          <RmPageTitle>예약 취소</RmPageTitle>
        </RmPageModalHead>
        <RmPageModalContents>
          <RmModalContentsTitle>취소 사유</RmModalContentsTitle>
          <RmModalCancelInfo>
            <input type="checkbox"></input>
            <span>
              비상 상황 : &quot; 죄송하지만 예기치 않은 상황으로 인해 해당
              객실을 제공할 수 없게 되었습니다. &quot;
            </span>
          </RmModalCancelInfo>
          <RmModalCancelInfo>
            <input type="checkbox"></input>
            <span>
              기술적 문제 : &quot;시스템 오류 또는 기술적 문제로 인해 예약을
              취소해야 합니다. &quot;
            </span>
          </RmModalCancelInfo>
          <RmModalCancelInfo>
            <input type="checkbox"></input>
            <span>
              호텔 사정 : &quot;호텔 내부 사정으로 인해 예약을 변경하거나 취소
              해야 합니다. &quot;
            </span>
          </RmModalCancelInfo>
          <RmModalCancelInfo>
            <input type="checkbox"></input>
            <span>
              객실 불가능 : &quot;객실의 예기치 못한 문제로 인해 해당 객실을
              사용할 수 없게 되었습니다. &quot;
            </span>
          </RmModalCancelInfo>
          <RmModalCancelInfo>
            <input type="checkbox"></input>
            <span>
              법적 요구 사항 : &quot;법률적인 요구 사항 또는 규정에 따라 예약을
              취소해야 합니다. &quot;
            </span>
          </RmModalCancelInfo>
          <div>
            <RmPageBt>확인</RmPageBt>
          </div>
        </RmPageModalContents>
      </RmPageModal>
    </RmPageWrap>
  );
};

export default RoomPage;
