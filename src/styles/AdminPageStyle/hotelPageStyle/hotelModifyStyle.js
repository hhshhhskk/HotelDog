import styled from "@emotion/styled";

export const HotelModifyWrap = styled.div`
  position: relative;
  background-color: #eee;
  height: 100%;
  /* 100% 로 가야히지 않을까 */
  width: 1620px;
  padding: 80px 210px;
`;

// 버튼 포함한 영역
export const HotelModifyDiv = styled.div`
  position: relative;
`;

export const HotelModifyCard = styled.div`
  position: relative;
  background-color: #fff;
`;

export const HotelModifyCardTitle = styled.div`
  position: relative;
  height: 75px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  p {
    font-size: 2rem;
    font-weight: 800;
    padding-left: 25px;
  }
`;

export const HotelModifyContentDiv = styled.div`
  position: relative;
  display: flex;
  font-size: 1.6rem;
  height: 620px;
`;

export const HotelModifyTitle = styled.div`
  position: relative;
  width: 200px;
  background-color: rgba(52, 111, 255, 0.1);
  p {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 45px;
    height: 50px;
    border-bottom: 1px solid #eee;
  }
`;

export const HotelModifyTitlePic = styled.div`
  position: relative;
  p {
    height: 120px;
  }
`;

export const HotelModifyTitleDesc = styled.div`
  position: relative;
  p {
    height: 200px;
  }
`;

export const HotelModifyContent = styled.div`
  position: relative;
  p {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 45px;
    height: 50px;
    width: 1000px;
    border-bottom: 1px solid #eee;
  }
  textarea {
    position: relative;
    margin: 10px 45px;
    padding: 10px;
    width: 910px;
    height: 175px;
    border-bottom: 1px solid #eee;
  }
`;

export const HotelOption = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 45px;
  height: 50px;
  width: 1000px;
  border-bottom: 1px solid #eee;
  gap: 20px;
`;

export const HotelPicDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 45px;
  border-bottom: 1px solid #eee;
  gap: 20px;
`;

export const HotelPic = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  /* background-color: aqua; */
`;

export const HotelPicAddButtonDiv = styled.div`
  position: relative;
`;

export const HotelPicAddButton = styled.button`
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

export const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-top: 25px;
  button {
    position: relative;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #323232;
    font-size: 1.6rem;
  }
`;
