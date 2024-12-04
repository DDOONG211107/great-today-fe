// src/components/TodayQuest.js
import React from "react";
import "../styles/TodayQuest.css"; // 스타일 파일 필요시 추가

const TodayQuest = ({ quest }) => {
  return (
    <div className="today-quest">
      <h3>{quest.name}</h3>
      <p>Category: {quest.categoryName}</p>
      <p>Status: {quest.isCompleted ? "Completed" : "Incomplete"}</p>
    </div>
  );
};

export default TodayQuest;
