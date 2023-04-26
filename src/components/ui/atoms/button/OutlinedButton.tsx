import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import useStyles from './styles';

type OutlinedButtonProps = ButtonProps & {
  children: React.ReactNode,
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <Button variant="outlined" classes={{ root: styles.small }}>
      {children}
    </Button>
  );
}

export default OutlinedButton;
