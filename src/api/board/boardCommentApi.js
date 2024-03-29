import jwtAxios from "../../utils/jwtUtil";

// 게시판 댓글 리스트 API
export const commentAPI = async (boardPk, page) => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/board/comment?boardPk=${boardPk}&page=${page}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.log(error);
    return error.response.status;
  }
};

// 게시판 댓글 등록 API
export const commentCreateAPI = async data => {
  try {
    const res = await jwtAxios({
      method: "post",
      url: "/api/board/comment",
      data,
      headers: {
        "Content-Type": "application/json", // Content-Type 설정
      },
    });
    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.error(error);
    return error.response?.status || 500; // 에러 응답 상태 코드 반환
  }
};

// 게시판 댓글 수정 API
export const commentUpdateAPI = async data => {
  try {
    const res = await jwtAxios({
      method: "patch",
      url: "/api/board/comment",
      data,
      headers: {
        "Content-Type": "application/json", // Content-Type 설정
      },
    });
    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.error(error);
    return error.response?.status || 500; // 에러 응답 상태 코드 반환
  }
};

// 게시판 댓글 삭제 API
export const commentDeleteAPI = async commentPkList => {
  try {
    console.log(commentPkList);
    const res = await jwtAxios({
      method: "delete",
      url: `/api/board/comment`,
      headers: {
        "Content-Type": "application/json", // Content-Type 설정
      },
      data: {
        commentPkList,
      },
    });
    return res.data.result;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.error(error);
    return error.response?.status || 500; // 에러 응답 상태 코드 반환
  }
};
