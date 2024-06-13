import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/consensus">Consensus</Link>
        </li>
        <li>
          <Link to="/mypage">My Page</Link>
        </li>
      </ul>
    </div>
  );
}
