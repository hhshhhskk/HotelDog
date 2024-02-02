import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import HotelDetail from "./HotelDetail";
import { getHotel, getOneReservation } from "../../api/Detail/hoteldetailApi";

// 호텔 상세페이지
const HotelDetailPage = () => {
  // params 읽기
  const { detailId } = useParams();
  // hotel_pk

  // useNaviate 로 전달된 state 를 알아내기
  const location = useLocation();
  const { state } = location;
  console.log(state.day);
  const [resDay, setResDay] = useState(state.day);

  // jwtAxios 연동
  // 추가할부분이 userPk, hotelPk, hotelList
  const [userPk, setUserPk] = useState(detailId);
  const [hotel_pk, setHotel_pk] = useState("1");
  const [hotelList, setHotelList] = useState([]);

  const reloadgetHotelId = () => {
    // jwtAxios.get 에서 userPk, hotelPk, setHotelList  호텔 리스트 목록 불러오기
    console.log("userPk", userPk);
    getHotel(userPk, hotel_pk, setHotelList);
  };

  // 화면 준비되면 그때 반영
  useEffect(() => {
    reloadgetHotelId();
  });

  return (
    <div>
      <h1>호텔 상세페이지</h1>
      <h2>호텔 고유 번호 : {detailId}</h2>

      {/* 호텔 디테일을 HotelDetailPage 에 옮겨야하는지? */}
      <HotelDetail
        detailId={detailId}
        resDay={resDay}
        setResDay={setResDay}
        reloadgetHotelId={reloadgetHotelId}
      />
      {/* <h1>HotelDetailPage pk : {detailId}</h1> */}
    </div>
  );
};

export default HotelDetailPage;
