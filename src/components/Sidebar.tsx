// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveTab("evaluation")}>
          <Link to="/home">My Details</Link>
        </li>
        <li onClick={() => setActiveTab("evaluation")}>
          <Link to="/evaluation">Evaluation</Link>
        </li>
        <li onClick={() => setActiveTab("practical")}>
          <Link to="/practical">Practical Rates</Link>
        </li>
        <li onClick={() => setActiveTab("questionPaper")}>
          <Link to="/questionPaper">Question Paper</Link>
        </li>
        <li onClick={() => setActiveTab("hours")}>
          <Link to="/noofhours">Number of Hours</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
