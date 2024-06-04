import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useProject } from "../hooks/useProject";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { stylesData } from "../Data/dropdownData";
import { useNavigate } from "react-router-dom";
import checkTrial from "../hooks/checkTrial";
import SubscriptionModal from "./SubscriptionModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "650px",
  height: "560px",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const NewProjectButton = ({loading,setLoading}) => {
  const [open, setOpen] = React.useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const navigate = useNavigate();
  const handleOpen = async () => {
    const isTrialComplete=await checkTrial("project")
    // if (!isTrialComplete) {
      setOpen(true)
    // }else{
    //   console.log("free trial completed");
    //   setShowSubscriptionModal(true);
    // }
  };
  const handleClose = () => {
    setOpen(false);
    setFormData({
      name: "",
      style: "cinematic",
      aspectRatio: "16:9",
    });
  };

  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const { createProject, isLoading, isError, errorMessage } = useProject();
  const [navData,setNavData]=useState({id:"",name:""})

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => {
        clearTimeout(timer)
        navigate(`/project/${navData.id}?title=${navData.name}`)
      };
    }
  }, [loading]);

  useEffect(() => {
    setErrorSnackbar(isError);
  }, [isError]);

  const [formData, setFormData] = useState({
    name: "",
    style: "cinematic",
    aspectRatio: "16:9",
  });

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          borderRadius: 24,
          width: 139,
          height: 40,
          bgcolor: "primary.dark",
          marginRight: 3,
          color: "text.light",
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        <span style={{ fontSize: "24px", fontWeight: "400" }}> + </span> &nbsp;
         New Project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "secondary.dark",
                }}
              >
                New Project
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ top: "-10px" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
            >
              Project name
            </Typography>
            <TextField
              autoFocus
              fullWidth
              value={formData.name}
              variant="outlined"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter a title of your project"
              InputProps={{
                sx: { height: "42px", borderRadius: "12px", marginTop: 2 },
              }}
            />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            marginTop={4}
            marginBottom={1.5}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.dark",
              }}
              variant="subtitle1"
              gutterBottom
            >
              Art Style
            </Typography>
            <Typography variant="caption" color={"primary.main"}>
              (Coming Soon)
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {stylesData.map((item, idx) => (
              <Grid key={idx} item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: 256,
                      height: 168,
                      bgcolor: "text.light",
                      borderRadius: "16px",
                      marginBottom: 1,
                      border:
                        formData.style == item.value ? "2px solid #FF3C00" : "",
                      padding: 0.5,
                      opacity: formData.style == item.value ? 1 : 0.5,
                    }}
                  />
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      color:
                        formData.style == item.value ? "#201612" : "#98A5A8",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "secondary.dark",
              marginTop: 3,
              marginBottom: 1.5,
            }}
            variant="subtitle1"
            gutterBottom
          >
            Aspect Ratio
          </Typography>

          <Box display={"flex"} gap={1}>
            {aspectRatioData.map((item, idx) => (
              <Box key={idx}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        aspectRatio: item.value,
                      }))
                    }
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 1,
                      padding: "8px 16px",

                      //   height: 46,
                      bgcolor: "white",
                      borderRadius: "16px",
                      color:
                        formData.aspectRatio === item.value
                          ? "primary.main"
                          : "text.main",
                      border:
                        formData.aspectRatio === item.value
                          ? "2px solid #FF3C00"
                          : "2px solid #F1F1F1",
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ color: "inherit" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box> */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              marginTop: 5,
            }}
          >
            <LoadingButton
              disabled={Object.values(formData).some((value) => value === "")}
              onClick={() => createProject(formData, handleClose,setLoading,setNavData)}
              variant="contained"
              color="primary"
              fullWidth
              loading={isLoading}
              loadingPosition="end"
              endIcon={<Save sx={{ display: "none" }} />}
              sx={{ borderRadius: 6 }}
            >
              {isLoading ? "Creating project" : "Create Project"}
            </LoadingButton>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={errorSnackbar}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert
          onClose={() => setErrorSnackbar(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
      {
        loading &&
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={2} sx={{position:"absolute",top:0,left:0,width:"100vw",height:"100vh"}}>
        <CircularProgress />
        <Typography color={"primary.light"}>Redirecting to scenes...</Typography>
      </Box>
      }
      <SubscriptionModal setShowSubscriptionModal={setShowSubscriptionModal} showSubscriptionModal={showSubscriptionModal}/>
    </>
  );
};

export default NewProjectButton;
