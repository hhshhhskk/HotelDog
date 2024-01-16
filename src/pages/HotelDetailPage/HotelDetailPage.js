import React from "react";
import { useParams } from "react-router-dom";
import HotelDetail from './HotelDetail';

// 호텔 상세페이지
const HotelDetailPage = () => {
  const { detailId } = useParams();
  return (
    <div>
      <h1>호텔 상세페이지</h1>
      <h2>호텔 고유 번호 : {detailId}</h2>
      <HotelDetail />
    </div>
  );
};

export default HotelDetailPage;
 