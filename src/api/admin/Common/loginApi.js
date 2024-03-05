import axios from "axios";

export const AdminLoginApi = async values => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/business/signin",
      data: {
        userEmail: values?.username,
        upw: values?.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    sessionStorage.setItem("userPk", response.data.userPk);
    console.log(response);
  } catch (error) {
    // 오류가 발생했을 때의 처리
    alert(error.response.data.message);
    throw error; // 에러를 다시 throw하여 호출한 쪽에서도 에러 처리 가능
  }
};
