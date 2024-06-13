import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ValuationCreateExcel() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("id"), searchParams.get("template"));

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-2 text-heading2">목표 주가 계산표</div>
      <div className="flex gap-2">
        <div className="flex">{`종목:  ${searchParams.get("id")}`}</div>
        <p className="flex">{`템플릿:  ${searchParams.get("template")}`}</p>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2">
          목표주가
          <input type="number" className="text-tuatara-100 bg-tuatara-900" />원
        </div>
        <div className="flex gap-2">
          상승여력
          <input type="number" className="text-tuatara-100 bg-tuatara-900" />%
        </div>
      </div>
    </div>
  );
}
