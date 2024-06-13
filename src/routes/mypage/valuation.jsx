import React, { useEffect } from "react";
import { useState } from "react";
import moreIcon from "~/assets/icons/more.svg";

export default function Valuation() {
  const [valList, setValList] = useState(null);
  /* axios 이전, css를 위한 dump data */
  const tmpValList = [
    {
      stockName: "삼성전자",
      targetPrice: 90000,
      valuePotential: 0.1,
      isTemp: false,
      date: "2024.06.10",
    },
    {
      stockName: "SK하이닉스",
      targetPrice: 220000,
      valuePotential: 0.2,
      isTemp: false,
      date: "2024.06.12",
    },
    {
      stockName: "신한지주",
      targetPrice: null,
      valuePotential: null,
      isTemp: true,
      date: "2024.06.10",
    },
  ];
  useEffect(() => {
    setValList(tmpValList);
  }, []);
  return (
    <div>
      <div className="flex flex-row text-center items-center w-3/5 h-8 mt-6">
        <div className="basis-1/3">종목</div>
        <div className="basis-1/3">목표 주가</div>
        <div className="basis-1/3">상승 여력</div>
      </div>
      <div>
        {valList?.map((element, index) => {
          return (
            <div className="text-white flex justify-between flex-row text-center items-center rounded-lg h-20 m-5 bg-tuatara-900">
              <div className="flex flex-row basis-3/5">
                <div className="basis-1/3">{element.stockName}</div>
                <div className="basis-1/3">{element.targetPrice}원</div>
                <div className="basis-1/3">{element.valuePotential * 100}%</div>
              </div>
              <div className="flex justify-end flex-row basis-2/5 mr-8">
                <div className="basis-1/5 mr-2">
                  {element.isTemp ? "임시 저장" : "저장 완료"}
                </div>
                <div className="basis-1/5 mr-2">{element.date}</div>
                <div className="basis-1/7 mr-2">
                  <img src={moreIcon} alt="moreIcon" className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
