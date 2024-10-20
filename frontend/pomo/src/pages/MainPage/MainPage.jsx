import React from 'react';
import {Box, Button} from '@mui/material';
import DigitalClock from '../../components/Clock/DigitalClock';

function MainPage() {
  return (
   <Box 
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
    }}>
        <h1 >pomo timer</h1>
        <DigitalClock />
   </Box>
  );
}

export default MainPage;