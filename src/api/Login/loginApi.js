import axios from "axios";

// 로그인 API
export const loginAPI = async (id, password, navigate) => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/signin",
      data: {
        userEmail: id,
        upw: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 성공적으로 응답을 받았을 때의 처리
    console.log("Response:", response);
    sessionStorage.setItem("accessToken", response.data.accessToken);
    navigate(`/`);
    // 로그인 성공 시 서버에서 받아온 데이터 반환
    return response.data;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    alert(error.response.data.message);
    throw error; // 에러를 다시 throw하여 호출한 쪽에서도 에러 처리 가능
  }
};
