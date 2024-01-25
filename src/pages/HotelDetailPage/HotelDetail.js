import React from "react";
import RoomType from "../../components/Detail/RoomType";
import ReserveCompletePage from "../ReserveCompletePage/ReserveCompletePage";
import HotelReview from "../../components/Detail/HotelReview";
import Calendar from "../../components/Common/Calendar";
import ReserveForm from "../../components/Detail/Reservation/ReserveForm";

const HotelDetail = () => {
  return (
    <div>
      <RoomType />
      <ReserveCompletePage />
      <HotelReview />
      <Calendar />
      <ReserveForm />
      
    </div>
  );
};

export default HotelDetail;
