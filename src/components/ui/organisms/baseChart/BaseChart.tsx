import React, { useRef } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

type BaseChartProps = HighchartsReact.Props;

const BaseChart: React.FC<BaseChartProps> = (props) => {
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

export default BaseChart;
