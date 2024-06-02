import React from 'react';
import '../App.css';
import grafImage from '../Utils/graf.png';

const Home = () => {
  return (
    <div className="home-dashboard p-4 space-y-4">
      <h1 className="text-2xl font-bold">Proxies & Scraping Infrastructure</h1>
      <div className="tabs flex space-x-4 mt-2">
        <button className="tab p-2 bg-gray-200 rounded">My Proxies</button>
        <button className="tab active p-2 bg-blue-500 text-white rounded">Dashboard</button>
      </div>
      
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-white p-6 rounded-md shadow-sm border border-gray-200">
          <p className="text-gray-600">Subscription expires on</p>
          <h2 className="text-3xl font-bold">July 23, 2023</h2>
        </div>
        <div className="card bg-white p-6 rounded-md shadow-sm border border-gray-200">
          <p className="text-gray-600">Last charge</p>
          <h2 className="text-3xl font-bold">$50 on June 23, 2023</h2>
        </div>
        <div className="card bg-white p-6 rounded-md shadow-sm border border-gray-200">
          <p className="text-gray-600">Total Usage Data</p>
          <h2 className="text-3xl font-bold">36.025 GB</h2>
        </div>
        <div className="card bg-white p-6 rounded-md shadow-sm border border-gray-200">
          <p className="text-gray-600">Daily Usage Data</p>
          <h2 className="text-3xl font-bold">1.025 GB</h2>
        </div>
      </div>
      
      <div className="chart-container bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Data usage per network</h3>
        <div className="chart">
          <img src={grafImage} alt="Grafik Placeholder" className="w-full h-auto rounded-lg"/>
        </div>
      </div>
      
      <div className="proxies-container bg-white p-6 rounded-lg shadow-lg">
        
      
      </div>
    </div>
  );
};

export default Home;
