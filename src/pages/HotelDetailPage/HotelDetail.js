import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Calendar from "../../components/Common/Calendar";
import HotelReview from "../../components/Detail/HotelReview";
import ReserveForm from "../../components/Detail/Reservation/ReserveForm";
import RoomType from "../../components/Detail/RoomType";

import "../../styles/Detail/hoteldetail.css";

const HotelDetail = () => {
  // 스크롤 영역
  const ReserveFormScroll = styled.div`
    position: relative;
    width: 590px;
    left: 360px;
    padding-bottom: 50px;
  `;

  // 리뷰 영역
  const ReviewWrap = styled.div`
    position: relative;
    margin-top: 72px;
  `;
  const ReviewHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 14px;
  `;
  const ReviewTitle = styled.div`
    position: relative;
    font-size: 16px;
    color: #000;
    font-weight: 600;
    margin-bottom: 4px;
    line-height: normal;
  `;
  const ReviewDetailStar = styled.img`
    position: relative;
    width: 18px;
    height: 18px;
    margin-right: 9px;
    display: flex;
  `;
  const ReviewLine = styled.img`
    position: relative;
    margin-bottom: 22px;
  `;
  const ReviewText = styled.div`
    position: relative;
    left: 30px;

    width: 560px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `;
  const ReviewTextMoreBt = styled.button`
    position: relative;
    font-size: 14px;
    color: #000;
    font-weight: 500;
    line-height: normal;

    background-color: #fff;
    border: 0;

    cursor: pointer;
  `;
  const ReviewTextDesc = styled.div`
    position: relative;
    font-size: 12px;
    font-weight: 400;
    color: #000;
    line-height: normal;

    width: 450px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;

  // 더미 데이터
  const hotel_option = [
    {
      주차장: false,
      미용전문: true,
      미용자격증: true,
      드라이기: false,
      에어컨: true,
      음용수: true,
      놀이: true,
      훈련자격증: true,
      조식: true,
      수제간식: true,
    },
  ];
  const hotelInfoVo = [
    {
      hotel_nm: "가고파",
      hotel_detail_info:
        "자연과 함께, 강아지가 마음껏 뛰어다닐 수 있는 공간을 제공합니다. * 인증 사진 찍어 보내드려요ㅎㅎ",
      maximum: "1",
      business_num: "5888888",
      hotel_call: "02-123-4567",
      road_address: "서울 대전 대구 부산 찍고 62-3",
      // pics : {
      //   {사진줘}
      // }
    },
  ];

  // 후기 모달 관련
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleMoveReviewModal = () => {
    setReviewModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const [reserveForm, setReserveForm] = useState(true);

  return (
    <div>
      {/* 좌측 스크롤 영역 */}
      <ReserveFormScroll>
        {/* 호텔 이미지 및 설명 영역 */}
        <div>
          <img
            className="hotelrepresentive-bigimg"
            src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelRepresentiveImg.svg`}
            alt=""
          />
          <div className="hotelrepresentive-smallimg-wrap">
            {/* !!!!!!!! 호텔 상세 작은 이미지 map 뿌려야함 */}
            <img
              className="hotelrepresentive-smallimg"
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelsmallRepresentiveImg.svg`}
              alt=""
            />
          </div>

          <div>
            {hotelInfoVo.map(function (item, index) {
              return (
                <>
                  <div className="hotel-text-wrap" key={index}>
                    <div>
                      <h1 className="hotel-title">{item.hotel_nm}</h1>
                      <span className="hotel-spot">{item.road_address}</span>
                    </div>
                    <span className="hotel-won">
                      <b className="hotel-price">110,000</b>원
                    </span>
                  </div>
                  <p className="hotel-desc">{item.hotel_detail_info}</p>
                </>
              );
            })}
          </div>
        </div>

        {/* 시설 영역 */}
        <div>
          <span className="facility-title">시설</span>
          {hotel_option.map(function (item, index) {
            return (
              <div key={index} className="facility-flex">
                {Object.keys(item).map(function (key, i) {
                  return (
                    item[key] && (
                      <div key={i} className="facility-content">
                        {key}
                      </div>
                    )
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* 객실 영역 */}
        <RoomType />

        {/* 숙소 후기 영역 */}
        <ReviewWrap>
          <ReviewHeader>
            <ReviewDetailStar
              src={`${process.env.PUBLIC_URL}/images/hotelDetail/filledStar.svg`}
              alt=""
            />
            <div>
              <ReviewTitle>숙소 후기</ReviewTitle>
              {/* <span className="review-spot">대구광역시 중구</span> */}
            </div>
          </ReviewHeader>
          <ReviewLine
            src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelReviewLine.svg`}
            alt=""
          />
          <ReviewText>
            <div>
              <div className="review_nickname">닉네임</div>
              <ReviewTextDesc>
                저희 집 주인님 팔자는 항상 부럽지만 이렇게 부러운 적은 또
                없습니다. 사람도 받아주시나요? 저희 집 주인님 팔자는 항상
                부럽지만 이렇게 부러운 적은 또 없습니다. 사람도 받아주시나요?
              </ReviewTextDesc>
            </div>

            {reviewModalOpen && (
              <HotelReview
                // props로 상태 전달
                // setReviewModalOpen 함수. reviewModalOpen은 변수
                setReviewModalOpen={setReviewModalOpen}
                reviewModalOpen={reviewModalOpen}
              />
            )}
            <ReviewTextMoreBt onClick={() => handleMoveReviewModal()}>
              더 보기
            </ReviewTextMoreBt>
          </ReviewText>
        </ReviewWrap>

        {/* <Calendar /> */}
      </ReserveFormScroll>
      {/* 우측 픽스 영역
      <div className="reserveform-fixed"><ReserveForm /></div> */}
    </div>
  );
};

export default HotelDetail;
