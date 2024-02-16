import jwtAxios from "../../utils/jwtUtil";

// 회원 정보 가져오는 함수
// {upw: "test123"}
export const fetchMemberInfo = async (
  password,
  { successFn, failFn, erroFn },
) => {
  try {
    const res = await jwtAxios({
      method: "post",
      url: `/api/user/info`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        upw: password,
      },
    });

    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn(res.data);
    }
  } catch (error) {
    // 오류가 발생했을 때의 처리
    erroFn(error);
    // alert(error.response.data.message);
  }
};

// 닉네임 수정
// http://112.222.157.156:5222/api/user/nickname-check?nickname=aaa
export const getNickNameUpdate = async nickname => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/user/nickname-check?nickname=${nickname}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.log(error);
    // alert(error.response.data.message);
  }
};

// 회원정보 수정 API
export const signupUpdateApi = async data => {
  try {
    console.log(data);
    const res = await jwtAxios({
      method: "put",
      url: `/api/user/info`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.result;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.log(error);
    // alert(error.response.data.message);
  }
};

// 마이페이지 예약목록 출력
export const mypageBookingListApi = async (
  page,
  { successFn, failFn, erroFn },
) => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/reservation?page=${page}`,
      headers: {
        "Content-Type": "application/json", // Content-Type 설정
      },
    });

    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn(res.data);
    }
  } catch (error) {
    // 오류가 발생했을 때의 처리
    // console.error(error);
    // return error.response?.status || 500; // 에러 응답 상태 코드 반환
    erroFn(error);
  }
};

// 마이페이지 예약 삭제
export const mypageBookingListDeleteApi = async resPk => {
  try {
    const res = await jwtAxios({
      method: "delete",
      url: `/api/reservation/hotel/res?resPk=${resPk}`,
      headers: {
        "Content-Type": "application/json", // Content-Type 설정
      },
    });

    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 마이페이지 반려견 정보 출력
export const postDogInfoApi = async (
  { sendData },
  { successFn, failFn, errorFn },
) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.post("/api/dog", sendData, header);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("업로드 실패입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};

// 리뷰  등록 API
export const postReviewApi = async formData => {
  try {
    console.log(formData);
    const res = await jwtAxios({
      method: "post",
      url: "/api/review",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data", // Content-Type 설정
      },
    });
    return res.data.result;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.error(error);
    return error.response?.status || 500; // 에러 응답 상태 코드 반환
  }
};

// 리뷰 예약 불러오기
export const getReviewApi = async () => {
  // reviewData 파라미터 제거
  try {
    const url = `/api/review`;
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
  }
};

// 마이페이지 예약 삭제
export const reviewDeleteApi = async () => {
  try {
    const url = `/api/review`;
    const res = await jwtAxios({
      method: "delete",
      url: url,
      headers: {
        "Content-Type": "application/json", // Content-Type 설정
      },
    });

    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
