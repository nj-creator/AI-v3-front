import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import SubscriptionIcon from "../Assets/Images/credit-card-1.png";
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

const MySubscriptionButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useAuth();

  return (
    <>
      <MenuItem
        onClick={handleOpen}
        sx={{
          display: "flex",
          fontSize: "14px",
          color: "greys.darkest",
          borderBottom: "2px solid #f2f2f2",
        }}
      >
        <img
          src={SubscriptionIcon}
          alt="Edit Icon"
          style={{ width: "15px", height: "15px", marginRight: "15px" }}
        />
        My Subscription
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
                My Subscription
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
              PRO
            </Box>
          </Box>

          {/* <Box
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
              Date of Purchase
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
              variant="subtitle1"
              gutterBottom
            >
              25 / 03 / 2024
            </Typography>
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
              Date of Renewal
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
              variant="subtitle1"
              gutterBottom
            >
              25 / 04 / 2024
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "text.light",
              padding: "12px",
              borderRadius: "8px",
              mt: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "primary.main",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Plan renews in 10 Days !
            </Typography>
          </Box> */}
        </Box>
      </Modal>
    </>
  );
};

export default MySubscriptionButton;
