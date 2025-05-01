import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">CodeCampus</div>
          </div>
          <div className="user-menu">
            <div className="notification-icon">
              <div className="frame">
                <svg className="vector" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.9 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z" fill="#4B5563"/>
                </svg>
              </div>
              <span className="notification-badge">3</span>
            </div>
            <img className="user-avatar" src="profile-image.jpg" alt="User avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;