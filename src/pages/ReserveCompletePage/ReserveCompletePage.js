import styled from "@emotion/styled";
import React from "react";

const ReserveCompletePage = () => {
  const ReserveCompleteImg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    img {
      position: relative;
      width: 120px;
      height: 95px;
    }
  `;
  const ReserveViewDetail = styled.button`
    position: relative;
    border: 0;
    color: #fff;
    background-color: #654222;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    `;
    const ReserveShowMore = styled.button`
    position: relative;
    display: block;
    font-size: 14px;
    border: 0;
    color: #9D9D9D;
    background-color: #fff;
  `;
  return (
    <div>
      {/* 이미지 영역 */}
      <ReserveCompleteImg>
        <img
          src={`${process.env.PUBLIC_URL}/images/have_a_reservation.svg`}
          alt=""
        />
      </ReserveCompleteImg>
      {/* 타이틀 영역 */}
      <div>
        <h1>예약이 완료 되었습니다!</h1>
      </div>
      {/* 버튼 영역 */}
      <ReserveViewDetail>예약 내역 상세보기</ReserveViewDetail>
      {/* 더 둘러보기 영역 */}
      <ReserveShowMore>더 둘러보기</ReserveShowMore>
    </div>
  );
};

export default ReserveCompletePage;
