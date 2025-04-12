import React from 'react';
import '../style/StudyStats.css';

const StudyStats = () => {
  return (
    <div className="stats-container">
      <div className="stats-left">
        <img
          src="/images/default-profile.png"
          alt="프로필"
          className="stats-profile"
        />
        <p className="stats-nickname">P곤해님</p>
      </div>

      <div className="stats-right">
        <div className="stats-box">공부한 요약 데이터 영역</div>
        <div className="stats-box">공부 시간/과목별 통계 영역</div>
      </div>
    </div>
  );
};

export default StudyStats;
