import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="nav-item" activeClassName="active">
          <span className="nav-text">Dashboard</span>
        </NavLink>
        <NavLink to="/tests" className="nav-item" activeClassName="active">
          <span className="nav-text">Tests</span>
        </NavLink>
        <NavLink to="/resources" className="nav-item" activeClassName="active">
          <span className="nav-text">Resources</span>
        </NavLink>
        <NavLink to="/leaderboard" className="nav-item" activeClassName="active">
          <span className="nav-text">Leaderboard</span>
        </NavLink>
        <NavLink to="/roadmaps" className="nav-item" activeClassName="active">
          <span className="nav-text">Roadmaps</span>
        </NavLink>
      </nav>

      <div className="connected-platforms">
        <h3>Connected Platforms</h3>
        <div className="platforms-list">
          <div className="platform">
            <span className="platform-name">LeetCode</span>
            <span className="platform-status">Connected</span>
          </div>
          <div className="platform">
            <span className="platform-name">GeeksForGeeks</span>
            <span className="platform-status">Connected</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;