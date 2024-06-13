import React, { useEffect, useState } from "react";
import InputDataList from "./InputDataList";

export default function InputStock() {
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

  return (
    <InputDataList
      label="종목"
      placeholder="종목명을 입력하세요"
      value={stockInput}
      setInput={setStockInput}
    >
      {stockNameList.map((stock) => {
        return (
          <option
            key={stock.id}
            value={stock.name}
            className="text-tuatara-100 bg-tuatara-900"
          ></option>
        );
      })}
    </InputDataList>
  );
}
