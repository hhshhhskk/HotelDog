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
    const initHotellist = {
      hotel_advertise_list: [
        {
          star: 3,
          price: 73000,
          hotel_pk: 153,
          hotel_nm: "멍멍호텔",
          address_name: "서울시 강남구",
          hotel_pic: "hotel_a.jpg",
          discount_per: 10,
          book_mark: 0,
          review_count: 50,
        },
        {
          star: 4,
          price: 80000,
          hotel_pk: 154,
          hotel_nm: "왈왈호텔",
          address_name: "서울시 강동구",
          hotel_pic: "hotel_b.jpg",
          discount_per: 20,
          book_mark: 1,
          review_count: 60,
        },
        {
          star: 5,
          price: 90000,
          hotel_pk: 155,
          hotel_nm: "멍뭉쓰호텔",
          address_name: "서울시 서초구",
          hotel_pic: "hotel_c.jpg",
          discount_per: 15,
          book_mark: 0,
          review_count: 70,
        },
      ],
      hotel_list: [
        {
          star: 2,
          price: 65000,
          hotel_pk: 156,
          hotel_nm: "킁킁리조트",
          address_name: "서울시 송파구",
          hotel_pic: "hotel_d.jpg",
          discount_per: 5,
          book_mark: 1,
          review_count: 40,
        },
        {
          star: 3,
          price: 72000,
          hotel_pk: 157,
          hotel_nm: "멍멍호텔",
          address_name: "서울시 강남구",
          hotel_pic: "hotel_e.jpg",
          discount_per: 8,
          book_mark: 0,
          review_count: 55,
        },
        {
          star: 4,
          price: 78000,
          hotel_pk: 158,
          hotel_nm: "왈왈호텔",
          address_name: "서울시 강서구",
          hotel_pic: "hotel_f.jpg",
          discount_per: 12,
          book_mark: 1,
          review_count: 65,
        },
        {
          star: 5,
          price: 95000,
          hotel_pk: 159,
          hotel_nm: "멍뭉쓰호텔",
          address_name: "서울시 마포구",
          hotel_pic: "hotel_g.jpg",
          discount_per: 18,
          book_mark: 0,
          review_count: 75,
        },
        {
          star: 5,
          price: 95000,
          hotel_pk: 159,
          hotel_nm: "멍뭉쓰호텔",
          address_name: "서울시 마포구",
          hotel_pic: "hotel_g.jpg",
          discount_per: 18,
          book_mark: 0,
          review_count: 75,
        },
        {
          star: 3,
          price: 80000,
          hotel_pk: 160,
          hotel_nm: "왈왈리조트",
          address_name: "서울시 강북구",
          hotel_pic: "hotel_h.jpg",
          discount_per: 15,
          book_mark: 1,
          review_count: 55,
        },
        {
          star: 4,
          price: 85000,
          hotel_pk: 161,
          hotel_nm: "냥냥호텔",
          address_name: "서울시 동작구",
          hotel_pic: "hotel_i.jpg",
          discount_per: 10,
          book_mark: 0,
          review_count: 65,
        },
        {
          star: 4,
          price: 78000,
          hotel_pk: 162,
          hotel_nm: "쭈쭈리조트",
          address_name: "서울시 용산구",
          hotel_pic: "hotel_j.jpg",
          discount_per: 20,
          book_mark: 1,
          review_count: 70,
        },
        {
          star: 3,
          price: 80000,
          hotel_pk: 165,
          hotel_nm: "행복호텔",
          address_name: "서울시 관악구",
          hotel_pic: "hotel_m.jpg",
          discount_per: 12,
          book_mark: 0,
          review_count: 65,
        },
        {
          star: 4,
          price: 85000,
          hotel_pk: 166,
          hotel_nm: "늘푸른리조트",
          address_name: "서울시 송파구",
          hotel_pic: "hotel_n.jpg",
          discount_per: 20,
          book_mark: 1,
          review_count: 70,
        },
        {
          star: 5,
          price: 110000,
          hotel_pk: 167,
          hotel_nm: "공원호텔",
          address_name: "서울시 서초구",
          hotel_pic: "hotel_o.jpg",
          discount_per: 25,
          book_mark: 0,
          review_count: 85,
        },
        {
          star: 4,
          price: 82000,
          hotel_pk: 168,
          hotel_nm: "하늘리조트",
          address_name: "서울시 중랑구",
          hotel_pic: "hotel_p.jpg",
          discount_per: 18,
          book_mark: 1,
          review_count: 75,
        },
      ],
    };

    return initHotellist;
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
    const initHotellist = {
      hotel_advertise_list: [
        {
          star: 3,
          price: 73000,
          hotel_pk: 153,
          hotel_nm: "멍멍호텔",
          address_name: "서울시 강남구",
          hotel_pic: "hotel_a.jpg",
          discount_per: 10,
          book_mark: 0,
          review_count: 50,
        },
        {
          star: 4,
          price: 80000,
          hotel_pk: 154,
          hotel_nm: "왈왈호텔",
          address_name: "서울시 강동구",
          hotel_pic: "hotel_b.jpg",
          discount_per: 20,
          book_mark: 1,
          review_count: 60,
        },
        {
          star: 5,
          price: 90000,
          hotel_pk: 155,
          hotel_nm: "멍뭉쓰호텔",
          address_name: "서울시 서초구",
          hotel_pic: "hotel_c.jpg",
          discount_per: 15,
          book_mark: 0,
          review_count: 70,
        },
      ],
      hotel_list: [
        {
          star: 2,
          price: 65000,
          hotel_pk: 156,
          hotel_nm: "킁킁리조트",
          address_name: "서울시 송파구",
          hotel_pic: "hotel_d.jpg",
          discount_per: 5,
          book_mark: 1,
          review_count: 40,
        },
        {
          star: 3,
          price: 72000,
          hotel_pk: 157,
          hotel_nm: "멍멍호텔",
          address_name: "서울시 강남구",
          hotel_pic: "hotel_e.jpg",
          discount_per: 8,
          book_mark: 0,
          review_count: 55,
        },
        {
          star: 4,
          price: 78000,
          hotel_pk: 158,
          hotel_nm: "왈왈호텔",
          address_name: "서울시 강서구",
          hotel_pic: "hotel_f.jpg",
          discount_per: 12,
          book_mark: 1,
          review_count: 65,
        },
        {
          star: 5,
          price: 95000,
          hotel_pk: 159,
          hotel_nm: "멍뭉쓰호텔",
          address_name: "서울시 마포구",
          hotel_pic: "hotel_g.jpg",
          discount_per: 18,
          book_mark: 0,
          review_count: 75,
        },
        {
          star: 5,
          price: 95000,
          hotel_pk: 159,
          hotel_nm: "멍뭉쓰호텔",
          address_name: "서울시 마포구",
          hotel_pic: "hotel_g.jpg",
          discount_per: 18,
          book_mark: 0,
          review_count: 75,
        },
        {
          star: 3,
          price: 80000,
          hotel_pk: 160,
          hotel_nm: "왈왈리조트",
          address_name: "서울시 강북구",
          hotel_pic: "hotel_h.jpg",
          discount_per: 15,
          book_mark: 1,
          review_count: 55,
        },
        {
          star: 4,
          price: 85000,
          hotel_pk: 161,
          hotel_nm: "냥냥호텔",
          address_name: "서울시 동작구",
          hotel_pic: "hotel_i.jpg",
          discount_per: 10,
          book_mark: 0,
          review_count: 65,
        },
        {
          star: 4,
          price: 78000,
          hotel_pk: 162,
          hotel_nm: "쭈쭈리조트",
          address_name: "서울시 용산구",
          hotel_pic: "hotel_j.jpg",
          discount_per: 20,
          book_mark: 1,
          review_count: 70,
        },
        {
          star: 3,
          price: 80000,
          hotel_pk: 165,
          hotel_nm: "행복호텔",
          address_name: "서울시 관악구",
          hotel_pic: "hotel_m.jpg",
          discount_per: 12,
          book_mark: 0,
          review_count: 65,
        },
        {
          star: 4,
          price: 85000,
          hotel_pk: 166,
          hotel_nm: "늘푸른리조트",
          address_name: "서울시 송파구",
          hotel_pic: "hotel_n.jpg",
          discount_per: 20,
          book_mark: 1,
          review_count: 70,
        },
        {
          star: 5,
          price: 110000,
          hotel_pk: 167,
          hotel_nm: "공원호텔",
          address_name: "서울시 서초구",
          hotel_pic: "hotel_o.jpg",
          discount_per: 25,
          book_mark: 0,
          review_count: 85,
        },
        {
          star: 4,
          price: 82000,
          hotel_pk: 168,
          hotel_nm: "하늘리조트",
          address_name: "서울시 중랑구",
          hotel_pic: "hotel_p.jpg",
          discount_per: 18,
          book_mark: 1,
          review_count: 75,
        },
      ],
    };

    return initHotellist;
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
