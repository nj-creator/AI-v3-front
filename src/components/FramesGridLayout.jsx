import { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Skeleton,
  Slider,
} from "@mui/material";
import { styled } from "@mui/system";
import LeftArrowIcon from "../Assets/Images/arrow-left-white.png";
import RighttArrowIcon from "../Assets/Images/arrow-right-white.png";
import DownloadIcon from "../Assets/Images/download-circle.png";
import MoveIcon from "../Assets/Images/nine-dot.png";
import EditIcon from "../Assets/Images/pencil.png";
import DeleteIcon from "../Assets/Images/delete.png";
import HeaderFrame from "./HeaderFrame";
import DrawIcon from "../Assets/Images/draw.png";
import EraseIcon from "../Assets/Images/erase.png";
import SettingsIcon from "../Assets/Images/settings.png";
import ResetIcon from "../Assets/Images/reset.png";
import FrameLeftPanel from "./FrameLeftPanel";
import FrameMainPanel from "./FrameMainPanel";
import FrameFooterPanel from "./FrameFooterPanel";
import { useFrame } from "../hooks/useFrame";
import { downloadImage } from "../utils/downloadImage";
import FrameEditMainComponent from "./FrameEditMainComponent";
import { Close } from "@mui/icons-material";
// Styled components for overlay and circle button
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
  top: "50%",
  transform: "translateY(-50%)",
});

const RightButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
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
  const [isSettingOpen, setSettingBar] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawButton, setDrawBtnClicked] = useState(false);
  const imageCanvasRef = useRef(null);
  const drawingCanvasRef = useRef(null);
  const { frameData, generationCompleted, generatedFramesNumber } = useFrame();

  const setDraw = () => {
    const drawingCanvas = drawingCanvasRef.current;
    const drawingContext = drawingCanvas.getContext("2d");
    drawingContext.globalCompositeOperation = "source-over";
  };

  const handleSliderChange = (event, newValue) => {
    setBrushSize(newValue);
  };
  const handleOpen = (index) => {
    setSelectedFrame(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setErase = () => {
    const drawingCanvas = drawingCanvasRef.current;
    const drawingContext = drawingCanvas.getContext("2d");
    drawingContext.globalCompositeOperation = "destination-out";
  };

  const handleClearCanvas = () => {
    const drawingCanvas = drawingCanvasRef.current;
    const drawingContext = drawingCanvas.getContext("2d");
    drawingContext.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  };

  const closeEditBar=()=>{
    setEditBar(false)
  }
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ padding: "10px", height: "80vh", overflowY: "scroll" }}
      >
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
                      src={frame.framesUrl[0]}
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
                        <CircleButton
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          sx={{
                            marginTop: "60px",
                            backgroundColor: "greys.darkest",
                          }}
                        >
                          <img
                            src={LeftArrowIcon}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </CircleButton>
                        <CircleButton
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadImage(frame.framesUrl[0], frame.colorType);
                          }}
                          sx={{ marginTop: "60px" }}
                        >
                          <img
                            src={DownloadIcon}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </CircleButton>
                      </LeftButtonContainer>
                      <RightButtonContainer>
                        <CircleButton>
                          <img
                            src={EditIcon}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </CircleButton>
                        <CircleButton
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          sx={{
                            marginTop: "60px",
                            backgroundColor: "greys.darkest",
                          }}
                        >
                          <img
                            src={RighttArrowIcon}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </CircleButton>
                        <CircleButton
                          sx={{ marginTop: "60px" }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <img
                            src={DeleteIcon}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </CircleButton>
                      </RightButtonContainer>
                    </Overlay>
                  </div>
                  <Box
                    sx={{
                      mt: 1,
                      backgroundColor: "white",
                      paddingX: "10px",
                      border: "1px solid #F1F1F1",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      variant="body"
                      component="div"
                      gutterBottom
                      style={{
                        marginTop: "5px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#BEBEBE",
                      }}
                    >
                      Prompt
                    </Typography>
                    <Typography
                      className="limit_lines"
                      variant="body"
                      component="div"
                      gutterBottom
                      style={{
                        marginTop: "5px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#4D4D4D",
                      }}
                    >
                      {frame.prompt}
                    </Typography>
                  </Box>
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

                  <Box
                    sx={{
                      mt: 1,
                      backgroundColor: "white",
                      paddingX: "10px",
                      border: "1px solid #F1F1F1",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      variant="body"
                      component="div"
                      gutterBottom
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#BEBEBE",
                      }}
                    >
                      Prompt
                    </Typography>
                    <Skeleton
                      sx={{ borderRadius: 2, mb: 1 }}
                      variant="rectangular"
                      width={"100%"}
                      height={54}
                    />
                  </Box>
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
                <FrameLeftPanel sceneData={sceneData} />
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
                />
                {/* edit bar */}
                <Box sx={{ width: "20%" }}>
                  {isEditBarOpen && (
                    <>
                      <Box
                        sx={{
                          bgcolor: "white",
                          borderRadius: "12px",
                          p: 2,
                        }}
                      >
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
                          >
                            Edit Image
                          </Typography>
                          <IconButton
                            onClick={closeEditBar}
                            sx={{ top: "-10px" }}
                          >
                            <Close />
                          </IconButton>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                            gap: "8px",
                            mb: 2,
                          }}
                        >
                          <Button
                            onClick={() => {
                              setDrawBtnClicked(true);
                              setDraw();
                            }}
                            sx={{
                              bgcolor: "greys.lighter",
                              borderRadius: "8px",
                              padding: "8px",
                              width: "fit-content",
                              minWidth: "fit-content",
                            }}
                          >
                            <img
                              src={DrawIcon}
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Button>
                          <Button
                            onClick={setErase}
                            sx={{
                              bgcolor: "greys.lighter",
                              borderRadius: "8px",
                              padding: "8px",
                              width: "fit-content",
                              minWidth: "fit-content",
                            }}
                          >
                            <img
                              src={EraseIcon}
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Button>
                          <Button
                            onClick={() => setSettingBar(true)}
                            sx={{
                              bgcolor: "greys.lighter",
                              borderRadius: "8px",
                              padding: "8px",
                              width: "fit-content",
                              minWidth: "fit-content",
                            }}
                          >
                            <img
                              src={SettingsIcon}
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Button>
                          <Button
                            onClick={handleClearCanvas}
                            sx={{
                              bgcolor: "greys.lighter",
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
                        <FrameEditMainComponent frameData={frameData} selectedFrame={selectedFrame} closeEditBar={closeEditBar}/>
                      </Box>
                      {isSettingOpen && (
                        <Box sx={{ position: "relative" }}>
                          <Box
                            sx={{
                              bgcolor: "white",
                              borderRadius: "8px",
                              mt: 2,
                              px: 3,
                              py: 2,
                              position: "absolute",
                              width: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1,
                              }}
                            >
                              <Box>
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
                              <IconButton
                                onClick={() => setSettingBar(false)}
                                sx={{ top: "0px" }}
                              >
                                <Close sx={{ width: "20px" }} />
                              </IconButton>
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
                          </Box>
                        </Box>
                      )}
                    </>
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
                />
              </Box>
            </>
          }
        </Box>
      </Modal>
    </div>
  );
};

export default FramesGrid;
