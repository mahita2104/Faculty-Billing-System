
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FacultyDetails from "./components/FacultyDetails";
import EvaluationPage from "./pages/EvaluationPage";
import QuestionPaper from "./pages/QuestionPaper";
import PracticalPage from "./pages/Practical";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Header from "./components/header";
import RateCalculator from "./pages/noofhours";
import "./App.css";

const App: React.FC = () => {
  const shouldShowSidebar = () => {
    const currentPath = window.location.pathname;
    return !["/login", "/signup"].includes(currentPath);
  };

  // Dummy setActiveTab function, replace this with your actual implementation
  const setActiveTab = (tab: string) => {
    // Your implementation logic here
    console.log("Set active tab:", tab);
  };

  return (
    <Router>
      <Header />
      <div className="app">
        {shouldShowSidebar() && <Sidebar setActiveTab={setActiveTab} />}
        <div className="main-content">
          <Routes>
            <Route
              path="/home"
              element={<FacultyDetails />}
            />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/practical" element={<PracticalPage />} />
            <Route path="/questionPaper" element={<QuestionPaper />} />
            <Route path="/noofhours" element={<RateCalculator />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* Add a default route to redirect to home if no route matches */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
