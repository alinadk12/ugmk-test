import React from 'react';
import { default as MuiTableHead } from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import { TypographyBody1 } from 'src/components/ui/atoms/typography'

export interface ITitle {
  value: string,
  align?: TableCellProps['align'],
}

type TableHeadProps = {
  titles: ITitle[],
}

const TableHead: React.FC<TableHeadProps> = ({ titles }) => {
    return (
      <MuiTableHead>
        <TableRow>
          {titles.map((title) => (
            <TableCell align={title.align || 'left'}>
              <TypographyBody1 style={{fontWeight: 'bold'}}>{title.value}</TypographyBody1>
            </TableCell>
          ))}
        </TableRow>
      </MuiTableHead>
    );
}

export default TableHead;
