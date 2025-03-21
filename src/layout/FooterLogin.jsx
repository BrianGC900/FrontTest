import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { toast } from 'react-toastify'; 

export const FooterLogin = ({ setActiveTab, text, buttonText }) => {

  const handleClick = () => {
    toast.info("Estamos trabajando en ello, ¡mejoraremos pronto!"); 
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: 1,
      padding: 2
    }}>
      <Typography variant="body2" sx={{ fontSize: '0.7rem', color: '#888' }}>
        {text}
      </Typography>
      <Button
        onClick={handleClick} 
        sx={{
          fontSize: '0.7rem', 
          padding: '0.4rem 1rem', 
          color: '#888',
          textTransform: 'none', 
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};
