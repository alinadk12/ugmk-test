import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import useStyles from './styles';

type OutlinedButtonProps = ButtonProps & {
  text: string,
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({text}) => {
  const styles = useStyles();

  return (
    <Button variant="outlined" classes={{ root: styles.small }}>
      {text}
    </Button>
  );
}

export default OutlinedButton;
