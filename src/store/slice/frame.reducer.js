import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
  data: null,
  errorMessage: "",
  generatedFramesNumber: 0,
  isGenerating: false,
  generationCompleted: false,
};

const reducer = createSlice({
  name: "frame",
  initialState,
  reducers: {
    setFrameLoading: (state) => {
      state.status = "loading";
      state.errorMessage = "";
      state.data = null;
    },
    setData: (state, action) => {
      state.data = Array.isArray(state.data)
        ? [...state.data, action.payload]
        : [action.payload];
    },
    setFrameSuccess: (state, action) => {
      state.status = "success";
      state.errorMessage = "";
      state.data = action.payload;
      state.isGenerating = false;
      state.generationCompleted = true;
    },
    setFrameError: (state, action) => {
      state.status = "error";
      state.data = null;
      state.errorMessage = action.payload;
    },
    setGenerationBegin: (state, action) => {
      state.status = "success";
      state.isGenerating = true;
      state.generatedFramesNumber = action.payload;
    },
    setGenerationCompleted: (state) => {
      state.generationCompleted = true;
    },
    setFramesData: (state,action)=>{
      state.data=action.payload
    }
  },
});

export const frameReducer = reducer.reducer;
export const frameActions = reducer.actions;
