import { Box, Divider, IconButton, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import EnterScriptIcon from "../Assets/Images/enterscripticon.png";
import { inpaintingTypeData } from '../Data/dropdownData';
import { Close, KeyboardArrowDown, Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const GeneralMainPanel = () => {
    const [formDate,setFormData]=useState({
        prompt:"",
        options:"",
        style:"sketch",
        image:""
    })
    const [loading,setLoading]=useState(false);
    const handleChange=(e)=>{
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleImage=(e)=>{
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setFormData(prev=>({...prev,image:reader.result}))
        }
    }
    const handleGenerateClick=()=>{
        console.log(formDate);
    }
  return (
    <Box>
        <Box>
            <Box sx={{ py: 2 }}>
            <Typography
                sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
                }}
                variant="subtitle1"
                display="flex"
                alignItems="center"
            >
                <img
                src={EnterScriptIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
                />
                Prompt
            </Typography>
            <TextField
                name="prompt"
                fullWidth
                placeholder="Enter the description"
                multiline
                variant="outlined"
                rows={3}
                onChange={handleChange}
                // value={}
                InputProps={{
                sx: {
                    bgcolor: "greys.lighter",
                    borderRadius: "12px",
                    marginTop: 1,
                    fontSize: "14px",
                    color: "greys.darkest",
                    "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    },
                },
                }}
            />
            </Box>

            <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
        </Box>
        <Box>
            <Box sx={{ py: 2 }}>
            <Typography
                sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
                }}
                variant="subtitle1"
                display="flex"
                alignItems="center"
            >
                <img
                src={EnterScriptIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
                />
                Edit options
            </Typography>
            <Select
                value={formDate.options}
                name='options'
                onChange={handleChange}
                displayEmpty
                fullWidth
                placeholder="select"
                InputProps={{
                style: {
                    padding: "0px",
                },
                }}
                sx={{
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "none",
                border: "none",
                "& .MuiOutlinedInput-input": {
                    padding: 0,
                },
                ".MuiOutlinedInput-notchedOutline": {
                    border: 0,
                },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                    border: 0,
                    },
                "& .MuiSelect-icon": {
                    transform: "rotate(0deg)",
                },
                bgcolor:"grey.200",
                py:1,
                px:2,
                mt:1,
                borderRadius:5
                }}
                IconComponent={KeyboardArrowDown}
            >
                <MenuItem value="">Select</MenuItem>
                {inpaintingTypeData.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>
                    {item.title}
                </MenuItem>
                ))}
            </Select>
            </Box>

            <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
      </Box>
      <Box>
            <Box sx={{ py: 2 }}>
            <Typography
                sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
                }}
                variant="subtitle1"
                display="flex"
                alignItems="center"
            >
                <img
                src={EnterScriptIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
                />
                Default Style
            </Typography>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} py={1}>
                <Typography 
                    onClick={()=>setFormData(prev=>({...prev,style:"sketch"}))} 
                    sx={{
                        border:"1px solid",
                        borderTopLeftRadius:"12px",
                        borderBottomLeftRadius:"12px",
                        width:"40%",
                        borderColor:"grey.300",
                        cursor:"pointer",
                        bgcolor:formDate.style==="sketch"?"black":"grey.300",
                        color:formDate.style==="sketch"?"white":"black",
                        fontSize:"15px",
                        textAlign:"center"
                    }}
                >
                    Sketch
                </Typography>
                <Typography 
                    onClick={()=>setFormData(prev=>({...prev,style:"cinematic"}))} 
                    sx={{
                        border:"1px solid",
                        borderTopRightRadius:"12px",
                        borderBottomRightRadius:"12px",
                        width:"40%",
                        borderColor:"grey.300",
                        cursor:"pointer",
                        bgcolor:formDate.style==="cinematic"?"black":"grey.300",
                        color:formDate.style==="cinematic"?"white":"black",
                        fontSize:"15px",
                        textAlign:"center"
                    }}
                >
                    Cinematic
                </Typography>
            </Box>
            
            </Box>

            <Divider sx={{ backgroundColor: "#F1F1F1", width: "100%" }} />
    </Box>
      <Box>
            <Box sx={{ py: 2 }}>
            <Typography
                sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
                }}
                variant="subtitle1"
                display="flex"
                alignItems="center"
            >
                <img
                src={EnterScriptIcon}
                alt="Icon1"
                style={{ marginRight: "8px", width: "16px" }}
                />
                Upload Image
            </Typography>
            <Box
            component={ formDate.image.length === 0 ?"label":"div"}
            sx={{
                width:"100%",
                aspectRatio:"5/3",
                bgcolor:"grey.300",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:5,
                mt:1,
                color:"grey.700",
                fontSize:"14px",
                cursor:formDate.image.length === 0 ?"pointer":"default",
                overflow:"hidden",
                position:"relative",
            }}>
                {
                    formDate.image.length === 0 ?
                    <>
                        Upload Image
                        <VisuallyHiddenInput onClick={(e)=>{e.target.value=""}} onChange={handleImage} type='file'/>
                    </>:
                    <>
                        <img src={formDate.image} alt='image' style={{objectFit:"cover",width:"100%"}}/>
                        <IconButton onClick={(e)=>{
                            setFormData(prev=>({...prev,image:""}))
                            }} size='small' color='primary' sx={{position:"absolute",top:6,right:7}}><Close  fontSize='small'/></IconButton>
                    </>
                }
            </Box>
            </Box>
    </Box>
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LoadingButton
          disabled={
            formDate.prompt === "" || formDate.image === "" || formDate.options === "" || formDate.style === ""
          }
          onClick={handleGenerateClick}
          variant="contained"
          color="primary"
          fullWidth
          loading={loading}
          loadingPosition="end"
          endIcon={<Save sx={{ display: "none" }} />}
          sx={{ borderRadius: 6 }}
        >
          {loading ? "Generating" : "Generate"}
        </LoadingButton>
      </Box>
      

    </Box>
  )
}

export default GeneralMainPanel
