import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Loader from 'src/components/ui/atoms/loader/Loader';
import Title from 'src/components/ui/molecules/title/Title';
import NoData from 'src/components/ui/molecules/placeholders/noData/NoData';
import { useDetailsContext } from '../provider';
import WeeklyActivityChart from './components/WeeklyActivityChart';
import TotalActivityChart from './components/TotalActivityChart';

const DetailsView: React.FC = () => {
  const vm = useDetailsContext();

  const [searchParams] = useSearchParams();

  const repo = searchParams.get('repo');
  const owner = searchParams.get('owner');

  useEffect(() => {
    (async () => {
      if (repo && owner) {
        await vm.getWeeklyCommitActivity(repo, owner);
      }
    })();
  }, [vm, repo, owner])

  if (vm.isLoading) {
    return <Loader />;
  }

  if (!vm.isLoading && !vm.weeklyCommitActivity) {
    return <NoData>No data for charts</NoData>;
  }

  return (
    <section>
      {repo && <Title>{repo}</Title>}
      <WeeklyActivityChart data={vm.weeklyCommitActivity} />
      <TotalActivityChart data={vm.weeklyCommitActivity} />
    </section>
  );
}

export default observer(DetailsView);
