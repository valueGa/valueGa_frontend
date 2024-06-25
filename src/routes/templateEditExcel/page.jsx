import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Spreadsheet from 'react-spreadsheet';
import TemplateEditHeader from '../../components/consensus/valuation/TemplateHeader';
import TemplateFooter from '../../components/consensus/valuation/TemplateFooter';
import '../valuationCreateExcel/valuationCreateExcel.css';
import axios from 'axios';
import { getTemplateById, editMyTemplate } from '../../apis/template';

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

export default function TemplateEditExcel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stockName, setStockName] = useState();
  const [templateId, setTemplateId] = useState();
  const [templateName, setTemplateName] = useState();
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
    if (searchParams.get('id')) {
      const newTemplateId = searchParams.get('id');
      if (newTemplateId !== templateId) {
        setTemplateId(newTemplateId);
        fetchData(newTemplateId);
      }
    }
  }, [templateId]);

  const fetchData = async (templateId) => {
    try {
      const response = await getTemplateById(templateId);

      setSheetData(response.data.excel_data);
      setTemplateName(response.data.template_name);
      setStockName('미정');
    } catch (error) {
      console.error('템플릿 불러오기 중 에러: ', error);
      alert('템플릿 호출 오류');
    }
  };

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
    //템플릿을 수정해서 저장.
    try {
      const requestBody = {
        excel_data: sheetData,
      };
      const response = await editMyTemplate(templateId, requestBody);

      if (response.status === 200) {
        alert('수정이 완료되었습니다.');
      } else {
        alert('수정이 실패했습니다.');
        console.error(response.data.error);
      }
    } catch (error) {
      console.error('Error updating template :', error);
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
        <TemplateEditHeader />
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
        <TemplateFooter onSave={handleSave} />
      </ExcelContext.Provider>
    </div>
  );
}
