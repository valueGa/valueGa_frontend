import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Excel from "../../components/consensus/valuation/Excel";

export default function ValuationCreateExcel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formula, setFormula] = useState("");
  const fileInput = useRef(null);

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

      {/*--- 엑셀 ---*/}
      <div className="w-full p-10 flex flex-col">
        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="f(x) 수식을 입력하세요"
          className="w-full mt-4 my-2 p-2 px-6 border text-tuatara-800 border-gray-400 rounded"
        />
        <Excel
          formula={formula}
          setFormula={setFormula}
          fileInput={fileInput}
        />
      </div>
    </div>
  );
}
