import React from 'react';
import { default as MuiTableBody } from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
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
        <TableRow key={row.key}>
          {row.values.map((value, index) => (
            <TableCell key={index} align={value.align || 'left'} classes={{ root: styles.cell }}>
              {value.value}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
}

export default TableBody;
