import React, { useState } from "react";
import "./QuestionPaper.css";

const QuestionPaper = () => {
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [numQuestionPapers, setNumQuestionPapers] = useState(0);
  const [rate, setRate] = useState(0);
  const [faculty, setFaculty] = useState("internal"); // Default to Internal
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = () => {
    setTotalAmount(numQuestionPapers * rate);
  };

  return (
    <form>
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>

      <label>
        Year:
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>

      <label>
        Subject Code:
        <input
          type="text"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
        />
      </label>

      <label>
        Number of Question Papers:
        <input
          type="number"
          value={numQuestionPapers}
          onChange={(e) => setNumQuestionPapers(Number(e.target.value))}
        />
      </label>

      <label>
        Rate:
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </label>

      <label>
        Faculty:
        <select value={faculty} onChange={(e) => setFaculty(e.target.value)}>
          <option value="internal">Internal</option>
          <option value="external">External</option>
        </select>
      </label>
      <button type="button" onClick={calculateTotalAmount}>
        Calculate Total Amount
      </button>

      <label>
        Total Amount:
        <input type="text" value={totalAmount} readOnly />
      </label>
    </form>
  );
};

export default QuestionPaper;
