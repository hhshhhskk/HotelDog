import { createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../../utils/cookieUtil";
import { AdminLoginApi } from "../../api/admin/Common/adminLoginApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 비동기 액션 생성자 함수 정의
export const AdminLoginPostAsync = createAsyncThunk(
  "adminLogin/AdminLoginPostAsync",
  async ({ loginParam }) => {
    const res = await AdminLoginApi({ loginParam });
    return res;
  },
);

// 초기 상태 정의
const initialState = {
  accessToken: loadAccessTokenCookie() || "", // 초기 상태에서는 빈 문자열로 설정
};

// 쿠키에서 액세스 토큰을 읽어오는 함수
function loadAccessTokenCookie() {
  return getCookie("accessToken") || ""; // 쿠키가 없는 경우에 대비하여 기본값 설정
}

// 리듀서 생성
const adminLoginSlice = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken } = action.payload;
      console.log("페이로드 accessToken: ", accessToken);
      state.accessToken = accessToken;
      setCookie("accessToken", accessToken); // 쿠키 설정
    },
    logout: state => {
      removeCookie("accessToken"); // 쿠키 제거
      state.accessToken = ""; // 액세스 토큰 초기화
    },
  },
  extraReducers: builder => {
    builder
      .addCase(AdminLoginPostAsync.fulfilled, (state, action) => {
        const { accessToken } = action.payload;
        state.accessToken = accessToken;
        setCookie("accessToken", accessToken); // 쿠키 설정
      })
      .addCase(AdminLoginPostAsync.rejected, (state, action) => {
        // 에러 처리
      });
  },
});

export const { login, logout } = adminLoginSlice.actions;
export default adminLoginSlice.reducer;
