import React from "react";
import TodayQuestList from "./TodayQuestList";
import CustomButton from "./CustomButton";
import "../styles/Today.css"; // 스타일을 외부에서 관리

const Today = ({ result }) => {
  const { allCompleted } = result;

  return (
    <div className="today-container">
      <div className="today-quests">
        <TodayQuestList result={result} />
      </div>
      <div className="today-share">
        <CustomButton
          onClick={() => alert("퀘스트를 모두 완료했습니다!")}
          disabled={!allCompleted}
        >
          자랑하기
        </CustomButton>
      </div>
    </div>
  );
};

export default Today;
