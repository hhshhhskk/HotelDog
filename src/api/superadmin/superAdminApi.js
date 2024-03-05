import jwtAxios from "../../utils/jwtUtil";

// 사업자유저 불러오기
export const businessUserGetwApi = async page => {
  // reviewData 파라미터 제거
  try {
    const url = `/api/manager/businessUserList?page=${page}`;
    const res = await jwtAxios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    // 에러 발생 시 더미 데이터 반환
    return;
  }
};
