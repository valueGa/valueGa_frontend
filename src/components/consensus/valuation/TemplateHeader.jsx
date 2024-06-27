import React from 'react';
import { useExcelContext } from '../../../routes/templateEditExcel/page';
import { Button } from 'react-bootstrap';
import { CgLoadbarDoc } from 'react-icons/cg';
import { BsArrowUpCircle } from 'react-icons/bs';

export default function TemplateEditHeader() {
  const { targetPrice, valuePotential, setTargetPrice, setValuePotential } =
    useExcelContext();

  return (
    <>
      <section className="w-full flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            목표주가
            <input
              type="number"
              className="w-28 h-8 px-2 text-tuatara-100 bg-tuatara-900 rounded-md"
              value={targetPrice}
              placeholder="0"
              onChange={(e) => setTargetPrice(e.target.value)}
            />
            원
          </div>
          <div className="flex gap-2 items-center">
            상승여력
            <input
              type="number"
              className="w-28 h-8 px-2 text-tuatara-100 bg-tuatara-900 rounded-md"
              value={valuePotential}
              placeholder="0"
              onChange={(e) => setValuePotential(e.target.value)}
            />
            %
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button className="flex items-center gap-1 bg-blue-500 border-none">
            <CgLoadbarDoc size={20} />
            템플릿화
          </Button>
          {/* <Button className="flex items-center gap-2 bg-blue-400 border-none">
            <BsArrowUpCircle size={18} />
            엑셀 추출
          </Button> */}
        </div>
      </section>
    </>
  );
}
