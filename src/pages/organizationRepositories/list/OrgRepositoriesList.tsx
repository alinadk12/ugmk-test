import React, { useEffect } from 'react';
import ListView, { OrganizationProvider } from 'src/modules/organizationRepositories/list';
import ErrorBoundary from '../../../services/errors/ErrorBoundary';
import MainLayout from '../../../layouts/main/MainLayout';

export const OrgRepositoriesList: React.FC = () => {
  useEffect(() => {
    document.title = 'List Organization Repositories';
  }, []);

  return (
    <ErrorBoundary>
      <MainLayout header={{ text: 'List Organization Repositories' }}>
        <OrganizationProvider>
          <ListView />
        </OrganizationProvider>
      </MainLayout>
    </ErrorBoundary>
  );
};

export default OrgRepositoriesList;
