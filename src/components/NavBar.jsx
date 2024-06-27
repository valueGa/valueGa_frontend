import React, { useState } from "react";
import { Link } from "react-router-dom";
import { URI_PATH } from "~/routers/main-router";
import logo from "~/assets/icons/logo.svg";
import search from "~/assets/icons/search.svg";
import { useNavigate } from "react-router-dom";
import { postLogin, postSignup } from "/src/apis/user";
import { Login, Signup } from "~/routes/main/MainModal";

export default function NavBar() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("valueGa_AccessToken");
  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const signupHandleClose = () => setSignupShow(false);
  const loginHandleClose = () => setLoginShow(false);

  const handleClickedSignupButton = () => {
    setSignupShow(true);
    loginHandleClose();
  };
  const handleClickedLoginButton = () => {
    setLoginShow(true);
  };

  const handleClickedModalLoginButton = async (email, password) => {
    try {
      const result = await postLogin(`${email}`, `${password}`);
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
    try {
      const result = await postSignup(`${name}`, `${email}`, `${password}`);
      signupHandleClose();
      loginHandleClose();
      navigate(`${URI_PATH.consensusPage}`);
    } catch (error) {
      console.log(`${error}`);
    }
  };
  const handleClick = () => {
    if (accessToken) {
      localStorage.removeItem("valueGa_AccessToken");
      navigate(`${URI_PATH.mainPage}`);
    } else {
      handleClickedLoginButton();
    }
  };
  return (
    <div className="flex flex-row w-full text-caption text-tuatara-50 font-apple items-center py-4 px-20 justify-between">
      <ul className="flex flex-row text-center items-center space-x-7">
        <li>
          <Link to="/">
            <img src={logo} alt="logo" className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link to={`${URI_PATH.consensusPage}`}>Consensus</Link>
        </li>
        <li>
          <Link to={`${URI_PATH.valuationPage}`}>Valuation</Link>
        </li>
        <li>
          <Link to={`${URI_PATH.myPage}`}>My Page</Link>
        </li>
      </ul>
      <ul className="flex flex-row text-center items-center space-x-7">
        <li>
          <button onClick={handleClick}>
            {accessToken ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
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
