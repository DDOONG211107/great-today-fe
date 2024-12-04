import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton"; // CustomButton 임포트

const SetTodayQuest = () => {
  const navigate = useNavigate();

  const handleSetQuest = () => {
    navigate("/setdailyquest");
  };

  return (
    <div>
      <h2>No quest available for today</h2>
      <p>Please set your quest for the day.</p>
      <CustomButton onClick={handleSetQuest}>목표 설정하기</CustomButton>{" "}
      {/* 커스텀 버튼 사용 */}
    </div>
  );
};

export default SetTodayQuest;
