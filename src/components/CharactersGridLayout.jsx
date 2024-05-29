import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const CharacterGrid = ({ projectData }) => {
  return (
    <Grid container spacing={2}>
      {projectData.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 'none',
              border: 'none',
              borderRadius: 'none',
              bgcolor: 'transparent',
            }}
          >
            <CardContent sx={{ position: 'relative', textAlign: 'center'}}>
              {/* Thumbnail */}
              <div style={{ width: '188px', height: '188px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                <img src={project.image} alt={project["character name"]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>{/* Title */}
              <Typography style={{ marginTop: '10px', fontSize: "18px" }}>
                {project["character name"]}
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CharacterGrid;