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

  const [submittedEntries, setSubmittedEntries] = useState<EvaluationDetails[]>(
    []
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save the current entry to submittedEntries
    setSubmittedEntries([...submittedEntries, evaluationDetails]);

    // Reset the form
    setEvaluationDetails({
      subject: "",
      subjectCode: "",
      numberOfStudents: 0,
      checkingRate: 0,
      course: "btech",
      year: "1",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="button-container">
        <button className="submit-button" type="submit">
          Submit
        </button>
        <button className="generate-bill-button" type="submit">
          Submit and Generate Bill
        </button>
      </div>

      {/* Display submitted entries in a table */}
      {submittedEntries.length > 0 && (
        <div className="submitted-entries-container">
          <h3>Submitted Entries:</h3>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Year</th>
                <th>Subject</th>
                <th>Subject Code</th>
                <th>Number of Students</th>
                <th>Checking Rate</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {submittedEntries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.course}</td>
                  <td>{entry.year}</td>
                  <td>{entry.subject}</td>
                  <td>{entry.subjectCode}</td>
                  <td>{entry.numberOfStudents}</td>
                  <td>{entry.checkingRate}</td>
                  <td>{entry.numberOfStudents * entry.checkingRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </form>
  );
};

export default EvaluationPage;
