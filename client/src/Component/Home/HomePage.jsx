import React from "react";
import Navbar from "./Navbar";
import robotInterview from '../../Asset/robot-interview.png'
import roadmap from '../../Asset/roadmap-icon.png'
import qa from '../../Asset/qa-icon.png'
import mockInteview from '../../Asset/mockiw-icon.png'
import '../Styles/HomePage.css'

const Homepage = () => { 
  const username = "User";

  return (
    <div className="min-h-screen text-white">
      <Navbar username={username}/>
      
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-2xl font-semibold">Hit Your Next Interview With</h1>
        <h1 className="text-4xl text-pink-500">AI</h1>
        <img src={robotInterview} alt="Robot Interview" className="w-64 h-64 mt-4"/>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md">
          Get Start
        </button>
      </div>

      <div className="homepage">
      <div className="card">
        <h3>Road Map</h3>
        <p>Generate any stack roadmap for better study</p>
        <img src={roadmap} alt='roadmap'/>
      </div>
      <div className="card">
        <h3>Practice QA</h3>
        <p>Generate any stack practice QA</p>
        <img src={qa} alt="Practice QA" />
      </div>
      <div className="card">
        <h3>Mock Interview</h3>
        <p>AI-integrated mock interview for you</p>
        <img src={mockInteview} alt="Mock Interview" />
      </div>
</div>
</div>
  );
};

export default Homepage;
