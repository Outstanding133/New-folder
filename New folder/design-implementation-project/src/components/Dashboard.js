import React from 'react';
import './Dashboard.css'; // Assuming you will create a CSS file for Dashboard styles
import Widgets from './Widgets';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="welcome-message">
          <h1>Welcome back, Alex!</h1>
          <p>Keep up the great work! You're on a 7-day streak.</p>
        </div>
      </div>

      <div className="top-widgets">
        <Widgets />
      </div>

      <div className="bottom-widgets">
        {/* Additional widgets can be added here */}
      </div>
    </div>
  );
};

export default Dashboard;