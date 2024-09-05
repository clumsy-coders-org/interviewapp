import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import robotInterview from '../../Asset/robot-interview.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStartClick = () => {
    navigate('/dashboard');
  };
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#0a1929',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        Hit Your Next Interview With
        <Typography variant="h4" sx={{ mb: 2, color: 'secondary.main', fontWeight: 'bold' }}>
        Ai
      </Typography>
      </Typography>
      <Box
        component="img"
        sx={{ mb: 2, width: '300px' }}
        src={robotInterview}
        alt="Interview AI"
      />
      <Button onClick={handleGetStartClick} variant="contained" sx={{ backgroundColor: '#ffca28', color: 'black' }}>
        Get Start
      </Button>
    </Box>
  );
};

export default HomePage;

