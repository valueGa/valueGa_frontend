import React from 'react';
import { useExcelContext } from '~/routes/valuationCreateExcel/page';
import { Button } from 'react-bootstrap';
import { CgLoadbarDoc } from 'react-icons/cg';
import { BsArrowUpCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { URI_PATH } from '~/routers/main-router';
import { postTemplate } from '../../../apis/template';

export default function ExcelHeader() {
  const {
    sheetData,
    targetPrice,
    valuePotential,
    setTargetPrice,
    setValuePotential,
  } = useExcelContext();
  const navigate = useNavigate();

  const handleMakeTemplate = async () => {
    // 템플릿화 API 연결
    const newTemplate = sheetData.map((rowArr, i) =>
      rowArr.map((cell, j) => {
        if (i === 0 || j === 0 || cell.value.charAt(0) === '=') {
          // 1행 1열인 경우
          return cell;
        } else {
          return { value: '' };
        }
      })
    );

    await postTemplate({
      templateName: 'test2',
      userId: 1,
      excelData: newTemplate,
    });
    navigate(`${URI_PATH.myPage}`, { redirect: true });
  };

  const handleExportExcel = () => {};

  return (
    <>
      <section className="w-full flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            목표주가
            <input
              type="number"
              className="w-28 h-8 px-2 text-tuatara-100 bg-tuatara-900 rounded-md focus:outline-none focus:outline-1 focus:outline-tuatara-500"
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
              className="w-28 h-8 px-2 text-tuatara-100 bg-tuatara-900 rounded-md focus:outline-none focus:outline-1 focus:outline-tuatara-500"
              value={valuePotential}
              placeholder="0"
              onChange={(e) => setValuePotential(e.target.value)}
            />
            %
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            className="flex items-center gap-1 bg-blue-500 border-none"
            onClick={handleMakeTemplate}
          >
            <CgLoadbarDoc size={20} />
            템플릿화
          </Button>
          <Button className="flex items-center gap-2 bg-blue-400 border-none">
            <BsArrowUpCircle size={18} onClick={handleExportExcel} />
            엑셀 추출
          </Button>
        </div>
      </section>
    </>
  );
}
