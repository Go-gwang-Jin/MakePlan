import React from 'react';
import '../style/Sidebar.css';
import { IoTimer } from 'react-icons/io5';
import { BsBook, BsPerson } from 'react-icons/bs';
import { FaCalendar } from "react-icons/fa";
import { BiBarChartAlt2 } from 'react-icons/bi';
import { FaPen } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="menu">
          <Link to="/" className="menu-item">
            <IoTimer size={21} />
            <span>공부시작</span>
          </Link>
          <Link to="/calendar" className="menu-item">
            <FaCalendar size={21} />
            <span>일정달력</span>
          </Link>
          <Link to="/study" className="menu-item">
            <BsBook size={21} />
            <span>공부달력</span>
          </Link>
          <Link to="/mypage" className="menu-item">
            <BsPerson size={21} />
            <span>마이페이지</span>
          </Link>
          <div className="menu-item">
            <BiBarChartAlt2 size={21} />
            <span>공부통계</span>
          </div>
          <div className="menu-item">
            <FaPen size={21} />
            <span>복습퀴즈</span>
          </div>
          <div className="menu-item">
            <FaMoon size={21} />
            <span>다크모드</span>
          </div>
          <div className="menu-item">
            <FiLogOut size={21} />
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
