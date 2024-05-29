import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
  data: null,
  errorMessage: "",
};

const reducer = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectLoading: (state) => {
      state.status = "loading";
      state.errorMessage = "";
      state.data = null;
    },
    setProjectSuccess: (state, action) => {
      state.status = "success";
      state.errorMessage = "";
      state.data = action.payload;
    },
    setProjectError: (state, action) => {
      state.status = "error";
      state.data = null;
      state.errorMessage = action.payload;
    },
  },
});

export const projectReducer = reducer.reducer;
export const projectActions = reducer.actions;
