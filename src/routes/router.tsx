import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { NotFoundError } from 'src/pages/errors';

const OrgRepositoriesList = lazy(() => import('../pages/organizationRepositories/list'));
const OrgRepositoryDetails = lazy(() => import('../pages/organizationRepositories/details'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <OrgRepositoriesList />,
    errorElement: (<NotFoundError />),
  },
  {
    path: '/details',
    element: <OrgRepositoryDetails />,
  }
]);
