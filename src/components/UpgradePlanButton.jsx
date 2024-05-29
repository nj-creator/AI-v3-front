
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { Box, Grid, ListItem, ListItemIcon, Modal,ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "650px",
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
  };

  const UpgradePlanButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [plan, setPlan] = useState('monthly');
    const [plantype,setPlantype] = useState('Pro');
    const handlePlanChange = (event, newPlan) => {
        if (newPlan !== null) {
          setPlan(newPlan);
        }
      };

    return (
      <>
        <Button onClick={handleOpen} variant="contained" color="primary"sx={{width:"297px",height:"36px", borderRadius:"24px", ml:1}}>
            Upgrade Plan
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2,  }}>
                    <Box>
                        <Typography variant="h5" gutterBottom sx={{fontSize:'18px', fontWeight:"500",color:'secondary.dark'}}>
                        Upgrade Plan
                        </Typography>
                    </Box>
                    <IconButton onClick={handleClose} sx={{top:'-10px'}}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center',  }}>
                    <Box sx={{width: '200px',
                    height: '40px',
                    borderRadius: '24px',
                    backgroundColor: 'greys.lightest',
                    padding:"4px"}}>

                        <ToggleButtonGroup
                            value={plan}
                            exclusive
                            onChange={handlePlanChange}

                        >
                            <ToggleButton value="monthly" sx={{ height:'32px',border:"0px", '&.Mui-selected': {
                                borderRadius: '24px',
                                border: '1px solid #E4E6EA', bgcolor:"#ffffff",
                                fontSize:'14px', fontWeight:"600",color:'secondary.dark'
                                }}}>
                                    Monthly
                                </ToggleButton>
                                <ToggleButton value="annual" sx={{  height:'32px',border:"0px",'&.Mui-selected': {
                                borderRadius: '24px',
                                border: '1px solid #E4E6EA', bgcolor:"#ffffff",
                                fontSize:'14px', fontWeight:"600",color:'secondary.dark'
                                }}}>
                                    <Typography variant="body1" sx={{ fontWeight:"600",display: 'inline-flex', alignItems: 'center' }}>
                                        Annual <Typography sx={{ fontSize: '14px', fontWeight: "600", color: 'primary.main', display: 'inline-flex', alignItems: 'center', marginLeft: 0.5 }}>-20% &nbsp;</Typography>
                                    </Typography>
                                </ToggleButton>
                            </ToggleButtonGroup>

                    </Box>

                </Box>

                <Grid container spacing={3} sx ={{marginTop:2,alignItems:"end"}}>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box  sx={{ padding:"24px 20px 24px 20px",width: 295, bgcolor: 'white', borderRadius: "16px", marginBottom: 1, border:'1px solid #F1F1F1' }}>
                                <Typography variant="h5" gutterBottom sx={{fontSize:'16px', fontWeight:"500",color:'secondary.dark'}}>
                                    PRO
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '44px', fontWeight: "500",display: 'inline-flex', alignItems: 'baseline' }}>
                                        $40 <Typography sx={{ fontSize: '14px', fontWeight: "400", color:"text.main" }}>/month</Typography>
                                </Typography>
                                <Button variant="contained" sx={{width:"100%",fontSize:"14px",fontWeight:"500",height:"44px", borderRadius:"24px", mt:3, bgcolor:"greys.lighter", color:"greys.light"}}>Active Plan</Button>
                                <Box sx={{
                                    mt:4,
                                    width: '100%', // Sets the width of the line to 100%
                                    height: '1px', // Sets the height of the line to 1px
                                    backgroundImage: 'linear-gradient(to right, #E4E4E4 50%, transparent 50%)', // Creates a dashed line effect
                                    backgroundSize: '12px 1px', // Adjusts the size of dashes
                                }}/>
                                <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: "500",color:"text.main",mt:2}}>
                                        The Pro Plan Includes
                                </Typography>

                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    200 mins/mo
                                </ListItem>
                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon  sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    Unlimited Content
                                </ListItem>
                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon  sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    Unlimited Audiograms
                                </ListItem>
                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon  sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    Magic Chat
                                </ListItem>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box  sx={{ padding:"24px 20px 24px 20px",width: 295, bgcolor: 'white', borderRadius: "16px", marginBottom: 1, border:'1px solid #F1F1F1', borderTop:"8px solid #FF3c00"}}>
                               <Box sx={{padding:"0px 6px 0px 6px",alignContent:"center", textAlign:"center",height:"16px",width:"97px",bgcolor:"primary.lightest", fontWeight:"600",fontSize:"12px", color:"primary.dark"}}> Most Popular </Box>
                                <Typography variant="h5" gutterBottom sx={{fontSize:'16px', fontWeight:"500",color:'secondary.dark', marginTop:"20px"}}>
                                    Enterprise
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '44px', fontWeight: "500",display: 'inline-flex', alignItems: 'baseline' }}>
                                        $100 <Typography sx={{ fontSize: '14px', fontWeight: "400", color:"text.main" }}>/month</Typography>
                                </Typography>
                                <Button variant="contained" sx={{width:"100%",fontSize:"14px",fontWeight:"500",height:"44px", borderRadius:"24px", mt:3, bgcolor:"secondary.dark", color:"white"}}>Upgrade Plan</Button>
                                <Box sx={{
                                    mt:4,
                                    width: '100%', // Sets the width of the line to 100%
                                    height: '1px', // Sets the height of the line to 1px
                                    backgroundImage: 'linear-gradient(to right, #E4E4E4 50%, transparent 50%)', // Creates a dashed line effect
                                    backgroundSize: '12px 1px', // Adjusts the size of dashes
                                }}/>

                                <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: "500",color:"text.main",mt:2}}>
                                        The Enterprise Plan Includes
                                </Typography>

                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    200 mins/mo
                                </ListItem>
                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon  sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    Unlimited Content
                                </ListItem>
                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon  sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    Unlimited Audiograms
                                </ListItem>
                                <ListItem disablePadding sx={{ fontSize: '14px', fontWeight: "500", color:"secondary.dark", mt:1}}>
                                    <ListItemIcon  sx= {{mr:-2}}>
                                        <CheckIcon/>
                                    </ListItemIcon>
                                    Magic Chat
                                </ListItem>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>

        </Modal>
      </>
    );
  }

  export default UpgradePlanButton;
