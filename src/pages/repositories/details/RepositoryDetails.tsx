import React, { useEffect } from 'react';
import DetailsView, { DetailsProvider } from 'src/modules/repositories/presentation/details';
import ErrorBoundary from 'src/components/errors/ErrorBoundary';
import MainLayout from 'src/layouts/main/MainLayout';

const RepositoryDetails: React.FC = () => {
  useEffect(() => {
    document.title = 'Repository Details';
  }, []);

  return (
    <ErrorBoundary>
      <MainLayout header={{ text: 'Repository Details', showBack: true }} >
        <DetailsProvider>
          <DetailsView />
        </DetailsProvider>
      </MainLayout>
    </ErrorBoundary>
  );
}

export default RepositoryDetails;
