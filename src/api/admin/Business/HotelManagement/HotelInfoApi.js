import axios from "axios";
import jwtAxios from "../../../../utils/jwtUtil";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1widXNlclBrXCI6NSxcInJvbGVzXCI6W1wiQlVTSU5FU1NfVVNFUlwiXX0iLCJpYXQiOjE3MDk1NTg5ODEsImV4cCI6MTcwOTU2NjE4MX0.y8NVylLubTJkGi4RzcW_QNZ7lZwrFMYR0LclsNkdw2w.8m_A0WAeg3Cvr3v-rwaKN4GOZxGXjeE8LbbO66l0--E";

// 호텔 정보 API
export const getJwtHotelInfoAPI = async setHotelInfo => {
  try {
    const res = await axios.get(`/api/business`, {
      headers: {
        // 토큰이 있다면 헤더에 추가합니다.
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // 필요에 따라 Content-Type 설정
      },
    });
    console.log("api 불러온데이터: ", res);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};

// 호텔 수정 API
export const postJwtHotelModifyAPI = async setPostData => {
  try {
    const res = await axios.post(`/api/business/hotel`, setPostData, {
      headers: {
        // 토큰이 있다면 헤더에 추가합니다.
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // 필요에 따라 Content-Type 설정
      },
    });
    console.log("api 불러온데이터: ", res);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};
