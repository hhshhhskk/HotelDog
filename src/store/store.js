import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../redux/loginSlice";
import searchSlice from "../redux/searchSlice";
import adminLoginSlice from "../redux/admin/adminLoginSlice";
// store 가 공용 데이터 보관장소, state 입니다.
export default configureStore({
  reducer: {
    loginSlice: loginSlice,
    searchSlice: searchSlice,
    adminLoginSlice: adminLoginSlice,
  },
});
