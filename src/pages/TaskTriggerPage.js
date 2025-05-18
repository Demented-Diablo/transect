// Three buttons are provided to trigger data acquisition tasks respectively.
import React from "react";
import { useNavigate } from "react-router-dom";
import './TaskTriggerPage.css';

const TaskTriggerPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <header>
        <h1>Trigger Page</h1>
      </header>
      
      
      <div className="centered">
        <button className="home-btn" onClick={() => navigate("/")}>Homepage</button>
      
        <div className="rectangle">
          <button className="btn" onClick={() => navigate("/data")}>Cocorah</button>
          <button className="btn" onClick={() => navigate("/data")}>Beach</button>
          <button className="btn" onClick={() => navigate("/data")}>Snap</button>
          
        </div>
      </div>
    </div>

  );
};

export default TaskTriggerPage;
