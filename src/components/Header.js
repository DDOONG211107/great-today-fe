import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 임포트
import "../styles/Header.css"; // 스타일을 별도로 관리

const Header = ({ openDrawer }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <button className="logo-button">오참잘</button>{" "}
          {/* Link로 감싸서 홈으로 이동 */}
        </Link>
      </div>
      <div className="menu-icon" onClick={openDrawer}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
