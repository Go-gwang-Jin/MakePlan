import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    console.log('id',id)
    console.log('pw',pw)

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
            console.log("서버응답:", res);
            console.log( res.data);
            if (res.data) {
                alert(`${res.data.user_name}님 환영합니다!`);
                navigate('/calendar'); // 캘린더 페이지 이동
            } else {
                alert("로그인실패");
            }
        })
        .catch((err) => {
            console.error('로그인 요청 오류', err);
            alert("로그인실패");
        });
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
                    <span>아이디 찾기</span>
                    <span>|</span>
                    <span>비밀번호 찾기</span>
                </div>

                <div className="login-divider">간편로그인</div>
            </div>

            <div className="signup-box">
                계정이 없으신가요? <span className="signup-link" onClick={() => navigate('/join')}>가입하기</span>
            </div>
        </div>
    );
};

export default Login;
