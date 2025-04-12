import React from 'react';
import '../style/StudyQuiz.css';

const StudyQuiz = () => {
  return (
    <div className="quiz-container">


      <div className="quiz-content">
        <div className="quiz-question-box">
          <div className="quiz-question">
            <p>1. ________________________________________ ?</p>
            <p>① __________________________</p>
            <p>② __________________________</p>
            <p>③ __________________________</p>
            <p>④ __________________________</p>
          </div>
          <div className="quiz-question">
            <p>2. ________________________________________ ?</p>
            <p>① __________________________</p>
            <p>② __________________________</p>
            <p>③ __________________________</p>
            <p>④ __________________________</p>
          </div>
        </div>


        <div className="quiz-answer-box">
          <div>
            <p>정답 : ①</p>
            <p>해설 : <a href="#">URL</a></p>
          </div>
          <div>
            <p>정답 : ③</p>
            <p>해설 : <a href="#">URL</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyQuiz;
