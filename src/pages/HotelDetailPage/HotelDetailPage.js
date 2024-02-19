import React, { useEffect, useState } from "react";
import {
  useLocation,
  useParams
} from "react-router-dom";
import {
  getHotelId
} from "../../api/Detail/hoteldetailApi";
import HotelDetail from "./HotelDetail";

// 호텔 상세페이지
const HotelDetailPage = () => {
  // params 읽기
  const { detailId } = useParams();
  // hotel_pk

  // useNaviate 로 전달된 state 를 알아내기
  const location = useLocation();
  const { state } = location;
  const [resDay, setResDay] = useState(state.day);

  // const [userPk, setUserPk] = useState(detailId);
  const [hotel_pk, setHotel_pk] = useState(detailId);
  const [hotelList, setHotelList] = useState([]);
  const [roomList, setRoomList] = useState([]);

  const reloadgetHotelId = () => {
    getHotelId(hotel_pk, setHotelList);
  };
  // 화면 준비되면 그때 반영
  useEffect(() => {
    reloadgetHotelId();
  }, []);

  return (
    <div>
      <h1>호텔 상세페이지</h1>
      <h2>호텔 고유 번호 : {detailId}</h2>
      {hotelList.hotel_info_vo ? (
        <HotelDetail
          detailId={detailId}
          resDay={resDay}
          setResDay={setResDay}
          hotelList={hotelList}
          reloadgetHotelId={reloadgetHotelId}
          setRoomList={setRoomList}
        />
      ) : null}
    </div>
  );
};

export default HotelDetailPage;
