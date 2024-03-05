import styled from "@emotion/styled";
import React, { useState } from "react";

const DogContents = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
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
  align-items: center;
  width: 360px;
  height: 290px;
  background-color: #eee;
  border-radius: 10px;
  p {
    display: ${props => (props.hasImage ? "none" : "flex")};
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
    display: ${props => (props.hasImage ? "block" : "none")};
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
  display: flex;
  align-items: center;
  width: 260px;
  height: 25px;
  align-items: center;
  border-radius: 5px;
  background: #eee;
  margin-left: 10px;
  line-height: normal;
  border: none;
  padding-left: 10px;
  color: #654222; /* 변경 */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
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

const DogAgeArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 60px;
  height: 25px;
  align-items: center;
  border-radius: 5px;
  background: #eee;
  margin-left: 10px;
  line-height: normal;
  border: none;
  padding-left: 10px;
  color: #654222; /* 변경 */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

const DogSizeSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
  font-weight: 600;
`;

const DogInfo = styled.div`
  position: relative;
  width: 305px;
  height: 150px;
  border-radius: 5px;
  background: #fffaf0;
  border: 1px solid transparent;
  resize: none;
  padding: 15px;
  color: #654222; /* 변경 */
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
  background: #fff;
  color: #654222;
  font-size: 14px;
`;
const Line = styled.div`
  position: relative;
  display: flex;
  height: 16px;
  border-left: 3px solid #654222;
`;

const DogPutForm = ({ dogData, onDeleteData, onCancelEdit }) => {
  const [dogInfo, setDogInfo] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setDogInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!dogData) {
    return null; // 데이터가 없으면 결과값이 null이 뜨도록 설정
  }

  const handleClickDogDelete = async userDogPk => {
    try {
      await onDeleteData(userDogPk);
    } catch (error) {
      console.error("강아지 데이터 삭제 중 오류 발생:", error);
    }
  };

  return (
    <>
      {dogData.map((dogInfo, index) => (
        <DogContents key={index}>
          <DogLeft hasImage={dogInfo?.dogPic}>
            {/* hasImage prop 전달 */}
            <input type="file" accept="image/*" style={{ display: "none" }} />
            <p>사진을 선택하세요 : </p>
            <img src={dogInfo?.dogPic} alt="Selected" />
          </DogLeft>
          <DogRight>
            <DogName>
              <Line />
              <span>이름</span>
              <DogNameArea>{dogInfo.dogNm}</DogNameArea>
            </DogName>
            <DogAge>
              <Line />
              <span>나이</span>
              <DogAgeArea>{dogInfo?.dogAge}</DogAgeArea>
              <p>살</p>
              <Line />
              <span>사이즈</span>
              <DogSizeSelect // onChange 추가
              >
                {dogInfo?.sizePk === 1
                  ? "소형"
                  : dogInfo?.sizePk === 2
                  ? "중형"
                  : dogInfo?.sizePk === 3
                  ? "대형"
                  : "초대형"}
              </DogSizeSelect>
            </DogAge>
            <DogInfo>{dogInfo?.dogEtc}</DogInfo>
            <DogBt>
              <DogCancel onClick={onCancelEdit}>수정 취소</DogCancel>
              <DogUp onClick={() => handleClickDogDelete(dogInfo?.userDogPk)}>
                등록하기
              </DogUp>
            </DogBt>
          </DogRight>
        </DogContents>
      ))}
    </>
  );
};

export default DogPutForm;
