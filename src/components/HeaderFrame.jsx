import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SwitchTheme from "./SwitchTheme";
import ProfileButton from "./ProfileButton";

import { Button } from "@mui/material";
import LeftArrow from "../Assets/Images/arrow-left.png";

import NewFrameButton from "./NewFrameButton";
import ExportAllButton from "./ExportAllButton";
const HeaderFrame = ({ handleClose }) => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none", height: 72 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          onClick={handleClose}
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
          Back
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* New Project Button */}

          <NewFrameButton />

          <ExportAllButton />

          <div style={{ marginRight: "24px" }}>
            <SwitchTheme />
          </div>

          <ProfileButton />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderFrame;
