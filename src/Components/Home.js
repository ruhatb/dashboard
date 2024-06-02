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
      
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
  <div className="card bg-blue-100 p-6 rounded-2xl shadow-lg">
    <p className="text-gray-600">Subscription expires on</p>
    <h2 className="text-3xl font-bold">July 23, 2023</h2>
  </div>
  <div className="card bg-blue-100 p-6 rounded-2xl shadow-lg">
    <p className="text-gray-600">Last charge</p>
    <h2 className="text-3xl font-bold">$50 on June 23, 2023</h2>
  </div>
  <div className="card bg-blue-100 p-6 rounded-2xl shadow-lg">
    <p className="text-gray-600">Total Usage Data</p>
    <h2 className="text-3xl font-bold">36.025 GB</h2>
  </div>
  <div className="card bg-blue-100 p-6 rounded-2xl shadow-lg">
    <p className="text-gray-600">Daily Usage Data</p>
    <h2 className="text-3xl font-bold">1.025 GB</h2>
  </div>
</div>

      
      <div className="chart-container">
        <h3>Data usage per network</h3>
        <div className="chart">GRAFİKLER BURAYA EKLENEBİLİR</div>
      </div>
      
      <div className="proxies-container">
        <h3>My Proxies</h3>
       
      </div>
    </div>
  );
};

export default Home;
