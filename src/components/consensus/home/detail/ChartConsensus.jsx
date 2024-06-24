import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import { colors } from "/tailwind.config.js"; // 실제 경로로 수정하세요

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Marine Sprite",
      data: [1],
    },
    {
      name: "Striking Calf",
      data: [2],
    },
    {
      name: "Tank Picture",
      data: [3],
    },
  ]);

  const [options, setOptions] = useState({
    colors: [
      colors.consensus.blue[50],
      colors.consensus.grey[50],
      colors.consensus.pink[50],
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },
    grid: {
      show: false,
      borderColor: "#5d5d5d",
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
      //   row: {
      //     colors: undefined,
      //     opacity: 0.5,
      //   },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 0,
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 20,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        horizontal: true,
        distributed: false,
        rangeBarOverlap: true,
        rangeBarGroupRows: false,
        hideZeroBarsWhenGrouped: false,
        isDumbbell: false,
        dumbbellColors: undefined,
        isFunnel: false,
        isFunnel3d: true,
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "middle",
      distributed: false,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: [
          colors.consensus.blue[100],
          colors.consensus.grey[100],
          colors.consensus.pink[100],
        ],
      },

      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },

    yaxis: {
      show: false,
    },

    stroke: {
      show: false,
    },
    title: {
      show: false,
      text: "100% Stacked Bar",
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },

    xaxis: {
      type: "category",
      categories: [],
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
        show: false,
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
    },

    legend: {
      show: false,
    },

    title: {
      text: undefined,
      align: "left",
    },
    tooltip: {
      enabled: false,
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          className="w-full"
          options={options}
          series={series}
          type="bar"
          height={100}
        />
      </div>
    </div>
  );
};

export default function ChartRatio() {
  return (
    <div>
      <ApexChart />
    </div>
  );
}
