import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SwitchTheme from "./SwitchTheme";
import ProfileButton from "./ProfileButton";

import { Box, Button } from "@mui/material";
import LeftArrow from "../Assets/Images/arrow-left.png";

import NewFrameButton from "./NewFrameButton";
import ExportAllButton from "./ExportAllButton";
import { useNavigate } from "react-router-dom";
const HeaderScene = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none", height: 72 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display={"flex"} gap={3} color={"black"} alignItems={"center"}>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              borderRadius: 24,
              height: "40px",
              bgcolor: "#f1f1f1",
              fontSize: "14px",
              color: "greys.darkest",
            }}
          >
            <img
              src={LeftArrow}
              alt="New Project Icon"
              style={{ marginRight: 2, width: 20, height: 20 }}
            />
            Back to Scene
          </Button>
        </Box>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* New Project Button */}

          <NewFrameButton />

          <ExportAllButton />

          <div style={{ marginRight: "24px" }}>
            <SwitchTheme />
          </div>

          {/* User Button */}

          {/* <IconButton sx={{ width: 40, height: 40, borderRadius: 24, marginRight: 1, backgroundColor:'secondary.dark', color:'text.lightest' }}>
            I
          </IconButton> */}
          <ProfileButton />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderScene;
