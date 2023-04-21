import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';

type TypographyBody1Props = {
  children: React.ReactNode;
  style?: CSSProperties;
}

const TypographyBody1: React.FC<TypographyBody1Props> = ({children, style}) => {
  return (
    <Typography variant="body1" style={style || {}}>{children}</Typography>
  );
}

export default TypographyBody1;
