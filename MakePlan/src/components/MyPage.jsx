import React, { useRef, useState } from 'react';
import '../style/MyPage.css';

const MyPage = () => {
    const fileInput = useRef(null);
    const [profileImage, setProfileImage] = useState('/images/default-profile.png');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfileImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="mypage-container">
            <div className="profile-section">
                <img
                    src={profileImage}
                    alt=""
                    className="profile-image"
                    onClick={() => fileInput.current.click()}
                />
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInput}
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
                <p className="nickname">P곤해님</p>
            </div>

            <div className="info-section">
                <button className="info-btn">아이디 변경dsdd</button>
                <button className="info-btn">비밀번호 변경</button>
                <button className="info-btn">닉네임 변경</button>
                <button className="info-btn">친구에게 추천하기</button>
                <button className="withdraw-btn">회원탈퇴</button>
            </div>
        </div>
    );
};

export default MyPage;
