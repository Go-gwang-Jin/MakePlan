import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/StudyDetail.css';

const StudyDetail = () => {
    const { date } = useParams();
    const navigate = useNavigate();

    const [fileContent, setFileContent] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        // 이미지 파일일 경우
        if (file.type.startsWith('image/')) {
            reader.onload = (event) => {
                setImageSrc(event.target.result);
                setFileContent(''); // 텍스트는 비움
            };
            reader.readAsDataURL(file);
        }

        // 텍스트 파일일 경우
        else if (file.type === 'text/plain') {
            reader.onload = (event) => {
                setFileContent(event.target.result); // 텍스트 저장
                setImageSrc(''); // 이미지는 비움
            };
            reader.readAsText(file);
        }

        else {
            alert('txt 또는 png 파일만 업로드 가능합니다.');
        }
    };

    return (
        <div className="detail-container">
            <div className="detail-box">
                <label className="upload-btn">
                    Upload
                    <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                </label>

                <div className="study-content">
                    {fileContent && <pre>{fileContent}</pre>}
                    {imageSrc && <img src={imageSrc} alt="업로드된 이미지" style={{ maxWidth: '100%', marginTop: '20px' }} />}
                    {!fileContent && !imageSrc && <p>파일을 업로드해주세요.</p>}
                </div>
            </div>

            <div className="keyword-box">
                <div className="back-arrow" onClick={() => navigate('/study')}>←</div>
                <h3>Session</h3>
                <p>클라이언트</p>
            </div>
        </div>
    );
};

export default StudyDetail;
