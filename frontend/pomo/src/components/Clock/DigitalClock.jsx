import React, { useState, useEffect} from 'react';
import {Box, Button, Typography, Stack} from '@mui/material';

export default function DigitalClock() {
  const [remainingTime, setRemainingTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let intervalId;

    if(isRunning) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if(prevTime <= 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            if (isBreak) {
              setIsBreak(false);
              setRemainingTime(1500);
            } else {
              setIsBreak(true);
              setRemainingTime(300);
            }
            setIsRunning(true);
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
      <Typography variant="h2"
          sx={{
            fontSize: {
              xs: '10vw',  
              sm: '6rem', 
              md: '8rem',  
              lg: '10rem', 
              xl: '12rem', 
            },
          }}
        
      >
      {isBreak} {formatTime(remainingTime)}
        </Typography>
      
        <Stack direction="row" spacing={2} mt={5}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsRunning(!isRunning)}
            sx={{
              width: {
                xs: '100px',
                sm: '120px',
                md: '150px',
                lg: '200px',
              },
              height: {
                xs: '40px',
                sm: '50px',
                md: '60px',
                lg: '70px',
              },
              fontSize: {
                xs: '0.8rem',
                sm: '1rem',
                md: '1.2rem',
                lg: '1.5rem',
              },
            }}
          >
            {isRunning ? 'Pause Timer' : 'Start Timer'}
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setRemainingTime(isBreak ? 300 : 1500);
              setIsRunning(false);
            }}
              disabled={!isRunning}
            sx={{
              width: {
                xs: '100px',
                sm: '120px',
                md: '150px',
                lg: '200px',
              },
              height: {
                xs: '40px',
                sm: '50px',
                md: '60px',
                lg: '70px',
              },
              fontSize: {
                xs: '0.8rem',
                sm: '1rem',
                md: '1.2rem',
                lg: '1.5rem',
              },
              mt: 4,
            }}
          >
            Reset Timer
          </Button>
        </Stack>
    </Box>
  )
}