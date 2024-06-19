import React from "react";
import { useState } from "react";
// import Login from "./MainModal";
import { Login, Signup } from "./MainModal";

export default function MainHeader() {
  const [activeButton, setActiveButton] = useState("Home");
  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const handleClickedButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  const signupHandleClose = () => setSignupShow(false);
  const loginHandleClose = () => setLoginShow(false);
  const handleClickedSignupButton = () => {
    setSignupShow(true);
  };
  const handleClickedLoginButton = () => {
    setLoginShow(true);
  };
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

      <Signup show={signupShow} handleClose={signupHandleClose} />
      <Login
        show={loginShow}
        handleClose={loginHandleClose}
        handleClickedSignupButton={handleClickedSignupButton}
      />
    </div>
  );
}
