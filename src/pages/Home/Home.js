import React, { useEffect, useState } from "react";
import Today from "../../components/Today";
import SetTodayQuest from "../../components/SetTodayQuest";

const Home = () => {
  const [questData, setQuestData] = useState(null); // API로 받은 데이터 저장
  const [status, setStatus] = useState(null); // 상태 코드를 저장
  const token = "your-token-value"; // 여기에 실제 토큰 값을 넣어야 함

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/test", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
          },
        });

        // 상태 코드에 따라 다르게 처리
        if (response.status === 200) {
          const data = await response.json(); // JSON 데이터를 추출
          const obj = {
            allCompleted: true,
            // allCompleted:false,
            thumbnailUrl: "www.naver.com",
            quest: data,
          };
          setQuestData(obj);
          if (data.message === "success") {
            setQuestData(data); // 성공 시 결과 데이터만 저장
          }
        } else if (response.status === 401 || response.status === 404) {
          setStatus(response.status); // 401 또는 404 상태 저장
        }
      } catch (error) {
        console.error("Error fetching the quest data:", error);
        setStatus(404); // 오류 발생 시 404로 처리
      }
    };

    // fetchData();

    const dummyquest1 = {
      allCompleted: true,
      // allCompleted:false,
      thumbnailUrl: "www.naver.com",
      quest: [
        {
          idx: 1,
          name: "1번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
      ],
    };
    const dummyquest3 = {
      allCompleted: false,
      thumbnailUrl: "www.naver.com",
      quest: [
        {
          idx: 1,
          name: "1번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
        {
          idx: 2,
          name: "2번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
        {
          idx: 3,
          name: "3번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
      ],
    };
    const dummyquest5 = {
      allCompleted: false,
      thumbnailUrl: "www.naver.com",
      quest: [
        {
          idx: 1,
          name: "1번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
        {
          idx: 2,
          name: "2번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
        {
          idx: 3,
          name: "3번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
        {
          idx: 4,
          name: "4번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
        {
          idx: 5,
          name: "5번째 목표",
          categoryIdx: 1,
          categoryName: "더미데이터",
          isCompleted: false,
        },
      ],
    };
    setQuestData(dummyquest5);
    // setStatus(404);
  }, []);

  // 상태에 따라 다른 컴포넌트를 렌더링
  if (questData) {
    return <Today result={questData} />; // 200번 코드일 때 퀘스트 리스트 출력
  } else if (status === 401 || status === 404) {
    return <SetTodayQuest />; // 401 또는 404 코드일 때 퀘스트 설정 컴포넌트 출력
  }

  return <div>Loading...</div>; // 로딩 중일 때
};

export default Home;
