import React, { useState } from 'react';
import '../style/Join.css';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const [form, setForm] = useState({
        userId: '',
        password: '',
        passwordCheck: '',
        name: '',
        nickname: '',
        email: '',
        birthYear: '',
        birthMonth: '',
        birthDay: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        console.log('회원가입 정보:', form);

        alert('회원가입에 성공했습니다!');
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="join-container">
            <h2 className="join-title">회원가입</h2>

            <div className="join-box">
                {/* 아이디 */}
                <label className="input-label">아이디</label>
                <div className="input-id-wrap">
                    <input
                        type="text"
                        name="userId"
                        placeholder="아이디 입력"
                        onChange={onChange}
                    />
                    <button className="check-btn">중복확인</button>
                </div>

                {/* 비밀번호 */}
                <label className="input-label">비밀번호</label>
                <input type="password" name="password" placeholder="비밀번호 입력" onChange={onChange} />

                {/* 비밀번호 확인 */}
                <label className="input-label">비밀번호 확인</label>
                <input type="password" name="passwordCheck" placeholder="비밀번호 재입력" onChange={onChange} />

                {/* 이름 */}
                <label className="input-label">이름</label>
                <input type="text" name="name" placeholder="이름을 입력해주세요" onChange={onChange} />

                {/* 닉네임 */}
                <label className="input-label">닉네임</label>
                <input type="text" name="nickname" placeholder="닉네임을 입력해주세요" onChange={onChange} />

                {/* 이메일 */}
                <label className="input-label">Email</label>
                <input type="email" name="email" placeholder="이메일을 입력해주세요" onChange={onChange} />

                {/* 생년월일 */}
                <label className="input-label">생년월일</label>
                <div className="birth-wrap">
                    <select name="birthYear" onChange={onChange}>
                        <option>년도</option>
                        {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
                            <option key={year}>{year}</option>
                        ))}
                    </select>
                    <select name="birthMonth" onChange={onChange}>
                        <option>월</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                            <option key={m}>{m}</option>
                        ))}
                    </select>
                    <select name="birthDay" onChange={onChange}>
                        <option>일</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                            <option key={d}>{d}</option>
                        ))}
                    </select>
                </div>

                <div className="join-btn-wrap">
                    <button className="join-btn submit" onClick={handleSubmit}>가입하기</button>
                    <button className="join-btn cancel" onClick={handleCancel}>가입취소</button>
                </div>
            </div>
        </div>
    );
};

export default Join;
