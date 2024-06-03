import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import EnterScriptIcon from "../Assets/Images/enterscripticon.png";
import InfoIcon from "../Assets/Images/info.png";
import LocationIcon from "../Assets/Images/location.png";
import FilmRoleIcon from "../Assets/Images/filmrole.png";
import PalleteIcon from "../Assets/Images/pallete.png";
import FramesIcon from "../Assets/Images/frames.png";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { useScene } from "../hooks/useScene";
import { useParams } from "react-router-dom";
import { colorTypeData, genreData } from "../Data/dropdownData";
import { useSelector } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "720px",
  // height: "660px",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const NewSceneButton = () => {
  const projectScenes = useSelector((state) => state.scene.data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      title: `Scene ${projectScenes?.length + 1}`,
      script: "",
      location: "",
      genre: "",
      colorType: colorTypeData[0].value,
      framesNumber: 0,
    });
  };
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const { projectId } = useParams();

  const { isLoading, createScene, isError, errorMessage } = useScene();

  useEffect(() => {
    setErrorSnackbar(isError);
  }, [isError]);

  const [formData, setFormData] = useState({
    title: `Scene ${projectScenes?.length + 1}`,
    script: "",
    location: "",
    genre: "",
    colorType: colorTypeData[0].value,
    framesNumber: 0,
  });

  const handleGenreChange = (event) => {
    setFormData((prev) => ({ ...prev, genre: event.target.value }));
  };

  const handlecolorTypeChange = (event) => {
    setFormData((prev) => ({ ...prev, colorType: event.target.value }));
  };

  const handleIncrement = () => {
    setFormData((prev) => ({ ...prev, framesNumber: prev.framesNumber + 1 }));
  };
  const handleDecrement = () => {
    if (formData.framesNumber > 1) {
      setFormData((prev) => ({ ...prev, framesNumber: prev.framesNumber - 1 }));
    }
  };
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      title: Number(projectScenes?.length + 1)
        ? `Scene ${projectScenes?.length + 1}`
        : prev.title,
    }));
  }, [projectScenes]);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          padding: "10px 16px 10px 16px",
          borderRadius: 24,
          height: 40,
          bgcolor: "primary.dark",
          marginRight: 3,
          color: "text.light",
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        <span style={{ fontSize: "24px", fontWeight: "400" }}> + </span> &nbsp;
        Create new scene
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
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
                New Scene
              </Typography>
            </Box>
            <IconButton
              disabled={isLoading}
              onClick={handleClose}
              sx={{ top: "-10px" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
            >
              Scene title
            </Typography>
            <TextField
              fullWidth
              value={formData.title}
              variant="outlined"
              autoFocus
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="Enter a title of your scene"
              InputProps={{
                sx: { height: "42px", borderRadius: "12px", marginTop: 1 },
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
              display="flex"
              alignItems="center"
            >
              <img
                src={EnterScriptIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
              />
              Enter the script
              <Box sx={{ flexGrow: 1 }} /> {/* To push Icon2 to the right */}
              <Tooltip
                title="If you have created a character, just mention @name and the character will be used as an avatar"
                arrow
                placement="left" // Change the tooltip position
                sx={{ backgroundColor: "black", color: "white" }}
              >
                <img src={InfoIcon} alt="Icon2" style={{ width: "16px" }} />
              </Tooltip>
            </Typography>
            <TextField
              value={formData.script}
              fullWidth
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, script: e.target.value }))
              }
              multiline
              variant="outlined"
              rows={6}
              placeholder="A knight is walking in a dense medival forest"
              InputProps={{
                sx: {
                  // height: "100px",
                  borderRadius: "12px",
                  marginTop: 1,
                  fontSize: "14px",
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "secondary.dark",
                }}
                variant="subtitle1"
                display="flex"
                alignItems="center"
              >
                <img
                  src={LocationIcon}
                  alt="Icon1"
                  style={{ marginRight: "8px", width: "16px" }}
                />
                Location
              </Typography>
              <Typography variant="caption" color={"primary.main"}>
                {" "}
                (Coming soon)
              </Typography>
            </Box>
            <TextField
              value={formData.location}
              fullWidth
              disabled
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              variant="outlined"
              placeholder="New York"
              InputProps={{
                sx: {
                  height: "42px",
                  borderRadius: "12px",
                  marginTop: 1,
                  fontSize: "14px",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "1px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
              display="flex"
              alignItems="center"
            >
              <img
                src={FilmRoleIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
              />
              Genre
            </Typography>

            <Typography variant="caption" color={"primary.main"} mx={2}>
              {" "}
              (Coming soon)
            </Typography>

            {/* <Select
              value={formData.genre}
              onChange={handleGenreChange}
              displayEmpty
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              {genreData.map((item, idx) => (
                <MenuItem
                  key={idx}
                  value={item.value}
                  sx={{ fontSize: "14px" }}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Select> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "1px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
              display="flex"
              alignItems="center"
            >
              <img
                src={PalleteIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
              />
              Color type
            </Typography>

            <Select
              value={formData.colorType}
              onChange={handlecolorTypeChange}
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
            >
              {colorTypeData.map((item, idx) => (
                <MenuItem
                  key={idx}
                  value={item.value}
                  sx={{ fontSize: "14px" }}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
              display="flex"
              alignItems="center"
            >
              <img
                src={FramesIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
              />
              Number of Frames
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={handleDecrement}>
                <KeyboardArrowDownIcon />
              </IconButton>
              <Typography>{formData.framesNumber}</Typography>
              <IconButton onClick={handleIncrement}>
                <KeyboardArrowUpIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              marginTop: 1,
            }}
          >
            <LoadingButton
              disabled={Object.entries(formData).some(
                ([key, value]) =>
                  key !== "location" && key !== "genre" && value === ""
              )}
              onClick={() =>
                createScene({ ...formData, projectId }, handleClose)
              }
              variant="contained"
              fullWidth
              loading={isLoading}
              loadingPosition="end"
              endIcon={<Save sx={{ display: "none" }} />}
              sx={{ borderRadius: 6 }}
            >
              {isLoading ? "Generating the scene" : "Generate the scene"}
            </LoadingButton>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={errorSnackbar}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert
          onClose={() => setErrorSnackbar(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewSceneButton;
