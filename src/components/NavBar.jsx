import React from "react";
import { Link } from "react-router-dom";
import { URI_PATH } from "~/routers/main-router";
import logo from "~/assets/icons/logo.svg";
import search from "~/assets/icons/search.svg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full text-caption text-tuatara-50 font-apple items-center p-5 px-14 justify-between">
      <ul className="flex flex-row text-center items-center space-x-7">
        <li>
          <Link to="/">
            <img src={logo} alt="logo" className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link to={`${URI_PATH.consensusPage}`}>Home</Link>
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
          <Link to="#">
            <img src={search} alt="logo" className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("valueGa_AccessToken");
              navigate(`${URI_PATH.mainPage}`);
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
