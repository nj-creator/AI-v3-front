import { Box } from "@mui/material";
import { useTheme } from "@mui/system"; // Import the useTheme hook

const FrameFooterPanel = ({ framesData, selectedFrame, setSelectedFrame }) => {
  const theme = useTheme(); // Get the theme

  // Calculate the start index based on the selectedFrame index
  const startIndex = Math.min(framesData.length - 3, selectedFrame);
  // Slice the framesData array to get the images starting from startIndex to startIndex + 3
  const visibleFrames = framesData.slice(startIndex, startIndex + 3);

  const handleImageClick = (index) => {
    // Update the selected frame index based on the clicked image index
    setSelectedFrame(startIndex + index);
  };

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
              src={frame.framesUrl[0]}
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
                border: isActive
                  ? `3px solid ${theme.palette.primary.main}`
                  : "none", // Conditional border
              }}
              onClick={() => handleImageClick(index)}
            />
          );
        })}
        <Box
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
