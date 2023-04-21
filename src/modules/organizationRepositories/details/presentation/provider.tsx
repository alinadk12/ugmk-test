import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { API } from 'src/services/api/ApiOctokitService';
import { DetailsRepository } from '../data/repository';
import { DetailsViewModel } from './viewModel';
import { GetWeeklyCommitActivityCase } from '../domain/usecases/getWeeklyCommitActivity';

const DetailsContext = createContext<DetailsViewModel>(new DetailsViewModel({}));

export const useDetailsContext = () => useContext(DetailsContext);

type DetailsProviderProps = {
  children: React.ReactNode,
}

const DetailsProvider: React.FC<DetailsProviderProps> = ({ children }) => {
  const detailsRepository = new DetailsRepository(API);

  const getWeeklyCommitActivityCase = new GetWeeklyCommitActivityCase(detailsRepository);

  const viewModel = new DetailsViewModel({ getWeeklyCommitActivityCase });

  return (
    <DetailsContext.Provider value={viewModel}>
      {children}
    </DetailsContext.Provider>
  )
}

export default observer(DetailsProvider);
