import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FacultyDetails from "./components/FacultyDetails";
import EvaluationPage from "./pages/EvaluationPage";
import QuestionPaper from "./pages/QuestionPaper";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Header from "./components/header";
import RateCalculator from "./pages/noofhours";
import "./App.css";

const App: React.FC = () => {
 return (
    <Router>
      <Header />
      <div className="app">
        <Sidebar setActiveTab={() => {}} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<FacultyDetails />} />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/questionPaper" element={<QuestionPaper />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/noofhours" element={<RateCalculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
