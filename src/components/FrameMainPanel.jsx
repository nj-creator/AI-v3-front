import { Box, Button, Typography, useTheme } from "@mui/material";
import LeftArrowIcon from "../Assets/Images/arrow-left-white.png";
import RighttArrowIcon from "../Assets/Images/arrow-right-white.png";
import EditIcon from "../Assets/Images/pencil.png";
import DeleteIcon from "../Assets/Images/delete.png";
import DownloadIcon from "../Assets/Images/download-circle.png";
import { useEffect, useState } from "react";
import { useFrame } from "../hooks/useFrame";

const FrameMainPanel = ({
  framesData,
  selectedFrame,
  setSelectedFrame,
  setEditBar,
  isEditBarOpen,
  setIsDrawing,
  isDrawing,
  drawButton,
  brushSize,
  drawingCanvasRef,
  imageCanvasRef,
  selectedFrameUrl,
  setSelectedFrameUrl
}) => {
  const {setActiveFrame}=useFrame()
  const theme = useTheme();
  const [canvasWH, setCanvasWidthHeight] = useState({ width: 0, height: 0 });
  const aspectRatioForImages = "1:1";
  const mainPanelStyle = {
    width: "50%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderRight: "1px solid #ddd",
    bgcolor: "white",
    borderRadius: "16px",
  };

  const handleBack = () => {
    if (selectedFrameUrl > 0) {
      setSelectedFrameUrl(selectedFrameUrl - 1);
    }
  };
  const handleNext = () => {
    if (selectedFrameUrl < framesData[selectedFrame].framesUrl.length - 1)
      setSelectedFrameUrl(selectedFrameUrl + 1);
  };

  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setIsDrawing(drawButton);
    setLastPos({ x: offsetX, y: offsetY });
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const drawingCanvas = drawingCanvasRef.current;
    const ctx = drawingCanvas.getContext("2d");
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();

    setLastPos({ x: offsetX, y: offsetY });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleSetActive=async()=>{
    await setActiveFrame({frame_id:framesData[selectedFrame]._id,active_id:selectedFrameUrl})
  }

  useEffect(() => {
    console.log(framesData,"framesData");
    console.log("useEffect called",selectedFrameUrl,selectedFrame);
  const imageCanvas = imageCanvasRef.current;
  const drawingCanvas = drawingCanvasRef.current;
  const ctx = imageCanvas.getContext("2d");
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src =
    framesData[selectedFrame]?.framesUrl[selectedFrameUrl] +
    "?not-from-cache-please";

  img.onload = () => {
    let canvasWidth;
    if (aspectRatioForImages === "16:9") {
      canvasWidth = 750;
    } else if (aspectRatioForImages === "9:16") {
      canvasWidth = 420;
    } else if (aspectRatioForImages === "4:3") {
      canvasWidth = 500;
    } else if (aspectRatioForImages === "3:2") {
      canvasWidth = 550;
    } else if (aspectRatioForImages === "1:1") {
      canvasWidth = 400;
    } else {
      canvasWidth = imageCanvas.parentElement.clientWidth;
    }
    const aspectRatio = img.width / img.height;
    const canvasHeight = canvasWidth / aspectRatio;
    setCanvasWidthHeight({ width: canvasWidth, height: canvasHeight });

    imageCanvas.width = canvasWidth;
    imageCanvas.height = canvasHeight;
    drawingCanvas.width = canvasWidth;
    drawingCanvas.height = canvasHeight;

    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
  };

  img.onerror = () => {
    console.error("Error loading image:", img.src);
  };

  const resizeCanvases = () => {
    if (img.complete) {
      img.onload();
    }
  };

  window.addEventListener("resize", resizeCanvases);

  return () => {
    window.removeEventListener("resize", resizeCanvases);
  };
  }, [
  framesData,
  selectedFrame,
  drawingCanvasRef,
  imageCanvasRef,
  aspectRatioForImages,
  selectedFrameUrl,
  ]);
  return (
    <Box sx={mainPanelStyle}>
      <Box sx={{ position: "relative", marginTop: "10px" }}>

        {/* Current frame / total frame display */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 30%)", // Center align
            textAlign: "center",
          }}
        >
          Frame {selectedFrame + 1} / {framesData.length}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          marginTop: "40px",
          width: "100%",
          height: "fit-content",
          marginX: "auto",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
         <Button
          variant="contained"
          disabled={selectedFrame===0}
          onClick={() => {
            selectedFrame > 0 ? setSelectedFrame(selectedFrame - 1) : null;
            setSelectedFrameUrl(framesData[selectedFrame-1].activeUrl);
          }}
          sx={{
            position: "absolute",
            left: "0",
            top: "50%",
            bgcolor: "white",
            color: selectedFrame > 0 ? "black" : "greys.light",
            "&:hover": { bgcolor: "white" },
          }}
        >
          {/* <ArrowLeftIcon /> */}
          <img
            src={LeftArrowIcon}
            style={{
              width: "20px",
              height: "20px",
              filter: selectedFrame > 0 ? "invert(100%)" : "invert(50%)",
            }}
          />
        </Button>

        {/* Next button with right arrow */}
        <Button
          variant="contained"
          disabled={selectedFrame === framesData.length - 1}
          onClick={() => {
            selectedFrame < framesData.length - 1
              ? setSelectedFrame(selectedFrame + 1)
              : null;
            setSelectedFrameUrl(framesData[selectedFrame+1].activeUrl);

          }}
          sx={{
            position: "absolute",
            right: "0",
            top: "50%",
            bgcolor: "white",
            color:
              selectedFrame < framesData.length - 1 ? "black" : "greys.light",
            "&:hover": { bgcolor: "white" },
          }}
        >
          <img
            src={RighttArrowIcon}
            style={{
              width: "20px",
              height: "20px",
              filter:
                selectedFrame < framesData.length - 1
                  ? "invert(100%)"
                  : "invert(50%)",
            }}
          />
          {/* <ArrowRightIcon /> */}
        </Button>
        <div
          style={{
            position: "relative",
            width: canvasWH.width,
            height: canvasWH.height,
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <canvas
            ref={imageCanvasRef}
            id="imageCanvas"
            style={{ width: canvasWH.width, height: canvasWH.height }}
          />
          <canvas
            className={drawButton ? "cursor" : ""}
            ref={drawingCanvasRef}
            id="drawingCanvas"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
          />
          {/* <img
            src={framesData[selectedFrame].framesUrl[0]}
            alt={framesData[selectedFrame]["project name"]}
            style={{
              width: "100%",
              height: "100%",
              aspectRatio:"16/9",
              objectFit: "cover",
              filter: `grayscale(${
                framesData[selectedFrame].colorType === "black&White"
                  ? "1"
                  : "0"
              })`,
            }}
          /> */}
        <Box
          sx={{
            display: isEditBarOpen ? "none" : "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: canvasWH.width,
            height: canvasWH.height,
            borderRadius: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.3s",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Button
            onClick={handleSetActive}
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              bgcolor: selectedFrameUrl===framesData[selectedFrame]?.activeUrl?"white":"transparent",
              color: selectedFrameUrl===framesData[selectedFrame]?.activeUrl?"black":"white",
              borderRadius: "16px",
              fontSize: "14px",
              ":hover": { bgcolor: "white",color:"black" },
            }}
          >
            {selectedFrameUrl===framesData[selectedFrame]?.activeUrl?"Active":"Set as Active"}
          </Button>

          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "end",
            }}
          >
            <Button
              onClick={() => setEditBar(true)}
              sx={{
                bgcolor: "greys.darkest",
                color: "white",
                fontSize: "12px",
                borderRadius: "8px",
                "&:hover": { bgcolor: "greys.darker" },
                width: "fit-content",
              }}
            >
              <img
                src={EditIcon}
                style={{
                  width: "15px",
                  height: "15px",
                  filter: "invert(100%)",
                  marginRight: "10px",
                }}
              />
              Edit
            </Button>
            {/* <FrameEditButton frameData={framesData[selectedFrame]} /> */}
            <Button
              // onClick={handleDownload}
              sx={{
                bgcolor: "greys.darkest",
                color: "white",
                fontSize: "12px",
                borderRadius: "8px",
                "&:hover": { bgcolor: "greys.darker" },
                width: "fit-content",
              }}
            >
              <img
                src={DownloadIcon}
                style={{
                  width: "15px",
                  height: "15px",
                  filter: "invert(100%)",
                  marginRight: "10px",
                }}
              />
              Download
            </Button>
            <Button
              // onClick={handleDelete}
              sx={{
                bgcolor: "greys.darkest",
                color: "white",
                fontSize: "12px",
                borderRadius: "8px",
                "&:hover": { bgcolor: "greys.darker" },
                width: "fit-content",
              }}
            >
              <img
                src={DeleteIcon}
                style={{
                  width: "15px",
                  height: "15px",
                  filter: "invert(100%)",
                  marginRight: "10px",
                }}
              />
              Delete
            </Button>
          </Box>
          <Button
            onClick={handleBack}
            sx={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "black",
              borderRadius: "50%",
              minWidth: "40px",
              minHeight: "40px",
              display:
                framesData[selectedFrame].framesUrl.length === 0 ||
                selectedFrameUrl === 0
                  ? "none"
                  : "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { bgcolor: "greys.darker" },
            }}
          >
            <img
              src={LeftArrowIcon}
              style={{ width: "20px", height: "20px" }}
            />
          </Button>

          <Button
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "black",
              borderRadius: "50%",
              minWidth: "40px",
              minHeight: "40px",
              display:
                framesData[selectedFrame].framesUrl.length === 0 ||
                selectedFrameUrl ===
                  framesData[selectedFrame].framesUrl.length - 1
                  ? "none"
                  : "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { bgcolor: "greys.darker" },
            }}
          >
            <img
              src={RighttArrowIcon}
              style={{ width: "20px", height: "20px" }}
            />
          </Button>
          <Box
            sx={{
              position: "absolute",
              bottom: 15,
              transform: "translateX(-50%)",
              left: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 1,
              gap: 1,
            }}
          >
            {framesData[selectedFrame].framesUrl.map((item, inx) => (
              <Box
                key={inx}
                onClick={() => setSelectedFrameUrl(inx)}
                bgcolor={
                  selectedFrameUrl === inx
                    ? theme.palette.primary.main
                    : theme.palette.grey[500]
                }
                sx={{ height: 10, width: 10, borderRadius: "50%" }}
              />
            ))}
          </Box>
        </Box>
        </div>
      </Box>

      <Box
        sx={{
          mt: 1,
          backgroundColor: "white",
          paddingLeft: "10px",
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
          variant="body"
          component="div"
          gutterBottom
          style={{
            marginTop: "5px",
            fontSize: "12px",
            fontWeight: "500",
            color: "#4D4D4D",
            height: "52px",
            overflowY: "scroll",
          }}
        >
          {framesData[selectedFrame].prompt}
        </Typography>
      </Box>
    </Box>
  );
};

export default FrameMainPanel;
