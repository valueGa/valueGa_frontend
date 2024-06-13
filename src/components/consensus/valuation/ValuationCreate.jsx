import React, { useEffect, useState } from "react";

export default function ValuationCreate() {
  const [stockInput, setStockInput] = useState("");
  const [stockNameList, setStockNameList] = useState([]);

  useEffect(() => {
    console.log(stockInput);
  }, [stockInput]);

  useEffect(() => {
    setStockNameList([
      {
        name: "삼성전자",
        id: "005931",
      },
      {
        name: "삼성전자1",
        id: "005932",
      },
      {
        name: "삼성전자2",
        id: "005930",
      },
    ]);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-2 text-heading2">목표 주가 계산표</div>
      <div className="flex items-center gap-4">
        <label htmlFor="stockList" className="text-body2">
          종목명
        </label>
        <input
          list="stock-list"
          placeholder="종목명을 입력하세요"
          value={stockInput}
          onChange={(e) => setStockInput(e.target.value)}
          className="w-72 p-2 px-3 text-tuatara-100 bg-tuatara-900 focus:border-none"
        />

        <datalist id="stock-list" className="bg-tuatara-900">
          {stockNameList.map((stock) => {
            return (
              <option
                key={stock.id}
                value={stock.name}
                className="text-tuatara-100 bg-tuatara-900"
              ></option>
            );
          })}
        </datalist>
      </div>
    </div>
  );
}
