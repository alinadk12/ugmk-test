import React, { CSSProperties } from 'react';
import Typography from '@mui/material/Typography';

type TextProps = {
  children: React.ReactNode;
  style?: CSSProperties;
}

const Text: React.FC<TextProps> = ({children, style}) => {
  return (
    <Typography variant="body1" style={style || {}}>{children}</Typography>
  );
}

export default Text;
