import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace with actual login logic, such as API call for authentication
    console.log('Username:', username);
    console.log('Password:', password);
    window.location.href = 'home1';
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
        height: '550px',
      }}
      noValidate
      autoComplete="off"
    ><Navbar/>
    
      <Typography variant="h4" align="center" mb={4}>
        Login
      </Typography>
      <Typography variant="h4" align="center" mb={4}>
        Login
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
      <Button variant="contained" color="primary" mb={2} onClick={handleLogin}>
        Login
      </Button>
      <Typography variant="body2" align="center" mb={2}>
     <a href="/ForgotPassword">Forgot Password</a>
      </Typography>
      
    </Box>
  );
};

export default Login;