import React from 'react';
import Paper from '@material-ui/core/Paper';
import { TypographyH4 } from 'src/components/ui/atoms/typography';
import useStyles from './styles';

const NoData: React.FC = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.wrapper}>
      <TypographyH4>No data for charts</TypographyH4>
    </Paper>
  );
}

export default NoData;
