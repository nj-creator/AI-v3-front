import { Descope } from "@descope/react-sdk";
import { Box } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Login = () => {
  const { descopeFunction } = useAuth();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const setInputValue = () => {
  //     const emailInput = document.getElementById("input-vaadin-email-field-3");
  //     if (emailInput) {
  //       emailInput.value = "joginandan7091@gmail.com";
  //     } else {
  //       console.error('Element not found');
  //     }
  //   };

  //   // Use a polling mechanism to wait for the element
  //   const intervalId = setInterval(() => {
  //     const emailInput = document.getElementById("input-vaadin-email-field-3");
  //     if (emailInput) {
  //       emailInput.value = "joginandan7091@gmail.com";
  //       clearInterval(intervalId); // Clear the interval once the element is found and the value is set
  //     }
  //   }, 100); // Check every 100ms

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
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
        // redirectUrl={"https://beta.immersfy.com/login"}
        // redirectUrl={"https://immersfy-v3.vercel.app/login"}
        theme="light"
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
