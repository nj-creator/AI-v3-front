import { ThemeProvider } from "@emotion/react";
import theme, { deviceTheme } from "./styles/theme";
import { CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { router } from "./routes/routes";
import { useEffect } from "react";
import { setTheme } from "./store/slice/theme.reducer";
import { AuthProvider } from "@descope/react-sdk";
import { useAuth } from "./hooks/useAuth";
import { useFrame } from "./hooks/useFrame";
import { useSocket } from "./hooks/useSocket";

const App = () => {
  const themeState = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const { setSocketCallData, setGenerationCompleted } = useFrame();

  useEffect(() => {
    localStorage.setItem("theme", deviceTheme());
    dispatch(setTheme(deviceTheme()));
  }, [dispatch]);
  const { isLoading, user } = useAuth(true);
  const { _id: userId } = user || {};

  useSocket(setSocketCallData, userId, true, setGenerationCompleted);

  if (isLoading) {
    return <p>Loading application...</p>;
  }

  return (
    <AuthProvider
      projectId="P2ZkCSW4KutZ3osOqzOVSt6pJAsX"
      baseUrl="https://auth.staging.immersfy.com"
    >
      <ThemeProvider theme={theme(themeState)}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
