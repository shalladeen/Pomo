import React, { useState, useEffect} from 'react';
import {Box, Button, Typography, Stack} from '@mui/material';

export default function DigitalClock() {
  const [remainingTime, setRemainingTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if(isRunning) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if(prevTime <= 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Typography variant="h2">{formatTime(remainingTime)}</Typography>
      
      <Stack direction="row" spacing={2} mt={5}>
      {/* Start button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsRunning((prevIsRunning) => !prevIsRunning)}
      >
        {isRunning ? 'Pause Timer' : 'Start Timer'}
      </Button>
      {/* Reset button */}
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setRemainingTime(1500);
          setIsRunning(false);
        }}
        disabled={!isRunning}
        sx={{ mt: 4 }}
      >
       Reset Timer
      </Button>
      </Stack>
    </Box>
  )
}