import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../Assets/Images/Logo.png";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "../Assets/Images/search.png";
import SwitchTheme from "./SwitchTheme";
import ProfileButton from "./ProfileButton";
import CreditsButton from "./CreditsButton";
import NewProjectButton from "./NewProjectButton";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none", height: 72 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "10px", height: 50, filter: "invert(1)" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* New Project Button */}
          <NewProjectButton />

          {/* Light Orange Button */}
          {/* <CreditsButton /> */}

          {/* Search Bar */}
          <div
            style={{
              borderRadius: 24,
              width: 108,
              height: 40,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              marginRight: "24px",
            }}
          >
            <IconButton sx={{ p: "10px" }}>
              <img
                src={SearchIcon}
                alt="Search Icon"
                style={{ width: 20, height: 20 }}
              />
            </IconButton>
            <InputBase
              placeholder="Search"
              sx={{
                flexGrow: 1,
                ml: 0.2,
                fontSize: 14,
                color: "secondary.dark",
              }}
            />
          </div>
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

export default Header;
