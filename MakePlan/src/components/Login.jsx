import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [showFindPwModal, setShowFindPwModal] = useState(false);
  const [showFindIdModal, setShowFindIdModal] = useState(false);

  // 비밀번호 찾기용 상태
  const [findId, setFindId] = useState('');
  const [findName, setFindName] = useState('');
  const [findEmail, setFindEmail] = useState('');

  // 아이디 찾기용 상태
  const [idFindName, setIdFindName] = useState('');
  const [idFindEmail, setIdFindEmail] = useState('');

  const handleLogin = () => {
    if (!id || !pw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    axios.post(`http://localhost:8084/NewSpringProject/member/login`, {
      user_id: id,
      user_pw: pw
    }, { withCredentials: true })
    .then((res) => {
      if (res.data) {
        alert(`${res.data.user_name}님 환영합니다!`);
        navigate('/calendar');
      } else {
        alert("로그인 실패");
      }
    })
    .catch(() => alert("로그인 실패"));
  };

  const closeModal = () => {
    setShowFindPwModal(false);
    setShowFindIdModal(false);
    setFindId('');
    setFindName('');
    setFindEmail('');
    setIdFindName('');
    setIdFindEmail('');
  };

  const handleFindPassword = () => {
    alert('비밀번호 찾기 요청이 전송되었습니다.');
    closeModal();
  };

  const handleFindId = () => {
    alert('아이디 찾기 요청이 전송되었습니다.');
    closeModal();
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="login-box">
        <input
          type="text"
          placeholder="아이디"
          className="login-input"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="login-input"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>로그인</button>

        <div className="login-links">
          <span onClick={() => setShowFindIdModal(true)}>아이디 찾기</span>
          <span>|</span>
          <span onClick={() => setShowFindPwModal(true)}>비밀번호 찾기</span>
        </div>

        <div className="login-divider">간편로그인</div>
      </div>

      <div className="signup-box">
        계정이 없으신가요? <span className="signup-link" onClick={() => navigate('/join')}>가입하기</span>
      </div>

      {/* 비밀번호 찾기 모달 */}
      {showFindPwModal && (
        <div className="login-modal-overlay">
          <div className="login-modal-box">
            <div className="login-modal-top">
              <h3>비밀번호 찾기</h3>
              <span className="login-close-btn" onClick={closeModal}>X</span>
            </div>
            <input type="text" placeholder="아이디" value={findId} onChange={(e) => setFindId(e.target.value)} />
            <input type="text" placeholder="이름" value={findName} onChange={(e) => setFindName(e.target.value)} />
            <input type="email" placeholder="이메일" value={findEmail} onChange={(e) => setFindEmail(e.target.value)} />
            <button className="login-confirm-btn" onClick={handleFindPassword}>비밀번호 찾기</button>
          </div>
        </div>
      )}

      {/* 아이디 찾기 모달 */}
      {showFindIdModal && (
        <div className="login-modal-overlay">
          <div className="login-modal-box">
            <div className="login-modal-top">
              <h3>아이디 찾기</h3>
              <span className="login-close-btn" onClick={closeModal}>X</span>
            </div>
            <input type="text" placeholder="이름" value={idFindName} onChange={(e) => setIdFindName(e.target.value)} />
            <input type="email" placeholder="이메일" value={idFindEmail} onChange={(e) => setIdFindEmail(e.target.value)} />
            <button className="login-confirm-btn" onClick={handleFindId}>아이디 찾기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
