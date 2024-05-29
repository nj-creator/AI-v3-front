import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import EditViewIcon from "../Assets/Images/Edit.png";
import DeleteIcon from "../Assets/Images/delete.png";

const ActionsIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton edge="end" aria-label="options" onClick={handleMenuClick}>
        <MoreHorizIcon />
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
            width: "144px",
            borderRadius: "8px",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "greys.darkest",
          }}
        >
          Rename
          <img
            src={EditViewIcon}
            alt="Edit Icon"
            style={{ width: "15px", height: "15px" }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "greys.darkest",
          }}
        >
          Delete
          <img
            src={DeleteIcon}
            alt="Delete Icon"
            style={{ width: "15px", height: "15px" }}
          />
        </MenuItem>
      </Popover>
    </>
  );
};

export default ActionsIcon;
