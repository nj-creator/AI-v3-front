import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Loader";

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoggedIn) {
    return children;
  }
  if (isLoading) {
    return <Loader />;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoutes;
