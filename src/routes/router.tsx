import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { NotFoundError } from 'src/pages/errors';

const RepositoryList = lazy(() => import('../pages/repositories/list/RepositoryList'));
const RepositoryDetails = lazy(() => import('../pages/repositories/details/RepositoryDetails'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RepositoryList />,
    errorElement: (<NotFoundError />),
  },
  {
    path: '/details',
    element: <RepositoryDetails />,
  }
]);
