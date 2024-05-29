import { Box } from "@mui/material";
import ProjectComponent from "../components/ProjectComponent.jsx";
import HeaderProject from "../components/HeaderProject.jsx";
import { useState } from "react";
const MakeProjects = () => {
  const [asset, setAsset] = useState("scenes");

  return (
    <Box>
      <Box height={"100vh"} bgcolor={"text.light"}>
        <HeaderProject asset={asset} />
        <ProjectComponent asset={asset} setAsset={setAsset} />
      </Box>
    </Box>
  );
};

export default MakeProjects;
