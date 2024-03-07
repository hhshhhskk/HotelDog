import styled from "@emotion/styled";

export const RoomModifyWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 80px 210px;
  width: 1620px;
  background-color: #eee;
`;

// 버튼을 포함한 영역
export const RoomModifyDiv = styled.div`
  position: relative;
`;

export const NonAbleRoom = styled.div`
  position: absolute;
  top: 75px;
  width: 587px;
  height: 408px;
  background-color: rgba(1, 1, 1, 0.3);
  z-index: 999;
`;

export const RoomModifyCard = styled.div`
  position: relative;
  background-color: #fff;
  width: 587px;
`;

export const RoomModifyCardTitle = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  /* justify-content: space-between; */
  padding: 25px;
  align-items: center;
  height: 75px;
  border-bottom: 1px solid #eee;
  p {
    /* padding-left: 25px; */
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const Ablebutton = styled.button`
  position: relative;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #346fff;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    background-color: #323232;
  }
`;

export const NonAblebutton = styled.button`
  position: relative;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #323232;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    background-color: #346fff;
  }
`;

export const RoomModifyContentDiv = styled.div`
  position: relative;
  display: flex;
  font-size: 1.6rem;
`;

export const RoomModifyTitle = styled.div`
  position: relative;
  width: 200px;
  padding-left: 45px;
  background-color: rgba(52, 111, 255, 0.1);
  p {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #eee;
  }
`;

export const RoomPicsTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 120px;
  /* background-color: aqua; */
  border-bottom: 1px solid #eee;
  p {
    border: none;
  }
`;

export const RoomModifyContent = styled.div`
  position: relative;
  width: 390px;
  p {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 45px;
    border-bottom: 1px solid #eee;
  }
  input {
    position: relative;
    background-color: #eee;
    border: none;
    height: 25px;
  }
`;

export const RoomUse = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
`;

// export const RoomType = styled.div`
//   position: relative;
// `;

export const RoomPicsDiv = styled.div`
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  padding-left: 45px;
  border-bottom: 1px solid #eee;
`;

export const RoomPicDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const RoomPic = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const RoomPicAddButtonDiv = styled.div`
  position: relative;
`;

export const RoomPicAddButton = styled.button`
  position: absolute;
  width: 100px;
  height: 100px;
  top: -50px;
  left: -100px;
  font-size: 4rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const RoomCount = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
  input {
    width: 80px;
    padding: 0px 10px;
  }
  p {
    padding-left: 10px;
  }
`;
export const RoomCost = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
  input {
    width: 80px;
    padding: 0px 10px;
  }
  p {
    padding-left: 10px;
  }
`;
export const RoomDiscount = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  border-bottom: 1px solid #eee;
  input {
    width: 80px;
    padding: 0px 10px;
  }
  p {
    padding-left: 10px;
  }
`;

export const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 25px;
  button {
    position: relative;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #323232;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
