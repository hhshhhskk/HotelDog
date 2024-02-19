import jwtAxios from "../../utils/jwtUtil";

// 호텔 전체 가져오기(get)
export const getHotel = async (hotel_pk, setHotelList) => {
  try {
    console.log("getHotel hotel_pk: ", hotel_pk);
    const url = `/api/hotel?hotel_pk=${hotel_pk}`;
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
    const url = `/api/hotel?hotel_pk=${hotel_pk}`;
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
// 날짜 선택 시, 가능 객실 가져오기
export const getSelDateRmId = async (
  hotelPk,
  startDate,
  endDate,
  setData,
  successFn,
  failFn,
  errorFn,
) => {
  // http://112.222.157.156:5222/api/hotel/info?hotelPk=1&startDate=240204&endDate=240205
  try {
    console.log("필수값이 들어왔나", hotelPk, startDate, endDate);

    const url = `/api/hotel/info?hotelPk=${hotelPk}&startDate=${startDate}&endDate=${endDate}`;
    const res = await jwtAxios.get(url);

    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      setData(res.data);
    } else {
      failFn("전송 오류입니다.");
    }
  } catch (error) {
    errorFn("서버에러에요");
  }
};

// 리뷰 get (3 pagination)
export const getReview = async (
  hotel_pk,
  page,
  successFnReview,
  failFnReview,
  errorFnReview,
) => {
  try {
    // page = 쿼리스트링
    // hotelPk = path .  ? 앞까지는 path 즉, 주소임.
    // const url = `/api/review/${hotel_pk}/?page=${page}`;
    const url = `/api/review/${hotel_pk}?page=${page}`;
    const res = await jwtAxios.get(url);

    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      console.log(res.data, "성공");
      successFnReview(res.data);
    } else {
      failFnReview("전송 오류입니다.");
    }
  } catch (error) {
    errorFnReview(error);
  }
};

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

// 예약 등록
export const postReservation = async ({
  sendData,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    //
    const url = `/api/reservation/hotel/res`;
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
    const res = await jwtAxios.delete();
  } catch (error) {
    console.log(error);
  }
};
