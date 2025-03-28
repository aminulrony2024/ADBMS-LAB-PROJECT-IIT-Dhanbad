import React from 'react';
import { Zap, DollarSign, Calendar, AlertTriangle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardCard from '../DashboardCard/DashboardCard';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
    <Navbar></Navbar>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Consumption"
          value="450 kWh"
          icon={<Zap size={24} />}
          trend={{ value: 12, isPositive: false }}
        />
        
      
      <DashboardCard
        title="Current Bill"
        value="$124.50"
        icon={<DollarSign size={24} />}
        trend={{ value: 8, isPositive: false }}

        onClick={() => {
          console.log("Navigating to Payment Page");
          navigate('/payment');
        }}  // Navigate to Payment Page
      />
           
        
        <DashboardCard
          title="Due Date"
          value="Mar 25, 2024"
          icon={<Calendar size={24} />}
        />
        
        <DashboardCard
          title="Active Alerts"
          value="2"
          icon={<AlertTriangle size={24} />}
        />
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h2>
        <p className="text-gray-600 dark:text-gray-400">No recent activities available.</p>
      </div>
    </div>
    </>
  );
};

export default Dashboard;

