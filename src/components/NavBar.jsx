import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/icons/logo.svg";
import search from "~/assets/icons/search.svg";

export default function NavBar() {
  // 추후에 router 위치 정해지면, Link to에 링크 추가하기
  return (
    <div className="flex flex-row w-screen text-caption text-tuatara-50 font-apple items-center p-5 px-14 justify-between">
      <ul className="flex flex-row text-center items-center space-x-7">
        <li>
          <Link to="/">
            <img src={logo} alt="logo" className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Valuation</Link>
        </li>
        <li>
          <Link to="#">My Page</Link>
        </li>
      </ul>
      <ul className="flex flex-row text-center items-center space-x-7">
        <li>
          <Link to="#">
            <img src={search} alt="logo" className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link to="#">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
