import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SpreadSheets } from '@mescius/spread-sheets-react';
import * as GC from '@mescius/spread-sheets';
import * as ExcelIO from '@grapecity/spread-excelio';
import '@mescius/spread-sheets-charts';
import '@mescius/spread-sheets-shapes';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { useExcelContext } from '../../../routes/valuationeEditExcel/page';
import { postValuation } from '../../../apis/valuation.js';
import { getTemplateById } from '../../../apis/template.js';
import { GLOSSARY } from '~/constants/valuation';

export default function Excel() {
  const { formula, setFormula, fileInput, spreadRef, stockId, templateId } =
    useExcelContext();
  const [excelValues, setExcelValues] = useState({});
  const [worksheet, setWorkSheet] = useState();

  useEffect(() => {
    const fetchValuationData = async () => {
      try {
        const getLastThreeYears = () => {
          const currentYear = new Date().getFullYear();
          const years = [];

          for (let i = 1; i <= 3; i++) {
            years.push(`${currentYear - i}12`);
          }

          return years;
        };

        const years = getLastThreeYears();

        if (stockId && templateId) {
          const result = await postValuation(stockId, templateId, years);
          setExcelValues(result.data);
        }
      } catch (error) {
        console.error('Error fetching valuation data:', error);
      }
    };

    const fetchTemplate = async () => {
      try {
        if (stockId && templateId) {
          const result = await getTemplateById(templateId);

          const arrayBuffer = result.data.excel_data.data;
          const workbook = new ExcelJS.Workbook();
          await workbook.xlsx.load(arrayBuffer);

          setWorkSheet(workbook.getWorksheet(1));
        }
      } catch (error) {
        console.error('Error fetching valuation data:', error);
      }
    };

    fetchValuationData();
    fetchTemplate();
  }, [stockId, templateId]);

  useEffect(() => {
    if (worksheet && excelValues) {
      insertInitValuationData();
    }
  }, [worksheet, excelValues]);

  useEffect(() => {
    const sheet = spreadRef.current?.getActiveSheet();
    if (sheet) {
      const { row, col } = sheet.getSelections()[0] || { row: 0, col: 0 };
      sheet.setText(row, col, formula);
    }
  }, [formula]);

  const insertInitValuationData = useCallback(() => {
    // 템플릿 데이터 세팅
    if (Object.keys(excelValues).length > 0) {
      const sheet = spreadRef.current.getSheet(0);

      // console.log(excelValues);
      // 템플릿 항목 세팅 (1열)
      worksheet.eachRow(async (row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
          if (cell.formula) {
            sheet.setFormula(rowNumber - 1, colNumber - 1, cell.formula);
          } else {
            sheet.setValue(rowNumber - 1, colNumber - 1, cell.value);
          }
        });
      });

      // 템플릿 년도 세팅 (1행)
      const years = Object.keys(excelValues);
      years.forEach((year, colIndex) => {
        sheet.setValue(0, colIndex + 1, year);
      });

      // 템플릿 항목에 해당하는 년도별 데이터 삽입 (2행 2열부터)
      const columnCount = worksheet.columnCount;
      const rowCount = worksheet.rowCount;

      for (let row = 2; row <= rowCount; row++) {
        for (let col = 2; col <= columnCount; col++) {
          const columnName = worksheet.getCell(row, 1).value;
          const year = sheet.getText(0, col - 1);
          const codeName = GLOSSARY[columnName];

          // 해당 항목명에 대응하는 값을 가져와서 셀에 설정 (수식은 값 삽입 건너뜀)
          if (
            excelValues[year][codeName] &&
            !worksheet.getCell(row, col).formula
          ) {
            sheet.setValue(row - 1, col - 1, excelValues[year][codeName]);
          }
        }
      }
    }
  }, [excelValues, worksheet]);

  const initSpread = useCallback(
    (spread) => {
      spreadRef.current = spread;
      spread.setSheetCount(2);
      const sheet = spread.getActiveSheet();

      sheet.bind(GC.Spread.Sheets.Events.SelectionChanged, (e, info) => {
        const { row, col } = info.newSelections[0];
        const cellFormula = sheet.getFormula(row, col);
        setFormula(cellFormula || sheet.getText(row, col) || '');
      });

      sheet.bind(GC.Spread.Sheets.Events.EditStarting, (e, args) => {
        setFormula(args.editingText || '');
      });

      sheet.bind(GC.Spread.Sheets.Events.EditChange, (e, args) => {
        setFormula(args.editingText || '');
      });

      sheet.bind(GC.Spread.Sheets.Events.EditEnded, (e, args) => {
        const { row, col } = args;
        const cellFormula = sheet.getFormula(row, col);
        setFormula(cellFormula || sheet.getText(row, col) || '');

        if (!cellFormula) {
          sheet.setValue(row, col, args.editingText);
        }
      });
    },
    [excelValues]
  );

  return (
    <div className="w-full">
      <SpreadSheets
        workbookInitialized={(spread) => initSpread(spread)}
        hostStyle={{
          boxSizing: 'border-box',
          width: '100%',
          height: '600px',
          color: '#3b3b3b',
        }}
      ></SpreadSheets>
    </div>
  );
}
