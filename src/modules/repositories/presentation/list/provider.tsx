import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { API } from 'src/services/api/ApiOctokitService';
import { RepositoriesListRepository } from '../../data/list/repository';
import { GetRepositoryListCase } from '../../domain/usecases/getRepositoryList';
import { RepositoryListViewModel } from './viewModel';

const listRepository = new RepositoriesListRepository(API);
const getRepositoryListCase = new GetRepositoryListCase(listRepository);
const viewModel = new RepositoryListViewModel({ getRepositoryListCase });

const OrganizationContext = createContext<RepositoryListViewModel>(viewModel);

export const useOrganizationContext = () => useContext(OrganizationContext);

type OrganizationProviderProps = {
  children: React.ReactNode,
}

const OrganizationProvider: React.FC<OrganizationProviderProps> = ({children}) => {
  return (
    <OrganizationContext.Provider value={viewModel}>
      {children}
    </OrganizationContext.Provider>
  );
}

export default observer(OrganizationProvider);
