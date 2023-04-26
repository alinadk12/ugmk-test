import React from 'react';
import { default as MuiTableHead } from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import Text from 'src/components/ui/atoms/text/Text'
import useStyles from './styles';

export interface ITitle {
  value: string,
  align?: TableCellProps['align'],
}

type TableHeadProps = {
  titles: ITitle[],
}

const TableHead: React.FC<TableHeadProps> = ({ titles }) => {
  const styles = useStyles();

  return (
    <MuiTableHead>
      <TableRow className={styles.sm}>
        {titles.map((title) => (
          <TableCell key={title.value} align={title.align || 'left'}>
            <Text style={{fontWeight: 'bold'}}>{title.value}</Text>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}

export default TableHead;
