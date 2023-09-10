import { PieChart } from '@mui/x-charts/PieChart';
import React from "react";
import { userLogins } from '../data';

export default function UserLoginsChart() {

  const pieChartData = userLogins.map(logindataProperty => {
    return {
      label: logindataProperty.timeRange,
      value: logindataProperty.numOfLogins,
    }
  });
	return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          innerRadius: 50,
          data: pieChartData,
        },
      
      ]}
      sx={{padding: '30px'}}
    />
  );
};