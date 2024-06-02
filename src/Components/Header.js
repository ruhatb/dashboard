import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="header flex items-center justify-between p-4 bg-gray-100 shadow-md">
      <div>
        <h1 className="text-xl font-bold">Proxies & Scraping Infrastructure</h1>
        <div className="header-tabs flex space-x-4 mt-2">
          <button className="header-tab">My Proxies</button>
          <button className="header-tab active">Dashboard</button>
        </div>
      </div>
      <div className="search-bar relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.64-4.31a7.5 7.5 0 11-10.61-10.61 7.5 7.5 0 0110.61 10.61z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
