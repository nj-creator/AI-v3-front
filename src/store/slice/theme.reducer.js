import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default themeReducer.reducer;
export const { setTheme } = themeReducer.actions;
