import React from "react";
import { useState } from "react";
// import Login from "./MainModal";
import { Login, Signup } from "./MainModal";
import { postLogin, postSignup } from "/src/apis/user";
import { useNavigate } from "react-router-dom";

import { URI_PATH } from "~/routers/main-router";

export default function MainHeader() {
  const [activeButton, setActiveButton] = useState("Home");
  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const navigate = useNavigate();
  const handleClickedButton = (buttonName) => {
    console.log("handleClickedButton");
    setActiveButton(buttonName);
  };

  const signupHandleClose = () => setSignupShow(false);
  const loginHandleClose = () => setLoginShow(false);

  const handleClickedSignupButton = () => {
    console.log("handleClickedSignupButton");
    setSignupShow(true);
  };
  const handleClickedLoginButton = () => {
    console.log("handleClickedLoginButton");
    setLoginShow(true);
  };
  const handleClickedModalLoginButton = async (email, password) => {
    console.log(`${email} ${password}`);
    try {
      const result = await postLogin(`${email}`, `${password}`);
      console.log(`${result.data.token}`);
      if (result.data.token != null) {
        localStorage.setItem(
          "valueGa_AccessToken",
          `Bearer ${result.data.token}`
        );
      }
      signupHandleClose();
      loginHandleClose();
      navigate(`${URI_PATH.consensusPage}`);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handleClickedModalSignupButton = async (name, email, password) => {
    // console.log(`${name}`, `${email}`, `${password}`);
    try {
      const result = await postSignup(`${name}`, `${email}`, `${password}`);
      console.log(`${result.data.user_id}, ${result.data.user_email}`);
      signupHandleClose();
      loginHandleClose();
      navigate(`${URI_PATH.consensusPage}`);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  // 회원가입 응답 데이터
  //   {
  //     "user_id": 5,
  //     "user_email": "nex1223@naver.com",
  //     "user_password": "$2a$10$A/AtzMCytVhipcWPizCU7uUYpR0MeLvg.rO0.Lk1v/3Qc8.PrjNUi",
  //     "user_name": "김민중",
  //     "updatedAt": "2024-06-24T00:18:46.757Z",
  //     "createdAt": "2024-06-24T00:18:46.757Z"
  // }
  return (
    <div className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="w-full flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center text-base justify-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl text-indigo-500 mr-4">ValueGa</span>
          </div>
          <button
            className={`mr-5 text-tuatara-50 ${
              activeButton === "Home" ? "underline" : ""
            }`}
            onClick={() => handleClickedButton("Home")}
          >
            Home
          </button>
          <button
            className={`mr-5 text-tuatara-50 ${
              activeButton === "About As" ? "underline" : ""
            }`}
            onClick={() => handleClickedButton("About As")}
          >
            About As
          </button>
          <button
            className={`mr-5 text-tuatara-50 ${
              activeButton === "Service" ? "underline" : ""
            }`}
            onClick={() => handleClickedButton("Service")}
          >
            Service
          </button>
          <button
            className={`mr-5 text-tuatara-50 ${
              activeButton === "Cotact" ? "underline" : ""
            }`}
            onClick={() => handleClickedButton("Cotact")}
          >
            Contact
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <button
            className="text-tuatara-50"
            onClick={handleClickedLoginButton}
          >
            Login
          </button>
          <button
            className="text-tuatara-50"
            onClick={handleClickedSignupButton}
          >
            Signup
          </button>
        </div>
      </nav>

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
  );
}
