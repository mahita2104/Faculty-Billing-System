import React, { useState, useEffect } from "react";
import "./QuestionPaper.css";

interface Entry {
  subject: string;
  year: string;
  subjectCode: string;
  numQuestionPapers: number;
  rate: number;
  course: string;
  totalAmount: number;
}

interface RateData {
  course: string;
  year: string;
  setting_question: number;
}

const QuestionPaper = () => {
  const [subject, setSubject] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [subjectCode, setSubjectCode] = useState<string>("");
  const [numQuestionPapers, setNumQuestionPapers] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [course, setCourse] = useState<string>(""); // Blank by default
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);

  useEffect(() => {
    // Fetch rates data when component mounts
    fetch('http://localhost:3000/php/evaluation_question.php')
      .then(response => response.json())
      .then((data: RateData[]) => {
        const selectedRate = data.find(item => item.course === course && item.year === year);
        if (selectedRate) {
          setRate(selectedRate.setting_question);
          const amount = numQuestionPapers * rate;
          setTotalAmount(amount);
        }
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
      });
  }, [course, year, numQuestionPapers, rate]);

  const calculateTotalAmount = () => {
    const entry: Entry = {
      subject,
      year,
      subjectCode,
      numQuestionPapers,
      rate,
      course,
      totalAmount,
    };

    setEntries([...entries, entry]);
    setShowTable(true);
  };
  const handleGenerateBill = () => {
    // Logic for generating bill (if needed)
    console.log("Generating Bill...");
  };

  const renderYearOptions = () => {
    switch (course) {
      case "B.Tech":
        return (
          <>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </>
        );
      case "M.Tech":
        return (
          <>
            <option value="1">1</option>
            <option value="2">2</option>
          </>
        );
      case "MCA":
        return (
          <>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </>
        );
      case "Ph.D.":
        return <option value="Any">Any</option>;
      default:
        return null;
    }
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
          Subject Code:
          <input
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
          />
        </label>
        <label>
          Course:
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="Ph.D.">Ph.D.</option>
            <option value="MCA">MCA</option>
          </select>
        </label>
        <label>
          Year:
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {renderYearOptions()}
          </select>
        </label>
        <label>
          Rate :
          <input
            type="number"
            value={rate}
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
          Total Amount:
          <input
            type="number"
            value={totalAmount}
          />
        </label>
       
      <div className="button-container">
        <button className="submit-button" type="button" onClick={calculateTotalAmount}>
          Submit
        </button>
        <button className="generate-bill-button" type="button" onClick={handleGenerateBill}>
          Submit and Generate Bill
        </button>
      </div>
        
      </form>
      {showTable && (
       <div className="submitted-entries-container">
        <h3>Submitted Entries:</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Subject Code</th>
              <th>Course</th>
              <th>Year</th>
              <th>Rate</th>
              <th>Number of Question Papers</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.subject}</td>
                <td>{entry.subjectCode}</td>
                <td>{entry.course}</td>
                <td>{entry.year}</td>
                <td>{entry.rate}</td>
                <td>{entry.numQuestionPapers}</td>
                <td>{entry.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default QuestionPaper;
