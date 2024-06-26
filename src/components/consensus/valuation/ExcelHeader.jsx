import React, { useEffect, useState } from 'react';
import { useExcelContext } from '~/routes/valuationCreateExcel/page';
import { Button, Form } from 'react-bootstrap';
import { CgLoadbarDoc } from 'react-icons/cg';
import { BsArrowUpCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { URI_PATH } from '~/routers/main-router';
import { postTemplate } from '~/apis/template';
import Modal from 'react-bootstrap/Modal';
import '~/routes/main/ModalStyle.css';
import { jwtDecode } from 'jwt-decode';

const getUserIdFromToken = () => {
  const token = localStorage.getItem('valueGa_AccessToken');
  if (token) {
    const decodeToken = jwtDecode(token);
    return decodeToken.user_id;
  }
  return null;
};

export default function ExcelHeader() {
  const {
    sheetData = [],
    targetPrice,
    valuePotential,
    setTargetPrice,
    setValuePotential,
  } = useExcelContext();
  const navigate = useNavigate();
  const [templateName, setTemplateName] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMakeTemplate = async () => {
    // 템플릿화 API 연결
    const newTemplate = sheetData.map((rowArr, i) =>
      rowArr.map((cell, j) => {
        if (
          i === 0 ||
          j === 0 ||
          (cell.value.length > 0 && cell.value.charAt(0) === '=')
        ) {
          // 1행 1열인 경우
          return cell;
        } else {
          return { value: '' };
        }
      })
    );

    try {
      const res = await postTemplate({
        templateName: templateName,
        userId: getUserIdFromToken(),
        excelData: newTemplate,
      });

      if (res.status === 200) {
        alert('템플릿으로 저장되었습니다.');
      }
    } catch (error) {
      console.error('Error saving template:', error);
    }
  };

  useEffect(() => {
    console.log(templateName);
  }, [templateName]);

  // const handleExportExcel = () => {};

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
            onClick={setShow}
            // onClick={handleMakeTemplate}
          >
            <CgLoadbarDoc size={20} />
            템플릿화
          </Button>
          {/* <Button className="flex items-center gap-2 bg-blue-400 border-none">
            <BsArrowUpCircle size={18} onClick={handleExportExcel} />
            엑셀 추출
          </Button> */}
        </div>
      </section>
      <Modal show={show} onHide={handleClose} dialogClassName="rounded-modal">
        <div className="bg-tuatara-900 text-white rounded-2xl overflow-hidden">
          <Modal.Header
            closeButton
            className="w-full grid grid-cols-3 border-tuatara-600 custom-close-button"
          >
            <div></div>
            <Modal.Title className="text-center text-caption">
              템플릿화
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3 mr-14 ml-14"
              controlId="templateNameControlInput"
            >
              <Form.Control
                type="text"
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder="템플릿명 입력"
                autoFocus
                className="bg-tuatara-900 placeholder-tuatara-400 text-white text-caption font-apple border-tuatara-400 pl-10 py-2 focus:bg-tuatara-900 focus:text-white"
              />
            </Form.Group>
          </Modal.Body>
          <div className="flex justify-center py-2">
            <Button
              onClick={() => {
                handleClose();
                handleMakeTemplate();
              }}
              className="bg-blue-500 border-none pr-8 pl-8 text-caption"
              disabled={templateName.length > 0 ? false : true}
            >
              완료
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
