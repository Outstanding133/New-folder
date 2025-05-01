import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './assets/css/styles.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;