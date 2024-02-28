import styled from "@emotion/styled";
import React from "react";

export const RoomModifyWrap = styled.div`
  position: relative;
  padding: 80px 210px;

  background-color: #eee;
`;
export const RoomModifyDiv = styled.div`
  position: relative;
`;
export const RoomModifyCard = styled.div`
  position: relative;
  background-color: #fff;
`;
export const RoomModifyCardTitle = styled.div`
  position: relative;
  font-size: 2rem;
`;

export const RoomModifyContentDiv = styled.div`
  position: relative;
  display: flex;
  font-size: 1.6rem;
`;
export const RoomModifyTitle = styled.div`
  position: relative;
  /* 넓이는 예시 */
  width: 200px;
  background-color: rgba(52, 111, 255, 0.1);
  p {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #eee;
  }
`;
export const RoomModifyContent = styled.div`
  position: relative;
  /* padding: 0px 50px; */
  display: block;
  input {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    border: none;
    border-bottom: 1px solid #eee;
    /* background-color: aqua; */
  }
  p {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #eee;
  }
`;

const RoomModifyPage = () => {
  return (
    <>
      <RoomModifyWrap>
        {/* 객실 정보들 */}
        <RoomModifyDiv>
          {/* 객실 정보 카드 */}
          <RoomModifyCard>
            <RoomModifyCardTitle>
              <p>객실 수정</p>
            </RoomModifyCardTitle>

            {/* 버튼 포함 */}
            <form>
              <RoomModifyContentDiv>
                {/* 타이틀 */}
                <RoomModifyTitle>
                  <p>사용 여부</p>
                  <p>객실 유형</p>
                  <p>객실 이미지 첨부</p>
                  <p>객실 수</p>
                  <p>가격</p>
                  <p>할인율</p>
                </RoomModifyTitle>
                {/* 내용 */}
                <RoomModifyContent>
                  <input type="radio" />
                  <p>소형견(7kg이하)</p>
                  <input type="file" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </RoomModifyContent>
                <div>
                  <button>취소</button>
                  <button type="submit">저장</button>
                </div>
              </RoomModifyContentDiv>
            </form>
          </RoomModifyCard>
        </RoomModifyDiv>
      </RoomModifyWrap>
    </>
  );
};

export default RoomModifyPage;
