import React from 'react';
import { default as MuiTableBody } from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { IOrganizationRepository } from '../../models/IOrganizationRepository';
import LinkButton from 'src/components/ui/molecules/linkButton';
import Typography from '@material-ui/core/Typography';


type TableBodyProps = {
  repositories: IOrganizationRepository[],
};

const TableBody: React.FC<TableBodyProps> = ({repositories}) => {
  return (
    <MuiTableBody>
      {repositories.map((item) => (
        <TableRow key={item.id}>
          <TableCell>
            <Typography variant="body1">{item.repo}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">{item.description}</Typography>
          </TableCell>
          <TableCell align="center">
           <LinkButton text="Details" link="/details" params={{repo: item.repo, owner: item.owner}} />
          </TableCell>
        </TableRow>
      ))}
    </MuiTableBody>
  );
}

export default TableBody;
