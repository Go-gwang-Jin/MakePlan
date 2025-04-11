import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/calendar'); // 캘린더 페이지 이동
    };



    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <div className="login-box">
                <input type="text" placeholder="아이디" className="login-input" />
                <input type="password" placeholder="비밀번호" className="login-input" />
                <button className="login-btn" onClick={handleLogin}>로그인dd</button>

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
