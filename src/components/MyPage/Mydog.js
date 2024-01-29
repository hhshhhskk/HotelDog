import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const MydogPage = styled.div`
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

const DogContents = styled.div`
  position: relative;
  display: flex;
`;
const ImageContainer = styled.div`
  position: relative;
`;

const DogRight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`;

const DogLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; /* 정렬 추가 */
  width: 360px;
  height: 290px;
  background-color: #eee;
  border-radius: 10px;
  p {
    display: ${props =>
      props.hasImage ? "none" : "flex"}; /* 이미지가 있으면 숨김 */
    color: #9c9c9c;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-items: center;
  }
  img {
    width: 360px;
    height: 290px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    display: ${props =>
      props.hasImage ? "block" : "none"}; /* 이미지가 있으면 표시 */
  }
`;

const DogName = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #654222;
  }
`;

const DogNameArea = styled.input`
  position: relative;
  width: 260px;
  height: 25px;
  align-items: center;
  border-radius: 5px;
  background: #eee;
  margin-left: 10px;
  line-height: normal;
  border: none;
  padding-left: 10px;
  color: #9c9c9c;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DogAge = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #654222;
  }
  p {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #654222;
    margin-right: 28px;
  }
`;

const DogAgeArea = styled.input`
  position: relative;
  width: 60px;
  height: 25px;
  align-items: center;
  border-radius: 5px;
  background: #eee;
  margin-left: 10px;
  line-height: normal;

  border: none;
  padding-left: 10px;
  color: #9c9c9c;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DogSizeSelect = styled.select`
  position: relative;
  width: 90px;
  height: 25px;
  border-radius: 5px;
  background: #eee;
  margin-left: 10px;
  line-height: normal;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #654222;
  padding-left: 10px;
  padding-right: 10px;
`;

const DogInfo = styled.textarea`
  position: relative;
  width: 305px;
  height: 150px;
  border-radius: 5px;
  background: #fffaf0;
  border: 1px solid transparent;
  resize: none;
  padding: 15px;
  color: #9c9c9c;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DogBt = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const DogCancel = styled.button`
  position: relative;
  cursor: pointer;
  width: 90px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #654222;
  background: #fff;
  color: #654222;
  font-size: 14px;
  margin-right: 10px;
`;

const DogUp = styled.button`
  position: relative;
  cursor: pointer;
  width: 90px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #654222;
  background: #654222;
  color: #fff;
  font-size: 14px;
`;

// ListNone 공통 스타일로 빼도됨
const ListNone = styled.div`
  position: relative;
  display: flex;
  width: 950px;
  height: 500px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-left: -85px;
  margin-top: 150px;
  img {
    position: relative;
    height: 68px;
    margin-bottom: 23px;
  }
  p {
    position: relative;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    margin-bottom: 1px;
  }
  span {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #969696;
    margin-bottom: 14px;
  }
`;
const DogFormBt = styled.button`
  display: flex;
  justify-content: center;
  color: #e5b300;
  width: 150px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #e5b300;
  background: #fff;
  cursor: pointer;
  align-items: center;
`;
const Line = styled.div`
  position: relative;
  display: flex;
  height: 16px;
  border-left: 3px solid #654222;
`;

const Mydog = () => {
  // 이미지 업로드 부분
  const [imageURL, setImageURL] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // 반려견 정보 상태
  const [dogInfo, setDogInfo] = useState({
    pic: "",
    dto: {
      sizePk: 0,
      dogNm: "",
      dogAge: 0,
      dogPic: "",
      dogEtc: "",
    },
  });

  // 반려견 정보 입력 핸들러
  const handleInputChange = e => {
    const { name, value } = e.target;
    setDogInfo(prevState => ({
      ...prevState,
      dto: {
        ...prevState.dto,
        [name]: value,
      },
    }));
  };

  // 반려견 정보 저장하기
  const handleDogSubmit = async () => {
    try {
      // 서버에 데이터 전송
      const response = await axios.post("http://112.222.157.156:5222/api/dog", {
        pic: imageURL, // 이미지 URL은 이미지 업로드 후에 설정
        dto: dogInfo.dto,
      });
      // 응답 처리
      console.log("서버 응답 데이터:", response.data);
      // 필요한 작업 수행
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const handleDogLeftClick = () => {
    inputRef.current.click(); // input 요소를 클릭합니다.
  };

  return (
    <MydogPage>
      <PageTitle>
        <p>반려견 정보</p>
      </PageTitle>
      <DogContents>
        <DogLeft onClick={handleDogLeftClick} hasImage={!!imageURL}>
          {/* hasImage prop 전달 */}
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
            ref={inputRef}
          />
          <p>사진을 선택하세요</p>
          {imageURL && <img src={imageURL} alt="Selected" />}
        </DogLeft>
        <DogRight>
          <DogName>
            <Line />
            <span>이름</span>
            <DogNameArea
              type="text"
              name="dogNm"
              value={dogInfo.dto.dogNm}
              onChange={handleInputChange}
            />
          </DogName>
          <DogAge>
            <Line />
            <span>나이</span>
            <DogAgeArea
              type="text"
              name="dogAge"
              value={dogInfo.dto.dogAge}
              onChange={handleInputChange}
            />
            <p>살</p>
            <Line />
            <span>사이즈</span>
            <DogSizeSelect
              value={dogInfo.dto.sizePk}
              onChange={handleInputChange}
              name="sizePk"
            >
              <option value={0}>소형</option>
              <option value={1}>중형</option>
              <option value={2}>대형</option>
            </DogSizeSelect>
          </DogAge>
          <DogInfo
            placeholder="특이 사항 및 요청 사항을 입력해 주세요."
            name="dogEtc"
            value={dogInfo.dto.dogEtc}
            onChange={handleInputChange}
          />
          <DogBt>
            <DogCancel>취소 하기</DogCancel>
            <DogUp onClick={handleDogSubmit}>등록 하기</DogUp>
          </DogBt>
        </DogRight>
      </DogContents>
    </MydogPage>
  );
};

export default Mydog;
