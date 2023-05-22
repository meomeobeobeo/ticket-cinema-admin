import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const series = [44, 55, 41, 17, 15];

  const options = {
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default DonutChart;
