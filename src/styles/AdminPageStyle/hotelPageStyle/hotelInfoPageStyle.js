import styled from "@emotion/styled";

export const HotelInfoWrap = styled.div`
  position: relative;
  background-color: #eee;
  height: 100%;
  /* 100% 로 가야히지 않을까 */
  width: 1620px;
  padding: 80px 210px;
`;

export const HotelInfoTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;

  button {
    position: relative;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #346fff;
    font-size: 1.6rem;
  }
`;

export const AdButton = styled.button`
  position: relative;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #346fff;
  font-size: 1.6rem;
`;

export const ModifyButtonDiv = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  button {
    position: relative;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #323232;
    font-size: 1.6rem;
  }
`;

export const HotelInfoDiv = styled.div`
  position: relative;
`;

export const HotelInfoCard = styled.div`
  position: relative;
  background-color: #fff;
`;

export const CardTitle = styled.div`
  position: relative;
  height: 75px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  span {
    font-size: 2rem;
    font-weight: 800;
    padding-left: 25px;
  }
`;

export const HotelInfoContents = styled.div`
  position: relative;
  display: flex;
  padding: 50px;
`;

export const HotelInfoLeft = styled.div`
  position: relative;
  display: flex;
`;

export const HotelInfoPreview = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  /* background-color: aqua; */
  img {
    width: 100%;
    height: 100%;
    /* 비율 유지 */
    object-fit: cover;
  }
`;

export const HotelInfoPics = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* 간격이 일정하게 벌어지지 않음 */
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 300px;
  margin-left: 25px;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const HotelInfoRight = styled.div`
  position: relative;
  padding-left: 100px;
  font-size: 1.6rem;
  img {
    position: relative;
    top: -5px;
    padding: 0px 10px;
  }
`;

export const HotelInfoText = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 25px;
`;

export const ContentsTitle = styled.span`
  position: relative;
`;

export const HotelOptionDiv = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const HotelOption = styled.span`
  position: relative;
  padding: 5px 10px;
  color: #fff;
  background-color: #323232;
  font-size: 1.4rem;
  border-radius: 5px;
`;

export const HotelDesc = styled.div`
  position: relative;
  width: 470px;
`;

// 객실 정보
export const RoomInfoCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RoomInfoCard = styled.div`
  position: relative;
  margin-top: 25px;
  background-color: #fff;
  width: 587px;
`;

export const RoomInfoContents = styled.div`
  position: relative;
  display: flex;
  padding: 50px;
`;

export const RoomInfoPreview = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    /* 비율 유지 */
    object-fit: cover;
  }
`;

export const RoomInfoTextDiv = styled.div`
  position: relative;
  padding-left: 50px;
  font-size: 1.6rem;
  img {
    position: relative;
    top: -5px;
    padding: 0px 10px;
  }
`;

export const RoomInfoText = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 10px;
`;

export const RoomPriceDiv = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
`;

export const RoomDiscount = styled.span`
  position: relative;
  color: #e05353;
`;
export const RoomPrice = styled.span`
  position: relative;
  color: #666666;
  text-decoration: line-through;
`;
export const RoomTotalPrice = styled.span`
  position: relative;
`;
