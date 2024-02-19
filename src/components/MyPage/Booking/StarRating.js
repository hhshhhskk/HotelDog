import styled from "@emotion/styled";
import React, { useState } from "react";
const Star = styled.div`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 25px;
  p {
    margin-bottom: 6px;
    color: #9d9d9d;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const StarRating = ({ rating, setRating }) => {
  return (
    <Star>
      <p>숙소는 어떠셨나요?</p>
      {[...Array(rating)].map((a, i) => (
        <img
          src={`${process.env.PUBLIC_URL}/images/MyPage/startfill.svg`}
          className="star-lg"
          key={i}
          onClick={() => setRating(i + 1)}
        />
      ))}
      {[...Array(5 - rating)].map((a, i) => (
        <img
          src={`${process.env.PUBLIC_URL}/images/MyPage/startlight.svg`}
          className="star-lg"
          key={i}
          onClick={() => setRating(rating + i + 1)}
        />
      ))}
    </Star>
  );
};

export default StarRating;
