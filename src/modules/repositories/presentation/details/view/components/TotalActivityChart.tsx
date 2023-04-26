import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import Chart from 'src/components/ui/organisms/chart/Chart';
import { totalSum } from 'src/utils/array';
import { WeeklyActivity } from '../../../../domain/models/WeeklyActivity';

type TotalActivityChartProps = {
  data: WeeklyActivity;
};

const TotalActivityChart: React.FC<TotalActivityChartProps> = ({ data }) => {
  const options = useMemo(() => {
    return {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Total Commit Activity'
      },
      series: [{
        name: 'Commits',
        data: [
          {
            name: 'All',
            y: totalSum(data.all),
          },
          {
            name: 'Owner',
            y: totalSum(data.owner),
          }
        ]
      }]
    } as Highcharts.Options
  }, [data]);

  return <Chart options={options} />;
}

export default TotalActivityChart;
