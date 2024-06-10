import { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Box,
  MenuItem,
  Modal,
  Popover,
  Skeleton,
} from "@mui/material";
import { styled } from "@mui/system";
import DownloadIcon from "../Assets/Images/download-circle.png";
import DeleteIcon from "../Assets/Images/delete.png";
import MoveIcon from "../Assets/Images/nine-dot.png";
import HeaderFrame from "./HeaderFrame";
import FrameMainPanel from "./FrameMainPanel";
import FrameFooterPanel from "./FrameFooterPanel";
import { useFrame } from "../hooks/useFrame";
import { downloadImage } from "../utils/downloadImage";
import FrameEditMainComponent from "./FrameEditMainComponent";
import { MoreVertOutlined } from "@mui/icons-material";
import GenerateFrameMain from "./GenerateFrameMain";
import GeneralMainPanel from "./GeneralMainPanel";

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "24px",
  fontWeight: "bold",
  borderRadius: "10px",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
});

const CircleButton = styled("button")({
  width: "28px",
  height: "28px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  border: "none",
  margin: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#ccc",
  },
});

const LeftButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  position: "absolute",
  left: "10px",
  top: "5%",
  // transform: "translateY(-50%)",
});

const RightButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "absolute",
  right: "10px",
  top: "5%",
  // transform: "translateY(-50%)",
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "#EBEBEB", // Ensure background color is fully opaque
  boxShadow: 24,
  p: 1,
  borderRadius: "10px",
  outline: "none",
  display: "flex",
  flexDirection: "column",
  backgroundImage: "radial-gradient(#DCDCDC 1.5px, #EBEBEB 1.5px)",
  backgroundSize: "25px 25px",
};

const FramesGrid = ({ sceneData }) => {
  const [open, setOpen] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const [isEditBarOpen, setEditBar] = useState(false);
  const [brushSize, setBrushSize] = useState(20);
  const [isGeneralSetting, setGeneralSetting] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawButton, setDrawBtnClicked] = useState(false);
  const imageCanvasRef = useRef(null);
  const drawingCanvasRef = useRef(null);
  const { frameData, generationCompleted, generatedFramesNumber } = useFrame();
  const [selectedFrameUrl, setSelectedFrameUrl] = useState(0);
  const [isRegenerateScene, setRegenerateScene] = useState(false);
  const [eraseButton,setEraseBtnClicked]=useState(false);

  const setDraw = () => {
    setEraseBtnClicked(false)
    setDrawBtnClicked(true);
    const drawingCanvas = drawingCanvasRef.current;
    const drawingContext = drawingCanvas.getContext("2d");
    drawingContext.globalCompositeOperation = "source-over";
  };

  const handleSliderChange = (event, newValue) => {
    setBrushSize(newValue);
  };
  const handleOpen = (index) => {
    setSelectedFrame(index);
    setSelectedFrameUrl(frameData[index]?.activeUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setErase = () => {
    const drawingCanvas = drawingCanvasRef.current;
    const drawingContext = drawingCanvas.getContext("2d");
    drawingContext.globalCompositeOperation = "destination-out";
    setEraseBtnClicked(true)
  };

  const handleClearCanvas = () => {
    const drawingCanvas = drawingCanvasRef.current;
    const drawingContext = drawingCanvas.getContext("2d");
    drawingContext.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  };

  const closeEditBar = () => {
    setEditBar(false);
  };
  const closeGenerateFrame = () => {
    setRegenerateScene(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (e) => {
    // e.stopPropagation();
    setAnchorEl(null);
  };

  const openMenu = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: "10px" }}>
        {frameData &&
          frameData.length > 0 &&
          frameData.map((frame, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: "none",
                  borderRadius: "14px",
                  bgcolor: "F0F0F0",
                  border: "1px solid #F1F1F1",
                  cursor: "pointer",
                }}
                onClick={() => handleOpen(index)}
              >
                <CardContent sx={{ position: "relative" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      margin: "0 auto",
                      filter: `grayscale(${
                        frame.colorType === "black&White" ? "1" : "0"
                      })`,
                    }}
                  >
                    <img
                      src={frame.framesUrl[frame.activeUrl]}
                      alt={frame["project name"]}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Overlay>
                      <LeftButtonContainer>
                        <CircleButton>
                          <img
                            src={MoveIcon}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </CircleButton>
                        </LeftButtonContainer>
                      <RightButtonContainer>
                        <CircleButton
                          onClick={(e) => {
                            handleMenuClick(e);
                            // handleOpen(index);
                          }}
                        >
                          <MoreVertOutlined />
                        </CircleButton>
                      </RightButtonContainer>
                    </Overlay>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        {!generationCompleted &&
          Array.from(
            Array(
              Number(generatedFramesNumber) -
                Number(Array.isArray(frameData) ? frameData?.length : 0) || 0
            ).keys()
          ).map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: "none",
                  borderRadius: "14px",
                  bgcolor: "F0F0F0",
                  border: "1px solid #F1F1F1",
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ position: "relative" }}>
                  <Skeleton
                    sx={{ borderRadius: 2 }}
                    variant="rectangular"
                    width={"100%"}
                    height={250}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          {
            <>
              <HeaderFrame handleClose={handleClose} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "25px",
                  mt: 2,
                  px: "50px",
                }}
              >
                {/* <FrameLeftPanel sceneData={sceneData} /> */}
                <FrameMainPanel
                  framesData={frameData}
                  selectedFrame={selectedFrame}
                  setSelectedFrame={setSelectedFrame}
                  setEditBar={setEditBar}
                  isEditBarOpen={isEditBarOpen}
                  isDrawing={isDrawing}
                  setIsDrawing={setIsDrawing}
                  drawButton={drawButton}
                  brushSize={brushSize}
                  drawingCanvasRef={drawingCanvasRef}
                  imageCanvasRef={imageCanvasRef}
                  selectedFrameUrl={selectedFrameUrl}
                  setSelectedFrameUrl={setSelectedFrameUrl}
                  isRegenerateScene={isRegenerateScene}
                />
                {/* edit bar */}
                <Box sx={{ minWidth: "5%",position:"relative",width:(isRegenerateScene||isEditBarOpen||isGeneralSetting)?"30%":"auto"}}>
                  <Box display={"flex"} position={"absolute"} zIndex={100} right={0} top={0} height={"100%"} bgcolor={"white"} sx={{textOrientation:"sideways-right",writingMode:"vertical-rl",rotate:"180deg"}} px={1} justifyContent={"space-evenly"} boxShadow={5} alignItems={"center"} borderRadius={4}>
                    <Typography onClick={()=>{
                      setEditBar(!isEditBarOpen);
                      setRegenerateScene(false);
                      setGeneralSetting(false);
                    }} sx={{cursor:"pointer",p:1,borderLeft:isEditBarOpen?"2px solid":0,borderColor:"primary.light"}}>Inpainting</Typography>
                    <Typography onClick={()=>{
                      setEditBar(false);
                      setRegenerateScene(false);
                      setGeneralSetting(!isGeneralSetting);
                    }} sx={{cursor:"pointer",p:1,borderLeft:isGeneralSetting?"2px solid":0,borderColor:"primary.light"}}>General Settings</Typography>
                    <Typography onClick={()=>{
                      setEditBar(false);
                      setRegenerateScene(!isRegenerateScene);
                      setGeneralSetting(false);
                    }} sx={{cursor:"pointer",p:1,borderLeft:isRegenerateScene?"2px solid":0,borderColor:"primary.light"}}>Regenerate</Typography>
                  </Box>
                  {isRegenerateScene && (
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: "12px",
                        p: 2,
                        width:"100%",
                        height:"100%",
                        pr:10
                      }}
                    >
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "secondary.dark",
                          }}
                        >
                          Generate Frame
                        </Typography>
                      </Box>
                      <GenerateFrameMain
                        closeGenerateFrame={closeGenerateFrame}
                        selectedFrame={selectedFrame}
                      />
                    </Box>
                  )}
                  {isEditBarOpen && (
                      <Box
                        sx={{
                          bgcolor: "white",
                          borderRadius: "12px",
                          p: 2,
                          width:"100%",
                          height:"100%",
                          pr:10
                        }}
                      >
                        <FrameEditMainComponent
                          drawButton={drawButton}
                          eraseButton={eraseButton}
                          setDraw={setDraw}
                          brushSize={brushSize}
                          handleSliderChange={handleSliderChange}
                          handleClearCanvas={handleClearCanvas}
                          setErase={setErase}
                          frameData={frameData}
                          selectedFrame={selectedFrame}
                          closeEditBar={closeEditBar}
                          setSelectedFrameUrl={setSelectedFrameUrl}
                        />
                      </Box>
                  )}
                  {isGeneralSetting && (
                      <Box
                      sx={{
                          bgcolor: "white",
                          borderRadius: "12px",
                          p: 2,
                          width:"100%",
                          height:"100%",
                          pr:10
                        }}
                      >
                        <GeneralMainPanel/>
                      </Box>
                    )}
                </Box>
                {/* edit bar over */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <FrameFooterPanel
                  framesData={frameData}
                  selectedFrame={selectedFrame}
                  setSelectedFrame={setSelectedFrame}
                  isRegenerateScene={isRegenerateScene}
                  setRegenerateScene={setRegenerateScene}
                />
              </Box>
            </>
          }
        </Box>
      </Modal>
      <Popover
        id={id}
        open={openMenu}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
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
          onClick={() => {
            downloadImage(
              frameData[selectedFrame].framesUrl[selectedFrameUrl],
              frameData[selectedFrame].colorType
            );
            handleCloseMenu();
          }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "greys.darkest",
          }}
        >
          Download
          <img
            src={DownloadIcon}
            alt="Download Icon"
            style={{ width: "15px", height: "15px" }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleCloseMenu}
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
    </div>
  );
};

export default FramesGrid;
