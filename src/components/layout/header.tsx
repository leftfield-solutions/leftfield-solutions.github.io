import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { styled } from '@mui/material/styles';
import logo from '@/assets/logo.png';
import { useMediaQuery, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Link } from '@tanstack/react-router';
import { useLocation } from '@tanstack/react-router';
const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const Logo = styled('img')({
  height: '48px', // Adjust as needed
  marginRight: '16px'
});

const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'none' // Hide on smaller screens
  }
}));

const Header: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: 'Home', link: '/', icon: <HomeIcon /> },
    { text: 'Services', link: '/services', icon: <BuildIcon /> },
    { text: 'Products', link: '/products', icon: <ProductionQuantityLimitsIcon /> }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#2d2d2d', height: '100vh', color: '#fff' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Left Field Solutions
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding divider>
            <ListItemButton component={Link} to={item.link} sx={{ textAlign: 'left' }}>
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: '#2d2d2d', color: '#fff' }}>
        <Container maxWidth="lg">
          <StyledToolbar>
            <LogoContainer>
              <Logo src={logo} alt="Company Logo" />
            </LogoContainer>

            {isMobile ? (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            ) : (
              <NavLinks>
                {navItems.map((item, index) => {
                  const isActive = item.link === '/' ? pathname === '/' : pathname.startsWith(item.link);
                  return (
                    <Button key={index} color="inherit" component={Link} to={item.link} style={isActive ? { color: '#fff' } : { color: '#999' }}>
                      <Typography>{item.text}</Typography>
                    </Button>
                  );
                })}
              </NavLinks>
            )}
          </StyledToolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          backgroundColor: alpha('#000', 0.35)
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
export default Header;
