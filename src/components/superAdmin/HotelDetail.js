import styled from "@emotion/styled";
import React, { useState } from "react";

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

export const HotelModifyCardTitle = styled.div`
  position: relative;
  height: 75px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  p {
    font-size: 2rem;
    font-weight: 800;
    padding-left: 25px;
  }
`;

export const HotelModifyContentDiv = styled.div`
  position: relative;
  display: flex;
  font-size: 1.6rem;
  height: 620px;
`;

export const HotelModifyTitle = styled.div`
  position: relative;
  width: 200px;
  background-color: rgba(52, 111, 255, 0.1);
  p {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 45px;
    height: 50px;
    border-bottom: 1px solid #eee;
  }
`;

export const HotelModifyTitlePic = styled.div`
  position: relative;
  p {
    height: 140px;
  }
`;

export const HotelModifyTitleDesc = styled.div`
  position: relative;
  p {
    height: 175px;
  }
`;

export const HotelModifyContent = styled.div`
  position: relative;
  p {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 45px;
    height: 50px;
    width: 1000px;
    border-bottom: 1px solid #eee;
  }
  textarea {
    position: relative;
    margin: 10px 45px;
    padding: 10px;
    width: 910px;
    height: 160px;
    border-bottom: 1px solid #eee;
  }
`;

export const HotelOption = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  width: 1000px;
  border-bottom: 1px solid #eee;
  gap: 20px;
`;

export const HotelPicsDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 45px;
  border-bottom: 1px solid #eee;
  gap: 20px;
`;

export const HotelPicDiv = styled.div`
  position: relative;
  display: inline-block; /* 사진과 버튼을 인라인으로 표시 */
  margin: 10px; /* 필요한 여백을 설정하세요 */
`;

export const HotelPic = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  /* background-color: aqua; */
`;

export const HotelPicDeleteButton = styled.button`
  position: absolute;
  top: -5px;
  left: 85px;
  font-size: 2.5rem;
  /* font-weight: 600; */
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0);
`;

export const HotelPicAddButtonDiv = styled.div`
  position: relative;
`;

export const HotelPicAddButton = styled.button`
  position: absolute;
  width: 100px;
  height: 100px;
  top: -50px;
  font-size: 4rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 컨텐츠 스타일링
const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

// 모달 닫기 버튼 스타일링
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const HotelDetail = ({ hotelInfo, onClose }) => {
  // 호텔 정보 초기값
  const initHotelInfo = {
    hotelPk: "",
    hotelNum: "",
    hotelNm: "",
    hotelDetailInfo: "",
    businessNum: "",
    hotelCall: "",
    createdAt: "",
    hotelPics: [
      {
        hotelPicPk: "",
        hotelPic: "",
      },
    ],
    hotelFullAddress: "",
    hotelAddressInfo: {
      addressName: "",
      region1DepthName: "",
      region2DepthName: "",
      region3DepthName: "",
      zoneNum: "",
      x: "",
      y: "",
      detailAddress: "",
    },
    approval: "",
    optionList: [
      {
        optionPk: "",
        optionNm: "",
      },
    ],
    businessCertificate: "",
    hotelRoomInfoList: [
      {
        hotelRoomPk: "",
        sizePk: "",
        hotelRoomNm: "",
        roomPic: "",
        hotelRoomEa: "",
        hotelRoomCost: "",
        maximum: "",
        roomAble: "",
        discountPer: "",
        createdAt: "",
        discountSignStatus: "",
      },
    ],
    advertise: "",
    hotelAdvertiseToDate: "",
    hotelAdvertiseEndDate: "",
  };

  // 호텔 정보 상태
  //   const [hotelInfo, setHotelInfo] = useState(initHotelInfo);

  // 호텔 이미지 상태
  const [previewImg, setPreviewImg] = useState([]);

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={onClose}>x</CloseButton>
            <HotelModifyWrap>
              {/* 버튼 포함 */}
              <HotelModifyDiv>
                {/* 호텔 수정 카드 */}
                <HotelModifyCard>
                  <HotelModifyCardTitle>
                    <p>호텔 정보</p>
                  </HotelModifyCardTitle>

                  <HotelModifyContentDiv>
                    <HotelModifyTitle>
                      <p>사업자등록번호</p>
                      <p>호텔 이름</p>
                      <p>대표자 성명</p>
                      <p>호텔 전화번호</p>
                      <p>호텔 주소</p>
                      <HotelModifyTitlePic>
                        <p>호텔 이미지 첨부</p>
                      </HotelModifyTitlePic>
                      <p>호텔 옵션</p>
                      <HotelModifyTitleDesc>
                        <p>호텔 설명</p>
                      </HotelModifyTitleDesc>
                    </HotelModifyTitle>
                    <HotelModifyContent>
                      {/* <p>{formatBusinessNumber(hotelInfo.businessNum)}</p>
                        <p>{hotelInfo.hotelNm}</p>
                        <p>{hotelInfo.businessName}</p>
                        <p>{formatPhoneNumber(hotelInfo.hotelCall)}</p>
                        <p>{hotelInfo.hotelFullAddress}</p> */}

                      <HotelPicsDiv>
                        {/* {hotelInfo.hotelPics.map((pic, index) => (
                          <HotelPicDiv key={index}> */}
                        {/* 기존 이미지 미리보기 */}
                        {/* <HotelPic
                              src={`http://112.222.157.156:5222/pic/hotel/${hotelInfo.hotelPk}/${pic.hotelPic}`}
                              alt="기존 이미지 미리보기"
                            />
                            <HotelPicDeleteButton>x</HotelPicDeleteButton>
                          </HotelPicDiv>
                        ))} */}

                        {/* {previewImg.map((url, index) => (
                          <HotelPicDiv key={index}> */}
                        {/* 새로 추가된 이미지 미리보기 */}
                        {/* <HotelPic src={url} alt="선택된 이미지 미리보기" />
                            <HotelPicDeleteButton>x</HotelPicDeleteButton>
                          </HotelPicDiv>
                        ))} */}

                        {/* <HotelPicAddButtonDiv>
                          <label htmlFor="picUpload">
                            <HotelPicAddButton
                              type="button"
                              onClick={() => {
                                document.getElementById("picUpload").click();
                              }}
                            >
                              +
                            </HotelPicAddButton>
                          </label>
                          <input
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            // onChange={e => {
                            //   handleChangeUploadPic(e);
                            // }}
                            id="picUpload"
                            style={{ display: "none" }}
                          />
                        </HotelPicAddButtonDiv> */}
                      </HotelPicsDiv>

                      <HotelOption>
                        {/* {options.map(option => (
                          <label key={option}>
                            <input
                              type="checkbox"
                              value={option}
                              checked={
                                selectedOptions.includes(option) ||
                                hotelInfo.optionList.some(
                                  item =>
                                    item.optionPk === options.indexOf(option) + 1,
                                )
                              }
                              onChange={() => handleOptionChange(option)}
                            />
                            {option}
                          </label>
                        ))} */}
                      </HotelOption>
                      <textarea
                        defaultValue={hotelInfo.hotelDetailInfo}
                        // onChange={handleDetailInfoChange}
                      />
                    </HotelModifyContent>
                  </HotelModifyContentDiv>
                </HotelModifyCard>
                <ButtonDiv>
                  {/* <button onClick={() => handleClickCancel()}>취소</button>
                    <button onClick={() => handleClickSubmit()}>저장</button> */}
                </ButtonDiv>
              </HotelModifyDiv>
            </HotelModifyWrap>
          </ModalContent>
        </ModalOverlay>
      )}
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
    </>
  );
};

export default HotelDetail;
