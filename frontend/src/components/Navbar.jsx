import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import TableChartIcon from '@mui/icons-material/TableChart';
import EventIcon from '@mui/icons-material/Event';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon sx={{mr:1}} /> },
    { label: 'News', path: '/news', icon: <ArticleIcon sx={{mr:1}} /> },
    { label: 'Tables', path: '/tables', icon: <TableChartIcon sx={{mr:1}} /> },
    { label: 'Fixtures', path: '/fixtures', icon: <EventIcon sx={{mr:1}} /> },
    { label: 'Results', path: '/results', icon: <EmojiEventsIcon sx={{mr:1}} /> },
    { label: 'Transfers', path: '/transfers', icon: <SwapHorizIcon sx={{mr:1}} /> },
  ];

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <SportsSoccerIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          PEAKDYNAMICS
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                mx: 1,
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;