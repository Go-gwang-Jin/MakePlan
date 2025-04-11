import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
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
  // const [id, setId] = useState();
  // const [pw, setPw] = useState();


  // function tryLogin() {

  //   // axios.get(  
  //   //     'http://localhost:8083/controller/login',
  //   // // get방식으로 데이터를 보낼때는 params 라는 키값으로 묶어서 보낼것
  //   // //http://localhost:8083/controller/login?id=&pw=pw

  //   //    { params : {id:id, 
  //   //     pw:pw}}
  //   // )
  //   // .then((res)=>{
  //   //     console.log(res)
  //   //     console.log(res.data)

  //   //     if(res.data==1){
  //   //       // 로그인 성공시 이동페이지
  //   //     }

  //   // })

  //   axios.post(
  //     'http://localhost:8083/controller/login',
  //     {
  //       id: id,
  //       pw: pw
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res)
  //     })
  // }
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  console.log(month)


  return (

    <div style={{ display: 'flex', marginLeft: '60px' }}>
      <Sidebar></Sidebar>
      <Menu month={month} setMonth={setMonth}></Menu>

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/calendar" element={<MyCalendar month={month} />} />
          <Route path="/study" element={<StudyCalendar month={month} />} />
          <Route path="/study/:date" element={<StudyDetail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>



        {/* <div className="App">

        <h1>Login</h1>
        <h1>살려줘</h1>
        <h1>살려줘2</h1>
        ID : <input onChange={(e) => setId(e.target.value)}></input>
        <br></br>
        PW : <input onChange={(e) => setPw(e.target.value)}></input>
        <br></br>
        <button onClick={tryLogin}>로그인 시도중</button>

      </div> */}
      </div>
    </div>
  );
}

export default App;
