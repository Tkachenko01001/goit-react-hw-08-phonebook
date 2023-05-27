import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingLeft={4}
          marginTop={5}
        >
          <Suspense fallback={<CircularProgress size={50} color="inherit" />}>
            <Outlet />
          </Suspense>
        </Box>
      </main>
    </>
  );
};

export default Layout;