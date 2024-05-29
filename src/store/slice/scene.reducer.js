import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
  data: null,
  errorMessage: "",
};

const reducer = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setSceneLoading: (state) => {
      state.status = "loading";
      state.errorMessage = "";
      state.data = null;
    },
    setSceneSuccess: (state, action) => {
      state.status = "success";
      state.errorMessage = "";
      state.data = action.payload;
    },
    setSceneError: (state, action) => {
      state.status = "error";
      state.data = null;
      state.errorMessage = action.payload;
    },
  },
});

export const sceneReducer = reducer.reducer;
export const sceneActions = reducer.actions;
