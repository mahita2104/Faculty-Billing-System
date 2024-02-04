import React, { useState } from "react";
import "./Practical.css";

interface PracticalDetails {
  subject: string;
  subjectCode: string;
  numberOfStudents: number;
  checkingRate: number;
  course: string;
  year: string;
}

const PracticalPage: React.FC = () => {
  const [practicalDetails, setPracticalDetails] = useState<PracticalDetails>({
    subject: "",
    subjectCode: "",
    numberOfStudents: 0,
    checkingRate: 0,
    course: "btech", // Default course
    year: "1",
  });

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
      practicalDetails.numberOfStudents * practicalDetails.checkingRate;
    return checkingAmount;
  };

  return (
    <form>
      <div className="input-container">
        <label>Course:</label>
        <select
          value={practicalDetails.course}
          onChange={(e) =>
            setPracticalDetails({
              ...practicalDetails,
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
          value={practicalDetails.year}
          onChange={(e) =>
            setPracticalDetails({
              ...practicalDetails,
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
          value={practicalDetails.subject}
          onChange={(e) =>
            setPracticalDetails({
              ...practicalDetails,
              subject: e.target.value,
            })
          }
        />
      </div>
      <div className="input-container">
        <label>Subject Code:</label>
        <input
          type="text"
          value={practicalDetails.subjectCode}
          onChange={(e) =>
            setPracticalDetails({
              ...practicalDetails,
              subjectCode: e.target.value,
            })
          }
        />
      </div>
      <div className="input-container">
        <label>Number of Students:</label>
        <input
          type="number"
          value={practicalDetails.numberOfStudents}
          onChange={(e) =>
            setPracticalDetails({
              ...practicalDetails,
              numberOfStudents: +e.target.value,
            })
          }
        />
      </div>
      <div className="input-container">
        <label>Answer Sheet Checking Rate:</label>
        <input
          type="number"
          value={practicalDetails.checkingRate}
          onChange={(e) =>
            setPracticalDetails({
              ...practicalDetails,
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

export default PracticalPage;