import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    // Simulate password reset logic (replace with actual API call)
    if (username) {
      setMessage(`Password reset instructions sent to ${username}. Check your email.`);
    } else {
      setMessage('Please enter a valid username.');
    }
  };

  return (
    
    <div className='.remaining'>
      <div className='navbar'><Navbar /></div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'top',
          height: '100vh',
        }}
        noValidate
        autoComplete="off"
      >
        <Navbar />
        <Typography variant="h4" align="center" mb={4}  style={{ color: 'Blue'}}>
          Password Reset
        </Typography>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          mb={2}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button variant="contained" color="primary" mb={4} onClick={handleResetPassword}>
          Forgot Password
        </Button>
        <Typography variant="body2" align="center" mb={2}>
          {message}
        </Typography>
      </Box>
    </div>
  );
};

export default ForgotPassword;
