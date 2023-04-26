import React, { useEffect } from 'react';
import ListView, { OrganizationProvider } from 'src/modules/repositories/presentation/list';
import ErrorBoundary from 'src/components/errors/ErrorBoundary';
import MainLayout from 'src/layouts/main/MainLayout';

export const RepositoryList: React.FC = () => {
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

export default RepositoryList;
