import jwtAxios from "../../../utils/jwtUtil";

export const getRoomToday = async (
  page,
  successGetRoomToday,
  failGetRoomToday,
  errorGetRoomToday,
) => {
  try {
    const url = `/api/business/reservation/today?page=${page}`;
    // http://112.222.157.156:5222/api/business/reservation/today?page=1
    const res = await jwtAxios.get(url);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      successGetRoomToday(res.data);
    } else {
      failGetRoomToday("전송 오류입니다.");
    }
  } catch (error) {
    errorGetRoomToday("서버에러에요");
  }
};

export const getRoomList = async (
  page,
  successGetRoomList,
  failGetRoomList,
  errorGetRoomList,
) => {
  try {
    const url = `/api/business/reservation?page=${page}`;
    // http://112.222.157.156:5222/api/business/reservation?page=1
    const res = await jwtAxios.get(url);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      successGetRoomList(res.data);
    } else {
      failGetRoomList("전송 오류입니다.");
    }
  } catch (error) {
    errorGetRoomList("서버에러에요");
  }
};
