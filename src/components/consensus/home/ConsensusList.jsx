import React, { useEffect, useState } from "react";
import StockList from "./StockList";
import downArrow from "~/assets/icons/downArrow.svg";

export default function ConsensusList() {
  const [buyStocks, setBuyStock] = useState([]);
  const [sellStocks, setSellStock] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const tmpTop5 = [
    {
      stockName: "LG전자",
      pastValuePotential: 0.5,
      currentValuePotential: 0.4,
      currentPrice: 80000,
      targetPrice: 120000,
    },
    {
      stockName: "삼성전자",
      pastValuePotential: 0.4,
      currentValuePotential: 0.35,
      currentPrice: 78700,
      targetPrice: 85000,
    },
    {
      stockName: "알테오젠",
      pastValuePotential: 0.3,
      currentValuePotential: 0.22,
      currentPrice: 268500,
      targetPrice: 278500,
    },
    {
      stockName: "다우존스",
      pastValuePotential: 0.2,
      currentValuePotential: 0.21,
      currentPrice: 12000,
      targetPrice: 11000,
    },
    {
      stockName: "HLB",
      pastValuePotential: 0.1,
      currentValuePotential: 0.2,
      currentPrice: 64300,
      targetPrice: 65000,
    },
  ];
  const tmpBottom5 = [
    {
      stockName: "LG전자",
      pastValuePotential: -0.5,
      currentValuePotential: -0.4,
      currentPrice: 80000,
      targetPrice: 120000,
    },
    {
      stockName: "삼성전자",
      pastValuePotential: -0.4,
      currentValuePotential: -0.35,
      currentPrice: 78700,
      targetPrice: 85000,
    },
    {
      stockName: "알테오젠",
      pastValuePotential: -0.3,
      currentValuePotential: -0.22,
      currentPrice: 268500,
      targetPrice: 278500,
    },
    {
      stockName: "다우존스",
      pastValuePotential: -0.2,
      currentValuePotential: -0.21,
      currentPrice: 12000,
      targetPrice: 11000,
    },
    {
      stockName: "HLB",
      pastValuePotential: -0.1,
      currentValuePotential: -0.2,
      currentPrice: 64300,
      targetPrice: 65000,
    },
  ];

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={`py-3 basis-1/2 cursor-pointer ${
            activeIndex === 0
              ? "border-b-2 border-tuatara-50 text-tuatara-50 font-bold"
              : "border-b-2 border-tuatara-300 text-tuatara-300"
          }`}
          onClick={() => tabClickHandler(0)}
        >
          BUY
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={`py-3 basis-1/2 cursor-pointer ${
            activeIndex === 1
              ? "border-b-2 border-tuatara-50 text-tuatara-50 font-bold"
              : "border-b-2 border-tuatara-300 text-tuatara-300"
          }`}
          onClick={() => tabClickHandler(1)}
        >
          SELL
        </li>
      ),
    },
  ];
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // 실제 데이터로 여기를 초기화하면 됨
    setBuyStock(tmpTop5);
    setSellStock(tmpBottom5);
  }, []);

  return (
    <div>
      <div className="font-apple mx-16 mb-16">
        <ul className="text-body2 columns-2 text-center flex flex-row">
          {tabContArr.map((element, index) => {
            return element.tabTitle;
          })}
        </ul>
        <div>
          {activeIndex == 0 ? (
            <StockList data={buyStocks} type="buy" />
          ) : (
            <StockList data={sellStocks} type="sell" />
          )}
        </div>
        <div className="flex items-center justify-center text-tuatara-50 text-caption text-center rounded-lg h-16 m-2 bg-tuatara-900">
          <div>
            <div className="flex items-center gap-2">
              <button className="text-caption font-apple">더 보기</button>
              <img className="w-3 h-3" src={downArrow} alt="" />
            </div>
            <div className="text-mini font-apple">80/100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
