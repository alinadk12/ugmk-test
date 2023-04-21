import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from '@material-ui/styles'
import { router } from 'src/routes/router';
import ErrorBoundary from 'src/services/errors/ErrorBoundary';
import theme from './theme';
import Loader from './components/ui/atoms/loader';

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
