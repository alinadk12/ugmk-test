import React from 'react';
import { default as MuiTableHead } from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import { TypographyBody1 } from 'src/components/ui/atoms/typography'
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
      <TableRow>
        {titles.map((title) => (
          <TableCell align={title.align || 'left'} classes={{ root: styles.cell }}>
            <TypographyBody1 style={{fontWeight: 'bold'}}>{title.value}</TypographyBody1>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}

export default TableHead;
