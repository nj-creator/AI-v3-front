import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, alpha, useTheme } from '@mui/material';
import { Groups } from '@mui/icons-material';


const CharacterGrid = ({ projectData }) => {
  const theme=useTheme()
  return (
    <Box display={"flex"} flexDirection={"column"} height={"70vh"} alignItems={"center"} justifyContent={"center"} sx={{color:alpha(theme.palette.primary.light,1)}}>
      <Groups sx={{fontSize:"65px"}}/>
      <Typography variant='h4' sx={{color:alpha(theme.palette.primary.light,.5)}}>Coming Soon...</Typography>
    </Box>
    // <Grid container spacing={2} height={"70vh"} alignItems={"center"} justifyContent={"center"}>
      // {projectData.map((project, index) => (
      //   <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
      //     <Card
      //       variant="outlined"
      //       sx={{
      //         boxShadow: 'none',
      //         border: 'none',
      //         borderRadius: 'none',
      //         bgcolor: 'transparent',
      //       }}
      //     >
      //       <CardContent sx={{ position: 'relative', textAlign: 'center'}}>
      //         <div style={{ width: '188px', height: '188px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
      //           <img src={project.image} alt={project["character name"]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      //         </div>
      //         <Typography style={{ marginTop: '10px', fontSize: "18px" }}>
      //           {project["character name"]}
      //         </Typography>

      //       </CardContent>
      //     </Card>
      //   </Grid>
      // ))}
    // </Grid>
  );
}

export default CharacterGrid;