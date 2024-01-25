import axios from "axios";

const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
// 메일인증 API
export const MailAuthAPI = async mail => {
  try {
    await axios({
      method: "post",
      url: "/api/mailsend",
      data: mail,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        // 성공적으로 응답을 받았을 때의 처리
        console.log("Response:", response.data);
      })
      .catch(error => {
        // 오류가 발생했을 때의 처리
        console.error("Error:", error.response.data);
      });
  } catch (error) {
    console.log(error.message);
  }
};

// 위도 경도 가져오는 카카오API
export const addressApi = async (dataAddress, setAddress) => {
  try {
    const query = dataAddress;
    await axios({
      method: "get",
      url: "https://dapi.kakao.com/v2/local/search/address.json",
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
      params: {
        query: query,
      },
    })
      .then(response => {
        // 성공적으로 응답을 받았을 때의 처리
        // console.log("Response:", response.data.documents);
        setAddress(response.data.documents[0]);
      })
      .catch(error => {
        // 오류가 발생했을 때의 처리
        console.error("Error:", error.response.data);
      });
  } catch (error) {
    console.log(error.message);
  }
};

// 회원가입 POST 요청
export const signUpAPi = async postData => {
  try {
    await axios({
      method: "post",
      url: "/api/user/signup",
      data: postData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        // 성공적으로 응답을 받았을 때의 처리
        console.log("Response:", response.data);
      })
      .catch(error => {
        // 오류가 발생했을 때의 처리
        console.error("Error:", error.response.data);
      });
  } catch (error) {
    console.log(error.message);
  }
};
