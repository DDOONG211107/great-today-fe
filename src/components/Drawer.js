import React from "react";
import { Link } from "react-router-dom";
import "../styles/Drawer.css"; // 기존 스타일 그대로 사용

const Drawer = ({ toggleDrawer }) => {
  return (
    <>
      <div className="overlay" onClick={toggleDrawer}></div>
      <div className="drawer">
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleDrawer}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleDrawer}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={toggleDrawer}>
                Signup
              </Link>
            </li>
            <li>
              <Link to="/setdailyquest" onClick={toggleDrawer}>
                Set Quest
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Drawer;
