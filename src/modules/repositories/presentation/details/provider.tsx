import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { API } from 'src/services/api/ApiOctokitService';
import { RepositoriesDetailsRepository } from '../../data/details/repository';
import { GetWeeklyCommitActivityCase } from '../../domain/usecases/getWeeklyActivity';
import { DetailsViewModel } from './viewModel';

const detailsRepository = new RepositoriesDetailsRepository(API);
const getWeeklyCommitActivityCase = new GetWeeklyCommitActivityCase(detailsRepository);
const viewModel = new DetailsViewModel({ getWeeklyCommitActivityCase });

const DetailsContext = createContext<DetailsViewModel>(viewModel);

export const useDetailsContext = () => useContext(DetailsContext);

type DetailsProviderProps = {
  children: React.ReactNode,
}

const DetailsProvider: React.FC<DetailsProviderProps> = ({ children }) => {
  return (
    <DetailsContext.Provider value={viewModel}>
      {children}
    </DetailsContext.Provider>
  )
}

export default observer(DetailsProvider);
