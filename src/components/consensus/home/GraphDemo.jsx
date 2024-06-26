import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { colors } from "/tailwind.config.js"; // 실제 경로로 수정하세요

const ApexChartUp = ({ top5List }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList(top5List.map((item) => item.company_name));
  }, [top5List]);

  const series = [
    {
      name: "Cash Flow",
      data: [5, 4, 3, 2, 1],
    },
  ];

  const options = {
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
      categories: categoryList,
      labels: {
        rotate: -90,
        style: {
          colors: colors.tuatara[50],
        },
      },
    },
    tooltip: {
      enabled: false,
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
  };

  // categoryList가 설정된 후에 Chart 컴포넌트를 렌더링
  if (categoryList.length === 0) {
  }

  return (
    <div className="flex flex-col items-center justify-between w-50 h-full">
      <div className="w-100" id="chart">
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

const ApexChartDown = ({ down5List }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [options, setOptions] = useState({
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
      categories: [],
      color: "#F15B46",
      labels: {
        rotate: -90,
        style: {
          colors: colors.tuatara[50],
        },
      },
    },
    tooltip: {
      enabled: false,
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

  useEffect(() => {
    const updatedCategoryList = down5List.map((item) => item.company_name);
    setCategoryList(updatedCategoryList);

    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: updatedCategoryList,
      },
    }));
  }, [down5List]);

  const [series] = useState([
    {
      name: "Cash Flow",
      data: [-1, -2, -3, -4, -5],
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-end w-50 h-full pb-[64px]">
      <div className="w-100" id="chart">
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default function GraphDemo({ top5List, down5List }) {
  return (
    <div className="flex w-full h-[500px] px-[200px]">
      <ApexChartUp top5List={top5List} />
      <ApexChartDown down5List={down5List} />
    </div>
  );
}
