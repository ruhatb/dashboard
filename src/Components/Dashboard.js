import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const [info, setInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [chartData, setChartData] = useState([10, 20, 30, 40, 50, 60, 70]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
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
  }, [navigate]);

  const handleActionClick = (ip) => {
    console.log(`Number of IP: ${ip}`);
  };

  return (
    <div className="dashboard p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="dashboard-card bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-600">Subscription expires on</p>
          <h2 className="text-2xl font-bold">{info.expirationDate}</h2>
        </div>
        <div className="dashboard-card bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-600">Last charge</p>
          <h2 className="text-2xl font-bold">{info.lastCharge}</h2>
        </div>
        <div className="dashboard-card bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-600">Total Usage Data</p>
          <h2 className="text-2xl font-bold">{info.totalUsage}</h2>
        </div>
        <div className="dashboard-card bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-600">Daily Usage Data</p>
          <h2 className="text-2xl font-bold">{info.dailyUsage}</h2>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-semibold mb-2">Data usage per week</h3>
        <div className="chart-placeholder flex justify-between items-end h-32">
          {chartData.map((data, index) => (
            <div
              key={index}
              style={{ height: `${data}px` }}
              className="bg-gray-300 w-4"
            ></div>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Transactions History</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rental Period</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of IP</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specific Purpose</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2">{row.location}</td>
                <td className="px-4 py-2">{row.rentalPeriod}</td>
                <td className="px-4 py-2">{row.numberOfIp}</td>
                <td className="px-4 py-2">{row.specificPurpose}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <button className="dropdown-button bg-blue-500 text-white px-4 py-2 rounded">Actions</button>
                    <div className="dropdown-content absolute hidden bg-white shadow-lg">
                      <button onClick={() => handleActionClick(row.numberOfIp)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Action 1</button>
                      <button onClick={() => handleActionClick(row.numberOfIp)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Action 2</button>
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
