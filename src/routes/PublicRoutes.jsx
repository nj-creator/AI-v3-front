import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoutes = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  if (!isLoggedIn) {
    return children;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return <Navigate to={"/"} />;
};

export default PublicRoutes;
