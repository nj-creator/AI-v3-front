import { Box, Typography } from "@mui/material";
import ProjectComponent from "../components/ProjectComponent.jsx";
import HeaderProject from "../components/HeaderProject.jsx";
import { useState } from "react";
import HeaderScene from "../components/HeaderScene.jsx";
import FrameComponent from "../components/FrameComponent.jsx";
const MakeScene = () => {

  return (
    <Box>
      <Box height={"100vh"} bgcolor={"text.light"}>
        <HeaderScene/>
        <FrameComponent/>
      </Box>
    </Box>
  );
};

export default MakeScene;
