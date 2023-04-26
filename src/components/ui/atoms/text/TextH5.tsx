import React from 'react';
import Typography from '@mui/material/Typography';

type TextH4Props = {
  children: React.ReactNode;
  align:  "inherit" | "left" | "center" | "right" | "justify";
};

const TextH5: React.FC<TextH4Props> = ({children, align}) => {
  return (
    <Typography variant="h5" align={align}>{children}</Typography>
  );
}

export default TextH5;
