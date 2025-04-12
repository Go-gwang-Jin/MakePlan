import React, { useRef, useState } from 'react';
import '../style/MyPage.css';

const MyPage = () => {
  const fileInput = useRef(null);
  const [profileImage, setProfileImage] = useState('/images/default-profile.png');

  // 상태로 모달 구분
  const [activeModal, setActiveModal] = useState(null); // 'id' | 'pw' | 'nick'

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 모달 닫기
  const closeModal = () => setActiveModal(null);

  // 각 항목별 제목 및 설명
  const modalInfo = {
    id: { title: '아이디 변경', desc: '아이디를 변경해주세요.' },
    pw: { title: '비밀번호 변경', desc: '비밀번호를 변경해주세요.' },
    nick: { title: '닉네임 변경', desc: '닉네임을 변경해주세요.' }
  };

  return (
    <div className="mypage-container">
      <div className="profile-section">
        <img
          src={profileImage}
          alt="프로필"
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
        {/* <button className="info-btn" onClick={() => setActiveModal('id')}>아이디 변경</button> */}
        <button className="info-btn" onClick={() => setActiveModal('pw')}>비밀번호 변경</button>
        <button className="info-btn" onClick={() => setActiveModal('nick')}>닉네임 변경</button>
        <button className="info-btn">친구에게 추천하기</button>
        <button className="withdraw-btn">회원탈퇴</button>
      </div>

      {/* 모달 */}
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-top">
              <h3>{modalInfo[activeModal].title}</h3>
              <span className="close-btn" onClick={closeModal}>←</span>
            </div>
            <p>{modalInfo[activeModal].desc}</p>
            <input type="text" placeholder={`새로운 ${modalInfo[activeModal].title} 입력`} />
            <button className="confirm-btn">지금 변경하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
