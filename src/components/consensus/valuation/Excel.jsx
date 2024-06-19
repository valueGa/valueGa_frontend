import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SpreadSheets } from '@mescius/spread-sheets-react';
import * as GC from '@mescius/spread-sheets';
import * as ExcelIO from '@grapecity/spread-excelio';
import '@mescius/spread-sheets-charts';
import '@mescius/spread-sheets-shapes';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { useExcelContext } from '../../../routes/valuationCreateExcel/page';
import { postValuation } from '../../../apis/valuation';

export default function Excel() {
  const { formula, setFormula, fileInput, spreadRef, stockId, templateId } =
    useExcelContext();
  const [excelValues, setExcelValues] = useState({});

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

    fetchValuationData();
  }, [stockId, templateId]);

  useEffect(() => {
    const sheet = spreadRef.current?.getActiveSheet();
    if (sheet) {
      const { row, col } = sheet.getSelections()[0] || { row: 0, col: 0 };
      sheet.setText(row, col, formula);
    }
  }, [formula]);

  useEffect(() => {
    insertInitValuationData();
  }, [excelValues]);

  const insertInitValuationData = useCallback(() => {
    // 템플릿 데이터 세팅
    if (Object.keys(excelValues).length > 0) {
      const sheet = spreadRef.current?.getActiveSheet();
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
    }
  }, [excelValues]);

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
