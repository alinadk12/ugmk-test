import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { useDetailsContext } from '../provider';
import WeeklyActivityChart from './components/WeeklyActivityChart';
import Loader from 'src/components/ui/atoms/loader';
import Title from 'src/components/ui/molecules/title';

const DetailsView: React.FC = () => {
  const vm = useDetailsContext();

  const [searchParams] = useSearchParams();

  const params = useMemo(() => {
    const repo = searchParams.get('repo');
    const owner = searchParams.get('owner');

    if (repo && owner) {
      return { repo, owner };
    }

    return null;
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      if (params) {
        await vm.getWeeklyCommitActivity(params.repo, params.owner);
      }
    })();
  }, [vm, params])

  if (vm.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Title>{params?.repo}</Title>
      {vm.weeklyCommitActivity && <WeeklyActivityChart data={vm.weeklyCommitActivity} />}
    </>
  );
}

export default observer(DetailsView);
