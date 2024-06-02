import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FaHome, FaServer, FaChartLine, FaCog, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        <FaHome />
      </div>
      <div className="sidebar-item" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
        <FaUser />
      </div>
      <div className="sidebar-item">
        <FaServer />
      </div>
      <div className="sidebar-item">
        <FaChartLine />
      </div>
      <div className="sidebar-item">
        <FaCog />
      </div>
    </div>
  );
};

export default Sidebar;
