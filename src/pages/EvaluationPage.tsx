import React, { useState } from "react";
import "./EvaluationPage.css";

interface EvaluationDetails {
  subject: string;
  subjectCode: string;
  numberOfStudents: number;
  checkingRate: number;
  course: string;
  year: string;
}

const EvaluationPage: React.FC = () => {
  const [evaluationDetails, setEvaluationDetails] = useState<EvaluationDetails>(
    {
      subject: "",
      subjectCode: "",
      numberOfStudents: 0,
      checkingRate: 0,
      course: "btech", // Default course
      year: "1",
    }
  );

  const courseOptions = [
    { value: "btech", label: "B.Tech" },
    { value: "mtech", label: "M.Tech" },
    { value: "mca", label: "MCA" },
    { value: "phd", label: "Ph.D" },
  ];
  const yearoptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const calculateTotalAmount = (): number => {
    const checkingAmount =
      evaluationDetails.numberOfStudents * evaluationDetails.checkingRate;
    return checkingAmount;
  };

  return (
    <form>
      <div className="input-container">
        <label>Course:</label>
        <select
          value={evaluationDetails.course}
          onChange={(e) =>
            setEvaluationDetails({
              ...evaluationDetails,
              course: e.target.value,
            })
          }
        >
          {courseOptions.map((course) => (
            <option key={course.value} value={course.value}>
              {course.label}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label>Year :</label>
        <select
          value={evaluationDetails.year}
          onChange={(e) =>
            setEvaluationDetails({
              ...evaluationDetails,
              year: e.target.value,
            })
          }
        >
          {yearoptions.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label>Subject:</label>
        <input
          type="text"
          value={evaluationDetails.subject}
          onChange={(e) =>
            setEvaluationDetails({
              ...evaluationDetails,
              subject: e.target.value,
            })
          }
        />
      </div>
      <div className="input-container">
        <label>Subject Code:</label>
        <input
          type="text"
          value={evaluationDetails.subjectCode}
          onChange={(e) =>
            setEvaluationDetails({
              ...evaluationDetails,
              subjectCode: e.target.value,
            })
          }
        />
      </div>
      <div className="input-container">
        <label>Number of Students:</label>
        <input
          type="number"
          value={evaluationDetails.numberOfStudents}
          onChange={(e) =>
            setEvaluationDetails({
              ...evaluationDetails,
              numberOfStudents: +e.target.value,
            })
          }
        />
      </div>
      <div className="input-container">
        <label>Answer Sheet Checking Rate:</label>
        <input
          type="number"
          value={evaluationDetails.checkingRate}
          onChange={(e) =>
            setEvaluationDetails({
              ...evaluationDetails,
              checkingRate: +e.target.value,
            })
          }
        />
      </div>
      <div className="result-container">
        <h3>Total Amount: ₹{calculateTotalAmount()}</h3>
      </div>
    </form>
  );
};

export default EvaluationPage;
