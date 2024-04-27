import React, { useState } from 'react';
import { AppBar, Tabs, Tab, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const tabStyle = {
  fontFamily: 'Great Vibes, cursive',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
};

function Navbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ backgroundColor: ' orange', display: 'flex', alignItems: 'center', boxShadow: 'none' }}>
          <IconButton edge="start" color="black" aria-label="menu" onClick={handleMenuClick} sx={{ display: { xs: 'block', md: 'none' }, marginLeft:'auto' }}>
            <MenuIcon />
          </IconButton>
          <Tabs centered sx={{ display: { xs: 'none', md: 'flex' } }}>
          <h1 style={{ color: 'White'}}>Indian Culture Management System</h1>
            <Tab style={{ ...tabStyle }} label='Home' component={Link} to='/' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Login' component={Link} to='/login' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='About' component={Link} to='/about' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Contact' component={Link} to="/contact" disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Register' component={Link} to="/register" disableRipple disableFocusRipple />
            </Tabs>
        </AppBar>
        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/Login1">Login1</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/Register">Register</MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default Navbar;