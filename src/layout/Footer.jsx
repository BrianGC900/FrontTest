import React from "react";
import { Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 py-2">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          px: 4
        }}
      >
        <Typography variant="caption" color="text.primary" sx={{ marginRight: '16px' }}>
          &copy; Todos los derechos reservados
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <img
            src="/BrianLogo.svg"  
            alt="Logo"
            style={{
              width: '50px', 
              height: '50px',
              marginRight: '16px', 
            }}
          />
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700">
            <FacebookIcon sx={{ fontSize: 20 }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700">
            <InstagramIcon sx={{ fontSize: 20 }} />
          </a>
        </Box>
      </Box>
    </footer>
  );
}
