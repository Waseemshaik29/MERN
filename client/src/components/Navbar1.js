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
        <AppBar sx={{ backgroundColor: 'orange', display: 'flex', alignItems: 'center', boxShadow: 'none' }}>
          <IconButton edge="start" color="black" aria-label="menu" onClick={handleMenuClick} sx={{ display: { xs: 'block', md: 'none' }, marginLeft:'auto' }}>
            <MenuIcon />
          </IconButton>
          <Tabs centered sx={{ display: { xs: 'none', md: 'flex' } }}>
          <h1 style={{ color: 'White'}}>Indian Culture Management System</h1>
            <Tab style={{ ...tabStyle }} label='Home' component={Link} to='/Home1' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Reset Password' component={Link} to='/resetpassword' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='States' component={Link} to='/states' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Places' component={Link} to="/places" disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Logout'  component={Link} to="/"disableRipple disableFocusRipple />
            </Tabs>
        </AppBar>
        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/Home1">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/resetpassword">About</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/states">Contact</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Login1</MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default Navbar;