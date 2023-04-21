import React, { useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import { TableCellProps } from '@material-ui/core/TableCell';
import { IOrganizationRepository } from '../../models/IOrganizationRepository';
import { TypographyBody1 } from 'src/components/ui/atoms/typography';
import LinkButton from 'src/components/ui/molecules/linkButton';
import Table from 'src/components/ui/organisms/table';

type TableContainerProps = {
  repositories: IOrganizationRepository[],
};

const TableContainer: React.FC<TableContainerProps> = ({repositories}) => {
  const titles = useMemo(() => [
    { value: 'Name' },
    { value: 'Description' },
    { value: 'Action', align: 'center' as TableCellProps['align'] },
  ], []);

  const rows = useMemo(() => repositories.map((item) => ({
    key: item.id,
    values: [
      { value: <TypographyBody1>{item.repo}</TypographyBody1> },
      { value: <TypographyBody1>{item.description}</TypographyBody1> },
      { value: <LinkButton text="Details" link="/details" params={{repo: item.repo, owner: item.owner}} />, align: 'center' as TableCellProps['align'] },
    ]
  })), [repositories]);

  return (
    <Paper>
      <Table titles={titles} rows={rows} />
    </Paper>
  );
}

export default TableContainer;
