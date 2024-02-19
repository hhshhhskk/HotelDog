import { createSlice } from "@reduxjs/toolkit";

const initState = {
  search: "",
};

const searchSlice = createSlice({
  // name을 통해 search를 고친다
  name: "searchSlice",
  initialState: initState,

  reducers: {
    search: () => {
      console.log("search...");
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
