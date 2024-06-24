import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import Spreadsheet from 'react-spreadsheet';
import ExcelHeader from '~/components/consensus/valuation/ExcelHeader';
import ExcelFooter from '~/components/consensus/valuation/ExcelFooter';
import './valuationCreateExcel.css';
import { getTemplateById } from '~/apis/template';

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

export default function ValuationCreateExcel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stockId, setStockId] = useState();
  const [stockName, setStockName] = useState();
  const [templateId, setTemplateId] = useState();
  const [templateName, setTemplateName] = useState();
  const [targetPrice, setTargetPrice] = useState('');
  const [valuePotential, setValuePotential] = useState('');
  // const [userId, setUserId] = useState(null);
  const fileInput = useRef(null);
  const spreadRef = useRef(null);

  const [selectedCell, setSelectedCell] = useState({
    row: 0,
    column: 0,
    value: '',
  });

  const [sheetData, setSheetData] = useState([
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
  ]);

  useEffect(() => {
    setStockId(searchParams.get('id'));
    setTemplateId(searchParams.get('template'));
  }, [searchParams]);

  useEffect(() => {
    // API 연결
    setStockName('삼성전자');
  }, [stockId]);

  useEffect(() => {
    // API 연결

    const fetchTemplateById = async () => {
      if (templateId) {
        const res = await getTemplateById(templateId);
        setTemplateName(res.data.template_name);
        setSheetData(res.data.excel_data);
        console.log(res);
      }
    };

    fetchTemplateById();
  }, [templateId]);

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
    console.log('저장');
  };

  const handleTemporarySave = async () => {
    console.log('임시저장');
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
          sheetData,
          stockName,
          templateName,
          targetPrice,
          valuePotential,
          setTargetPrice,
          setValuePotential,
        }}
      >
        <ExcelHeader />
        <input
          type="text"
          value={selectedCell.value}
          placeholder="f(x) : 값 또는 수식을 입력하세요"
          onChange={handleInputChange}
          className="w-full my-2 px-4 border-none py-2 text-tuatara-100 bg-tuatara-900 rounded focus:outline-none focus:outline-1 focus:outline-tuatara-500"
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
