import jwtAxios from "../../../../utils/jwtUtil";

// 호텔 정보 API
export const getJwtHotelInfoAPI = async setHotelInfo => {
  try {
    const res = await jwtAxios.get(`/api/business`);
    console.log("api 불러온데이터: ", res);
    setHotelInfo(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};

// 호텔 수정 API
export const putJwtHotelModifyAPI = async setPostData => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.put(`/api/business/hotel`, setPostData, header);
    console.log("api 불러온 호텔수정 데이터: ", res);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};

// 객실 수정 API
export const putJwtRoomModifyAPI = async setPostData => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.put(
      `/api/business/hotelRoom`,
      setPostData,
      header,
    );
    console.log("api 불러온 객실수정 데이터: ", res);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
  }
};

// 호텔 광고 신청 API
export const hotelAdvertApi = async (
  cardNum,
  cardValidThru,
  cardUserName,
  userBirth,
) => {
  console.log(cardNum, cardValidThru, cardUserName, userBirth);
  try {
    const response = await jwtAxios({
      method: "post",
      url: `/api/business/advertise`,
      data: {
        cardNum,
        cardValidThru,
        cardUserName,
        userBirth,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    if (response.status === 200) {
      return response.data.result;
    }
  } catch (error) {
    alert(error.response.data.message);
    return error.response?.status || 500;
  }
};

// 호텔 광고 해지 신청 API
export const hotelAdvertCancelApi = async () => {
  try {
    const response = await jwtAxios({
      method: "get",
      url: `/api/business/advertise/cancel`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    if (response.status === 200) {
      return response.data.result;
    }
  } catch (error) {
    alert(error.response.data.message);
    return error.response?.status || 500;
  }
};
