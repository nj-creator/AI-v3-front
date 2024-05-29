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
    height: "640px",
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
  };

  const NewCharacterButton = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [gender, setGender] = React.useState("Female");
    const handleGenderChange = (event) => {
        setGender(event.target.value);
      };

    const [age, setAge] = React.useState("Adult");
    const handleAgeChange = (event) => {
          setAge(event.target.value);
        };


    return (
      <>
        <Button onClick={handleOpen} sx={{ padding:"10px 16px 10px 16px",borderRadius: 24, height: 40, bgcolor: 'primary.dark', marginRight: 3, color:'text.light', '&:hover': { backgroundColor: 'primary.light'} }}>
            <span style={{fontSize:"24px", fontWeight:"400"}}> + </span> &nbsp; Create new character
          </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Box>
                        <Typography variant="h5" gutterBottom sx={{fontSize:'18px', fontWeight:"500",color:'secondary.dark'}}>
                        New Character
                        </Typography>
                    </Box>
                    <IconButton onClick={handleClose} sx={{top:'-10px'}}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.2 }}>
                    <Typography sx={{fontSize:'14px', fontWeight:"500",color:'secondary.dark'}} variant="subtitle1" display="flex" alignItems="center">
                       Character Gender
                    </Typography>

                    <Select
                        value={gender}
                        onChange={handleGenderChange}
                        sx={{ fontSize:'14px', fontWeight: '500', boxShadow: 'none','.MuiOutlinedInput-notchedOutline': { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            border: 0,
                        },  }}

                    >
                        <MenuItem value="Female" sx={{ fontSize:'14px' }}>
                            Female
                        </MenuItem>
                        <MenuItem value="Male" sx={{ fontSize:'14px' }}>
                            Male
                        </MenuItem>
                    </Select>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb:2 }}>
                    <Typography sx={{fontSize:'14px', fontWeight:"500",color:'secondary.dark'}} variant="subtitle1" display="flex" alignItems="center">
                        Character Age
                    </Typography>


                    <Select
                        value={age}
                        onChange={handleAgeChange}
                        sx={{ fontSize:'14px', fontWeight: '500', boxShadow: 'none','.MuiOutlinedInput-notchedOutline': { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            border: 0,
                        },  }}

                    >
                        <MenuItem value="Toddler" sx={{ fontSize:'14px' }}>
                            Toddler
                        </MenuItem>

                        <MenuItem value="Child" sx={{ fontSize:'14px' }}>
                            Child
                        </MenuItem>

                        <MenuItem value="Teen" sx={{ fontSize:'14px' }}>
                            Teen
                        </MenuItem>

                        <MenuItem value="Adult" sx={{ fontSize:'14px' }}>
                            Adult
                        </MenuItem>

                        <MenuItem value="Senior Adult" sx={{ fontSize:'14px' }}>
                            Senior Adult
                        </MenuItem>

                    </Select>

                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography sx={{fontSize:'14px', fontWeight:"500",color:'secondary.dark'}}>Character Name</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Enter name of your character"
                        InputProps={{ sx: { height:"42px", borderRadius:"12px",marginTop:1 } }}
                    />
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography sx={{fontSize:'14px', fontWeight:"500",color:'secondary.dark'}} variant="subtitle1" display="flex" alignItems="center">
                        Define the Character
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        variant="outlined"
                        rows={3}
                        placeholder="Define character properties and sketch its look    "
                        InputProps={{ sx: { height:"80px", borderRadius:"12px",marginTop:1, fontSize:"14px" } }}
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={{fontSize:'14px', fontWeight:"500",color:'secondary.dark'}} variant="subtitle1" display="flex" alignItems="center">
                        Negative prompt
                        <Box sx={{ flexGrow: 1 }} /> {/* To push Icon2 to the right */}
                        <Tooltip  title="Describe negative prompt as thing you don't need in the frame"
                            arrow
                            placement="left" // Change the tooltip position
                            sx={{ backgroundColor: 'black', color: 'white' }}>
                         <img src={InfoIcon} alt="Icon2" style={{ width:"16px" }}/>
                        </Tooltip>
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        variant="outlined"
                        rows={4}
                        placeholder="Any thing you would like the character not to have "
                        InputProps={{ sx: { height:"100px", borderRadius:"12px",marginTop:1, fontSize:"14px" } }}
                    />
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, marginTop:1 }}>
                    <Button variant="contained" color="primary"sx={{width:"610px",height:"36px", borderRadius:"24px", ml:1}}>Generate the character</Button>
                </Box>

            </Box>

        </Modal>
      </>
    );
  }

  export default NewCharacterButton;
