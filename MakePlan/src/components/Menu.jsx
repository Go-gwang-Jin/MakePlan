import React from 'react';
import '../style/Menu.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Menu = ({ month, setMonth }) => {

    const location = useLocation();

    const handlePrev = () => {
        setMonth((prev) => (prev === 1 ? 12 : prev - 1));
    };

    const handleNext = () => {
        setMonth((prev) => (prev === 12 ? 1 : prev + 1));
    };

    const handleSubjectChange = (e) => {
        console.log('선택한 과목:', e.target.value);
    };

    return (
        <div className="menu-fixed">
            <div className="menu-top">
                <div className="menu-month">
                    <FaChevronLeft onClick={handlePrev} />
                    <span className="month-text">{month.toString().padStart(2, '0')}</span>
                    <FaChevronRight onClick={handleNext} />
                </div>
                <div className="menu-welcome">님 환영합니다</div>
            </div>

            
            {location.pathname === '/quiz' && (
                <div className="subject-select-box">
                    <select onChange={handleSubjectChange}>
                        <option value="">과목을 선택하세요</option>
                        <option value="subject1">1과목 | 소프트웨어 설계</option>
                        <option value="subject2">2과목 | 소프트웨어 개발</option>
                        <option value="subject3">3과목 | 데이터베이스 구축</option>
                        <option value="subject4">4과목 | 프로그래밍 언어 활용</option>
                        <option value="subject5">5과목 | 정보시스템 구축관리</option>
                    </select>
                </div>
            )}
        </div>
    );
};

export default Menu;
