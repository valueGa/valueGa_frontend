import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series] = useState([
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      show: false,
      align: "left",
    },
    grid: {
      row: {
        colors: ["transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
      column: {
        colors: ["transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default function ChartStock() {
  return (
    <div>
      <ApexChart />
    </div>
  );
}
