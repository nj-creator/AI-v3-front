import { Box, CircularProgress, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Loader = ({ loadigText = "Loading..." }) => {
  return (
    <Box
      height={"50vh"}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={2}
    >
      <CircularProgress />
      <Typography color={"primary.light"}>{loadigText}</Typography>
    </Box>
  );
};

export default Loader;
