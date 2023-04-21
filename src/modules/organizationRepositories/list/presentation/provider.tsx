import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { OrganizationRepository } from '../data/repository';
import { API } from 'src/services/api/ApiOctokitService';
import { OrganizationViewModel } from './viewModel';
import { GetOrganizationRepositoriesCase } from '../domain/usecases/getOrganizationRepositories';

const OrganizationContext = createContext<OrganizationViewModel>(new OrganizationViewModel({}));

export const useOrganizationContext = () => useContext(OrganizationContext);

type OrganizationProviderProps = {
  children: React.ReactNode,
}

const OrganizationProvider: React.FC<OrganizationProviderProps> = ({children}) => {
  const organizationRepository = new OrganizationRepository(API);

  const getOrganizationRepositoriesCase = new GetOrganizationRepositoriesCase(organizationRepository);

  const viewModel = new OrganizationViewModel({ getOrganizationRepositoriesCase })

  return (
    <OrganizationContext.Provider value={viewModel}>
      {children}
    </OrganizationContext.Provider>
  );
}

export default observer(OrganizationProvider);
