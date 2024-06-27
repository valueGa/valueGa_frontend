import React, { useEffect, useState } from 'react';
import upArrow from '~/assets/icons/upArrow.svg';
import downArrow from '~/assets/icons/downArrow.svg';
import { Link } from 'react-router-dom';
import { URI_PATH } from '~/routers/main-router';

export default function StockPredictionList({ data, currentPrice }) {
  return (
    <div>
      <div className="mt-8">
        <div className="flex flex-row text-body2 text-tuatara-200 text-center items-center h-7 mt-6">
          <div className="basis-1/5 ">이름</div>
          <div className="basis-1/5">과거 상승여력</div>
          <div className="basis-1/5">현재 상승여력</div>
          <div className="basis-1/5">작성 날짜</div>
          <div className="basis-1/5">목표 주가</div>
        </div>
        {data ? (
          data.map((element, index) => {
            return (
              <div
                key={index}
                className="flex justify-between text-tuatara-50 text-caption flex-row text-center items-center rounded-lg h-16 m-2 bg-tuatara-950"
              >
                <div className="flex flex-row w-full">
                  <div className="basis-1/5">{element.user_name}</div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <div>{(element.user_target_price / element.past_price).toFixed(2)}%</div>
                  </div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <div>{(element.user_target_price / currentPrice).toFixed(2)}%</div>
                  </div>
                  <div className="basis-1/5">{element.valuation_date.slice(0, 10)}</div>
                  <div className="basis-1/5 flex flex-row space-x-6 items-center justify-center">
                    <div>{Number(element.user_target_price).toLocaleString()} 원</div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-tuatara-400 text-center mt-10">아직 벨류에이션 내역이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
