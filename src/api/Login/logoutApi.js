import jwtAxios from "../../utils/jwtUtil";

// 로그아웃 API
export const logoutAPI = async () => {
  try {
    await jwtAxios({
      method: "post",
      url: "/api/user/signout",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // 오류가 발생했을 때의 처리
    alert("로그아웃 되었습니다.");
  }
};
