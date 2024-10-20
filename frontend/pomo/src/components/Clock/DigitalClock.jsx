import React from 'react';
import {Box} from '@mui/material';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './DigitalClockStyle.css';

function DigitalClock() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            
        <MultiSectionDigitalClock 
            views={['hours', 'minutes', 'seconds']} 
            ampm={false}
            />

        </Box>
    </LocalizationProvider>
  );
}

export default DigitalClock;
