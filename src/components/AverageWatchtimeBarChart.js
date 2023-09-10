import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { averageWatchTime } from '../data';

const chartSetting = {
  yAxis: [
    {
      label: 'Average Watchtime (hrs)',
    },
  ],
  width: 550,
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'rotate(-90deg) translate(0px, -50px)',
    },
    padding: '10px',
    marginLeft: '30px'
  },
};
const dataset = averageWatchTime;

const valueFormatter = (value) => `${value}`;

export default function AverageWatchtimeBarChart() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'users', label: 'Users', valueFormatter },
      ]}
      legend={{hidden: true}}
      {...chartSetting}
    />
  );
}