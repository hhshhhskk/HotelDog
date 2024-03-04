import styled from "@emotion/styled";
import React, { useState } from "react";

export const RoomModifyWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 80px 210px;
  width: 1620px;
  background-color: #eee;
`;

// 버튼을 포함한 영역
export const RoomModifyDiv = styled.div`
  position: relative;
`;

export const RoomModifyCard = styled.div`
  position: relative;
  background-color: #fff;
  width: 587px;
`;

export const RoomModifyCardTitle = styled.div`
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

export const RoomModifyContentDiv = styled.div`
  position: relative;
  display: flex;
  font-size: 1.6rem;
`;

export const RoomModifyTitle = styled.div`
  position: relative;
  width: 200px;
  padding-left: 45px;
  background-color: rgba(52, 111, 255, 0.1);
  p {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #eee;
  }
`;

export const RoomPicsTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 120px;
  /* background-color: aqua; */
  border-bottom: 1px solid #eee;
  p {
    border: none;
  }
`;

export const RoomModifyContent = styled.div`
  position: relative;
  width: 390px;
  p {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 45px;
    border-bottom: 1px solid #eee;
  }
  input {
    position: relative;
    background-color: #eee;
    border: none;
    height: 25px;
  }
`;

export const RoomUse = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
`;

// export const RoomType = styled.div`
//   position: relative;
// `;

export const RoomPicsDiv = styled.div`
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  padding-left: 45px;
  border-bottom: 1px solid #eee;
`;

export const RoomPicDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const RoomPic = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const RoomPicAddButtonDiv = styled.div`
  position: relative;
`;

export const RoomPicAddButton = styled.button`
  position: absolute;
  width: 100px;
  height: 100px;
  top: -50px;
  left: -100px;
  font-size: 4rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const RoomCount = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
  input {
    width: 80px;
    padding: 0px 10px;
  }
  p {
    padding-left: 10px;
  }
`;
export const RoomCost = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
  input {
    width: 80px;
    padding: 0px 10px;
  }
  p {
    padding-left: 10px;
  }
`;
export const RoomDiscount = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
  input {
    width: 80px;
    padding: 0px 10px;
  }
  p {
    padding-left: 10px;
  }
`;

export const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
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

const RoomModifyPage = () => {
  const [previewImg, setPreviewImg] = useState([]);

  // 이미지 선택했을 때
  const handleChangeUploadPic = e => {
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      setPreviewImg(tempUrl);
      // setPreviewImg(prevImgs => [...prevImgs, tempUrl]);
    }
  };

  return (
    <>
      <RoomModifyWrap>
        {/* 객실 정보들 */}
        <RoomModifyDiv>
          {/* 객실 정보 카드 */}
          <RoomModifyCard>
            <RoomModifyCardTitle>
              <p>객실 수정 : 소형견(7kg 이하)</p>
            </RoomModifyCardTitle>

            {/* 버튼 포함 */}
            <RoomModifyContentDiv>
              {/* 타이틀 */}
              <RoomModifyTitle>
                <p>사용 여부</p>
                <p>객실 유형</p>
                <RoomPicsTitle>
                  <p>객실 이미지 첨부</p>
                </RoomPicsTitle>
                <p>객실 수</p>
                <p>가격</p>
                <p>할인율</p>
              </RoomModifyTitle>
              {/* 내용 */}
              <RoomModifyContent>
                <RoomUse>
                  <input type="checkbox" />
                </RoomUse>
                {/* <RoomType> */}
                <p>소형견(7kg이하)</p>
                {/* </RoomType> */}

                <RoomPicsDiv>
                  <RoomPicDiv>
                    {previewImg ? (
                      <RoomPic src={previewImg} alt="선택된 이미지 미리보기" />
                    ) : (
                      <RoomPic
                        // src={initRoomInfo.room_pic}
                        alt="기존 이미지 미리보기"
                      />
                    )}
                  </RoomPicDiv>
                  <RoomPicAddButtonDiv>
                    <label htmlFor="picUpload">
                      <RoomPicAddButton
                        type="button"
                        onClick={() => {
                          document.getElementById("picUpload").click();
                        }}
                      >
                        +
                      </RoomPicAddButton>
                    </label>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={e => {
                        handleChangeUploadPic(e);
                      }}
                      id="picUpload"
                      style={{ display: "none" }}
                    />
                  </RoomPicAddButtonDiv>
                </RoomPicsDiv>

                <RoomCount>
                  <input type="text" />
                  <p>개</p>
                </RoomCount>
                <RoomCost>
                  <input type="text" />
                  <p>원</p>
                </RoomCost>
                <RoomDiscount>
                  <input type="text" />
                  <p>%</p>
                </RoomDiscount>
              </RoomModifyContent>
            </RoomModifyContentDiv>
          </RoomModifyCard>
          <ButtonDiv>
            <button type="submit">저장</button>
          </ButtonDiv>
        </RoomModifyDiv>
        <RoomModifyDiv>
          {/* 객실 정보 카드 */}
          <RoomModifyCard>
            <RoomModifyCardTitle>
              <p>객실 수정</p>
            </RoomModifyCardTitle>

            {/* 버튼 포함 */}
            <RoomModifyContentDiv>
              {/* 타이틀 */}
              <RoomModifyTitle>
                <p>사용 여부</p>
                <p>객실 유형</p>
                <RoomPicsTitle>
                  <p>객실 이미지 첨부</p>
                </RoomPicsTitle>
                <p>객실 수</p>
                <p>가격</p>
                <p>할인율</p>
              </RoomModifyTitle>
              {/* 내용 */}
              <RoomModifyContent>
                <RoomUse>
                  <input type="checkbox" />
                </RoomUse>
                {/* <RoomType> */}
                <p>소형견(7kg이하)</p>
                {/* </RoomType> */}

                <RoomPicsDiv>
                  <RoomPicDiv>
                    {previewImg ? (
                      <RoomPic src={previewImg} alt="선택된 이미지 미리보기" />
                    ) : (
                      <RoomPic
                        // src={initRoomInfo.room_pic}
                        alt="기존 이미지 미리보기"
                      />
                    )}
                  </RoomPicDiv>
                  <RoomPicAddButtonDiv>
                    <label htmlFor="picUpload">
                      <RoomPicAddButton
                        type="button"
                        onClick={() => {
                          document.getElementById("picUpload").click();
                        }}
                      >
                        +
                      </RoomPicAddButton>
                    </label>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={e => {
                        handleChangeUploadPic(e);
                      }}
                      id="picUpload"
                      style={{ display: "none" }}
                    />
                  </RoomPicAddButtonDiv>
                </RoomPicsDiv>

                <RoomCount>
                  <input type="text" />
                  <p>개</p>
                </RoomCount>
                <RoomCost>
                  <input type="text" />
                  <p>원</p>
                </RoomCost>
                <RoomDiscount>
                  <input type="text" />
                  <p>%</p>
                </RoomDiscount>
              </RoomModifyContent>
            </RoomModifyContentDiv>
          </RoomModifyCard>
          <ButtonDiv>
            <button type="submit">저장</button>
          </ButtonDiv>
        </RoomModifyDiv>
        <RoomModifyDiv>
          {/* 객실 정보 카드 */}
          <RoomModifyCard>
            <RoomModifyCardTitle>
              <p>객실 수정</p>
            </RoomModifyCardTitle>

            {/* 버튼 포함 */}
            <RoomModifyContentDiv>
              {/* 타이틀 */}
              <RoomModifyTitle>
                <p>사용 여부</p>
                <p>객실 유형</p>
                <RoomPicsTitle>
                  <p>객실 이미지 첨부</p>
                </RoomPicsTitle>
                <p>객실 수</p>
                <p>가격</p>
                <p>할인율</p>
              </RoomModifyTitle>
              {/* 내용 */}
              <RoomModifyContent>
                <RoomUse>
                  <input type="checkbox" />
                </RoomUse>
                {/* <RoomType> */}
                <p>소형견(7kg이하)</p>
                {/* </RoomType> */}

                <RoomPicsDiv>
                  <RoomPicDiv>
                    {previewImg ? (
                      <RoomPic src={previewImg} alt="선택된 이미지 미리보기" />
                    ) : (
                      <RoomPic
                        // src={initRoomInfo.room_pic}
                        alt="기존 이미지 미리보기"
                      />
                    )}
                  </RoomPicDiv>
                  <RoomPicAddButtonDiv>
                    <label htmlFor="picUpload">
                      <RoomPicAddButton
                        type="button"
                        onClick={() => {
                          document.getElementById("picUpload").click();
                        }}
                      >
                        +
                      </RoomPicAddButton>
                    </label>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={e => {
                        handleChangeUploadPic(e);
                      }}
                      id="picUpload"
                      style={{ display: "none" }}
                    />
                  </RoomPicAddButtonDiv>
                </RoomPicsDiv>

                <RoomCount>
                  <input type="text" />
                  <p>개</p>
                </RoomCount>
                <RoomCost>
                  <input type="text" />
                  <p>원</p>
                </RoomCost>
                <RoomDiscount>
                  <input type="text" />
                  <p>%</p>
                </RoomDiscount>
              </RoomModifyContent>
            </RoomModifyContentDiv>
          </RoomModifyCard>
          <ButtonDiv>
            <button type="submit">저장</button>
          </ButtonDiv>
        </RoomModifyDiv>
      </RoomModifyWrap>
    </>
  );
};

export default RoomModifyPage;
