import axios from "axios";

// 프로필 정보 불러오기
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
