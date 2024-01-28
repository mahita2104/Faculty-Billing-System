import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FacultyDetails from "./components/FacultyDetails";
import EvaluationPage from "./pages/EvaluationPage";
import QuestionPaper from "./pages/QuestionPaper";
import PracticalPage from "./pages/Practical";
//import noofhours from "./pages/noofhours";
//import conveyance from "./pages/conveyance";
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

  return (
    <Router>
      <Header />
      <div className="app">
        <Sidebar setActiveTab={() => {}} />
        <div className="main-content">
          <Routes>
            <Route
              path="/home"
              element={<FacultyDetails {...facultyDetails} />}
            />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/practical" element={<PracticalPage />} />

            <Route path="/questionPaper" element={<QuestionPaper />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
