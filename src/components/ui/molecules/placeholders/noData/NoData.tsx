import React from 'react';
import Paper from '@mui/material/Paper';
import TextH4 from 'src/components/ui/atoms/text/TextH4';
import useStyles from './styles';

type NoDataProps = {
  children: React.ReactNode;
};

const NoData: React.FC<NoDataProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <Paper className={styles.wrapper}>
      <TextH4>{children}</TextH4>
    </Paper>
  );
}

export default NoData;
