import styled from "@emotion/styled";

export const RmPageWrap = styled.div`
  position: relative;
  top: 80px;
`;
// header 영역
export const RmMenuSearchFlex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 50px;
  left: 210px;
`;
export const RmTodaySearch = styled.input`
  position: relative;
  background: url(${process.env.PUBLIC_URL}/admin/images/RmToday/search.svg);
  // no-repeat 5px center;
  background-size: 15px;
  color: #000;
  font-size: 12px;
  border: 1px solid #b9b9b9;
  border-radius: 50px;
  padding: 3px 7px;
  text-align: center;
  width: 300px;
  height: 30px;
`;
export const RmTodayMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 520px;
  height: 50px;
  img {
    font-size: 20px;
    color: #999999;
    font-weight: 600;
    text-align: center;
    margin-right: 22px;
  }
`;
export const RmTodayMenuBt = styled.span`
  position: relative;
  font-size: 20px;
  color: #999999;
  font-weight: 600;
  text-align: center;
  margin-right: 22px;
  cursor: pointer;
  &:active {
    color: #346fff;
    transition: color 0.2s ease-out;
  }
`;
// middle 영역
export const MenuTable = styled.div`
  position: relative;
  margin-bottom: 70px;
`;
export const RmTableBtFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 210px;
  margin-right: 210px;
`;
export const RmBtFlex = styled.div`
  position: relative;
  margin: 21px 0px;
  width: 230px;
  height: 27px;
  display: flex;
  justify-content: space-between;
`;
export const RmPageBt = styled.button`
  position: relative;
  width: 70px;
  height: 27px;
  background-color: #346fff;
  opacity: 80%;
  color: #fff;
  font-size: 12px;
  text-align: center;
  padding: 5px 5px;
  border: none;
  border-radius: 7px;
  font-weight: 600;
  cursor: pointer;
  &:active {
    background-color: #346fff;
    opacity: 100%;
  }
`;
// export const TableWrap = styled.div`
//   width: 1200px;
//   height: 612px;
//   background-color: #fff;

//   border: 1px solid #b9b9b9;
//   border-radius: 4px;

//   table {
//     font-size: 12px;
//     text-align: center;
//     border-collapse: collapse;
//     // border-collapse: separate;
//     // border-spacing: 0 10px;
//     tr,
//     td {
//       padding: 10px;
//       border: 1px solid #999999;
//       height: 38px;
//     }
//     thead {
//       background-color: #323232;
//       color: #fff;
//     }
//   }
//   button {
//     outline: none;
//     border: 1px solid #b9b9b9;
//     border-radius: 10px;
//     cursor: pointer;
//     background-color: #fff;
//     padding: 5px;
//     &:active {
//       background-color: #b9b9b9;
//     }
//   }
// `;
export const StyledTableWrap = styled.div`
  width: 1200px;
  height: 612px;
  background-color: #fff;
  /* border: 1px solid #b9b9b9; */
  /* border-radius: 4px; */

  .ant-table {
    font-size: 12px;
    text-align: center;
    border-collapse: collapse;
  }

  .ant-table table {
    border-collapse: collapse;
    text-align: center;
  }

  .ant-table-thead > tr > th {
    text-align: center;
    background-color: #323232;
    color: #fff;
  }

  .ant-table-tbody > tr > td {
    padding: 10px;
    border: 1px solid #999999;
    height: 38px;
    border-radius: 4px;
  }
`;
export const DogInfoButton = styled.button`
  position: relative;
  outline: none;
  border: 1px solid #b9b9b9;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  color: #b9b9b9;
  padding: 5px;

  &:active {
    background-color: #fff;
    color: #000;
  }
`;
// export const Table = styled.div`
//   table {
//     font-size: 12px;
//     text-align: center;
//     border-collapse: collapse;
//     // border-collapse: separate;
//     // border-spacing: 0 10px;
//     th,
//     td {
//       padding: 10px;
//       height: 38px;
//       border: 1px solid #999999;
//     }
//     thead {
//       background-color: #323232;
//       color: #fff;
//     }
//   }
// `;
/* 모달 백그라운드 스타일 */
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경색 (투명도 조절 가능) */
  z-index: 999; /* 모달 위에 위치하도록 */
`;
/* modal 영역*/
export const RmPageModal = styled.div`
  position: fixed;
  top: 10%;
  left: 40%;
  transform: trnaslate(-50%, -50%);

  width: 650px;
  height: 700px;
  border-radius: 15px;
  border: 1px solid #b9b9b9;
  background-color: #fff;

  z-index: 1000; /* 모달이 모달 백그라운드 위에 위치하도록 */
  // overflow-y: auto; /* 내용이 모달을 벗어나면 스크롤바 표시 */
`;
export const RmPageModalHead = styled.div`
  position: relative;
  font-size: 20px;
  color: #999999;
  font-weight: 600;
  text-align: center;
  margin: 87px 231px 50px 231px;
`;
export const RmModalClose = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  top: 25px;
  left: 25px;
  cursor: pointer;
`;
export const RmPageTitle = styled.span`
  font-size: 33px;
  color: #346fff;
  position: relative;
  font-weight: 700;
`;
export const RmPageModalContents = styled.div`
  position: relative;
  color: #fff;
  font-size: 12px;
  background-color: #b9b9b9;
  height: 450px;
  width: 550px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  div {
    text-align: center;
  }
  margin: 40px 50px;
`;
export const RmModalContentsTitle = styled.span`
  position: relative;
  font-size: 24px;
  text-align: center;
  margin: 30px 227px 58px 227px;
  font-weight: 600;
`;
export const RmModalCancelInfo = styled.div`
  position: relative;
  font-size: 12px;
  color: #fff;
  text-align: center;
  input {
    border: 1px solid #326fff;
    margin-right: 8px;
  }
  margin-bottom: 33px;
`;

export const RmModalDogContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b9b9b9;
  font-size: 15px;
  height: 450px;
  width: 550px;
  color: #fff;
  border-radius: 10px;
  // margin: 50px 50px 50px 70px;
  margin: 0 auto;
  img {
    display: block;
    margin: 30px 0;
    width: 210px;
    height: 160px;
    border-radius: 10px;
  }
`;

export const RmDogInfo = styled.div`
  position: relative;
  width: 140px;
  height: 120px;
  span {
    display: block;
    margin-bottom: 30px;
  }
`;
export const RmModalDogHead = styled.div`
  position: relative;
  margin-top: 20px;
`;
export const RmModalDogTitle = styled.span`
  position: relative;
  font-size: 24px;
  text-align: center;
  font-weight: 600;
`;
