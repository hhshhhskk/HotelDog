import styled from "@emotion/styled";
import React, { useRef, useState } from "react";

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
  width: 360px;
  height: 290px;
  background-color: #eee;
  P {
    color: #9c9c9c;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img {
    width: 360px;
    height: 290px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
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

const DogNameArea = styled.div`
  position: relative;
  width: 260px;
  height: 25px;
  align-items: center;
  border-radius: 5px;
  background: #eee;
  margin-left: 10px;
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
`;

const DogAgeArea = styled.div`
  position: relative;
  width: 90px;
  height: 25px;
  align-items: center;
  border-radius: 5px;
  background: #eee;
  margin-left: 10px;
  line-height: normal;
  margin-right: 20px;
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

const DogDel = styled.button`
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

  a {
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
  }
`;
const Line = styled.div`
  position: relative;
  display: flex;
  height: 16px;
  border-left: 3px solid #654222;
`;

const Mydog = () => {
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

  const handleDogLeftClick = () => {
    // DogLeft 영역을 클릭하면 input 요소를 클릭하여 이미지 선택 창을 나타냄
    inputRef.current.click();
  };

  return (
    <MydogPage>
      <PageTitle>
        <p>반려견 정보</p>
      </PageTitle>
      <DogContents>
        <DogLeft onClick={handleDogLeftClick}>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
            ref={inputRef}
          />
          {imageURL && <img src={imageURL} alt="Selected" />}
          <p>사진을 선택하세요</p>
        </DogLeft>
        <DogRight>
          <DogName>
            <Line />
            <span>이름</span>
            <DogNameArea />
          </DogName>
          <DogAge>
            <Line />
            <span>나이</span>
            <DogAgeArea />
            <Line />
            <span>사이즈</span>
            <DogSizeSelect>
              <option value="small">소형</option>
              <option value="medium">중형</option>
              <option value="large">대형</option>
            </DogSizeSelect>
          </DogAge>
          <DogInfo placeholder="특이 사항 및 요청 사항을 입력해 주세요."></DogInfo>
          <DogBt>
            <DogDel>삭제하기</DogDel>
            <DogUp>등록 하기</DogUp>
          </DogBt>
        </DogRight>
      </DogContents>

      {/* <ListNone>
        <img src={`${process.env.PUBLIC_URL}/images/MyPage/dog.svg`} />
        <p>반려견 정보가 없습니다.</p>
        <span>대표 반려견을 등록해주세요</span>
      </ListNone> */}
    </MydogPage>
  );
};

export default Mydog;
