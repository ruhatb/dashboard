import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home-dashboard">
      <h1>Proxies & Scraping Infrastructure</h1>
      <div className="tabs">
        <button className="tab">My Proxies</button>
        <button className="tab active">Dashboard</button>
      </div>
      
      <div className="cards">
        <div className="card">
          <p>Subscription expires on</p>
          <h2>July 23, 2023</h2>
        </div>
        <div className="card">
          <p>Last charge</p>
          <h2>$50 on June 23, 2023</h2>
        </div>
        <div className="card">
          <p>Total Usage Data</p>
          <h2>36.025 GB</h2>
        </div>
        <div className="card">
          <p>Daily Usage Data</p>
          <h2>1.025 GB</h2>
        </div>
      </div>
      
      <div className="chart-container">
        <h3>Data usage per network</h3>
        <div className="chart">Chart Placeholder</div>
      </div>
      
      <div className="proxies-container">
        <h3>My Proxies</h3>
        {/* My Proxies content goes here */}
      </div>
    </div>
  );
};

export default Home;
