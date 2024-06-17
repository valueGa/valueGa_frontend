import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import calPercentChange from "../../../utiles/calPercentChange";
import calPriceChange from "../../../utiles/calPriceChange";

const TopBottomStockChart = () => {
  const [top5Stocks, setTop5Stocks] = useState([]);
  const [bottom5Stocks, setBottom5Stocks] = useState([]);

  const tmpTop5 = [
    { stockName: "LG전자", targetPrice: 120000, currentPrice: 80000 },
    { stockName: "삼성전자", targetPrice: 85000, currentPrice: 78700 },
    { stockName: "알테오젠", targetPrice: 278500, currentPrice: 268500 },
    { stockName: "다우존스", targetPrice: 11000, currentPrice: 12000 },
    { stockName: "HLB", targetPrice: 65000, currentPrice: 64300 },
    { stockName: "하나금융지주", targetPrice: 55000, currentPrice: 59900 },
    { stockName: "한국앤컴퍼니", targetPrice: 13000, currentPrice: 14980 },
    {
      stockName: "ACE 글로벌브랜드TOP10블룸버그",
      targetPrice: 120000,
      currentPrice: 15190,
    },
    {
      stockName: "삼성 블룸버그 WTI원유 선물 ETN",
      targetPrice: 7000,
      currentPrice: 10635,
    },
  ];

  useEffect(() => {
    const stocksWithPercentage = tmpTop5.map((stock) => ({
      ...stock,
      priceChangePercentage: calPercentChange(
        stock.targetPrice,
        stock.currentPrice
      ),
    }));

    stocksWithPercentage.sort(
      (a, b) => b.priceChangePercentage - a.priceChangePercentage
    );

    const top5 = stocksWithPercentage.slice(0, 5);
    const bottom5 = stocksWithPercentage.slice(-5);

    setTop5Stocks(top5);
    setBottom5Stocks(bottom5);

    return () => {
      setTop5Stocks([]);
      setBottom5Stocks([]);
    };
  }, []);

  return (
    <div className="text-center text-tuatara-50 font-apple m-5">
      <div className="text-heading3 font-bold">상하향 목표 주가 컨센서스 TOP 5</div>
      {/* 그래프 개발하면 넣기 */}
    </div>
  );
};

export default TopBottomStockChart;
