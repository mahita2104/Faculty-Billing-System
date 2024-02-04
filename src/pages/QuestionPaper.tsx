import React, { useState } from "react";
import "./QuestionPaper.css";

const QuestionPaper = () => {
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [numQuestionPapers, setNumQuestionPapers] = useState(0);
  const [rate, setRate] = useState(0);
  const [course, setCourse] = useState("B.Tech"); // Default to B.Tech
  const [totalAmount, setTotalAmount] = useState(0);
  const [entries, setEntries] = useState<
    {
      subject: string;
      year: string;
      subjectCode: string;
      numQuestionPapers: number;
      rate: number;
      course: string;
      totalAmount: number;
    }[]
  >([]);
  const [showTable, setShowTable] = useState(false);

  const calculateTotalAmount = () => {
    const amount = numQuestionPapers * rate;
    setTotalAmount(amount);

    const entry = {
      subject,
      year,
      subjectCode,
      numQuestionPapers,
      rate,
      course,
      totalAmount: amount,
    };

    setEntries([...entries, entry]);
    setShowTable(true);
  };

  const handleGenerateBill = () => {
    // Logic for generating bill (if needed)
    console.log("Generating Bill...");
  };

  return (
    <div>
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
          Course:
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="Ph.D.">Ph.D.</option>
          </select>
        </label>

        <button type="button" onClick={calculateTotalAmount}>
          Submit
        </button>

        <button type="button" onClick={handleGenerateBill}>
          Submit and Generate Bill
        </button>
      </form>

      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Year</th>
              <th>Subject Code</th>
              <th>Number of Question Papers</th>
              <th>Rate</th>
              <th>Course</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.subject}</td>
                <td>{entry.year}</td>
                <td>{entry.subjectCode}</td>
                <td>{entry.numQuestionPapers}</td>
                <td>{entry.rate}</td>
                <td>{entry.course}</td>
                <td>{entry.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuestionPaper;