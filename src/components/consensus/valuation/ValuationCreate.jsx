import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import InputStock from './InputStock';
import InputTemplate from './InputTemplate';
import { useNavigate } from 'react-router-dom';
import { URI_PATH } from '../../../routers/main-router';
import { Login, Signup } from '~/routes/main/MainModal';
import { postLogin, postSignup } from '/src/apis/user';

export default function ValuationCreate() {
  const [selectedStock, setSelectedStock] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('템플릿 선택');
  const [isSelectedStock, setIsSelectedStock] = useState(false);
  const accessToken = localStorage.getItem('valueGa_AccessToken');
  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const signupHandleClose = () => setSignupShow(false);
  const loginHandleClose = () => setLoginShow(false);
  const navigate = useNavigate();

  const handleClickedSignupButton = () => {
    setLoginShow(false);
    setSignupShow(true);
  };

  const handleClickedModalLoginButton = async (email, password) => {
    try {
      const result = await postLogin(`${email}`, `${password}`);

      if (result.data.token != null) {
        localStorage.setItem('valueGa_AccessToken', `Bearer ${result.data.token}`);
      }

      signupHandleClose();
      loginHandleClose();
      navigate(0);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handleClickedModalSignupButton = async (name, email, password) => {
    try {
      const result = await postSignup(`${name}`, `${email}`, `${password}`);

      loginHandleClose();
      signupHandleClose();
    } catch (error) {
      console.log(`${error}`);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-2 text-heading2 mb-10">목표 주가 계산표</div>
      <div className="flex flex-col justify-center items-center gap-8 my-4">
        <div
          className="flex gap-2 pb-4"
          onClick={() => {
            if (!accessToken) {
              // login 모달 띄우기
              setLoginShow(true);
            }
          }}
        >
          <InputStock callback={setSelectedStock} setIsSelectedStock={setIsSelectedStock} />
          <InputTemplate value={selectedTemplate} setValue={setSelectedTemplate} />
        </div>
        <Button
          className="bg-blue-500 border-none px-10 "
          onClick={() => {
            navigate(`${URI_PATH.valuationCreatePage}/?id=${selectedStock.id}&template=${selectedTemplate}`);
          }}
          disabled={!isSelectedStock || selectedTemplate === '템플릿 선택'}
        >
          생성하기
        </Button>
        <Signup
          show={signupShow}
          handleClose={signupHandleClose}
          handleClickedModalSignupButton={handleClickedModalSignupButton}
        />
        <Login
          show={loginShow}
          handleClose={loginHandleClose}
          handleClickedSignupButton={handleClickedSignupButton}
          handleClickedModalLoginButton={handleClickedModalLoginButton}
        />
      </div>
    </div>
  );
}
