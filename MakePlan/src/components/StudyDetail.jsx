import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/StudyDetail.css';

const StudyDetail = () => {
    const navigate = useNavigate();

    const [fileContent, setFileContent] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [keywords, setKeywords] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        if (file.type.startsWith('image/')) {
            reader.onload = (event) => {
                setImageSrc(event.target.result);
                setFileContent('');
            };
            reader.readAsDataURL(file);
        } else if (file.type === 'text/plain') {
            reader.onload = (event) => {
                setFileContent(event.target.result);
                setImageSrc('');
            };
            reader.readAsText(file);
        } else {
            alert('txt 또는 png 파일만 업로드 가능합니다.');
        }
    };

    // 저장 버튼 누르면 키워드 추출 (그냥 예시임다)
    const handleSave = () => {
        let extracted = [];
        if (fileContent) {
            // 텍스트 파일이면 단어만 추출
            extracted = fileContent
                .split(/\s+/)
                .filter((word) => word.length > 1)
                .slice(0, 5);
        } else if (imageSrc) {
            // 이미지면 임시 키워드 출력
            extracted = ['나', '언제', '잘까'];
        } else {
            alert('저장할 파일이 없습니다.');
            return;
        }

        setKeywords(extracted);
    };

    return (
        <div className="detail-container">
            <div className="detail-box">
                <div className="upload-section">
                    <label className="upload-btn">
                        Upload
                        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                    </label>
                    <button className="save-btn" onClick={handleSave}>저장</button>
                </div>

                <div className="study-content">
                    {fileContent && <pre>{fileContent}</pre>}
                    {imageSrc && <img src={imageSrc} alt="업로드된 이미지" style={{ maxWidth: '100%', marginTop: '20px' }} />}
                    {!fileContent && !imageSrc && <p>파일을 업로드해주세요.</p>}
                </div>
            </div>

            <div className="keyword-box">
                <div className="back-arrow" onClick={() => navigate('/study')}>←</div>
                <h3>Session</h3>
                {keywords.length > 0 ? (
                    <ul>
                        {keywords.map((word, idx) => (
                            <li key={idx}>{word}</li>
                        ))}
                    </ul>
                ) : (
                    <p>키워드를 추출하려면 파일을 저장해주세요.</p>
                )}
            </div>
        </div>
    );
};

export default StudyDetail;
