import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

type TextButtonProps = ButtonProps & {
  children: React.ReactNode,
  onClick: () => void,
}

const TextButton: React.FC<TextButtonProps> = ({ children, onClick }) => {
  return (
    <Button variant="text" onClick={onClick}>
      {children}
    </Button>
  );
}

export default TextButton;
