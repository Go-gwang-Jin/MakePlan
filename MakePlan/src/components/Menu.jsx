import React from 'react';
import '../style/Menu.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Menu = ({ month, setMonth }) => {
    const handlePrev = () => {
        setMonth((prev) => (prev === 1 ? 12 : prev - 1));
    };

    const handleNext = () => {
        setMonth((prev) => (prev === 12 ? 1 : prev + 1));
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
        </div>
    );
};

export default Menu;