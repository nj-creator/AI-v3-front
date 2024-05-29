import {
  Box,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import EnterScriptIcon from "../Assets/Images/enterscripticon.png";
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

const FrameEditMainComponent = ({ frameData, selectedFrame, closeEditBar,setSelectedFrameUrl }) => {
  const { updateRegeneratedFrame } = useFrame();
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState({
    description: "",
    cameraAngle: cameraAngleData[0].value,
    style: stylesData[0].value,
    colorType: colorTypeData[0].value,
    shotType: shotTypeData[0].value,
    inpaintingType: inpaintingTypeData[0].value,
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
    await updateRegeneratedFrame(formData,selectedFrame,closeEditBar,setLoading,setSelectedFrameUrl);
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 2,
            gap: 1,
          }}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <PhotoCamera />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              display="flex"
              alignItems="center"
            >
              Inpainting Type
            </Typography>
          </Box>
          <Select
            value={requestData.inpaintingType}
            onChange={(e) =>
              setRequestData((prev) => ({
                ...prev,
                inpaintingType: e.target.value,
              }))
            }
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
            }}
            IconComponent={KeyboardArrowDown}
          >
            {inpaintingTypeData.map((item, idx) => (
              <MenuItem key={idx} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
        </Box>
      </Box>

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
            Description
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter the description"
            multiline
            variant="outlined"
            rows={2}
            value={requestData.description}
            onChange={(e) =>
              setRequestData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            InputProps={{
              sx: {
                height: "60px",
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

      {dropdownData.map((dropdown, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 2,
              gap: 1,
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              {dropdown.icon}
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "secondary.dark",
                }}
                display="flex"
                alignItems="center"
              >
                {dropdown.title}
              </Typography>
            </Box>
            <Select
              value={requestData[dropdown.name]}
              onChange={(e) =>
                setRequestData((prev) => ({
                  ...prev,
                  [dropdown.name]: e.target.value,
                }))
              }
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
              }}
              IconComponent={KeyboardArrowDown}
            >
              {dropdown.options.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          marginTop: 3,
        }}
      >
        <LoadingButton
          disabled={requestData.description === ""}
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
