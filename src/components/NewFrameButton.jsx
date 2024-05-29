import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { Box, Grid, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import EnterScriptIcon from "../Assets/Images/enterscripticon.png";
import InfoIcon from "../Assets/Images/info.png";
import LocationIcon from "../Assets/Images/location.png";
import FilmRoleIcon from "../Assets/Images/filmrole.png";
import PalleteIcon from "../Assets/Images/pallete.png";
import FramesIcon from "../Assets/Images/frames.png"
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "720px",
    height: "660px",
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
  };

  const NewFrameButton= () => {



    return (
      <>
        <Button sx={{ padding:"10px 16px 10px 16px",borderRadius: 24, height: 38, bgcolor: 'primary.dark', marginRight: 3, color:'text.light', '&:hover': { backgroundColor: 'primary.light'} }}>
            <span style={{fontSize:"24px", fontWeight:"400"}}> + </span> &nbsp; Add Frame
          </Button>

      </>
    );
  }
  
  export default NewFrameButton;
