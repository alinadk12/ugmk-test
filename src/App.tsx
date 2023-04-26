import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ErrorBoundary from 'src/components/errors/ErrorBoundary';
import Loader from 'src/components/ui/atoms/loader/Loader';
import { router } from 'src/routes/router';
import theme from 'src/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
