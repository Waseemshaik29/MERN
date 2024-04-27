import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Replace with actual signup logic, such as API call for user registration
    console.log('Username:', username);
    console.log('Password:', password);
    // After successful signup, you can redirect the user to the login page or any other page
    // For example:
    // window.location.href = '/Login';
  };

  return (
    <div>
      
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Changed to center to occupy remaining space
          height: 'calc(100vh - 64px)', // Adjusted height to occupy remaining space after Navbar (assuming Navbar height is 64px)
        }}
        noValidate
        autoComplete="off"
      ><Navbar/>
        <Typography variant="h4" align="center" mb={4}  style={{ color: 'Blue'}}>
          SignUp
        </Typography>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          mb={2}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="filled-basic"
          type="password"
          label="Password"
          variant="filled"
          mb={2}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" mb={2} onClick={handleSignUp}>
          SignUp
        </Button>
        <Typography variant="body2" align="center" mb={2}>
          <a href="/Login1">Login</a> | <a href="/ForgotPassword">Forgot Password</a>
        </Typography>
      </Box>
    </div>
  );
};

export default Login1;
