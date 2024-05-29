import { Descope } from "@descope/react-sdk";
import { Box } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { descopeFunction } = useAuth();
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Descope
        flowId="sign-up-or-in"
        redirectUrl={"http://localhost:5173/login"}
        // redirectUrl={"https://immersfy-v3.vercel.app/login"}
        theme="dark"
        onSuccess={(e) => {
          const { email, name, userId } = e.detail.user;
          descopeFunction({ email, name, uniqueId: userId }, () =>
            navigate("/")
          );
        }}
        onError={(err) => {
          console.log("Error!", err);
        }}
      />
    </Box>
  );
};

export default Login;
