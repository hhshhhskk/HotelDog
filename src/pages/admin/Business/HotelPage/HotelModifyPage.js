import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    height: 120px;
  }
`;

export const HotelModifyTitleDesc = styled.div`
  position: relative;
  p {
    height: 200px;
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
    height: 175px;
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

export const HotelPicDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 45px;
  border-bottom: 1px solid #eee;
  gap: 20px;
`;

export const HotelPic = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  /* background-color: aqua; */
`;

export const HotelPicAddButtonDiv = styled.div`
  position: relative;
`;

export const HotelPicAddButton = styled.button`
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
  business_license_number: "0000000000",
  hotel_name: "네모네모 멈뭄미 호텔",
  hotel_master: "곽민성",
  hotel_number: "0000000000",
  hotel_address: "대구광역시 북구",
  // 이미지 형식
  hotel_pic: [
    `${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`,
    `${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`,
    `${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`,
    `${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`,
    `${process.env.PUBLIC_URL}/admin/images/HotelInfo/cat.jpg`,
  ],
  hotel_option: [1, 3],
  hotel_desc:
    "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
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

const HotelModifyPage = () => {
  const navigate = useNavigate();

  const [previewImg, setPreviewImg] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // 이미지 선택했을 때
  const handleChangeUploadPic = e => {
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      // setPreviewImg(tempUrl);
      setPreviewImg(prevImgs => [...prevImgs, tempUrl]);
    }
  };

  // 옵션 선택했을 때
  const handleOptionChange = option => {
    // 이미 선택되어 있다면 제거, 아니면 추가
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(selected => selected !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  // 취소, 전송 버튼
  const handleClickCancel = () => {
    navigate(`/admin/hotelinfo`);
  };
  const handleClickSubmit = () => {
    // 호텔 이미지, 옵션, 설명을 전송
  };

  return (
    <>
      <HotelModifyWrap>
        {/* 버튼 포함 */}
        <HotelModifyDiv>
          {/* 호텔 수정 카드 */}
          <HotelModifyCard>
            <HotelModifyCardTitle>
              <p>호텔 수정</p>
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
                <p>{initHotelInfo.business_license_number}</p>
                <p>{initHotelInfo.hotel_name}</p>
                <p>{initHotelInfo.hotel_master}</p>
                <p>{initHotelInfo.hotel_number}</p>
                <p>{initHotelInfo.hotel_address}</p>

                <HotelPicDiv>
                  {initHotelInfo.hotel_pic.map((img, index) => (
                    <React.Fragment key={index}>
                      {previewImg === index ? (
                        <HotelPic src={img} alt="선택된 이미지 미리보기" />
                      ) : (
                        <HotelPic
                          src={initHotelInfo.hotel_pic}
                          alt="기존 이미지 미리보기"
                        />
                      )}
                    </React.Fragment>
                  ))}
                  {/* {initHotelInfo.hotel_pic.map ? (
                    <HotelPic src={previewImg} alt="선택된 이미지 미리보기" />
                  ) : (
                    <HotelPic
                      src={initHotelInfo.hotel_pic}
                      alt="기존 이미지 미리보기"
                    />
                  )} */}

                  <HotelPicAddButtonDiv>
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
                      onChange={e => {
                        handleChangeUploadPic(e);
                      }}
                      id="picUpload"
                      style={{ display: "none" }}
                    />
                  </HotelPicAddButtonDiv>
                </HotelPicDiv>

                <HotelOption>
                  {options.map(option => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleOptionChange(option)}
                      />
                      {option}
                    </label>
                  ))}
                </HotelOption>
                <textarea>{initHotelInfo.hotel_desc}</textarea>
              </HotelModifyContent>
            </HotelModifyContentDiv>
          </HotelModifyCard>
          <ButtonDiv>
            <button onClick={() => handleClickCancel()}>취소</button>
            <button onClick={() => handleClickSubmit()}>저장</button>
          </ButtonDiv>
        </HotelModifyDiv>
      </HotelModifyWrap>
    </>
  );
};

export default HotelModifyPage;
