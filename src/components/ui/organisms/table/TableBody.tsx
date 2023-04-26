import React from 'react';
import { default as MuiTableBody } from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import useStyles from './styles';

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
  const styles = useStyles();

  return (
    <MuiTableBody>
      {rows.map((row) => (
        <TableRow key={row.key} className={styles.sm}>
          {row.values.map((value, index) => (
            <TableCell key={index} align={value.align || 'left'}>
              {value.value}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
}

export default TableBody;
