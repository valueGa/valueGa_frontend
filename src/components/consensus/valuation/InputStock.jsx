import React, { useEffect, useState } from "react";

export default function InputStock({ value, setValue }) {
  const [stockName, setStockName] = useState("");
  const [stockId, setStockId] = useState("");
  const [stockNameList, setStockNameList] = useState([]);

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
      {
        name: "삼성전자2",
        id: "005934",
      },
      {
        name: "삼성전자2",
        id: "005935",
      },
      {
        name: "삼성전자2",
        id: "005936",
      },
      {
        name: "삼성전자2",
        id: "005937",
      },
    ]);
  }, []);

  const handleSelect = (e) => {
    const selectedStock = stockNameList.find(
      (stock) => stock.name === e.target.value
    );
    if (selectedStock) {
      setValue(selectedStock.id);
      console.log(selectedStock.id);
    }
  };

  return (
    <div className="w-full flex flex-col items-start gap-1">
      <input
        list="input-list"
        placeholder="종목명을 입력하세요"
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
        onBlur={handleSelect}
        className="w-72 p-2 px-3 text-tuatara-100 bg-tuatara-900 focus:border-none"
      />

      <datalist id="input-list" className="bg-tuatara-900">
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
  );
}
