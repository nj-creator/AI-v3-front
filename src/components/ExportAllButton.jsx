import { useState } from 'react';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import LogOutIcon from "../Assets/Images/log-out.png";
import HelpIcon from "../Assets/Images/help-circle.png";
import { Button, Typography } from '@mui/material';
import ExportPdfIcon from "../Assets/Images/pdf.png"
import ExportVideoIcon from "../Assets/Images/video.png"
import ExportZipIcon from "../Assets/Images/zip.png"
import DownloadCircleIcon from "../Assets/Images/download-circle.png"

const ExportAllButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button onClick={handleMenuClick} sx={{ borderRadius: 24,height: 38, bgcolor: '#f1f1f1', fontSize:"14px", color:"greys.darkest", marginRight: 3}}>
            <img src={DownloadCircleIcon} alt="New Project Icon" style={{ marginRight: "10px", width: 20, height: 20 }} />
            Export All
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: {
            width: '176px',
            borderRadius: '20px',
          },
        }}
      >
        <MenuItem onClick={handleClose} sx={{ 'mt':1,display: 'flex',fontSize: '14px', color: 'greys.darkest' ,borderBottom: '2px solid #f2f2f2'}}>
            <img src={ExportPdfIcon} alt="Edit Icon" style={{width: "20px", height: "20px",marginRight:"15px" }} />
            Export as PDF
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ 'mt':1,display: 'flex',fontSize: '14px', color: 'greys.darkest' ,borderBottom: '2px solid #f2f2f2'}}>
            <img src={ExportVideoIcon} alt="Edit Icon" style={{width: "20px", height: "20px",marginRight:"15px" }} />
            Export Video
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ 'mt':1, display: 'flex', fontSize: '14px', color: 'greys.darkest',borderBottom: '2px solid #f2f2f2' }}>
            <img src={ExportZipIcon} alt="Edit Icon" style={{width: "20px", height: "20px",marginRight:"15px" }} />
            Export as ZIP
        </MenuItem>



      </Popover>
    </>
  );
}

export default ExportAllButton;