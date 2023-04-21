import React, { useMemo } from 'react';
import { IWeeklyActivity } from '../../../domain/models/weeklyCommitActivity/IWeeklyActivity';
import BaseLineChart from 'src/components/ui/organisms/baseLineChart/BaseLineChart';
import Highcharts from 'highcharts';

type WeeklyActivityChartProps = {
  data: IWeeklyActivity;
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

  return <BaseLineChart options={options} />;
}

export default WeeklyActivityChart;
