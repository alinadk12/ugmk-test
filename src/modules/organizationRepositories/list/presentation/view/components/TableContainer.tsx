import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { IOrganizationRepository } from '../../models/IOrganizationRepository';
import TableHead from './TableHead';
import TableBody from './TableBody';

type TableContainerProps = {
  repositories: IOrganizationRepository[],
};

const TableContainer: React.FC<TableContainerProps> = ({repositories}) => {
  return (
    <Paper>
      <Table>
        <TableHead />
        <TableBody repositories={repositories} />
      </Table>
    </Paper>
  );
}

export default TableContainer;
