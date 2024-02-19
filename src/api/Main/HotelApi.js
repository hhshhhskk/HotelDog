import axios from "axios";
import jwtAxios from "../../utils/jwtUtil";

// POST 시 빈 데이터 값을 거르는 작업
const removeEmptyValues = obj => {
  for (var prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) {
      if (
        obj[prop] === null ||
        obj[prop] === undefined ||
        obj[prop] === "" ||
        (typeof obj[prop] === "object" && Object.keys(obj[prop]).length === 0)
      ) {
        delete obj[prop];
      }
    }
  }
  return obj;
};

// JWTAxios : 호텔 전체 리스트 API
export const postJwtHotelListAPI = async ({ page, setPostData }) => {
  try {
    const parseData = removeEmptyValues(setPostData);
    const res = await jwtAxios.post(`/api/hotel?page=${page}`, parseData);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};

// Axios : 호텔 전체 리스트 API
export const postHotelListAPI = async ({ page, setPostData }) => {
  try {
    console.log(setPostData);
    const parseData = await removeEmptyValues(setPostData);
    const res = await axios.post(`/api/hotel?page=${page}`, parseData);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};

// 호텔 좋아요 북마크 API(GET)
export const getHotelBookMarkAPI = async (hotelPk, isLogin, navigate) => {
  if (isLogin) {
    try {
      const res = await jwtAxios.get(`/api/hotel/mark?hotelPk=${hotelPk}`);
      return res.data.result;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    alert("로그인이 필요한 서비스입니다.");
    navigate(`/login`);
  }
};
