import React, { useEffect, useState } from "react";
import upArrow from "~/assets/icons/upArrow.svg";
import downArrow from "~/assets/icons/downArrow.svg";
import { Link } from "react-router-dom";
import { URI_PATH } from "~/routers/main-router";

export default function StockList({ data, type }) {
  const [arrowIcon, setArrowIcon] = useState(null);

  useEffect(() => {
    console.log(type);
    if (type === "buy") {
      setArrowIcon(upArrow);
    } else {
      setArrowIcon(downArrow);
    }
  }, [type]);

  return (
    <div>
      <div className="mt-8">
        <div className="flex flex-row text-body2 text-tuatara-200 text-center items-center h-7 mt-6">
          <div className="basis-1/5 ">종목명</div>
          <div className="basis-1/5">과거 상승 여력</div>
          <div className="basis-1/5">현재 상승 여력</div>
          <div className="basis-1/5">현재 주가</div>
          <div className="basis-1/5">목표 주가</div>
        </div>
        {data?.map((element, index) => {
          return (
            <Link
              to={`${URI_PATH.consensusPage}/${element.stock_code}`}
              state={element.company_name}
            >
              <div className="flex justify-between text-tuatara-50 text-caption flex-row text-center items-center rounded-lg h-16 m-2 bg-tuatara-950">
                <div className="flex flex-row w-full">
                  <div className="basis-1/5">{element.company_name}</div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <img src={arrowIcon} className="w-3 h-3" />
                    <div>{element.target_price * 100}%</div>
                  </div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <img src={arrowIcon} className="w-3 h-3" />
                    <div>{element.currentValuePotential * 100}%</div>
                  </div>
                  <div className="basis-1/5">{element.target_price}원</div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <img src={arrowIcon} className="w-3 h-3" />
                    <div>{element.target_price}원</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
