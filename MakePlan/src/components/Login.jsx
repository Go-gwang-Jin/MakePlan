import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8083/controller/login', {
        id: userId,
        pw: password
      });

      // 백엔드에서 로그인 성공 시 1 반환한다고 가정
      if (res.data === 1) {
        alert('로그인 성공!');
        navigate('/calendar');
      } else {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
      }
    } catch (error) {
      console.error('로그인 요청 실패:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="login-box">
        <input
          type="text"
          placeholder="아이디"
          className="login-input"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>로그인</button>

        <div className="login-links">
          <span>아이디 찾기</span>
          <span>|</span>
          <span>비밀번호 찾기</span>
        </div>

        <div className="login-divider">간편로그인</div>
      </div>

      <div className="signup-box">
        계정이 없으신가요??? <span className="signup-link" onClick={() => navigate('/join')}>가입하기</span>
      </div>
    </div>
  );
};

export default Login;
