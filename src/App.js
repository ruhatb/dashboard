import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log from './Components/Log';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Home from './Components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Log />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
