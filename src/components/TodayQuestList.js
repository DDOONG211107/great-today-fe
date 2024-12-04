// src/components/TodayQuestList.js
import React from "react";
import TodayQuest from "./TodayQuest";

const TodayQuestList = ({ result }) => {
  const { thumbnailUrl, quest } = result;

  return (
    <div>
      <h2>Today's Quest</h2>

      <img
        src={thumbnailUrl}
        alt="Quest thumbnail"
        style={{ width: "100px", height: "100px" }}
      />

      <div>
        {quest.map((item) => (
          <TodayQuest key={item.idx} quest={item} />
        ))}
      </div>
    </div>
  );
};

export default TodayQuestList;
