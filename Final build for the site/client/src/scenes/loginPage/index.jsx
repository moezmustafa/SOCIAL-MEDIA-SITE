import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:bahriasocial@gmail.com?subject=Help&body=Click here for help';
  };

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          BULINK
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          <br />
          Designed/Developed by ( Moeez & Mujadil )
          <br />
          <br />
          <br />
          Enter your email and password to login.
        </Typography>
        <Form />

        {/* Add the styled email button */}
        <button
          onClick={handleEmailButtonClick}
          style={{
            marginTop: '3rem',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.alt,
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Click here for help
        </button>
      </Box>
    </Box>
  );
};

export default LoginPage;
