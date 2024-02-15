import axios from "axios";
import jwtAxios from "../../utils/jwtUtil";
import useCustomLogin from "../../hooks/useCustomLogin";

// POST 시에 빈 데이터 값은 거르는 작업
const removeEmptyValues = obj => {
  for (var prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) {
      if (
        obj[prop] === null ||
        obj[prop] === undefined ||
        obj[prop] === "" ||
        // obj[prop] === "지역을 선택해주세요" ||
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
    // console.log("", setPostData);
    const parseData = removeEmptyValues(setPostData);
    // const header = { headers: { "Content-Type": "application/json" } };
    // console.log("최지은 : 페이지 정보 호출 ", setPostData);
    // console.log("정리된 데이터 : ", parseData);
    const res = await jwtAxios.post(`/api/hotel?page=${page}`, parseData);
    // console.log(res.data);
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
    console.log("팔스데이터", parseData);
    // const header = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post(`/api/hotel?page=${page}`, parseData);
    console.log("성공", res.data.hotel_list);
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

// 호텔 광고 리스트 API(GET)
// export const hotelAdAPI = async (address, search, main_filter, from_date, to_date, dog_info[dogSize], dog_info[dogCount], hotel_option_pk, filter_type ) => {
//   try {
//     const res = await jwtAxios({
//       method: "get",
//       url: `/api/hotel/ad?address=${address}&search=${search}&main_filter=${main_filter}&from_date=${from_date}&to_date=${to_date}&dog_info[dogSize]=${dog_info[dogSize]}&dog_info[dogCount]=${dog_info[dogCount]}&hotel_option_pk=${hotel_option_pk}&filter_type=${filter_type}
//       `,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
