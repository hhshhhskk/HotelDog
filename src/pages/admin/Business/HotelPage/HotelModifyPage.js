import styled from "@emotion/styled";
import React from "react";
import { CardTitle } from "./HotelInfoPage";

export const HotelModifyWrap = styled.div`
  position: relative;
  background-color: #eee;
  height: 100%;
  /* 100% 로 가야히지 않을까 */
  width: 1620px;
  padding: 80px 210px;
`;

// 버튼 포함한 영역
export const HotelModifyDiv = styled.div`
  position: relative;
`;

export const HotelModifyCard = styled.div`
  position: relative;
  background-color: #fff;
`;

export const HotelModifyContentDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* height: 50px; */
  border-bottom: 1px solid #eee;
  font-size: 1.6rem;
`;

export const HotelModifyTitle = styled.div`
  position: relative;
  padding: 10px 45px;
  width: 215px;
  height: 100%;
  background-color: rgba(52, 111, 255, 0.1);
  p {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const HotelModifyContent = styled.div`
  position: relative;
  /* padding-left: 45px; */
  padding: 10px 45px;
  label {
    padding-right: 20px;
  }
  textarea {
    width: 900px;
    height: 215px;
  }
`;

export const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-top: 25px;
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

const options = [
  "수영장",
  "운동장",
  "수제식",
  "셔틀운행",
  "프로그램",
  "산책",
  "미용",
];

const HotelModifyPage = () => {
  return (
    <>
      <HotelModifyWrap>
        {/* 버튼 포함 */}
        <HotelModifyDiv>
          {/* 호텔 수정 카드 */}
          <HotelModifyCard>
            <CardTitle>
              <span>호텔 수정</span>
            </CardTitle>

            <div>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>사업자등록증 첨부</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <input type="file" />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>사업자등록번호</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <input type="number" />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>호텔 이름</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <input type="text" />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>대표자 성명</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <input type="text" />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>호텔 전화번호</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <input type="number" />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>호텔 주소</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <input type="" />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>호텔 이미지 첨부</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <input type="file" />
                  <img
                    src={`${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`}
                    alt=""
                  />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>호텔 옵션</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  {options.map((option, index) => (
                    <label key={index}>
                      <input type="radio" name="hotelOption" value={option} />
                      {option}
                    </label>
                  ))}
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>
                  <p>호텔 설명</p>
                </HotelModifyTitle>
                <HotelModifyContent>
                  <textarea />
                </HotelModifyContent>
              </HotelModifyContentDiv>
            </div>
          </HotelModifyCard>
          <ButtonDiv>
            <button>취소</button>
            <button>저장</button>
          </ButtonDiv>
        </HotelModifyDiv>
      </HotelModifyWrap>
    </>
  );
};

export default HotelModifyPage;
