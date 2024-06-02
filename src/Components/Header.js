import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Proxies & Scraping Infrastructure</h1>
      <div className="header-tabs">
        <button className="header-tab">My Proxies</button>
        <button className="header-tab active">Dashboard</button>
      </div>
    </div>
  );
};

export default Header;
