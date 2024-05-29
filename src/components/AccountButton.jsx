import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import AccountIcon from "../Assets/Images/user.png";
import { Box, Modal, Slider, TextField, Typography } from "@mui/material";
import UpgradePlanButton from "./UpgradePlanButton";
import { useAuth } from "../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "650px",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const AccountButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [credits, setCredits] = useState(10);

  const { user } = useAuth();

  return (
    <>
      <MenuItem
        onClick={handleOpen}
        sx={{
          display: "flex",
          fontSize: "14px",
          color: "greys.darkest",
          marginTop: "15px",
          borderBottom: "2px solid #f2f2f2",
        }}
      >
        <img
          src={AccountIcon}
          alt="Edit Icon"
          style={{ width: "15px", height: "15px", marginRight: "15px" }}
        />
        Account
      </MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "secondary.dark",
                }}
              >
                Account
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ top: "-10px" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
            >
              Email Address
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={user.email} // Set the static text as the value
              InputProps={{
                sx: {
                  height: "42px",
                  borderRadius: "12px",
                  marginTop: 2,
                },
                readOnly: true, // Make the TextField read-only
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
              marginBottom: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
              gutterBottom
            >
              Plan type
            </Typography>
            <Box
              sx={{
                py: "4px",
                px: "12px",
                borderRadius: "16px",
                bgcolor: "primary.lightest",
                fontWeight: "500",
                fontSize: "14px",
                color: "primary.dark",
              }}
            >
              {" "}
              PRO{" "}
            </Box>
          </Box>

          {/* <Box sx={{ padding: "24px", bgcolor: "greys.lightest" }}>
            <Typography
              variant="body1"
              id="modal-modal-description"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              You are on the
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "primary.main",
                  display: "inline-flex",
                  alignItems: "center",
                  marginLeft: 1,
                }}
              >
                Pro &nbsp;
              </Typography>
              plan
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Slider
                value={16}
                //   aria-labelledby="discrete-slider"
                //   valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                sx={{
                  marginTop: "10px",
                  "& .MuiSlider-rail": {
                    backgroundColor: "primary.lightest", // Change the color of the slider track
                  },
                  "& .MuiSlider-thumb": {
                    width: "0px",
                    height: "0px",
                    hidden: true,
                  },
                }}
              />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "text.main",
                marginTop: "10px",
              }}
            >
              16/50 credits left
            </Typography>
          </Box> */}

          {/* <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                width: "297px",
                height: "36px",
                borderRadius: "24px",
                border: "1px solid #f1f1f1",
                color: "secondary.dark",
                mr: 1,
              }}
            >
              Cancel
            </Button>
            <UpgradePlanButton />
          </Box> */}
        </Box>
      </Modal>
    </>
  );
};

export default AccountButton;
