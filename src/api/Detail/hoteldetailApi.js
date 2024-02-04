import jwtAxios from "../../utils/jwtUtil";
const API_SERVER_URL = "";
const prefix = `${API_SERVER_URL}`;

// 호텔 전체 가져오기(get)
export const getHotel = async (hotel_pk, setHotelList) => {
  try {
    console.log("getHotel hotel_pk: ", hotel_pk);
    const url = `${prefix}/api/hotel?hotel_pk=${hotel_pk}`;
    // http://112.222.157.156:5222/api/reservation?userPk=0
    const res = await jwtAxios.get(url);
    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      setHotelList([...res.data]);
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// 호텔 한개만 가져오기
export const getHotelId = async (hotel_pk, successGetHotelId) => {
  try {
    console.log("getHotelId hotel_pk: ", hotel_pk);
    const url = `${prefix}/api/hotel?hotel_pk=${hotel_pk}`;
    // http://112.222.157.156:5222/api/reservation?userPk=0
    const res = await jwtAxios.get(url);
    const resStatus = res.status.toString();
    // 정상이라면
    if (resStatus.charAt(0) === "2") {
      successGetHotelId(res.data);
    }
    console.log(res);
  } catch (error) {
    console.log(error);
    alert(` ${error} 가 발생했습니다. `);
    window.location.href = "/errorpage";
  }
};

// 예약 등록(post)
// export const postReservation = async userPk => {
//   try {
//     const url = `${prefix}/api/reservation?userPk=${userPk}`;
//     // http://112.222.157.156:5222/api/reservation?userPk=0
//     const res = await jwtAxios.post(url);
//     const resStatus = res.status.toString();
//   } catch (error) {
//     console.log(error);
//   }
// };

// 날짜 선택 시, 가능한 객실 리스트 뜨도록.f
export const getSelectRoomId = async (
  hotelPk,
  startDate,
  endDate,
  successFn,
  failFn,
  errorFn,
) => {
  // http://112.222.157.156:5222/api/hotel/info?hotelPk=1&startDate=240204&endDate=240205
  try {
    const url = `${prefix}/api/hotel/info?hotelPk=${hotelPk}&startDate=${startDate}&endDate=${endDate}`;
    const res = await jwtAxios.get(url);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("전송 오류입니다.");
    }
  } catch (error) {
    errorFn("서버에러에요");
  }
};

// 예약 등록하기 post
export const postReservation = async ({
  sendData,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    //
    const url = `${prefix}/api/reservation/hotel/res`;
    const res = await jwtAxios.post(url, sendData);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("전송 오류입니다.");
    }
  } catch (error) {
    errorFn("서버에러에요");
  }
};

// 예약 삭제(delete)
export const deleteReservation = async () => {
  try {
    const res = await jwtAxios.delete(API_SERVER_URL);
  } catch (error) {
    console.log(error);
  }
};
