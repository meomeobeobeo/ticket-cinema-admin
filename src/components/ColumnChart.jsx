import React from "react";
import ReactApexChart from "react-apexcharts";
import millify from "millify";

const ColumnChart = ({title , data}) => {
    console.log(data)
  const series = [
    {
      name: "VND",
      data: data?.data,
    },
  ];

  const option = {
    chart: {
      height: 500,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + " VND";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: data?.categories,
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + " VND    ";
        },
      },
    },
    title: {
      text: "Doanh thu theo tháng",
      floating: true,
      offsetY: 480,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };
  return  <ReactApexChart width={"100%"} options={option} series={series} type="bar" height={500} />

      
};

export default ColumnChart;
