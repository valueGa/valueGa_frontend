import React, { useState } from "react";
import Chart from "react-apexcharts";
import { colors } from "/tailwind.config.js"; // 실제 경로로 수정하세요

const ApexChartUp = () => {
  const [series] = useState([
    {
      name: "Cash Flow",
      data: [5, 4, 3, 2, 1],
    },
  ]);
  //apexcharts-toolbar
  const [options] = useState({
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 20,
        borderRadiusApplication: "end",

        colors: {
          ranges: [
            {
              from: 1,
              to: 1,
              color: colors.chart.red[50],
            },
            {
              from: 2,
              to: 2,
              color: colors.chart.red[100],
            },
            {
              from: 3,
              to: 3,
              color: colors.chart.red[200],
            },
            {
              from: 4,
              to: 4,
              color: colors.chart.red[300],
            },
            {
              from: 5,
              to: 5,
              color: colors.chart.red[400],
            },
          ],
        },
        columnWidth: "80%",
        dataLabels: {
          enabled: true,
          textAnchor: "middle",
          distributed: false,
          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: undefined,
            colors: undefined,
          },
        },
      },
    },

    yaxis: {
      show: false,
    },
    xaxis: {
      type: "category",
      position: "bottom",
      categories: ["LG전자", "삼성전자", "알텐오젠", "다우존스", "HLB"],
      color: "#F15B46",
      labels: {
        rotate: -90,
        style: {
          colors: colors.tuatara[50],
        },
      },
    },

    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      hideEmptySeries: true,
      fillSeriesColor: false,
      theme: false,
    },
  });

  return (
    <div className="flex flex-col items-center justify-between w-50 h-full">
      <div className="w-100" id="chart">
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

const ApexChartDown = () => {
  const [series] = useState([
    {
      name: "Cash Flow",
      data: [-1, -2, -3, -4, -5],
    },
  ]);
  //apexcharts-toolbar
  const [options] = useState({
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
    },

    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 20,
        borderRadiusApplication: "end",
        colors: {
          ranges: [
            {
              from: -1,
              to: -1,
              color: colors.chart.blue[50],
            },
            {
              from: -2,
              to: -2,
              color: colors.chart.blue[100],
            },
            {
              from: -3,
              to: -3,
              color: colors.chart.blue[200],
            },
            {
              from: -4,
              to: -4,
              color: colors.chart.blue[300],
            },
            {
              from: -5,
              to: -5,
              color: colors.chart.blue[400],
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "middle",
      distributed: false,
      style: {
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: undefined,
        colors: ["white"],
      },
    },

    yaxis: {
      show: false,
    },
    xaxis: {
      type: "category",
      position: "top",
      categories: [
        "하나손해보험",
        "한국석유",
        "신한투자증권",
        "미래에셋증권",
        "테슬라",
      ],
      color: "#F15B46",
      labels: {
        rotate: -90,
        style: {
          colors: colors.tuatara[50],
        },
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      hideEmptySeries: true,
      fillSeriesColor: false,
      theme: false,
    },
  });

  return (
    <div className="flex flex-col items-center justify-end w-50 h-full pb-[64px]">
      <div className="w-100" id="chart">
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default function GraphDemo() {
  return (
    <div className="flex w-full h-[500px] px-[200px]">
      <ApexChartUp />
      <ApexChartDown />
    </div>
  );
}
