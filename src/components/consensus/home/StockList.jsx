import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URI_PATH } from '~/routers/main-router';
import './ArrowStyle.css'; // 기존 CSS 파일 import

export default function StockList({ data, type }) {
  const [arrowClass, setArrowClass] = useState('');

  useEffect(() => {
    if (type === 'buy') {
      setArrowClass('arrow-icon up');
    } else {
      setArrowClass('arrow-icon down');
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
            <Link to={`${URI_PATH.consensusPage}/${index}`} key={index}>
              <div className="flex justify-between text-tuatara-50 text-caption flex-row text-center items-center rounded-lg h-16 m-2 bg-tuatara-950">
                <div className="flex flex-row w-full">
                  <div className="basis-1/5">{element.stockName}</div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <div className={arrowClass} />
                    <div>{element.pastValuePotential * 100}%</div>
                  </div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <div className={arrowClass} />
                    <div>{element.currentValuePotential * 100}%</div>
                  </div>
                  <div className="basis-1/5">{element.currentPrice}원</div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <div className={arrowClass} />
                    <div>{element.targetPrice}원</div>
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
