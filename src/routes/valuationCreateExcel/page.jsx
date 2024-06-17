import React, { createContext, useContext, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Excel from "../../components/consensus/valuation/Excel";

const ExcelContext = createContext();
export const useExcelContext = () => useContext(ExcelContext);

export default function ValuationCreateExcel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formula, setFormula] = useState("");
  const fileInput = useRef(null);
  const spreadRef = useRef(null);

  const handleSaveExcel = () => {
    const json = spreadRef.current.toJSON();
    const excelIO = new ExcelIO.IO();
    excelIO.save(
      json,
      (blob) => {
        saveAs(blob, "spreadsheet.xlsx");
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleOpenExcel = async () => {
    const file = fileInput.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(data);

        const worksheet = workbook.getWorksheet(1); // 첫 번째 시트를 가져옴

        worksheet.eachRow((row, rowNumber) => {
          row.eachCell((cell, colNumber) => {
            const sheet = spreadRef.current.getSheet(0);
            if (cell.formula) {
              sheet.setFormula(rowNumber - 1, colNumber - 1, cell.formula);
            } else {
              sheet.setValue(rowNumber - 1, colNumber - 1, cell.value);
            }
          });
        });
      };

      reader.readAsArrayBuffer(file);
    }
  };

  //   const handleAddData = () => {
  //     const sheet = spreadRef.current.getActiveSheet();
  //     sheet.setValue(0, 0, "New Data");
  //   };

  const handleGetFormula = () => {
    const sheet = spreadRef.current.getActiveSheet();
    const selection = sheet.getSelections()[0];
    const row = selection.row;
    const col = selection.col;
    const formula = sheet.getFormula(row, col);
    if (formula) {
      alert(`Formula at (${row}, ${col}): ${formula}`);
    } else {
      alert(`No formula at (${row}, ${col})`);
    }
  };

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
      <ExcelContext.Provider
        value={{ formula, setFormula, fileInput, spreadRef }}
      >
        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="f(x) 수식을 입력하세요"
          className="w-full mt-4 my-2 p-2 px-6 border text-tuatara-800 border-gray-400 rounded"
        />
        <Excel />
      </ExcelContext.Provider>
      <div className="w-full my-4 p-4 bg-tuatara-900 rounded">
        <p className="mb-2">내 PC에서 엑셀 가져오기 (.xlsx)</p>
        <input type="file" ref={fileInput} />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={handleOpenExcel}
        >
          OK
        </button>
        <div className="">
          <button
            className="p-2 mr-4 bg-green-500 text-white rounded"
            onClick={handleSaveExcel}
          >
            Save Excel
          </button>
          <button
            className=" p-2 bg-red-500 text-white rounded"
            onClick={handleGetFormula}
          >
            Get Formula
          </button>
        </div>
      </div>
      {/* <div className="w-full p-10 flex flex-col"></div> */}
    </div>
  );
}
