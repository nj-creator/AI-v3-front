import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import EnterScriptIcon from "../Assets/Images/enterscripticon.png";
import InfoIcon from "../Assets/Images/info.png";
import LocationIcon from "../Assets/Images/location.png";
import FilmRoleIcon from "../Assets/Images/filmrole.png";
import PalleteIcon from "../Assets/Images/pallete.png";
import FramesIcon from "../Assets/Images/frames.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowRight } from "@mui/icons-material";
import { colorTypeData, genreData } from "../Data/dropdownData";

const FrameLeftPanel = ({ sceneData }) => {
  const leftPanelStyle = {
    width: "25%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    borderRight: "1px solid #ddd",
    bgcolor: "white",
    borderRadius: "16px",
  };

  return (
    <Box sx={leftPanelStyle}>
      <Box>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "500", color: "secondary.dark" }}
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
          fullWidth
          multiline
          variant="outlined"
          rows={4}
          value={sceneData?.script}
          InputProps={{
            readOnly: true, // Make the TextField non-editable
            sx: {
              height: "130px",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "secondary.dark",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={LocationIcon}
              alt="Icon1"
              style={{ marginRight: "8px", width: "16px" }}
            />
            Location
          </Typography>
          <TextField
            variant="outlined"
            value={sceneData?.location || "-"}
            InputProps={{
              readOnly: true,
              sx: {
                height: "30px",
                borderRadius: "12px",
                fontSize: "14px",
                textAlign: "center",
                bgcolor: "greys.lighter",
                color: "greys.darkest",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border from outlined input
                },
              },
            }}
            sx={{ width: "90px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
        </Box>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "secondary.dark",
            }}
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
            value={sceneData.genre}
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
            IconComponent={KeyboardArrowRight}
          >
            {genreData.map((item, idx) => (
              <MenuItem key={idx} value={item.value} disabled>
                {item.title}
              </MenuItem>
            ))}
          </Select> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
            value={sceneData.colorType}
            IconComponent={KeyboardArrowRight}
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            {colorTypeData.map((item, idx) => (
              <MenuItem key={idx} value={item.value} disabled>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: "500", color: "secondary.dark" }}
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
          sx={{ display: "flex", alignContent: "center", alignItems: "center" }}
        >
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          <Typography>{sceneData.framesNumber}</Typography>
          <IconButton>
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          marginTop: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "610px",
            height: "36px",
            borderRadius: "24px",
            ml: 1,
            bgcolor: "greys.lighter",
            color: "text.main",
            "&:hover": {
              bgcolor: "greys.lighter", // Keep the same background color on hover
            },
          }}
        >
          Generate the scene
        </Button>
      </Box>
    </Box>
  );
};

export default FrameLeftPanel;
