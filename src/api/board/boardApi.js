import jwtAxios from "../../utils/jwtUtil";

// 게시판 전체리스트 API
export const boardListAPI = async (boardCategoryPk, page) => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/board?boardCategoryPk=${boardCategoryPk}&page=${page}
      `,
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

// 내가 쓴 게시판 리스트 API
export const boardMyListAPI = async page => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/board/my-board?page=${page}`,
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

// 내가 쓴 댓글 게시판 리스트 API
export const boardMyCommentListAPI = async page => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/board/my-comment?page=${page}`,
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

// 게시글 상세페이지 API (댓글 포함)
export const boardDtailAPI = async (boardPk, page) => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/board/view?boardPk=${boardPk}&page=${page}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.log(error);
    // alert(error.response.data.message);
  }
};
