import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TableContainer from './components/TableContainer';
import { useOrganizationContext } from '../provider';
import useStyles from './styles';
import Loader from 'src/components/ui/atoms/loader';

const ListView: React.FC = () => {
  const styles = useStyles();
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
    <section className={styles.container}>
      <TableContainer repositories={vm.repositories} />
    </section>
  );
}

export default observer(ListView);
