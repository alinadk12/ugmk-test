import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import Chart from 'src/components/ui/organisms/chart/Chart';
import { WeeklyActivity } from '../../../../domain/models/WeeklyActivity';

type WeeklyActivityChartProps = {
  data: WeeklyActivity;
};

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({ data }) => {
  const options = useMemo(() => {
    return {
      title: {
        text: 'Weekly Commit Activity'
      },
      xAxis: {
        title: {
          text: 'Weeks'
        }
      },
      yAxis: {
        title: {
          text: 'Commit Count'
        }
      },
      series: [{
        name: 'All',
        data: data.all
      }, {
        name: 'Owner',
        data: data.owner
      }]
    } as Highcharts.Options
  }, [data]);

  return <Chart options={options} />;
}

export default WeeklyActivityChart;
