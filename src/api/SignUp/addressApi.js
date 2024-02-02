import axios from "axios";

const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

// 메일인증 API
export const mailAuthAPI = async mail => {
  try {
    await axios({
      method: "post",
      url: "/api/email/mailSend",
      data: {
        email: mail,
      },
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

// 메일코드 체크 API
export const mailAuthCodeAPI = async (mail, mailCode) => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/email/mailAuthCheck",
      data: {
        email: mail,
        authNum: mailCode,
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

// 닉네임 체크
export const nickNameCheckAPI = async nickname => {
  try {
    const response = await axios({
      method: "get",
      url: `/api/user/nickname-check?nickname=${nickname}`,
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
        console.log("Response:", response.data.documents[0].road_address);
        setAddress(response.data.documents[0].road_address);
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
export const signUpAPi = async (postData, navigate) => {
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
        // console.log("Response:", response.data);
        alert("회원가입이 완료 되었습니다.");
        navigate(`/login`);
      })
      .catch(error => {
        // 오류가 발생했을 때의 처리
        console.error("Error:", error.response.data);
      });
  } catch (error) {
    console.log(error.message);
  }
};
