import React from 'react';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="top-widgets">
        <div className="problem-card">
          <div className="card-header">
            <h2>Problem of the Day</h2>
            <span className="difficulty-tag">Medium</span>
          </div>
          <h3 className="problem-title">Binary Tree Maximum Path Sum</h3>
          <p className="problem-description">Find the path with the maximum sum in a binary tree...</p>
          <button className="solve-button">Solve Now</button>
        </div>

        <div className="deadlines-card">
          <h2>Upcoming Deadlines</h2>
          <div className="deadlines-list">
            <div className="deadline-item">
              <div className="deadline-date blue">
                <span>23</span>
              </div>
              <div className="deadline-info">
                <h4>DSA Test</h4>
                <p>2:30 PM</p>
              </div>
            </div>
            <div className="deadline-item">
              <div className="deadline-date orange">
                <span>25</span>
              </div>
              <div className="deadline-info">
                <h4>Project Submission</h4>
                <p>11:59 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-widgets">
        <div className="progress-card">
          <h2>Weekly Progress</h2>
          <div className="progress-chart">
            <div className="chart-bar" style={{ height: '115.19px' }}></div>
            <div className="chart-bar" style={{ height: '76.8px' }}></div>
            <div className="chart-bar" style={{ height: '153.59px' }}></div>
            <div className="chart-bar" style={{ height: '57.59px' }}></div>
            <div className="chart-bar" style={{ height: '134.39px' }}></div>
            <div className="chart-bar active" style={{ height: '172.8px' }}></div>
            <div className="chart-bar" style={{ height: '96px' }}></div>
          </div>
        </div>

        <div className="performers-card">
          <h2>Top Performers</h2>
          <div className="performers-list">
            <div className="performer-item">
              <div className="performer-rank blue">#1</div>
              <img className="performer-avatar" src="user1.jpg" alt="John Doe" />
              <div className="performer-name">John Doe</div>
              <div className="performer-points">450 points</div>
            </div>
            <div className="performer-item">
              <div className="performer-rank orange">#2</div>
              <img className="performer-avatar" src="user2.jpg" alt="Sarah Smith" />
              <div className="performer-name">Sarah Smith</div>
              <div className="performer-points">425 points</div>
            </div>
            <div className="performer-item">
              <div className="performer-rank green">#3</div>
              <img className="performer-avatar" src="user3.jpg" alt="Mike Johnson" />
              <div className="performer-name">Mike Johnson</div>
              <div className="performer-points">410 points</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;