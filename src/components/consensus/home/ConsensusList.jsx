import React, { useEffect, useState } from "react";
import StockList from "./StockList";
import downArrow from "~/assets/icons/downArrow.svg";
import { getConsensusMore } from "/src/apis/consensus";

export default function ConsensusList({
  allBuyCount,
  allSellCount,
  allTopList,
  allDownList,
  setAllTopList,
  setAllDownList,
  fetchMoreData,
}) {
  const [buyStocks, setBuyStock] = useState([]);
  const [sellStocks, setSellStock] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const tmpTop5 = [
    {
      company_name: "LG전자",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "삼성전자",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "알테오젠",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "다우존스",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "HLB",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
  ];
  const tmpBottom5 = [
    {
      company_name: "LG전자",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "삼성전자",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "알테오젠",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "다우존스",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
    {
      company_name: "HLB",
      stock_code: 0.5,
      currentValuePotential: 0.4,
      value_potential: 80000,
      target_price: 120000,
    },
  ];

  const tabContArr = [
    {
      tabTitle: (
        <li
          key={1}
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
          key={2}
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
    setBuyStock(allTopList);
    setSellStock(allDownList);
  }, [allTopList, allDownList]);
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
        <button
          onClick={() => {
            if (activeIndex === 0) {
              fetchMoreData({
                activeIndex: 0,
                index: allTopList.length,
              });
            } else {
              fetchMoreData({
                activeIndex: 1,
                index: allDownList.length,
              });
            }
          }}
          className="w-full flex items-center justify-center text-tuatara-50 text-caption text-center rounded-lg h-16 m-2 bg-tuatara-900"
        >
          <div>
            <div className="flex items-center gap-2">
              <p className="text-caption font-apple">더 보기</p>

              <img className="w-3 h-3" src={downArrow} alt="" />
            </div>
            <div className="text-mini font-apple">
              {activeIndex == 0
                ? `${allTopList.length}/${allBuyCount}`
                : `${allDownList.length}/${allSellCount}`}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
