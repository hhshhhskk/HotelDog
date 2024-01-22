import styled from "@emotion/styled";

export const HotelCardDiv = styled.div`
  position: relative;
  width: 360px;
  padding-bottom: 50px;
`;
export const HotelImgDiv = styled.div`
  position: relative;
  width: 360px;
  height: 290px;
  overflow: hidden;
  border-radius: 10px;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* display: block; */
  }
`;

export const HotelContentsDiv = styled.div`
  position: relative;
  display: block;
  padding: 20px 0px;
  cursor: pointer;
`;

export const TitleDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const HotelName = styled.span`
  position: relative;
  font-size: 18px;
`;

export const HotelStarDiv = styled.div`
  position: relative;
  background-color: #d9d9d9;
  font-size: 12px;
  padding: 2px 4px;
  margin-left: 15px;
  border-radius: 5px;
`;

export const HotelAddress = styled.span`
  position: relative;
  display: block;
  color: #9d9d9d;
  font-size: 14px;
  padding: 6px 0px;
`;

export const HotelPriceDiv = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  font-weight: 700;
`;

export const Discount = styled.span`
  position: relative;
  color: #e05353;
  font-size: 1.8rem;
`;
export const OriginalPrice = styled.span`
  position: relative;
  color: #9d9d9d;
  font-size: 1.4rem;
  padding: 0px 6px;
  text-decoration: line-through;
`;
export const FinalPriceDiv = styled.div`
  position: relative;
  font-size: 1.8rem;
`;
