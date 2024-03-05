import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
// intercepter 전용 axios 생성
// 로그인 제외 및 일반적 api 요청등을 제외
// 인증이 필요한 경우에 활용하는 용도
const jwtAxios = axios.create();

// 요청(request) intercepter
// request 가 문제가 있든, 없든 실행될 내용 작성
const beforeReq = config => {
  // console.log("1. 요청전 전달 .... ", config);
  // console.log("2. 쿠키로 토큰가져오기");
  const accessToken = getCookie("accessToken");
  if (!accessToken) {
    // console.log("쿠키 정보 없네요.");
    // axios 요청을 중단합니다.
    return Promise.reject({ response: { data: { error: "Login 하세요." } } });
  }

  // console.log("3. 쿠키에서 토큰 정보를 뜯는다");
  // const { accessToken } = tokenCookie;
  // console.log("4. 액세스토큰 정보", accessToken);
  // 요청한 Request 에 headers 에 형식이 있어요.
  // jwt 액세스토큰을 붙일때 형식이 있어요.
  // config 는 요청한 axios 이고
  // 이곳에서는  요청한 axios 의 전처리를 합니다.
  // 이때 추가내용을 headers에 추가합니다.
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

// fail Request 요청보내서 실패했을 때
const requestFail = err => {
  console.log("요청후 실패시 .... ", err);
  return Promise.reject(err);
};

// Refresh Token
// 액세스 요청 실패시 무조건 시도해 봄
const refreshJWT = async () => {
  const tokenCookie = getCookie("accessToken");
  // API 백엔드 Refresh 해줄 주소(URI)를 요청
  console.log(tokenCookie.accessToken);
  const res = await axios.get(`/api/user/refresh-token`, {
    headers: {
      Authorization: `Bearer ${tokenCookie.accessToken}`,
      // 다른 헤더들...
    },
  });
  console.log("1. refreshToken 토큰 요청");
  // 새로 만든 AccessToken 과 RefereshToken 리턴
  console.log("2. 백엔드에서 새로 준 값", res.data);
  return res.data;
};

// 응답(Response) 처리 코드
// Response 전처리
const beforeRes = async res => {
  // console.log("Response 전처리 ....", res);
  const data = res.data;
  console.log("1. Response 오기전 서버 전달해준 데이터", data);
  if (res.status === 401) {
    console.log(" 일반적 오류가 아닌 액세스 토큰 에러!! 입니다. ");

    const result = await refreshJWT();
    console.log("요청 이후 되돌아와서 새로운 정보로 쿠키를 업데이트 ");

    setCookie("accessToken", JSON.stringify(result.accessToken));

    console.log("데이터 요청하던 API 재 요청");
    const originalRequest = res.config;
    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

    return await axios(originalRequest);
  }
  return res;
};
// Response Fail 처리
const responseFail = async err => {
  console.log("Response Fail Err", err);
  return Promise.reject(err);
};

// axios 인터셉터 적용
jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
