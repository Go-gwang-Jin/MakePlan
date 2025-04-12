import React, { useState } from 'react';
import './App.css';
//import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Join from './components/Join';
import MyCalendar from './components/MyCalendar';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import StudyCalendar from './components/StudyCalendar';
import StudyDetail from './components/StudyDetail';
import MyPage from './components/MyPage';


function App() {

  const today = new Date();
    const [month, setMonth] = useState(today.getMonth() + 1);
    console.log(month)

  return (

    <div style={{display: 'flex',marginLeft: '60px'}}>
      <Sidebar></Sidebar>
      <Menu month={month} setMonth={setMonth}></Menu>

      <div style={{flex:1}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/calendar" element={<MyCalendar month={month} />} />
          <Route path="/study" element={<StudyCalendar month={month} />} />
          <Route path="/study/:date" element={<StudyDetail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
