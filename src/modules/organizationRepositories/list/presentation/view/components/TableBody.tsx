import React from 'react';
import { Link } from "react-router-dom";
import { default as MuiTableBody } from '@material-ui/core/TableBody';
import { IOrganizationRepository } from '../../models/IOrganizationRepository';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

type TableBodyProps = {
  repositories: IOrganizationRepository[],
};

const TableBody: React.FC<TableBodyProps> = ({repositories}) => {
  return (
    <MuiTableBody>
      {repositories.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell align="center">
            <Link to="/details">
              <Button variant="outlined">
                Details
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </MuiTableBody>
  );
}

export default TableBody;
