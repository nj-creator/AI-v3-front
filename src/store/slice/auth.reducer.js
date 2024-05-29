import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  status: "initial",
  user: null,
  errorMessage: "",
};

const reducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFetchingUser: (state) => {
      state.status = "loading";
      state.errorMessage = "";
      state.user = null;
    },
    setSuccessUser: (state, action) => {
      state.status = "success";
      state.errorMessage = "";
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    setFailedUser: (state, action) => {
      state.status = "error";
      state.user = null;
      state.isLoggedIn = false;
      state.errorMessage = action.payload;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.errorMessage = "";
    },
  },
});

export const authReduer = reducer.reducer;
export const authActions = reducer.actions;
