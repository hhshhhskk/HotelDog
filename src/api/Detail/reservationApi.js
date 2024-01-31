import jwtAxios from "../../utils/jwtUtil";
const API_SERVER_URL = "http://112.222.157.156:5222";
const prefix = `${API_SERVER_URL}/api/reservation`;

// 예약 한개만 가져오기(getOne)
export const getOneReservation = async () => {
  try {
    const url = `${prefix}/api/reservation?`;
    // http://112.222.157.156:5222/api/reservation?userPk=0
    const res = await jwtAxios.get(url);
    console.log(res);

    // const url = `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`;
    // const res = await axios.get(url);

    // const resStatus = res.status.toString();
    // // 정상이라면
    // if (resStatus.charAt(0) === "2") {
    //   setDiaryList([...res.data]);
    // }
  } catch (error) {
    console.log(error);
  }
};
// 예약 전체 가져오기(get)
export const getReservation = async () => {
  try {
    const url = `${prefix}/api/reservation?`;
    // http://112.222.157.156:5222/api/reservation?userPk=0
    const res = await jwtAxios.get(API_SERVER_URL);

    // const url = `${SERVER_URL}/api/diary?loginedUserId=${loginedUserId}&page=${page}`;
    // const res = await axios.get(url);

    // const resStatus = res.status.toString();
    // // 정상이라면
    // if (resStatus.charAt(0) === "2") {
    //   setDiaryList([...res.data]);
    // }
  } catch (error) {
    console.log(error);
  }
};
// 예약 등록(post)
export const PostReservation = async () => {
  try {
    const res = await jwtAxios.post(API_SERVER_URL);
  } catch (error) {
    console.log(error);
  }
};
// 예약 삭제(delete)
export const DeleteReservation = async () => {
  try {
    const res = await jwtAxios.delete(API_SERVER_URL);
  } catch (error) {
    console.log(error);
  }
};
