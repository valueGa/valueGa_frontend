import React, { useCallback, useEffect, useRef, useState } from "react";
import { SpreadSheets } from "@mescius/spread-sheets-react";
import * as GC from "@mescius/spread-sheets";
import * as ExcelIO from "@grapecity/spread-excelio";
import "@mescius/spread-sheets-charts";
import "@mescius/spread-sheets-shapes";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { useExcelContext } from "../../../routes/valuationCreateExcel/page";

export default function Excel() {
  const { formula, setFormula, fileInput, spreadRef } = useExcelContext();
  const [excelValues, setExcelValues] = useState({
    202312: {
      ep: "15243",
      el: "b",
      se: "c",
      fl: "d",
      fp: "e",
      ite: "f",
      sr: "g",
      oi: "h",
      ibt: "i",
      year: "2023",
      rr: "j",
      dr: "k",
      evebitda: "l",
      roe: "m",
      bps: "n",
      ni: "o",
      fpl: "e",
      epl: "w",
      ts: "q",
      stock_id: "054901",
    },
    202212: {
      ep: "1",
      el: "2",
      se: "e",
      fl: "d",
      fp: "1",
      ite: "1",
      sr: "3",
      oi: "3",
      ibt: "5",
      year: "2022",
      rr: "3",
      dr: "ddd",
      evebitda: "12",
      roe: "ef",
      bps: "3",
      ni: "w",
      fpl: "f",
      epl: "f",
      ts: "w",
      stock_id: "054901",
    },
    202112: {
      ep: "e",
      el: "f",
      se: "f",
      fl: "e",
      fp: "e",
      ite: "1",
      sr: "1",
      oi: "2",
      ibt: "4",
      year: "2021",
      rr: "t",
      dr: "t",
      evebitda: "c",
      roe: "e",
      bps: "w",
      ni: "w",
      fpl: "w",
      epl: "1",
      ts: "1",
      stock_id: "054901",
    },
  });

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

    // 템플릿 데이터 세팅
    const years = Object.keys(excelValues);
    years.forEach((year, colIndex) => {
      sheet.setValue(0, colIndex + 1, year);
    });

    const fields = Object.keys(excelValues[years[0]]);
    fields.forEach((field, rowIndex) => {
      sheet.setValue(rowIndex + 1, 0, field);
      years.forEach((year, colIndex) => {
        sheet.setValue(rowIndex + 1, colIndex + 1, excelValues[year][field]);
      });
    });

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

      if (!cellFormula) {
        sheet.setValue(row, col, args.editingText);
      }
    });
  }, []);

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
    </div>
  );
}
