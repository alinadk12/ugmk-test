import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

type OutlinedButtonProps = ButtonProps & {
  text: string,
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({text}) => {
  return (
    <Button variant="outlined">
      {text}
    </Button>
  );
}

export default OutlinedButton;
