import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Dashboard = () => {
  const [info, setInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    const fetchData = async () => {
      try {
        const infoResponse = await axios.get('https://recruitment-api.vercel.app/get-info', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setInfo(infoResponse.data);

        const tableResponse = await axios.get('https://recruitment-api.vercel.app/get-table', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTableData(tableResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleActionClick = (ip) => {
    console.log(`Number of IP: ${ip}`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <p>Subscription expires on</p>
        <h2>{info.expirationDate}</h2>
      </div>
      <div className="dashboard-card">
        <p>Last charge</p>
        <h2>{info.lastCharge}</h2>
      </div>
      <div className="dashboard-card">
        <p>Total Usage Data</p>
        <h2>{info.totalUsage}</h2>
      </div>
      <div className="dashboard-card">
        <p>Daily Usage Data</p>
        <h2>{info.dailyUsage}</h2>
      </div>
      <div className="chart">
        <h3>Data usage per week</h3>
        <div className="chart-placeholder">Chart Placeholder</div>
      </div>
      <div className="transactions-history">
        <h3>Transactions History</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Location</th>
              <th>Rental Period</th>
              <th>Number of IP</th>
              <th>Specific Purpose</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.type}</td>
                <td>{row.location}</td>
                <td>{row.rentalPeriod}</td>
                <td>{row.numberOfIp}</td>
                <td>{row.specificPurpose}</td>
                <td>{row.date}</td>
                <td>
                  <div className="dropdown">
                    <button className="dropdown-button">Actions</button>
                    <div className="dropdown-content">
                      <button onClick={() => handleActionClick(row.numberOfIp)}>Action 1</button>
                      <button onClick={() => handleActionClick(row.numberOfIp)}>Action 2</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
