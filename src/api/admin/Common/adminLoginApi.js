import axios from "axios";

// 관리자 로그인 API
export const AdminLoginApi = async loginParam => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/business/signin",
      data: loginParam.loginParam,
      headers: {
        "Content-Type": "application/json",
      },
    });
    sessionStorage.setItem("businessPk", response.data.businessPk);
    sessionStorage.setItem("userRole", response.data.userRole);
    if (response.status === 200) {
      return response.data.userRole;
    }
  } catch (error) {
    // 오류가 발생했을 때의 처리
    alert(error.response.data.message);
    throw error; // 에러를 다시 throw하여 호출한 쪽에서도 에러 처리 가능
  }
};
