import styled from "@emotion/styled";
import React from "react";
import Calendar from "../../components/Common/Calendar";
import HotelReview from "../../components/Detail/HotelReview";
import ReserveForm from "../../components/Detail/Reservation/ReserveForm";
import RoomType from "../../components/Detail/RoomType";
import ReserveCompletePage from "../ReserveCompletePage/ReserveCompletePage";

import "../../styles/Detail/hoteldetail.css";

const HotelDetail = () => {
  const ReserveFormScroll = styled.div`
    position: relative;
    width: 590px;
    // min-height: px;
    // top: 100px;
    left: 360px;
  `;
  return (
    <div>
      <ReserveFormScroll>
        <img
          className="hotelrepresentive-bigimg"
          src={`${process.env.PUBLIC_URL}/images/hotelDetail/hotelRepresentiveImg.svg`}
          alt=""
        />
        <RoomType />
        <ReserveCompletePage />
        <HotelReview />
        <Calendar />
      </ReserveFormScroll>

      <div className="reserveform-fixed">
        <ReserveForm />
      </div>
    </div>
  );
};

export default HotelDetail;
