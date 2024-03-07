import axios from "axios";

// 관리자 회원가입 메일 인증 API
export const AdminMailAuthApi = async email => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/email/business/mailSend",
      data: {
        email,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data.userRole;
    }
  } catch (error) {
    // 오류가 발생했을 때의 처리
    alert(error.response.data.message);
    throw error; // 에러를 다시 throw하여 호출한 쪽에서도 에러 처리 가능
  }
};

// 관리자 회원가입 메일 인증번호 체크 API
export const AdminMailAuthCodeAPI = async (email, authNum) => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/email/business/mailAuthCheck",
      data: {
        email,
        authNum,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    // 성공한 경우 응답 데이터를 반환

    // console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.log(error.message);
  }
};

// 관리자 회원가입 API
export const AdminSignUpAPI = async formData => {
  try {
    console.log("회원가입 api실행됨");

    const response = await axios({
      method: "post",
      url: "/api/user/business/signup",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data", // Content-Type 설정
      },
    });
    // 성공한 경우 응답 데이터를 반환
    console.log("회원가입 성공 여부: ", response.data.result);
    return response.data.result;
  } catch (error) {
    console.log(error.message);
    return error.response?.status || 500;
  }
};
