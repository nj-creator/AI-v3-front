
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from "../Assets/Images/delete.png";
import Button from '@mui/material/Button';
import GroupIcon from '../Assets/Images/Group.png';
import { Box, Modal, Slider, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "650px",
    height: "359px",
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
  };

  const CreditsButton = () => {
    const [open, setOpen] = React.useState(false);
    const [credits, setCredits] = useState(10);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSliderChange = (event, newValue) => {
        setCredits(newValue);
      };
  
    return (
      <>
        <Button onClick={handleOpen} sx={{ borderRadius: 24, width: 75, height: 40, bgcolor: 'primary.lightest', marginRight: 3 }}>
          <img src={GroupIcon} alt="New Project Icon" style={{ marginRight: 5, width: 20, height: 20 }} />
          16
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box>
                        <Typography variant="h5" gutterBottom sx={{fontSize:'18px', fontWeight:"500",color:'secondary.dark'}}>
                        Add Credits
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{fontSize:'14px', fontWeight:"400",color:'text.main'}}>
                        Short on credits? Buy more now.
                        </Typography>
                    </Box>
                    <IconButton onClick={handleClose} sx={{top:'-10px'}}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{padding:"24px", bgcolor:"greys.lightest"}}>
                    <Typography variant="body1" id="modal-modal-description" sx={{fontSize:'14px', fontWeight:"500",color:'secondary.dark'}}>
                        Slide to buy credits
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <Slider
                        value={credits}
                        onChange={handleSliderChange}
                        //   aria-labelledby="discrete-slider"
                        //   valueLabelDisplay="auto"
                        step={1}
                        min={0}
                        max={100}
                        sx={{
                            marginTop:"10px",
                            '& .MuiSlider-rail': {
                            backgroundColor: 'primary.lightest' // Change the color of the slider track
                            },
                            '& .MuiSlider-thumb': {
                                    width:"15px",
                                    height:"15px"
                                }
                        }}
                        />
                        <Box sx={{ bgcolor: 'background.paper', borderRadius: "8px", width:"35px", height:"38px",border: '1px solid #ccc', textAlign: 'center', paddingTop:"8px", marginLeft: 2,marginRight: 1  }}>
                            <Typography variant="body1" sx={{fontSize:'14px', fontWeight:"600",color:'greys.darker'}}>{credits}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{fontSize:'14px', fontWeight:"500",color:'greys.main'}}>credits</Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{fontSize:'14px', fontWeight:"500",color:'text.main', marginTop:"30px"}}>
                        You need 1 credit for each frame generation
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="outlined" onClick={handleClose} sx={{width:"297px", height:"36px", borderRadius:"24px", border:"1px solid #f1f1f1", color:"secondary.dark", mr:1}}>Cancel</Button>
                    <Button variant="contained" color="primary"sx={{width:"297px",height:"36px", borderRadius:"24px", ml:1}}>Buy Credits</Button>
                </Box>

            </Box>

        </Modal>
      </>
    );
  }
  
  export default CreditsButton;
