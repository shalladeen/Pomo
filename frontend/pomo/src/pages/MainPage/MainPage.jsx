import React from 'react';
import {Box, Button} from '@mui/material';
import DigitalClock from '../../components/Clock/DigitalClock';

function MainPage() {
  return (
   <Box justifyContent="center" display="flex" flexDirection="column" alignItems="center" height="100vh">
        <h1 >pomo timer</h1>
        <DigitalClock />
        <Button variant="contained" color="primary">Start Pomodoro</Button>
   </Box>
  );
}

export default MainPage;