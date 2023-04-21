import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import BaseChart from 'src/components/ui/organisms/baseChart/BaseChart';
import { IWeeklyActivity } from '../../../domain/models/weeklyCommitActivity/IWeeklyActivity';
import { totalSum } from '../../../helpers/totalSum';

type TotalActivityChartProps = {
  data: IWeeklyActivity;
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

  return <BaseChart options={options} />;
}

export default TotalActivityChart;
