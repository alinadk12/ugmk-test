import React from 'react';
import Paper from '@mui/material/Paper';
import { TableCellProps } from '@mui/material/TableCell';
import Text from 'src/components/ui/atoms/text/Text';
import LinkButton from 'src/components/ui/molecules/buttons/linkButton/LinkButton';
import Table from 'src/components/ui/organisms/table/Table';
import { RepositoryListItem } from '../../models/RepositoryListItem';

type TableContainerProps = {
  repositories: RepositoryListItem[],
};

const TableContainer: React.FC<TableContainerProps> = ({repositories}) => {
  const titles = [
    { value: 'Name' },
    { value: 'Description' },
    { value: 'Action', align: 'center' as TableCellProps['align'] },
  ];

  const rows = repositories.map((item) => ({
    key: item.id,
    values: [
      { value: <Text>{item.repo}</Text> },
      { value: <Text>{item.description}</Text> },
      { value: <LinkButton text="Details" link="/details" params={{repo: item.repo, owner: item.owner}} />, align: 'center' as TableCellProps['align'] },
    ]
  }));

  return (
    <Paper style={{ overflowX: 'auto' }}>
      <Table titles={titles} rows={rows} />
    </Paper>
  );
}

export default TableContainer;
