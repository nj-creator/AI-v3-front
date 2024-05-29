import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SwitchTheme from "./SwitchTheme";
import ProfileButton from "./ProfileButton";
import { Button } from "@mui/material";
import LeftArrow from "../Assets/Images/arrow-left.png";
import NewSceneButton from "./NewSceneButton";
import NewCharacterButton from "./NewCharacterButton";
import { useNavigate } from "react-router-dom";
const HeaderProject = ({ asset }) => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        height: 72,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          onClick={() => navigate("/")}
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
          Projects
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* New Project Button */}

          {asset === "scenes" ? <NewSceneButton /> : <NewCharacterButton />}

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

export default HeaderProject;
