import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  getReviewApi,
  mypageBookingListApi,
  reviewDeleteApi,
} from "../../api/mypage/mypageApi";
import ReviewModal from "../../components/MyPage/Booking/ReviewModal";
import ReviewPutModal from "../../components/MyPage/ReviewPutModal";

const ReviewPage = styled.div`
  margin-left: 85px;
  position: relative;
  /* display: flex; */
  width: 865px;
  /* height: 980px; */
  /* background-color: lightblue; */
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
    font-weight: 500;
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

const ReviewContentsWrap = styled.div`
  position: relative;
`;
const ReviewContents = styled.div`
  position: relative;
  width: 600px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 25px;
  margin-bottom: 20px;
`;

const ReviewInfo = styled.div`
  position: relative;
`;
const ReviewTop = styled.div`
  position: relative;
  margin-bottom: 10px;
  span {
    color: #9d9d9d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10px;
  }
`;
const ReviewOption = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const ReviewOptionBt = styled.button`
  position: relative;

  border: none;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 15px;
`;

const OptionBox = styled.div`
  position: absolute;
  display: ${({ isVisible }) =>
    isVisible ? "flex" : "none"}; /* OptionBox의 가시성을 설정합니다. */
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  width: 84px;
  height: 70px;
  border-radius: 10px;
  background-color: #fffaf0;
`;
const ReviewFetch = styled.button`
  position: relative;
  border: none;
  color: #969696;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #fffaf0;
  cursor: pointer;
`;
const ReviewDelete = styled.button`
  position: relative;
  color: #969696;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #fffaf0;
  border: none;
  cursor: pointer;
`;
const ReviewImg = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  margin-bottom: 10px;
  overflow: hidden;

  img {
    position: relative;
    width: 98px;
    height: 98px;
    object-fit: cover;
  }
`;
const HotelInfo = styled.div`
  position: relative;
  margin-bottom: 10px;
  p {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  span {
    color: #9d9d9d;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const ReviewTxt = styled.div`
  position: relative;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Review = () => {
  const [isFetchHovered, setIsFetchHovered] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [visibleOptionBoxIndex, setVisibleOptionBoxIndex] = useState(null); // OptionBox의 가시성 상태

  const handleFetchHover = () => {
    setIsFetchHovered(!isFetchHovered);
  };

  const handleDeleteHover = () => {
    setIsDeleteHovered(!isDeleteHovered);
  };

  const toggleOptionBoxVisibility = index => {
    setVisibleOptionBoxIndex(visibleOptionBoxIndex === index ? null : index); // 현재 인덱스의 OptionBox 가시성을 토글
  };
  // 리뷰내역 불러오기
  const [reviewData, setReviewData] = useState([]);
  const getReviewData = async () => {
    try {
      const data = await getReviewApi();
      console.log("Returned review data:", data);
      setReviewData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  // 리뷰 삭제하기
  const handleDeleteClick = async (reviewPk, resPk) => {
    try {
      const result = await reviewDeleteApi(reviewPk, resPk);
      if (result === 1) {
        // 데이터 삭제 성공 시
        // 리뷰내역 다시 불러오기
        const newData = await getReviewApi();
        setReviewData(newData);
      } else {
        console.log("Failed to delete review data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewPopData, setReviewPopData] = useState(null);
  // 후기 모달 열기
  const openReviewModal = review => {
    setReviewPopData(review);
    setIsReviewModalOpen(true);
  };

  // 후기 모달 닫기
  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
    getReviewData();
  };

  console.log(reviewData);
  return (
    <ReviewPage>
      <PageTitle>
        <p>이용 후기</p>
      </PageTitle>
      {reviewData.length === 0 ? (
        <ListNone>
          <img src={`${process.env.PUBLIC_URL}/images/MyPage/review.svg`} />
          <p>이용 후기가 없습니다.</p>
          <span>호텔 이용 후 소중한 후기를 남겨주세요.</span>
        </ListNone>
      ) : (
        <ReviewContentsWrap>
          {reviewData.map((review, index) => (
            <ReviewContents key={index}>
              <ReviewInfo>
                <ReviewTop>
                  <span>{review.createdAt}</span>
                  <ReviewOption>
                    <ReviewOptionBt
                      onClick={() => toggleOptionBoxVisibility(index)}
                    >
                      {/* 인덱스 전달 */}
                      <img
                        src={`${process.env.PUBLIC_URL}/images/MyPage/reviewoption.svg`}
                      />
                    </ReviewOptionBt>
                    <OptionBox isVisible={visibleOptionBoxIndex === index}>
                      {/* 현재 인덱스에 대한 가시성 제어 */}
                      <ReviewFetch
                        onMouseEnter={handleFetchHover}
                        onMouseLeave={handleFetchHover}
                        onClick={() => openReviewModal(review)} // 모달 열기
                      >
                        <p
                          style={{
                            color: isFetchHovered ? "#654222" : "#969696",
                          }}
                        >
                          수정하기
                        </p>
                      </ReviewFetch>
                      <ReviewDelete
                        onClick={() => {
                          handleDeleteClick(review.reviewPk, review.resPk);
                        }}
                        onMouseEnter={handleDeleteHover}
                        onMouseLeave={handleDeleteHover}
                      >
                        <p
                          style={{
                            color: isDeleteHovered ? "#654222" : "#969696",
                          }}
                        >
                          삭제하기
                        </p>
                      </ReviewDelete>
                    </OptionBox>
                  </ReviewOption>
                </ReviewTop>
                <ReviewImg>
                  {review.reviewPics.map((data, idx) => {
                    return (
                      <img
                        key={idx}
                        src={`http://112.222.157.156:5222/pic/review/${review.reviewPk}/${data}`}
                      />
                    );
                  })}
                </ReviewImg>
                <HotelInfo>
                  <p>{review.hotelNm}</p>
                  <span>{review.roomNm}</span>
                </HotelInfo>
                <ReviewTxt>{review.comment}</ReviewTxt>
              </ReviewInfo>
            </ReviewContents>
          ))}
        </ReviewContentsWrap>
      )}

      {isReviewModalOpen ? (
        <ReviewPutModal
          isOpen={true}
          onClose={closeReviewModal}
          // 전체 목록 전체 데이터
          // reviewData={reviewData}
          // 그 중에 선택된 거 하나
          reviewData={reviewPopData}
        />
      ) : (
        ""
      )}
    </ReviewPage>
  );
};

export default Review;
