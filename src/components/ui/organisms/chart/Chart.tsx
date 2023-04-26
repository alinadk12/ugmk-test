import React, { useRef } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import Paper from '@mui/material/Paper';
import useStyles from './styles';

type ChartProps = HighchartsReact.Props;

const Chart: React.FC<ChartProps> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject | null>(null);

  const styles = useStyles();

  return (
    <Paper className={styles.wrapper}>
      <HighchartsReact
        highcharts={Highcharts}
        ref={chartComponentRef}
        {...props}
      />
    </Paper>
  );
}

export default Chart;
