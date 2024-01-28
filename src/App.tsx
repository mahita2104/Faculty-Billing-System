import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FacultyDetails from "./components/FacultyDetails";
import EvaluationPage from "./pages/EvaluationPage";
import QuestionPaper from "./pages/QuestionPaper";
import PracticalPage from "./pages/Practical";
import NoOfHours from "./pages/noofhours";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Header from "./components/header";

import "./App.css";

const App: React.FC = () => {
  const facultyDetails = {
    name: "John Doe",
    address: "123 Main St, City",
    designation: "Professor",
    email: "john.doe@example.com",
    mobileNo: "9876543210",
    alternateNo: "9876543211",
    bankName: "Sample Bank",
    branchName: "City Branch",
    accountNo: "1234567890",
    ifscCode: "ABCD1234567",
  };

  // Function to determine whether to show the Sidebar based on the current route
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
              element={<FacultyDetails {...facultyDetails} />}
            />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/practical" element={<PracticalPage />} />
            <Route path="/questionPaper" element={<QuestionPaper />} />
            <Route path="/noofhours" element={<NoOfHours />} />
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

