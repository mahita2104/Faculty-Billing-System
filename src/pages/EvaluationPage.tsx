// src/pages/EvaluationPage.tsx
import React, { useState } from "react";
import "./EvaluationPage.css";

interface EvaluationDetails {
  subject: string;
  subjectCode: string;
  numberOfStudents: number;
  checkingRate: number;
  practicalRate: number;
}

const EvaluationPage: React.FC = () => {
  const [evaluationDetails, setEvaluationDetails] = useState<EvaluationDetails>(
    {
      subject: "",
      subjectCode: "",
      numberOfStudents: 0,
      checkingRate: 0,
      practicalRate: 0,
    }
  );

  const calculateTotalAmount = (): number => {
    const checkingAmount =
      evaluationDetails.numberOfStudents * evaluationDetails.checkingRate;
    const practicalAmount =
      evaluationDetails.numberOfStudents * evaluationDetails.practicalRate;
    return checkingAmount + practicalAmount;
  };

  return (
    <form>
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
      <div className="input-container">
        <label>Practical Rate:</label>
        <input
          type="number"
          value={evaluationDetails.practicalRate}
          onChange={(e) =>
            setEvaluationDetails({
              ...evaluationDetails,
              practicalRate: +e.target.value,
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
