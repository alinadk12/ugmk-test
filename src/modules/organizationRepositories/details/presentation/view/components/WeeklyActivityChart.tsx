import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import { IWeeklyActivity } from '../../../domain/models/weeklyCommitActivity/IWeeklyActivity';
import BaseChart from 'src/components/ui/organisms/baseChart/BaseChart';

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

  return <BaseChart options={options} />;
}

export default WeeklyActivityChart;
