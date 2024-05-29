import { Box } from "@mui/material";
import Header from "../components/Header.jsx";
import HomeComponent from "../components/HomeComponent.jsx";
const Home = () => {
  return (
    <Box>
      <Box height={"100vh"} bgcolor={"text.light"}>
        <Header />
        <HomeComponent />
      </Box>
      {/* <Box component={"span"} position={"absolute"} right={10} top={10}>
        <SwitchTheme />
      </Box> */}
    </Box>
  );
};

export default Home;
