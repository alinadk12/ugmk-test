import React from 'react';
import { default as MuiTableHead } from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const TableHead = () => {
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell>
          <Typography variant="body1" style={{fontWeight: 'bold'}}>Name</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1" style={{fontWeight: 'bold'}}>Description</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography variant="body1" style={{fontWeight: 'bold'}}>Action</Typography>
        </TableCell>
      </TableRow>
    </MuiTableHead>
  );
}

export default TableHead;
