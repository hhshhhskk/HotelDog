import axios from "axios";

// 로그인 API
export const loginAPI = async ({ loginParam, successFn, failFn, errorFn }) => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/signin",
      data: {
        userEmail: loginParam.id,
        upw: loginParam.pw,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = response.status.toString();

    if (status.charAt(0) === "2") {
      // 화면 처리용
      successFn(response.data);

      // RTK 업데이트 하기위해서는 리턴을 해서 값을 전달해야 해
      return response.data;
    } else {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    // 오류가 발생했을 때의 처리
    alert(error.response.data.message);
    throw error; // 에러를 다시 throw하여 호출한 쪽에서도 에러 처리 가능
  }
};
