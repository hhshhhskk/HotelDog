import React, { useEffect, useState } from "react";
import {
  getReviewApi,
  postReviewApi,
  reviewPutApi,
} from "../../api/mypage/mypageApi";
import styled from "@emotion/styled";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); // 배경에 반투명한 검은색 추가
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// 모달 내용을 담는 영역 스타일 정의
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 750px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

// 닫기 버튼 스타일 정의
const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
const ModalTitle = styled.div`
  position: relative;
  height: 130px;
  border-bottom: 1px solid #654222;

  h2 {
    color: #654222;
    /* font-family: "Noto Sans"; */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 35px;
  }
  p {
    position: relative;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 5px;
  }
  span {
    color: #9d9d9d;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const ReviewTxt = styled.form`
  position: relative;
  textarea {
    position: relative;
    width: 590px;
    height: 290px;
    resize: none;
    border-radius: 5px;
    border: 1px solid #eee;
    background: #fafafa;
    padding: 20px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span {
    width: 150px;
    height: 50px;
  }
`;

const ReviewComplete = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  /* margin-top: 50px; */
  border-radius: 10px;
  border: 1px solid #654222;
  background: #654222;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const ImgContetnts = styled.div`
  position: relative;
  display: flex;
  width: 590px;
  height: 100px;
  gap: 10px;

  margin-top: 20px;

  cursor: pointer;
  img {
    position: relative;
  }
  input {
    position: relative;

    background-color: red;
  }
  button {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: #fafafa;
    border: 1px solid #eee;
    border-radius: 5px;
  }
`;
const Star = styled.div`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 25px;
  p {
    margin-bottom: 6px;
    color: #9d9d9d;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const ReviewPutModal = ({ isOpen, onClose, reviewData, children }) => {
  if (!isOpen) return null;

  console.log("ReviewPutModal 전달 받은 데이터 : ", reviewData);

  useEffect(() => {
    // 보관
  }, [reviewData]);

  const [rating, setRating] = useState(parseInt(reviewData.score) / 2);
  const [reviewText, setReviewText] = useState(reviewData.comment);

  // 후기 이미지 선택 처리 함수
  const [imgFileList, setImgFileList] = useState(reviewData.reviewPics);
  const [sendImgFileList, setSendImgFileList] = useState([]);
  const [imgFileListType, setImgFileListType] = useState([]);
  const handleChangeFile = e => {
    // console.log(e);
    const file = e.target.files[0];
    if (file && imgFileList.length < 3) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      console.log(tempUrl);
      console.log(file);
      // 업로드한 파일의 URL (웹브라우저상의 가상의 URL)
      setImgFileList(prevImages => [...prevImages, tempUrl]);
      // 업로드한 파일의 타입을 저장
      setImgFileListType(prevTypes => [...prevTypes, file.type]);
      // console.log("추가됨");
      // console.log("추가됨", imgFileList);
      const arr = [...sendImgFileList];
      arr.push(file);
      // console.log("추가한 파일 : ", file);
      setSendImgFileList(arr);
    } else {
      alert("이미지는 3개까지만 가능합니다.");
    }
  };

  // 파일 선택 UI 변경
  const handleClickFileSelect = () => {
    document.getElementById("fileBt").click();
  };

  // 첨부된 이미지 클릭시 삭제 함수
  const handleClickDeleteFile = index => {
    const imgFileArr = [...imgFileList];
    const imgTypeArr = [...imgFileListType];
    imgFileArr.splice(index, 1);
    imgTypeArr.splice(index, 1);
    setImgFileList(imgFileArr);
    setImgFileListType(imgTypeArr);
  };

  // 후기 작성 완료 시 처리 함수
  const handleReviewSubmit = async () => {
    // 작성된 후기 데이터 전달
    console.log("클릭 위쪽", rating, reviewText, sendImgFileList);
    if (reviewText === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    try {
      // FormData 생성
      const formData = new FormData();

      // 텍스트 데이터 추가 (JSON.stringify를 사용하여 문자열로 변환 후 직접 FormData에 추가)

      formData.append(
        "dto",
        new Blob(
          [
            JSON.stringify({
              reviewPk: reviewData.reviewPk,
              resPk: reviewData.resPk,
              comment: reviewText,
              score: rating * 2,
            }),
          ],
          { type: "application/json" },
        ),
      );

      console.log("보내야 하는 파일의 목록 : ", sendImgFileList);

      if (sendImgFileList !== undefined) {
        for (let i = 0; i < sendImgFileList.length; i++) {
          formData.append(`pics`, sendImgFileList[i]);
        }
        // 선택된 파일들을 FormData에 추가
      } else {
        formData.append(`pics`, []);
      }
      console.log(rating, reviewText, sendImgFileList[0]);

      const result = await reviewPutApi(formData);
      if (result === 1) {
        console.log("성공");
        alert("후기가 수정되었습니다.");
        // 모달 닫기
        onClose();
      }
    } catch (error) {
      // 에러 처리
      console.error("Error uploading files:", error);
    }
  };

  const successFn = result => {
    console.log("successFn", result);
    alert("후기가 작성되었습니다.");
    // 모달 닫기
    onClose();
  };
  const failFn = result => {
    console.log("failFn", result);
  };

  const errorFn = result => {
    console.log("errorFn", result);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>
          <h2>숙소 후기</h2>
          <p>{reviewData.hotelNm}</p>
          <span>{reviewData.roomNm}</span>
          {/* ? 날짜는 어떻게 불러오지 */}
        </ModalTitle>
        <Star>
          <p>숙소는 어떠셨나요?</p>
          {[...Array(rating)].map((a, i) => (
            <img
              src={`${process.env.PUBLIC_URL}/images/MyPage/startfill.svg`}
              className="star-lg"
              key={i}
              onClick={() => setRating(i + 1)}
            />
          ))}
          {[...Array(5 - rating)].map((a, i) => (
            <img
              src={`${process.env.PUBLIC_URL}/images/MyPage/startlight.svg`}
              className="star-lg"
              key={i}
              onClick={() => setRating(rating + i + 1)}
            />
          ))}
        </Star>
        {/* 모달 내용 */}
        {children}
        <ReviewTxt>
          <p>
            <textarea
              placeholder="다른 회원들이 숙소를 이용할 때 도움이 될 수 있도록 느낀 점을 작성해주세요.
  이미지는 최대 3장까지 업로드가 가능합니다."
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
            ></textarea>
          </p>
        </ReviewTxt>

        <ImgContetnts>
          {/* 디자인 부분 */}
          <button type="button" onClick={() => handleClickFileSelect()}>
            파일선택
          </button>
          {/* 그대로사용 */}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={e => {
              handleChangeFile(e);
            }}
            onClick={() => {
              document.getElementById("fileBt").click();
            }}
            id="fileBt"
            style={{ display: "none" }}
          />
          {/* 미리보기이미지 */}
          {imgFileList.map((item, index) => (
            <div key={index} onClick={() => handleClickDeleteFile(index)}>
              <img
                src={`http://112.222.157.156:5222/pic/review/${reviewData.reviewPk}/${item}`}
                style={{
                  width: "80px",
                  height: "80px",
                  overflow: "hidden",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </div>
          ))}
        </ImgContetnts>

        <ReviewComplete onClick={handleReviewSubmit}>
          <p>작성완료</p>
        </ReviewComplete>
        <CloseButton onClick={onClose}>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/close.svg`} />
        </CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ReviewPutModal;
