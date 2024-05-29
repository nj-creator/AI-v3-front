import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/theme.reducer";
import { useDispatch, useSelector } from "react-redux";
import { authReduer } from "./slice/auth.reducer";
import { projectReducer } from "./slice/project.reducer";
import { sceneReducer } from "./slice/scene.reducer";
import { frameReducer } from "./slice/frame.reducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReduer,
    project: projectReducer,
    scene: sceneReducer,
    frame: frameReducer,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

export default store;
