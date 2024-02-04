import React, { useEffect, useRef, useState } from "react";
import HotelReview from "../../components/Detail/HotelReview";
import ReserveForm from "../../components/Detail/Reservation/ReserveForm";
import RoomType from "../../components/Detail/RoomType";
import "../../styles/Detail/hoteldetail.css";
import {
  ReserveFormScroll,
  ReviewDetailStar,
  ReviewHeader,
  ReviewLine,
  ReviewText,
  ReviewTextDesc,
  ReviewTextMoreBt,
  ReviewTitle,
  ReviewWrap,
} from "../../styles/Detail/hoteldetailStyle";

const HotelDetail = ({ hotelList, detailId, resDay, setResDay,  }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  console.log("HotelDetail =========== : ", hotelList);
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
    // document.body.style.overflow = "hidden";
  };

  const [reserveForm, setReserveForm] = useState(true);

  // // useNaviate 로 전달된 state 를 알아내기
  // const location = useLocation();
  // const { state } = location;
  // // console.log(state.day);
  // const [resDay, setResDay] = useState(state.day);
  // // console.log(startDay);
  // // console.log(endDay);

  // detailId={detailId} resDay={resDay} setResDay={setResDay}

  const [reserveFormVisible, setReserveFormVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const scrollEvent = () => {
    // 현재 스크롤 위치를 가져오기
    const scrollTop = window.pageYOffset;
    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // console.log("현재 스크롤 위치:", scrollTop);
    if (scrollTop < 1000) {
      setReserveFormVisible(true);
    } else {
      setReserveFormVisible(false);
    }
    // 스크롤 이벤트에 대한 추가 처리를 여기에 작성
  };
  return (
    <div>
      {/* 좌측 스크롤 영역 */}
      <ReserveFormScroll>
        {/* 호텔 이미지 및 설명 영역 */}
        <div>
          <img
            className="hotelrepresentive-bigimg"
            src={`http://112.222.157.156:5222/pic/hotel/${detailId}/${hotelList.hotel_info_vo.pics[0]}`}
            alt=""
          />
          <div className="hotelrepresentive-smallimg-wrap">
            {/* !!!!!!!! 호텔 상세 작은 이미지 map 뿌려야함 */}
            {hotelList.hotel_info_vo.pics.map((item, index) => (
              <img
                key={index}
                className="hotelrepresentive-smallimg"
                src={`http://112.222.157.156:5222/pic/hotel/${detailId}/${hotelList.hotel_info_vo.pics[index]}`}
                alt=""
              />
            ))}
          </div>

          <div>
            <div className="hotel-text-wrap">
              <div>
                <h1 className="hotel-title">
                  {hotelList.hotel_info_vo.hotel_nm}
                </h1>
                <span className="hotel-spot">
                  {hotelList.hotel_info_vo.road_address}
                </span>
              </div>
              {/* <span className="hotel-won">
                      <b className="hotel-price">110,000</b>원
                    </span> */}
            </div>
            <p className="hotel-desc">
              {hotelList.hotel_info_vo.hotel_detail_info}
            </p>

            {/* {hotelList.hotel_info_vo.map(function (item, index) {
              return (
                <div key={index}>
                  <div className="hotel-text-wrap">
                    <div>
                      <h1 className="hotel-title">{item.hotel_nm}</h1>
                      <span className="hotel-spot">{item.road_address}</span>
                    </div>
                    <span className="hotel-won">
                      <b className="hotel-price">110,000</b>원
                    </span>
                  </div>
                  <p className="hotel-desc">{item.hotel_detail_info}</p>
                </div>
              );
            })} */}
          </div>
        </div>
        {/* 시설 영역 */}
        {/* <div>
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
        </div> */}
        <div>
          <span className="facility-title">시설</span>
          {/* {hotelList.hotel_info_vo.hotel_option.map(function (item, index) {
            return (
              <div key={index} className="facility-flex">
                {item ? <div className="facility-content">{item}</div> : null}
              </div>
            );
          })} */}
          <div className="facility-flex">
            {hotelList.hotel_info_vo.hotel_option.map(function (item, index) {
              return (
                <div key={index}>
                  {item ? <div className="facility-content">{item}</div> : null}
                </div>
              );
            })}
          </div>
        </div>
        {/* 객실 영역 */}
        <RoomType
          detailId={detailId}
          resDay={resDay}
          setResDay={setResDay}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
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

      {/* 우측 픽스 영역 */}
      {/* <div> */}
      {reserveFormVisible && (
        <ReserveForm
          selectedRoom={selectedRoom}
          detailId={detailId}
          resDay={resDay}
          setResDay={setResDay}
          className={
            reserveFormVisible
              ? "reserveForm"
              : "reserveForm reserveForm-hidden"
          }
        />
      )}
      {/* </div> */}
    </div>
  );
};

export default HotelDetail;
