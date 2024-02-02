import jwtAxios from "../../utils/jwtUtil";

// 빈 데이터 값은 거르는 작업
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

// 호텔 전체 리스트 API
export const postHotelListAPI = async ({ page, setHotelListData }) => {
  try {
    // const res = await jwtAxios({
    //   method: "post",
    //   url: `/api/hotel?page=${page}
    //   `,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const parseData = removeEmptyValues(setHotelListData);

    const header = { headers: { "Content-Type": "application/json" } };
    // console.log("최지은 : 페이지 정보 호출 ", setHotelListData);
    // console.log("정리된 데이터 : ", parseData);
    const res = await jwtAxios.post(`/api/hotel?page=${page}`, parseData);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};

// 호텔 좋아요 마크 API(GET)
export const hotelMarkAPI = async hotelPk => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/hotel?mark?hotelPk=${hotelPk}
      `,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
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
