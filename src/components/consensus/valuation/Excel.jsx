import React, { useCallback, useEffect, useRef } from "react";
import { SpreadSheets } from "@mescius/spread-sheets-react";
import * as GC from "@mescius/spread-sheets";
import * as ExcelIO from "@grapecity/spread-excelio";
import "@mescius/spread-sheets-charts";
import "@mescius/spread-sheets-shapes";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export default function Excel({ formula = "", setFormula, fileInput }) {
  const spreadRef = useRef(null);

  useEffect(() => {
    const sheet = spreadRef.current?.getActiveSheet();
    if (sheet) {
      const { row, col } = sheet.getSelections()[0] || { row: 0, col: 0 };
      sheet.setText(row, col, formula);
    }
  }, [formula]);

  const initSpread = useCallback((spread) => {
    spreadRef.current = spread;
    spread.setSheetCount(2);
    const sheet = spread.getActiveSheet();

    sheet.bind(GC.Spread.Sheets.Events.SelectionChanged, (e, info) => {
      const { row, col } = info.newSelections[0];
      const cellFormula = sheet.getFormula(row, col);
      setFormula(cellFormula || sheet.getText(row, col) || "");
    });

    sheet.bind(GC.Spread.Sheets.Events.EditStarting, (e, args) => {
      setFormula(args.editingText || "");
    });

    sheet.bind(GC.Spread.Sheets.Events.EditChange, (e, args) => {
      setFormula(args.editingText || "");
    });

    sheet.bind(GC.Spread.Sheets.Events.EditEnded, (e, args) => {
      const { row, col } = args;
      const cellFormula = sheet.getFormula(row, col);
      setFormula(cellFormula || sheet.getText(row, col) || "");
    });
  }, []);

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

  const handleAddData = () => {
    const sheet = spreadRef.current.getActiveSheet();
    sheet.setValue(0, 0, "New Data");
  };

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
    <div className="w-full">
      <SpreadSheets
        workbookInitialized={(spread) => initSpread(spread)}
        hostStyle={{
          boxSizing: "border-box",
          width: "100%",
          height: "600px",
          color: "#3b3b3b",
        }}
      ></SpreadSheets>
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
    </div>
  );
}
