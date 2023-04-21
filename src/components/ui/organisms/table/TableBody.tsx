import React from 'react';
import { default as MuiTableBody } from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';

interface IValue {
  value: string | JSX.Element,
  align?: TableCellProps['align'],
}

export interface IRow {
  key: string | number,
  values: IValue[]
}

type TableBodyProps = {
  rows: IRow[],
};

const TableBody: React.FC<TableBodyProps> = ({rows}) => {
  return (
    <MuiTableBody>
      {rows.map((row) => (
        <TableRow key={row.key}>
          {row.values.map((value) => (
            <TableCell align={value.align || 'left'}>
              {value.value}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
}

export default TableBody;
