import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      {/* <header className="header">
        <h1>TranSect Project Data Entry</h1>
      </header> */}
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <Link to="/data" className="nav-link">View Data</Link>
          </li>
          <li>
            <Link to="/tasks" className="nav-link">Trigger Tasks</Link>
          </li>
          <li>
            <Link to="/status" className="nav-link">Task Status</Link>
          </li>
          <li>
            <Link to="/plantnet" className="nav-link">PlantNet (Temporary)</Link>
          </li>
        </ul>
      </nav>
      <footer className="footer">
      </footer>
    </div>
  );
};

export default HomePage;
