import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const series = [ 
  400 , 600 , 300];

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
      <ReactApexChart  options={options} series={series} type="donut" />
    </div>
  );
};

export default DonutChart;
