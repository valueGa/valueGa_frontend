import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import { colors } from "/tailwind.config.js"; // 실제 경로로 수정하세요

const ApexChart = ({ closePriceList }) => {
  if (!closePriceList || closePriceList.length === 0) {
    return null; // Return null or a placeholder if the list is empty
  }
  const [series] = useState([
    {
      name: "Desktops",
      data: closePriceList,
    },
  ]);

  const [options] = useState({
    // colors: [colors.pink[200]],
    stroke: {
      show: true,
      lineCap: "straight",
      colors: [colors.pink[200]],
      width: 1,
      dashArray: 0,
    },
    chart: {
      height: 350,
      background: "#3D3D3D",
      toolbar: {
        show: false,
      },
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    title: {
      show: false,
      align: "left",
    },
    grid: {
      show: false,
      borderColor: "#90A4AE",
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
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
    yaxis: {
      show: false,
    },
    xaxis: {
      type: "category",

      categories: closePriceList,
      tickAmount: undefined,
      tickPlacement: "between",
      min: undefined,
      max: undefined,
      stepSize: undefined,
      range: undefined,
      floating: false,
      decimalsInFloat: undefined,
      overwriteCategories: undefined,
      position: "bottom",

      group: {
        groups: [],
        style: {
          colors: [],
          fontSize: "12px",
          fontWeight: 400,
          fontFamily: undefined,
          cssClass: "",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      hideEmptySeries: true,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: false,
      },
      y: {
        show: false,
        formatter: undefined,
        title: {
          formatter: (seriesName) => "종가:",
        },
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },

      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
  });

  return (
    <div>
      <div id="chart">
        <p className="mb-1 text-tuatara-400 text-mini">
          * 금일 기준 30일 일별 차트입니다.
        </p>
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

export default function ChartStock({ data }) {
  return (
    <div>
      <ApexChart closePriceList={data} />
    </div>
  );
}
