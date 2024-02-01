import jwtAxios from "../../utils/jwtUtil";

// 호텔 전체 리스트 API(POST)
export const hotelListAPI = async ({ page, setHotelListData }) => {
  try {
    const res = await jwtAxios({
      method: "post",
      url: `/api/hotel?page=${page}
      `,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 더미 데이터를 사용합니다.");
    const fakeData = {
      hotel_advertise_list: [
        {
          star: 5,
          price: "50000",
          hotel_pk: 1,
          hotel_nm: "멍멍낸내",
          address_name: "대구시 중구",
          hotel_pic: `${process.env.PUBLIC_URL}/images/hotel1.jpg`,
          discount_per: 10,
          book_mark: 0,
          review_count: 22,
        },
      ],
      hotel_list: [
        {
          star: 4,
          price: "35000",
          hotel_pk: 2,
          hotel_nm: "곰젤리",
          address_name: "대구시 북구",
          hotel_pic: `${process.env.PUBLIC_URL}/images/hotel1.jpg`,
          discount_per: 0,
          book_mark: 1,
          review_count: 109,
        },
      ],
    };
    setHotelListData(fakeData);
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
