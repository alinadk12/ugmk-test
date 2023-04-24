import React, { useEffect } from 'react';
import ErrorBoundary from '../../../services/errors/ErrorBoundary';
import MainLayout from '../../../layouts/main/MainLayout';
import DetailsView, { DetailsProvider } from 'src/modules/organizationRepositories/details';

const OrgRepositoryDetails: React.FC = () => {
  useEffect(() => {
    document.title = 'Repository Details';
  }, []);

  return (
    <ErrorBoundary>
      <MainLayout header={{ text: 'Repository Details', isShowBack: true }} >
        <DetailsProvider>
          <DetailsView />
        </DetailsProvider>
      </MainLayout>
    </ErrorBoundary>
  );
}

export default OrgRepositoryDetails;
