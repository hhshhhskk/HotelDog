import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postHotelListAPI, postJwtHotelListAPI } from "../api/Main/HotelApi";

const initState = {
  hotel_advertise_list: [],
  hotel_list: [],
};
export const postHotelListAsync = createAsyncThunk(
  "postHotelListAsync",
  async ({ page, setPostData }) => {
    try {
      const res = await postHotelListAPI({ page, setPostData });
      // 결과값을 리턴을 해야 action 에 값이 담기지...
      return res;
    } catch (error) {
      return error;
    }
  },
);

export const postJwtHotelListAsync = createAsyncThunk(
  "postJwtHotelListAsync",
  async ({ page, setPostData }) => {
    try {
      const res = await postJwtHotelListAPI({ page, setPostData });
      // 결과값을 리턴을 해야 action 에 값이 담기지...
      return res;
    } catch (error) {
      return error;
    }
  },
);

const searchSlice = createSlice({
  // name을 통해 search를 고친다
  name: "searchSlice",
  initialState: initState,

  reducers: {
    search: () => {
      console.log("search...");
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postHotelListAsync.fulfilled, (state, action) => {
        console.log("리덕스 : postHotelListAsync : ", action);
        const payload = action.payload;
        return payload;
      })
      .addCase(postJwtHotelListAsync.fulfilled, (state, action) => {
        console.log("리덕스 JWT : postJwtHotelListAsync : ", action);
        const payload = action.payload;
        return payload;
      });
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
