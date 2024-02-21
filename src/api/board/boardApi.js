import axios from "axios";
import jwtAxios from "../../utils/jwtUtil";

// 게시판 전체리스트 API
export const boardListAPI = async (boardCategoryPk, page) => {
  try {
    const res = await axios({
      method: "get",
      url: `/api/board?boardCategoryPk=${boardCategoryPk}&page=${page}
      `,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.log(error);
    // alert(error.response.data.message);
  }
};

// 게시판 전체리스트 검색 API
export const boardSearchListAPI = async (page, search, searchType) => {
  try {
    const res = await axios({
      method: "get",
      url: `/api/board?boardCategoryPk=0&page=${page}&search=${search}&searchType=${searchType}
      `,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
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
    // console.log(res);
    return res;
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

    return res;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.log(error);
    // alert(error.response.data.message);
  }
};

// 게시글 상세페이지 API
export const boardDetailAPI = async boardPk => {
  try {
    const res = await jwtAxios({
      method: "get",
      url: `/api/board/view?boardPk=${boardPk}`,
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

// 게시글 등록 API
export const boardCreateAPI = async formData => {
  try {
    const res = await jwtAxios({
      method: "post",
      url: "/api/board",
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

// 게시글 수정 API
export const boardUpdateAPI = async formData => {
  try {
    const res = await jwtAxios({
      method: "put",
      url: "/api/board",
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

// 게시글 삭제 API
export const boardDeleteAPI = async boardPkList => {
  try {
    const res = await jwtAxios({
      method: "delete",
      url: `/api/board`,
      data: {
        boardPkList,
      },
      headers: {
        "Content-Type": "application/json", // Content-Type 설정
      },
    });
    return res.data.result;
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.error(error);
    return error.response?.status || 500; // 에러 응답 상태 코드 반환
  }
};
