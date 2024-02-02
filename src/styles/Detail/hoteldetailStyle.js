import styled from "@emotion/styled";

// 스크롤 영역
export const ReserveFormScroll = styled.div`
  position: relative;
  width: 590px;
  left: 360px;
  padding-bottom: 50px;
`;
// 리뷰 영역
export const ReviewWrap = styled.div`
  position: relative;
  margin-top: 79px;
`;
export const ReviewHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;
export const ReviewTitle = styled.div`
  position: relative;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  margin-bottom: 4px;
  line-height: normal;
`;
export const ReviewDetailStar = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 9px;
  display: flex;
`;
export const ReviewLine = styled.img`
  position: relative;
  margin-bottom: 22px;
`;
export const ReviewText = styled.div`
  position: relative;
  left: 30px;

  width: 560px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const ReviewTextMoreBt = styled.button`
  position: relative;
  font-size: 14px;
  color: #000;
  font-weight: 500;
  line-height: normal;

  background-color: #fff;
  border: 0;

  cursor: pointer;
`;
export const ReviewTextDesc = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  line-height: normal;

  width: 450px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
