import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'
import { postData } from '../utils/serverHelper';
import { useAuth } from '../hooks/useAuth';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "500px",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 3,
};
const SubscriptionModal = ({setShowSubscriptionModal,showSubscriptionModal}) => {
    const handleClose=()=>setShowSubscriptionModal(false);
    const {user}=useAuth();
    const handleRedirectToPayment=async()=>{
        try {
        const data=await postData("/subscription/checkout",{ customerId:user.stripeCustomerId, priceId:"price_1PNxImAsxEEeEMz6l0TMUHL6" }) 
        window.location.replace(data?.checkoutUrl)
        } catch (error) {
            console.log(error,"error while doing payment");
        }
    }
  return (
    <Modal open={showSubscriptionModal}>
        <Box sx={style}>
            <Box width={"100%"} height={"100%"} position={"relative"}>
            <IconButton onClick={handleClose} sx={{position:"absolute",top:2,right:3}}>
              <Close />
            </IconButton>
          <Box width={"100%"} height={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={2}>
              <Typography
                // gutterBottom
                sx={{
                    fontSize: "28px",
                    color: "secondary.dark",
                }}
                >
                Subscribe to Continue...
              </Typography>
              <Typography
                  gutterBottom
                sx={{
                  fontSize: "16px",
                  color: "secondary.dark",
                  textAlign:"center"
                }}
              >
                Your free trial has ended. To continue using our services, please consider purchasing a subscription.
              </Typography>
            <Button variant='contained' onClick={handleRedirectToPayment}>
             Subscribe Now
            </Button>
          </Box>
          </Box>
        </Box>
    </Modal>
  )
}

export default SubscriptionModal
