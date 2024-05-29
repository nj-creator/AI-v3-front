import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";

import LogOutIcon from "../Assets/Images/log-out.png";
import HelpIcon from "../Assets/Images/help-circle.png";
import { Typography } from "@mui/material";
import AccountButton from "./AccountButton";
import MySubscriptionButton from "./MySubscriptionButton";
import { useAuth } from "../hooks/useAuth";

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { logoutFunction, user } = useAuth();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        onClick={handleMenuClick}
        sx={{
          width: 40,
          height: 40,
          borderRadius: 24,
          marginRight: 1,
          backgroundColor: "secondary.dark",
          color: "text.lightest",
          "&:hover": {
            backgroundColor: "secondary.main", // Change hover color here
          },
        }}
      >
        {user.name.charAt(0)}
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            width: "176px",
            borderRadius: "20px",
          },
        }}
      >
        <AccountButton />
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            fontSize: "14px",
            color: "greys.darkest",
            borderBottom: "2px solid #f2f2f2",
          }}
        >
          <img
            src={HelpIcon}
            alt="Edit Icon"
            style={{ width: "15px", height: "15px", marginRight: "15px" }}
          />
          Support
        </MenuItem>
        <MySubscriptionButton />
        <MenuItem
          onClick={() => logoutFunction(handleClose)}
          sx={{
            display: "flex",
            fontSize: "14px",
            color: "greys.darkest",
            borderBottom: "2px solid #f2f2f2",
          }}
        >
          <img
            src={LogOutIcon}
            alt="Edit Icon"
            style={{ width: "15px", height: "15px", marginRight: "15px" }}
          />
          Logout
        </MenuItem>

        <div style={{ margin: "12px" }}>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              textDecorationColor: "greys.main",
              textDecorationThickness: "1px",
              textDecorationStyle: "solid",
            }}
            onClick={handleClose}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                color: "greys.main",
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </Typography>
          </a>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              textDecorationColor: "greys.main",
              textDecorationThickness: "1px",
              textDecorationStyle: "solid",
            }}
            onClick={handleClose}
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                fontSize: "12px",
                color: "greys.main",
                cursor: "pointer",
              }}
            >
              Terms & Conditions
            </Typography>
          </a>
        </div>
      </Popover>
    </>
  );
};

export default ProfileButton;
