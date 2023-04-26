import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Loader from 'src/components/ui/atoms/loader/Loader';
import TableContainer from './components/TableContainer';
import { useOrganizationContext } from '../provider';

const ListView: React.FC = () => {
  const vm = useOrganizationContext();

  useEffect(() => {
    (async () => {
      await vm.getOrganizationRepositories();
    })();
  }, [vm]);

  if (vm.isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <TableContainer repositories={vm.repositories} />
    </section>
  );
}

export default observer(ListView);
