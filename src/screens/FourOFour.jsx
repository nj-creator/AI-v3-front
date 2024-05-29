import { Box, Typography, styled } from "@mui/material";
import Header from "../components/Header.jsx";

// Custom styled component for the clipped 4 digits
const ClippedFour = styled('span')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

});

const FourOFour = () => {
  return (
    <Box>
      <Box height={"100vh"} bgcolor={"text.light"} position="relative" overflow= 'hidden'>

        {/* Custom styled component for the clipped 4 digits */}
        <ClippedFour>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif', // Use Montserrat font
              fontSize: '900px',
              fontWeight: "500",
              color: 'primary.lightest',
            }}
            variant="subtitle1"
          >
            404
          </Typography>
        </ClippedFour>
        <Box height={"100%"} width={"100%"} position="absolute" alignContent="center">
          <Typography variant="body1" sx={{ fontSize: '32px', fontWeight: "500", color: 'primary.main', textAlign: 'center'}}>
            404
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: "400", color: '#A27D71', textAlign: 'center', mt:1}}>
            Sorry we couldn't find this page
          </Typography>
          <Typography variant="body1" sx={{ fontFamily:'Sacramento' ,fontSize: '32px', fontWeight: "500", color: 'primary.main', textAlign: 'center', mt:1}}>
            Go Back
          </Typography>
        </Box>

        <Box height={"100%"} width={"100%"} position="absolute" alignContent="end">
          <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: "500", color: '#A27D71', textAlign: 'center', mt:1}}>
              THE PAGE YOU ARE LOOKING FOR DOES
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: "500", color: '#A27D71', textAlign: 'center', mb:3}}>
              NOT EXIST OR AN OTHER ERROR OCCURED
          </Typography>
        </Box>

        <Header/>
      </Box>
    </Box>
  );
};

export default FourOFour;