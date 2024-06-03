import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import LogOutIcon from "../Assets/Images/log-out.png";
import HelpIcon from "../Assets/Images/help-circle.png";
import { Button, Typography } from '@mui/material';
import ExportPdfIcon from "../Assets/Images/pdf.png"
import ExportVideoIcon from "../Assets/Images/video.png"
import ExportZipIcon from "../Assets/Images/zip.png"
import DownloadCircleIcon from "../Assets/Images/download-circle.png"
import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { useFrame } from '../hooks/useFrame';
import { useSceneDetails } from '../hooks/useScene';
const ExportAllButton = () => {
  const { sceneDetails } = useSceneDetails();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {frameData}=useFrame()

  const downloadPDF = async () => {
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm" });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const imageWidth = pageWidth - 2 * margin;
    const spaceBeforeImage = 20; // Adjust this value to add space before the image

    for (let index = 0; index < frameData?.length; index++) {
      const scene = frameData[index];
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = scene.framesUrl[scene.activeUrl] + "?not-from-cache-please";

      await new Promise((resolve) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw the original image on the canvas
          ctx.filter = scene.colorType === "black&White" ? "grayscale(1)" : "grayscale(0)";
          ctx.drawImage(img, 0, 0);

          const imageAspectRatio = img.width / img.height;
          const availableWidth = pageWidth - 2 * margin;
          const availableHeight = pageHeight - 2 * margin - spaceBeforeImage;

          let width = imageWidth;
          let height = width / imageAspectRatio;

          // If the calculated height exceeds the available height, adjust the width and height
          if (height > availableHeight) {
            height = availableHeight;
            width = height * imageAspectRatio;
          }

          const spaceAvailable = availableWidth - width;
          const horizontalMargin = spaceAvailable / 2;
          const verticalMargin = (availableHeight - height) / 3;
          const xPos = margin + horizontalMargin;
          const yPos = verticalMargin + spaceBeforeImage;

          // Add a new page
          if (index !== 0) {
            pdf.addPage();
          }

          // Add the canvas image to the PDF
          pdf.addImage(canvas.toDataURL(), "JPEG", xPos, yPos, width, height);

          // Add title
          const titleY = yPos - 4; // Adjust the distance above the image
          pdf.text(" ", xPos, titleY, { align: "left" });

          // Add page number
          const pageNumberText = `${index + 1}/${frameData.length}`;
          const pageNumberX = pageWidth - margin;
          const pageNumberY = pageHeight - margin;
          pdf.text(pageNumberText, pageNumberX, pageNumberY, {
            align: "right",
          });

          resolve();
        };
      });
    }

    // Save the PDF after all scenes are added
    pdf.save(sceneDetails.title);
  };
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
        <MenuItem onClick={downloadPDF} sx={{ 'mt':1,display: 'flex',fontSize: '14px', color: 'greys.darkest' ,my:1}}>
            <img src={ExportPdfIcon} alt="Edit Icon" style={{width: "20px", height: "20px",marginRight:"15px" }} />
            Export as PDF
        </MenuItem>

        {/* <MenuItem onClick={handleClose} sx={{ 'mt':1,display: 'flex',fontSize: '14px', color: 'greys.darkest' ,borderBottom: '2px solid #f2f2f2'}}>
            <img src={ExportVideoIcon} alt="Edit Icon" style={{width: "20px", height: "20px",marginRight:"15px" }} />
            Export Video
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ 'mt':1, display: 'flex', fontSize: '14px', color: 'greys.darkest',borderBottom: '2px solid #f2f2f2' }}>
            <img src={ExportZipIcon} alt="Edit Icon" style={{width: "20px", height: "20px",marginRight:"15px" }} />
            Export as ZIP
        </MenuItem> */}



      </Popover>
    </>
  );
}

export default ExportAllButton;