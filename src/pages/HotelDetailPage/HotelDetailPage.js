import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import HotelDetail from "./HotelDetail";
import { getOneReservation } from "../../api/Detail/reservationApi";

// 호텔 상세페이지
const HotelDetailPage = () => {
  // params 읽기
  const { detailId } = useParams();
  // hotel_pk

  // useNaviate 로 전달된 state 를 알아내기
  const location = useLocation();
  const { state } = location;
  console.log(state.day);
  // const startDay = state.startDay; // 시작일
  // const endDay = state.endDay; // 종료일
  const [resDay, setResDay] = useState(state.day);

  // console.log(startDay);
  // console.log(endDay);

  return (
    <div>
      <h1>호텔 상세페이지</h1>
      <h2>호텔 고유 번호 : {detailId}</h2>

      {/* 호텔 디테일을 HotelDetailPage 에 옮겨야하는지? */}
      <HotelDetail detailId={detailId} resDay={resDay} setResDay={setResDay} />
      {/* <h1>HotelDetailPage pk : {detailId}</h1> */}
    </div>
  );
};

export default HotelDetailPage;
