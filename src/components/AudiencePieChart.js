import { PieChart } from '@mui/x-charts/PieChart';
import React from "react";

export default function AudiencePieChart(props) {

  const pieChartData = [
    {
      label: 'Men',
      value: props.men,
      color: '#0097a7'
    },
    {
      label: 'Women',
      value: props.women,
      color: '#FED2CE'
    }
  ];
	return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data: pieChartData,
        },
      ]}
      width={300}
      height={200}
    />
  );
};