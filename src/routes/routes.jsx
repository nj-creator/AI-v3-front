import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
import FourOFour from "../screens/FourOFour";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import MakeProjects from "../screens/MakeProjects";
import MakeScene from "../screens/MakeScene";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <Home />
      </PrivateRoutes>
    ),
    // loader: rootLoader,
  },
  {
    path: "/404",
    element: <FourOFour />,
    // loader: rootLoader,
  },
  {
    path: "/login",
    element: (
      <PublicRoutes>
        {" "}
        <Login />,
      </PublicRoutes>
    ),
    // loader: rootLoader,
  },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  // },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
    // loader: rootLoader,
  },
  {
    path: "/scenes",
    element: <MakeProjects />,
  },
  {
    path: "/project/:projectId",
    element: (
      <PrivateRoutes>
        <MakeProjects />
      </PrivateRoutes>
    ),
    // loader: rootLoader,
  },
  {
    path: "/project/:projectId/scene/:sceneId",
    element:    <PrivateRoutes> <MakeScene /></PrivateRoutes>,
    // loader: rootLoader,
  },
]);
