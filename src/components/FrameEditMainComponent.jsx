import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import EnterScriptIcon from "../Assets/Images/enterscripticon.png";
import ResetIcon from "../Assets/Images/reset.png";
import DrawIcon from "../Assets/Images/draw.png";
import EraseIcon from "../Assets/Images/erase.png";
import {
  CenterFocusStrong,
  ColorLens,
  KeyboardArrowDown,
  PhotoCamera,
  PhotoFilter,
  Save,
} from "@mui/icons-material";
import { useState } from "react";
import {
  cameraAngleData,
  colorTypeData,
  inpaintingTypeData,
  shotTypeData,
  stylesData,
} from "../Data/dropdownData";
import { useFrame } from "../hooks/useFrame";
import { LoadingButton } from "@mui/lab";

const FrameEditMainComponent = ({
  handleClearCanvas,
  setErase,
  setDraw,
  drawButton,
  eraseButton,
  handleSliderChange,
  brushSize,
  frameData,
  selectedFrame,
  closeEditBar,
  setSelectedFrameUrl,
}) => {
  const { updateRegeneratedFrame } = useFrame();
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState({
    description: "",
    cameraAngle: cameraAngleData[0].value,
    style: stylesData[0].value,
    colorType: colorTypeData[0].value,
    shotType: shotTypeData[0].value,
    inpaintingType: "",
  });

  const handleGenerateClick = async () => {
    setLoading(true);
    var image = document.getElementById("imageCanvas");
    var mask = document.getElementById("drawingCanvas");
    const formData = new FormData();
    formData.append("maskImage", mask.toDataURL("image/png"));
    formData.append("baseImage", image.toDataURL("image/jpeg"));
    formData.append("prompt", requestData.description);
    formData.append("height", image.height);
    formData.append("width", image.width);
    formData.append("inpainting_action", requestData.inpaintingType);
    formData.append("frame_id", frameData[selectedFrame]._id);
    await updateRegeneratedFrame(
      formData,
      selectedFrame,
      closeEditBar,
      setLoading,
      setSelectedFrameUrl
    );
  };

  const dropdownData = [
    {
      title: "Camera Angle",
      name: "cameraAngle",
      icon: <PhotoCamera />,
      options: cameraAngleData,
    },
    {
      title: "Style",
      name: "style",
      icon: <PhotoFilter />,
      options: stylesData,
    },
    {
      title: "Color Type",
      name: "colorType",
      icon: <ColorLens />,
      options: colorTypeData,
    },
    {
      title: "Shot Type",
      name: "shotType",
      icon: <CenterFocusStrong />,
      options: shotTypeData,
    },
  ];

  return (
    <Box>
      <Box>
        <Box sx={{ py: 2 }}>
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
            Prompt
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter the description"
            multiline
            variant="outlined"
            rows={7}
            value={requestData.description}
            onChange={(e) =>
              setRequestData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            InputProps={{
              sx: {
                bgcolor: "greys.lighter",
                borderRadius: "12px",
                marginTop: 1,
                fontSize: "14px",
                color: "greys.darkest",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              },
            }}
          />
        </Box>

        <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
      </Box>
      <Box py={2} display={"flex"} flexDirection={"column"} gap={2} >
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
            Edit Options
          </Typography>
            <Select
            value={requestData.inpaintingType}
            onChange={(e) =>
              setRequestData((prev) => ({
                ...prev,
                inpaintingType: e.target.value,
              }))
            }
            displayEmpty
            fullWidth
            placeholder="select"
            InputProps={{
              style: {
                padding: "0px",
              },
            }}
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "none",
              border: "none",
              "& .MuiOutlinedInput-input": {
                padding: 0,
              },
              ".MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "& .MuiSelect-icon": {
                transform: "rotate(0deg)",
              },
              bgcolor:"grey.200",
              py:1,
              px:2,
              borderRadius:5
            }}
            IconComponent={KeyboardArrowDown}
          >
            <MenuItem value="">Select</MenuItem>
            {inpaintingTypeData.map((item, idx) => (
              <MenuItem key={idx} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />

      </Box>

      <Box
        sx={{
          my: 1,
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
              src={EnterScriptIcon}
              alt="Icon1"
              style={{ marginRight: "8px", width: "16px" }}
            />
            Brushes
          </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          mb: 2,
        }}
      >
        <Button
          onClick={setDraw}
          sx={{
            bgcolor: drawButton && !eraseButton?"#e6e3e3":"none",
            borderRadius: "8px",
            padding: "8px",
            width: "fit-content",
            minWidth: "fit-content",
          }}
        >
          <img
            src={DrawIcon}
            style={{ width: "20px", height: "20px"}}
          />
        </Button>
        <Button
          onClick={setErase}
          sx={{
            bgcolor: eraseButton?"#e6e3e3":"none",
            borderRadius: "8px",
            padding: "8px",
            width: "fit-content",
            minWidth: "fit-content",
          }}
        >
          <img
            src={EraseIcon}
            style={{ width: "20px", height: "20px", filter:eraseButton?"grayscale(1)":"grayscale(0)" }}
          />
        </Button>
        <Button
          onClick={handleClearCanvas}
          sx={{
            borderRadius: "8px",
            padding: "8px",
            width: "fit-content",
            minWidth: "fit-content",
          }}
        >
          <img
            src={ResetIcon}
            style={{ width: "20px", height: "20px" }}
          />
        </Button>
      </Box>
      <Box
            sx={{
              mb: 1,
            }}
          >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "secondary.dark",
                }}
              >
                Brush Size
              </Typography>
          </Box>
          <Slider
            value={brushSize}
            onChange={handleSliderChange}
            //   aria-labelledby="discrete-slider"
            //   valueLabelDisplay="auto"
            step={1}
            min={1}
            max={100}
            sx={{
              "& .MuiSlider-rail": {
                backgroundColor: "primary.lightest", // Change the color of the slider track
              },
              "& .MuiSlider-thumb": {
                width: "15px",
                height: "15px",
              },
            }}
          />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          marginTop: 3,
        }}
      >
        <LoadingButton
          disabled={
            requestData.description === "" || requestData.inpaintingType === ""
          }
          onClick={handleGenerateClick}
          variant="contained"
          color="primary"
          fullWidth
          loading={loading}
          loadingPosition="end"
          endIcon={<Save sx={{ display: "none" }} />}
          sx={{ borderRadius: 6 }}
        >
          {loading ? "Generating" : "Generate"}
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default FrameEditMainComponent;
