import { Box } from "@mui/material";
import Header from "../components/Header.jsx";
import HomeComponent from "../components/HomeComponent.jsx";
import { useState } from "react";
const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      <Box height={"100vh"} bgcolor={"text.light"}>
        <Header loading={loading} setLoading={setLoading} />
        <HomeComponent loading={loading}/>
      </Box>
      {/* <Box component={"span"} position={"absolute"} right={10} top={10}>
        <SwitchTheme />
      </Box> */}
    </Box>
  );
};

export default Home;
