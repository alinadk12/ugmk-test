import React, { useRef } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import Paper from '@material-ui/core/Paper';

type BaseChartProps = HighchartsReact.Props;

const BaseLineChart: React.FC<BaseChartProps> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject | null>(null);

  return (
    <Paper>
      <HighchartsReact
        highcharts={Highcharts}
        ref={chartComponentRef}
        {...props}
      />
    </Paper>
  )
}

export default BaseLineChart
