import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { getSelDateRmId } from "../../api/Detail/hoteldetailApi";
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
const ReserveformBottom = styled.div`
  width: 1000px;
  height: 1000px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  background-color: red;
`;
// 리뷰 페이지 네이션 초기값
const initState = [
  {
    comment: "",
    score: 0,
    pics: [""],
    review_pk: 0,
    nick_name: "",
    updated_at: "",
    fav_count: 0,
  },
];

const HotelDetail = ({ detailId, hotelList, resDay }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [data, setData] = useState("");
  const [reserveFormVisible, setReserveFormVisible] = useState(false);
  // 캘린더에서 날짜 선택 시 적용
  const [calendarOpen, setCalendarOpen] = useState(false);
  // 상세페이지 calendar 에서 선택한 날짜가 담긴다.
  const [calendarNow, setCalendarNow] = useState(`${resDay}`);
  // 후기 모달 열고 닫기
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const hotel_pk = detailId;

  // // useNaviate 로 전달된 state 를 알아내기
  // const location = useLocation();
  // const { state } = location;
  // // console.log(state.day);
  // const [resDay, setResDay] = useState(state.day);
  // // console.log(startDay);
  // // console.log(endDay);

  // detailId={detailId} resDay={resDay} setResDay={setResDay}

  // reserveform 스크롤 위치
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const scrollEvent = () => {
    const scrollTop = window.pageYOffset;
    // console.log("현재 스크롤 위치:", scrollTop);
    if (scrollTop < 800) {
      setReserveFormVisible(true);
    }
  };

  const calendarClose = async (_startDay, _endDay) => {
    setCalendarOpen(false);
    // changeSelectDay(_sd, _ed);
    // console.log("체크인 날짜 : ", _startDay);
    // console.log("체크아웃 날짜 : ", _endDay);
    setCalendarNow({ startDay: _startDay, endDay: _endDay });

    //
    const result = await getSelDateRmId(detailId, _startDay, _endDay, setData);
  };

  const [reviewHotel_pk, setReviewHotel_pk] = useState(hotel_pk);
  const [reviewHotel_list, setReviewHotel_list] = useState([]);
  // useEffect(() => {
  //   // hotel_pk 값이 변경될 때마다 호출되는 부분입니다.
  //   if (hotel_pk) {
  //     setReviewHotel_pk(hotel_pk); // hotel_pk 값이 존재할 때만 reviewHotel_pk 값을 설정합니다.
  //     getReview(hotel_pk, page); // getReview 함수 호출 시 hotel_pk 값을 전달합니다.
  //   }
  // }, [hotel_pk]); // hotel_pk 값이 변경될 때마다 useEffect가 호출되도록 설정합니다.

  const handleMoveReviewModal = () => {
    setReviewModalOpen(true);
    // document.body.style.overflow = "hidden";
  };

  const successFnReview = result => {
    console.log("성공", result);
  };
  const failFnReview = result => {
    console.log("다시 시도해주세요.", result);
  };
  const errorFnReview = result => {
    console.log("서버에러", result);
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
          </div>
        </div>
        {/* 시설 영역 */}
        <div>
          <span className="facility-title">시설</span>
          <div className="facility-flex">
            {hotelList.hotel_info_vo.hotel_option.map(function (item, index) {
              return (
                <div key={index}>
                  {item.option_nm ? (
                    <div className="facility-content">{item.option_nm}</div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        {/* 객실 영역 */}
        <RoomType
          data={data}
          setSelectedRoom={setSelectedRoom}
          hotelList={hotelList}
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
                hotel_pk={hotel_pk}
                hotelList={hotelList}
                // props로 상태 전달
                // setReviewModalOpen 함수. reviewModalOpen은 변수
                setReviewModalOpen={setReviewModalOpen}
                reviewModalOpen={reviewModalOpen}
                reviewHotel_pk={reviewHotel_pk}
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
      {/* {reserveFormVisible && ( */}
      <ReserveForm
        calendarOpen={calendarOpen}
        calendarClose={calendarClose}
        // 상세페이지에서 calendar 에서 선택된 날짜를 form에 보내줌
        calendarNow={calendarNow}
        setCalendarOpen={setCalendarOpen}
        setCalendarNow={setCalendarNow}
        // 담은 객실 정보를 form 에 보내준다
        selectedRoom={selectedRoom}
        hotel_pk={hotel_pk}
        // main 에서 가져온 date 를 보내준다?
        resDay={resDay}
        // className={
        //   reserveFormVisible ? "reserveForm" : "reserveForm reserveForm-hidden"
        // }
      >
        <ReserveformBottom>form 밑에 영역 잡아놓고 싶은데 안잡히네! </ReserveformBottom>
      </ReserveForm>
      {/* } */}
    </div>
  );
};

export default HotelDetail;
