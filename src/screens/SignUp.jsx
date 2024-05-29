import { Box, Button, TextField, Typography, FormHelperText, Divider } from "@mui/material";
import logo from "../Assets/Images/Logo.png";
import EmailIcon from '../Assets/Images/mail.png';
import AccountIcon from '../Assets/Images/account.png';
import LockIcon from '../Assets/Images/password.png';
import GoogleIcon from '../Assets/Images/google.png'
import { useState } from "react";

const SignUp = () => {
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const validateEmail = (email) => {
    // Example of email validation
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    // Example of password validation
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    // Example of confirm password validation
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
    }
    // else if (confirmPassword !== password) {
    //   setConfirmPasswordError('Passwords do not match');
    // }
    else {
      setConfirmPasswordError('');
    }
  };

  return (
    <Box height={"100vh"} bgcolor={"greys.lightest"} display="flex" justifyContent="center" alignItems="center">
      <Box width={400} textAlign="center">
        <img src={logo} alt="Logo" style={{ width: "100px", marginBottom: "12px", filter: 'invert(1)' }} />
        <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: "500", color: 'greys.darkest', marginBottom: "40px" }}>
          Login or register with your email
        </Typography>

        {/* Google sign in button */}
        <Button variant="outlined" sx={{ width: "400px", height: "46px", borderRadius: "24px", bgcolor: "text.lightest", border: "1px solid #f1f1f1", color: "secondary.dark", mb: "16px" }}
        startIcon={<img src={GoogleIcon} alt="Logo" style={{ width: "16px" }} />}>
          Sign up with google
        </Button>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', width: '100%' }}>
          <Divider sx={{ backgroundColor: '#f1f1f1', width: '240px' }} />
        </Box>

        {/* Email and password input fields */}
        <Box sx={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            placeholder="Name"
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <img src={AccountIcon} alt="Logo" style={{ width: "16px" }} />
                </Box>
              )
            }}
          />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            placeholder="Email"
            onChange={(e) => validateEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <img src={EmailIcon} alt="Logo" style={{ width: "16px" }} />
                </Box>
              )
            }}
          />
          <FormHelperText sx={{ color: 'error.dark' }}>{emailError}</FormHelperText>
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <TextField
            type="password"
            placeholder="Password"
            fullWidth
            onChange={(e) => validatePassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <img src={LockIcon} alt="Logo" style={{ width: "16px" }} />
                </Box>
              )
            }}
          />
          <FormHelperText sx={{ color: 'error.dark' }}>{passwordError}</FormHelperText>
        </Box>
        <Box sx={{ marginBottom: "32px" }}>
          <TextField
            type="password"
            placeholder="Confirm Password"
            fullWidth
            onChange={(e) => validateConfirmPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <img src={LockIcon} alt="Logo" style={{ width: "16px" }} />
                </Box>
              )
            }}
          />
          <FormHelperText sx={{ color: 'error.dark' }}>{confirmPasswordError}</FormHelperText>
        </Box>

        {/* Login button */}
        <Button variant="contained" sx={{ width: "400px", height: "46px", borderRadius: "24px", bgcolor: "primary", fontSize: "14px", mb: "16px" }}>
          Login
        </Button>

        <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: "500", color: 'text.main', marginBottom: "16px" }}>
          By proceeding you agree to our <span style={{ color: '#201612' }}>Terms</span> and <span style={{ color: '#201612' }}>Privacy Policy</span>
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: "500", color: 'greys.darkest', marginBottom: "20px" }}>
          Already Registered? <a style={{ color: '#FF3C00' }}> Login </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;