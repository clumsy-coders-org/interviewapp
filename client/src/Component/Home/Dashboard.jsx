import React from 'react';
import '../Styles/Dashboard.css'
import roadmapIcon from '../../Asset/roadmap-icon.png'
import qaIcon from '../../Asset/qa-icon.png'
import mockInterviewIcon from '../../Asset/mockiw-icon.png'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h3>Road Map</h3>
        <p>Generate any stack roadmap for better study</p>
        <img src={roadmapIcon} alt='roadmap'/>
      </div>
      <div className="card">
        <h3>Practice QA</h3>
        <p>Generate any stack practice QA</p>
        <img src={qaIcon} alt="Practice QA" />
      </div>
      <div className="card">
        <h3>Mock Interview</h3>
        <p>AI-integrated mock interview helps you overcome your interview fear</p>
        <img src={mockInterviewIcon} alt="Mock Interview" />
      </div>
    </div>
  );
};

export default Dashboard;
