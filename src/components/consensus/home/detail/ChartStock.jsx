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
    },
    dataLabels: {
      enabled: false,
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
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeUTC: true,
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
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
        color: "#78909C",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
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
