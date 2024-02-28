import styled from "@emotion/styled";
import React, { useState } from "react";
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
  padding: 0px 45px;

  /* height: 50px; */
  border-bottom: 1px solid #eee;
  font-size: 1.6rem;
`;

export const HotelModifyTitle = styled.label`
  position: relative;
  display: flex;
  width: 130px;
`;

export const HotelModifyContent = styled.div`
  position: relative;
  display: flex;
  padding: 5px 45px;
  /* background-color: aqua; */
  label {
    padding: 20px;
  }
  input {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    background-color: rgb(238, 238, 238);
  }
  textarea {
    margin: 10px 0px;
    padding: 10px;
    width: 890px;
    height: 215px;
    border: none;
    background-color: rgb(238, 238, 238);
  }
`;

export const UploadFile = styled.input`
  position: relative;
  /* left: -10px; */
`;

export const HotelPreviewPic = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImgAddButton = styled.button`
  position: absolute;
  top: 10px;
  left: 45px;
  width: 100px;
  height: 100px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 3rem;
  cursor: pointer;
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

// 호텔 정보 초기값
const initHotelInfo = {
  // 이미지 형식
  business_license: "",
  business_license_number: "0000000000",
  hotel_name: "네모네모 멈뭄미 호텔",
  hotel_master: "곽민성",
  hotel_number: "0000000000",
  hotel_address: "대구광역시 북구",
  // 이미지 형식
  hotel_pic: `${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`,
  hotel_option: "",
  hotel_desc:
    "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
};

const HotelModifyPage = () => {
  // 미리보기 이미지 useState
  const [previewImg, setPreviewImg] = useState([]);

  // 이미지 선택 이벤트
  const handleChangePic = e => {
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      // setPreviewImg(tempUrl);
      setPreviewImg(prevImgs => [...prevImgs, tempUrl]);
    }
  };

  const options = [
    "수영장",
    "운동장",
    "수제식",
    "셔틀운행",
    "프로그램",
    "산책",
    "미용",
  ];

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
                <HotelModifyTitle>사업자등록증 첨부</HotelModifyTitle>
                <HotelModifyContent>
                  <UploadFile
                    type="file"
                    // defaultValue={initHotelInfo.business_license}
                  />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>사업자등록번호</HotelModifyTitle>
                <HotelModifyContent>
                  <input
                    type="number"
                    defaultValue={initHotelInfo.business_license_number}
                  />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>호텔 이름</HotelModifyTitle>
                <HotelModifyContent>
                  <input type="text" defaultValue={initHotelInfo.hotel_name} />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>대표자 성명</HotelModifyTitle>
                <HotelModifyContent>
                  <input
                    type="text"
                    defaultValue={initHotelInfo.hotel_master}
                  />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>호텔 전화번호</HotelModifyTitle>
                <HotelModifyContent>
                  <input
                    type="number"
                    defaultValue={initHotelInfo.hotel_number}
                  />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>호텔 주소</HotelModifyTitle>
                <HotelModifyContent>
                  <input type="" defaultValue={initHotelInfo.hotel_address} />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>호텔 이미지 첨부</HotelModifyTitle>
                <HotelModifyContent style={{ display: "flex" }}>
                  {/* 이미지 미리보기 */}
                  {previewImg.map((img, index) => (
                    <HotelPreviewPic
                      key={index}
                      style={{ flex: "1", marginRight: "10px" }}
                    >
                      <img
                        src={img}
                        alt={`미리보기 ${index}`}
                        style={{ width: "100%" }}
                      />
                    </HotelPreviewPic>
                  ))}

                  <label htmlFor="uploadpic">
                    <ImgAddButton
                      type="button"
                      onClick={() => {
                        document.getElementById("uploadpic").click();
                      }}
                    >
                      +
                    </ImgAddButton>
                  </label>
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handleChangePic}
                    id="uploadpic"
                    style={{ display: "none" }}
                  />
                </HotelModifyContent>
              </HotelModifyContentDiv>
              <HotelModifyContentDiv>
                <HotelModifyTitle>호텔 옵션</HotelModifyTitle>
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
                <HotelModifyTitle>호텔 설명</HotelModifyTitle>
                <HotelModifyContent>
                  <textarea defaultValue={initHotelInfo.hotel_desc} />
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
