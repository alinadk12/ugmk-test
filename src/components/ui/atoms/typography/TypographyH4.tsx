import React from 'react';
import Typography from '@material-ui/core/Typography';

type TypographyH4Props = {
  children: React.ReactNode;
}

const TypographyH4: React.FC<TypographyH4Props> = ({children}) => {
  return (
    <Typography variant="h4">{children}</Typography>
  );
}

export default TypographyH4;
