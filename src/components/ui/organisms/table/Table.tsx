import React from 'react';
import { default as MuiTable } from '@material-ui/core/Table';
import TableHead, { ITitle } from './TableHead';
import TableBody, { IRow } from './TableBody';

type TableProps = {
  titles: ITitle[],
  rows: IRow[],
};

const Table: React.FC<TableProps> = ({titles, rows}) => {
  return (
    <MuiTable>
      <TableHead titles={titles} />
      <TableBody rows={rows} />
    </MuiTable>
  );
}

export default Table;
