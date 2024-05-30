import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/system"; // Import the useTheme hook

const FrameFooterPanel = ({ framesData, selectedFrame, setSelectedFrame,setRegenerateScene,isRegenerateScene }) => {
  const theme = useTheme(); // Get the theme

  // Calculate the start index based on the selectedFrame index
  const startIndex = Math.min(framesData.length - 3, selectedFrame);
  // Slice the framesData array to get the images starting from startIndex to startIndex + 3
  const visibleFrames = framesData.slice((isRegenerateScene?framesData.length-2:startIndex), (isRegenerateScene?framesData.length:startIndex + 3));

  const handleImageClick = (index) => {
    // Update the selected frame index based on the clicked image index
    setSelectedFrame(startIndex + index);
    setRegenerateScene(false);
  };

  const handleRegenerateScene=()=>{
    setRegenerateScene(true);
  }
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "25%",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {visibleFrames.map((frame, index) => {
          const isActive = selectedFrame === startIndex + index;
          return (
            <img
              key={index}
              src={frame.framesUrl[frame.activeUrl]}
              alt={`Image ${index + 1}`}
              style={{
                filter: `grayscale(${
                  frame.colorType === "black&White" ? "1" : "0"
                })`,
                width: "80px",
                height: "80px",
                objectFit: "cover", // Ensure the image doesn't stretch
                borderRadius: "8px",
                cursor: "pointer", // Add cursor pointer
                padding: "2px",
                border: isActive && !isRegenerateScene
                  ? `3px solid ${theme.palette.primary.main}`
                  : "none", // Conditional border,
                opacity:isRegenerateScene?".5":"1"
              }}
              onClick={() => isRegenerateScene?null:handleImageClick(index)}
            />
          );
        })}
        {
          isRegenerateScene && 
          <Box sx={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            cursor: "pointer",
            padding: "2px",
            backgroundColor: "greys.lighter",
            border: isRegenerateScene
              ? `3px solid ${theme.palette.primary.main}`
              : "none",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <IconButton onClick={()=>setRegenerateScene(false)}><Close fontSize="small"/></IconButton>
          </Box>
        }
        <Box
        onClick={handleRegenerateScene}
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "greys.lighter",
            cursor: "pointer",
            fontSize: "24px",
            color: "greys.darker",
          }}
        >
          +
        </Box>
      </Box>
    </Box>
  );
};

export default FrameFooterPanel;
