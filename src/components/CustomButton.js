import React from "react";
import "../styles/CustomButton.css"; // 스타일을 외부 CSS로 관리

const CustomButton = ({ onClick, children, disabled }) => {
  return (
    <button
      className={`custom-button ${disabled ? "disabled" : ""}`}
      onClick={disabled ? null : onClick} // 비활성화 상태일 때 onClick 무시
      disabled={disabled} // disabled 속성 추가
    >
      {children}
    </button>
  );
};

export default CustomButton;
