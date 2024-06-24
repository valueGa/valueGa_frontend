import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Spreadsheet from 'react-spreadsheet';
import ExcelEditHeader from '../../components/consensus/valuation/ExcelEditHeader';
import ExcelFooter from '../../components/consensus/valuation/ExcelFooter';
import './valuationEditExcel.css';

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
  const valuationId = searchParams.get('id');
  const [stockId, setStockId] = useState();
  const [stockName, setStockName] = useState('');
  const [templateId, setTemplateId] = useState();
  const [templateName, setTemplateName] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [valuePotential, setValuePotential] = useState('');
  // const [userId, setUserId] = useState(null);
  const spreadRef = useRef(null);

  const [selectedCell, setSelectedCell] = useState({
    row: 0,
    column: 0,
    value: '',
  });

  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    if (valuationId) {
      fetchValuationData(valuationId);
    }
  }, [valuationId]);

  const fetchValuationData = async (id) => {
    try {
      const response = await axios.get(`/api/valuation/${id}`);

      const data = response.data;
      const { excel_data, target_price, value_potential } = data.valuation;
      const { stock_name } = data;

      setSheetData(excel_data);
      setTargetPrice(target_price);
      setValuePotential(value_potential);
      setStockName(stock_name);
    } catch (error) {
      console.error('데이터를 가져오는 중 에러 발생: ', error);
      alert('데이터를 가져오는 중 에러');
    }
  };

  useEffect(() => {
    // API 연결
    setStockName('삼성전자');
    setTemplateName('DCF');
  }, [stockId, templateId]);

  const handleSelectedCell = ({ row, column }) => {
    setSelectedCell({ row, column, value: sheetData[row][column].value });
  };

  const handleSheetDataChange = (sheetArr) => {
    setSheetData(sheetArr);
    setSelectedCell((prev) => ({
      ...prev,
      value: sheetArr[selectedCell.row][selectedCell.column].value,
    }));
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSelectedCell((prev) => ({ ...prev, value: newValue }));

    const updatedData = [...sheetData];
    updatedData[selectedCell.row][selectedCell.column] = { value: newValue };
    setSheetData(updatedData);
  };

  const handleSave = async () => {
    if (!targetPrice || !valuePotential) {
      alert('목표 주가와 상승 여력을 입력하세요.');
      return;
    }

    const excelData = sheetData;

    const requestBody = {
      user_id: 3,
      target_price: targetPrice,
      value_potential: valuePotential,
      excel_data: excelData,
    };

    try {
      const response = await fetch(`/api/valuation/${valuationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert('저장 완료');
    } catch (error) {
      console.error('저장 중 에러: ', error);
      alert('저장 중 에러');
    }
  };

  const handleTemporarySave = async () => {
    if (!targetPrice || !valuePotential) {
      alert('목표 주가와 상승 여력을 입력하세요.');
      return;
    }

    const excelData = sheetData;

    const requestBody = {
      user_id: 3,
      target_price: targetPrice,
      value_potential: valuePotential,
      excel_data: excelData,
    };

    try {
      const response = await fetch(
        `/api/valuation/id=${{ valuationId }}/temporary`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert('임시저장 완료');
    } catch (error) {
      console.error('임시저장 중 에러: ', error);
      alert('임시저장 중 에러');
    }
  };
  return (
    <div className="w-full px-20 flex flex-col justify-center items-center">
      <div className=" text-heading3 font-bold">목표 주가 계산표</div>
      <section className="flex gap-20 py-2 mb-8 text-body2">
        <div className="flex gap-4">
          <p>종목:</p>
          <p className=" text-body2 font-bold">{stockName}</p>
        </div>
        <div className="flex gap-4">
          <p>템플릿:</p>
          <p className="font-bold">{templateName}</p>
        </div>
      </section>
      <ExcelContext.Provider
        value={{
          stockName,
          templateName,
          targetPrice,
          valuePotential,
          setTargetPrice,
          setValuePotential,
        }}
      >
        <ExcelEditHeader />
        <input
          type="text"
          value={selectedCell.value}
          placeholder="f(x) 수식을 입력하세요"
          onChange={handleInputChange}
          className="w-full my-2 p-2 px-6 border text-tuatara-800 border-gray-400 rounded"
        />
        <Spreadsheet
          darkMode
          data={sheetData}
          onChange={handleSheetDataChange}
          onActivate={handleSelectedCell}
          className="spreadsheet-container w-full h-[500px] overflow-scroll pl-0 pr-0"
        />
        <ExcelFooter
          onSave={handleSave}
          onTemporarySave={handleTemporarySave}
        />
      </ExcelContext.Provider>
    </div>
  );
}
