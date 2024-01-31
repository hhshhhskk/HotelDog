import axios from "axios";

export const gethotelmain = async setProfileData => {
  try {
    const res = await axios.get(`/api/hotel/{page}`);
    setProfileData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
    const fakeData = {};
    setProfileData(fakeData);
  }
};

// 호텔 좋아요 마크 불러오기
export const getmark = async setMarkData => {
  try {
    const res = await axios.get(
      `/api/hotel/hotel/{page}/mark?userPk=0&hotelPk=0`,
    );
    setMarkData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
    const fakeData = {
      result: 0,
    };
    setMarkData(fakeData);
  }
};
