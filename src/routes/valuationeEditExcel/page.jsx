import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import ExcelJS from 'exceljs';
import Excel from '../../components/consensus/valuation/ExcelEdit';
import ExcelFooter from '../../components/consensus/valuation/ExcelFooter';
import * as ExcelIO from '@grapecity/spread-excelio';
// import { jwtDecode } from 'jwt-decode';

const ExcelContext = createContext();
export const useExcelContext = () => useContext(ExcelContext);
// const getUserIdFromToken = () => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     const decodeToken = jwtDecode(token);
//     return decodeToken.user_id;
//   }
//   return null;
// };

export default function ValuationEditExcel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [valuationId, setValuationId] = useState(null);
  const [stockId, setStockId] = useState();
  const [stockName, setStockName] = useState();
  const [templateId, setTemplateId] = useState();
  // const [templateName, setTemplateName] = useState();
  const [formula, setFormula] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [valuePotential, setValuePotential] = useState('');
  // const [userId, setUserId] = useState(null);
  const fileInput = useRef(null);
  const spreadRef = useRef(null);

  useEffect(() => {
    const id = searchParams.get('id');
    setValuationId(id); // 수정된 부분: id를 valuationId로 사용
  }, [searchParams]);

  // useEffect(() => {
  //   const userId = getUserIdFromToken();
  //   if (userId) {
  //     setUserId(userId);
  //   } else {
  //     alert('로그인x');
  //   }
  // });

  useEffect(() => {
    if (valuationId) {
      fetch(`/api/valuation/${valuationId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setStockName(data.stock_name);
          setTargetPrice(data.valuation.target_price);
          setValuePotential(data.valuation.value_potential);

          const buffer = new Uint8Array(data.valuation.excel_data.data);
          const workbook = new ExcelJS.Workbook();
          return workbook.xlsx.load(buffer);
        })
        .then((workbook) => {
          const worksheet = workbook.getWorksheet(1);
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
        })
        .catch((error) => {
          console.error('Error loading Excel data:', error);
        });
    }
  }, [valuationId]);

  const handleSaveExcel = () => {
    const json = spreadRef.current.toJSON();
    const excelIO = new ExcelIO.IO();
    console.log(excelIO);
    excelIO.save(
      json,
      (blob) => {
        saveAs(blob, 'spreadsheet.xlsx');
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

  const handleSave = async () => {
    if (!targetPrice || !valuePotential) {
      alert('목표 주가와 상승 여력을 입력하세요.');
      return;
    }

    const json = spreadRef.current.toJSON();
    const excelIO = new ExcelIO.IO();
    console.log('spreadRef toJSON:', json);
    excelIO.save(
      json,
      async (blob) => {
        const file = new File([blob], 'spreadsheet.xlsx');

        // 서버로 파일 업로드
        const formData = new FormData();
        formData.append('file', file, 'excelFile');
        formData.append('user_id', 3); // 사용자 ID 사용
        formData.append('target_price', targetPrice);
        formData.append('value_potential', valuePotential);

        try {
          const response = await fetch(`/api/valuation/${valuationId}`, {
            method: 'PUT',
            body: formData,
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          console.log(result);
          alert('밸류에이션 업데이트 완료');
        } catch (error) {
          console.error('업데이트 중 에러: ', error);
          alert('업데이트 중 에러');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleTemporarySave = async () => {
    if (!targetPrice || !valuePotential) {
      alert('목표 주가와 상승 여력을 입력하세요.');
      return;
    }
    const json = spreadRef.current.toJSON();
    const excelIO = new ExcelIO.IO();
    console.log('spreadRef toJSON:', json);

    excelIO.save(
      json,
      async (blob) => {
        const file = new File([blob], 'spreadsheet.xlsx');

        // 서버로 파일 업로드
        const formData = new FormData();
        formData.append('file', file, 'excelFile');
        formData.append('user_id', 3); // 사용자 ID 사용
        formData.append('target_price', targetPrice);
        formData.append('value_potential', valuePotential);
        console.log(formData.get('file'));

        try {
          const response = await fetch(
            `/api/valuation/${valuationId}/temporary`,
            {
              method: 'PUT',
              body: formData,
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          alert('임시저장 업데이트 완료');
        } catch (error) {
          console.error('임시저장 업데이트 중 에러: ', error);
          alert('임시저장 업데이트 중 에러');
        }
      },
      (error) => {
        console.error('ExcelIO save error:', error);
      }
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-2 text-heading2">목표 주가 계산표</div>
      <div className="flex gap-2">
        <div className="flex">{`종목:  ${stockName}`}</div>
        {/* <p className="flex">{`템플릿:  ${templateName}`}</p> */}
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2">
          목표주가
          <input
            type="number"
            className="text-tuatara-100 bg-tuatara-900"
            value={targetPrice}
            onChange={(e) => setTargetPrice(e.target.value)}
          />
          원
        </div>
        <div className="flex gap-2">
          상승여력
          <input
            type="number"
            className="text-tuatara-100 bg-tuatara-900"
            value={valuePotential}
            onChange={(e) => setValuePotential(e.target.value)}
          />
          %
        </div>
      </div>

      {/*--- 엑셀 ---*/}
      <ExcelContext.Provider
        value={{
          formula,
          setFormula,
          fileInput,
          spreadRef,
          stockId,
          templateId,
        }}
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
      <ExcelFooter onSave={handleSave} onTemporarySave={handleTemporarySave} />
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
