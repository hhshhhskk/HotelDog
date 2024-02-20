import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  deleteDogApi,
  getDogApi,
  postDogInfoApi,
} from "../../api/mypage/mypageApi";
import DogGetForm from "../../components/MyPage/MyDog/DogGetForm";

const MydogPage = styled.div`
  margin-left: 85px;
  position: relative;
  width: 697px;
`;

const PageTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: auto;
  width: auto;
  margin-bottom: 35px;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #654222;
    width: auto;
  }
  img {
    cursor: pointer;
  }
`;

const DogContents = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  width: auto;
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
  const [isDogContentsOpen, setIsDogContentsOpen] = useState(false);

  // 강아지 정보 불러오기
  const [dogData, setDogData] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getDogApi();
      setDogData(data);
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  useEffect(() => {
    // 등록이 완료되면 fetchData를 호출하여 새로운 데이터를 가져옵니다.
    fetchData();

    // 등록이 완료되면 isDogInfoSubmitted 상태를 감지하여 Mydog 컴포넌트를 다시 렌더링합니다.
  }, [isDogContentsOpen]);

  // 강아지 정보 삭제하기
  const handleDeleteData = async userDogPk => {
    try {
      const result = await deleteDogApi(userDogPk);
      if (result === 1) {
        // 데이터 삭제 성공 시
        // 리뷰내역 다시 불러오기
        const newData = await getDogApi();
        setDogData(newData);
      } else {
        console.log("Failed to delete review data.");
      }
      // await deleteDogApi(userDogPk); // 실제 API에서 삭제 작업 수행
    } catch (error) {
      console.error("Error deleting dog data:", error);
    }
  };

  const [imageURL, setImageURL] = useState(null);
  const inputRef = useRef(null);
  const [imgFileList, setImgFileList] = useState([]);
  const [imgFileListType, setImgFileListType] = useState([]);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      const tempArr = [tempUrl];
      const typeArr = [file.type];
      setImgFileList(tempArr);
      setImgFileListType(typeArr);
    }
  };

  const [dogInfo, setDogInfo] = useState({
    sizePk: 1,
    dogNm: "",
    dogAge: 0,
    dogEtc: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setDogInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDogSubmit = async () => {
    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          sizePk: dogInfo.sizePk,
          dogNm: dogInfo.dogNm,
          dogAge: dogInfo.dogAge,
          dogEtc: dogInfo.dogEtc,
        }),
      ],
      { type: "application/json" },
    );

    formData.append("dto", dto);

    const imagePromises = imgFileList.map(async (image, index) => {
      const response = await fetch(image);
      const blob = await response.blob();
      const currentDate = new Date();
      const types = imgFileListType;
      const seconds = Math.floor(currentDate.getTime() / 1000);
      const file = new File(
        [blob],
        `image${seconds}.${types[index].split("/")[1]}`,
        {
          type: `image/${types[index].split("/")[1]}`,
        },
      );
      formData.append("pic", file);
    });
    await Promise.all(imagePromises);

    postDogInfoApi({ sendData: formData }, { successFn, failFn, errorFn });
  };

  const successFn = result => {
    console.log("successFn", result);
    alert("정보등록이 완료되었습니다.");
    setIsDogContentsOpen(prevState => !prevState);
    setDogInfo({
      sizePk: 0,
      dogNm: "",
      dogAge: 0,
      dogEtc: "",
    });
    setImgFileList([]);
  };
  const failFn = result => {
    console.log("failFn", result);
  };

  const errorFn = result => {
    console.log("errorFn", result);
    alert("정보를 입력하고 등록해주세요.");
  };

  const handleDogLeftClick = () => {
    inputRef.current.click();
  };

  const handleCancel = () => {
    setIsDogContentsOpen(false);
  };

  const toggleDogContents = () => {
    setIsDogContentsOpen(prevState => !prevState);
  };
  console.log(isDogContentsOpen);
  return (
    <MydogPage>
      <PageTitle>
        <p>반려견 정보</p>
        <img
          src={`${process.env.PUBLIC_URL}/images/MyPage/plusbt.svg`}
          onClick={toggleDogContents} // 더하기 아이콘 클릭 시 폼 표시 여부를 변경하는 함수 연결
        />
      </PageTitle>
      {isDogContentsOpen && (
        <DogContents>
          <DogLeft onClick={handleDogLeftClick} hasImage={imgFileList[0]}>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: "none" }}
              ref={inputRef}
            />
            <p>사진을 선택하세요 {imgFileList[0]} </p>
            {imgFileList[0] && <img src={imgFileList[0]} alt="Selected" />}
          </DogLeft>
          <DogRight>
            <DogName>
              <Line />
              <span>이름</span>
              <DogNameArea
                type="text"
                name="dogNm"
                value={dogInfo.dogNm}
                onChange={handleInputChange}
              />
            </DogName>
            <DogAge>
              <Line />
              <span>나이</span>
              <DogAgeArea
                type="text"
                name="dogAge"
                value={dogInfo.dogAge}
                onChange={handleInputChange}
              />
              <p>살</p>
              <Line />
              <span>사이즈</span>
              <DogSizeSelect
                value={dogInfo.sizePk}
                onChange={handleInputChange}
                name="sizePk"
              >
                <option value={1}>소형</option>
                <option value={2}>중형</option>
                <option value={3}>대형</option>
              </DogSizeSelect>
            </DogAge>
            <DogInfo
              placeholder="특이 사항 및 요청 사항을 입력해 주세요."
              name="dogEtc"
              value={dogInfo.dogEtc}
              onChange={handleInputChange}
            />
            <DogBt>
              <DogCancel onClick={handleCancel}>취소 하기</DogCancel>
              <DogUp onClick={handleDogSubmit}>등록 하기</DogUp>
            </DogBt>
          </DogRight>
        </DogContents>
      )}
      {dogData.length > 0 ? (
        <DogGetForm dogData={dogData} onDeleteData={handleDeleteData} />
      ) : (
        <ListNone>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/dog.svg`} />
          <p>반려견 정보가 없습니다.</p>
          <span>반려견 정보를 등록해주세요</span>
        </ListNone>
      )}
    </MydogPage>
  );
};

export default Mydog;
