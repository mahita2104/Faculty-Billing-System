import React, { useState, useEffect } from "react";
import "./EvaluationPage.css";

interface Entry {
  subject: string;
  year: string;
  subjectCode: string;
  numofStudents: number;
  rate: number;
  course: string;
  hasQues: boolean;
  totalAmount: number;
}

interface RateData {
  course: string;
  year: string;
  evaluation_withpaper: number;
  evaluation_withoutpaper: number;
}

const EvaluationPage = () => {
  const [subject, setSubject] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [subjectCode, setSubjectCode] = useState<string>("");
  const [numofStudents, setNumofStudents] = useState<number>(0);
  const [hasQues, setHasQues] = useState<boolean>(false);
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
          const rate = hasQues ? selectedRate.evaluation_withpaper : selectedRate.evaluation_withoutpaper;
          setRate(rate);
          const amount = numofStudents * rate;
          setTotalAmount(amount);
        }
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
      });
  }, [course, year, numofStudents, rate, hasQues]);

  const calculateTotalAmount = () => {
    const entry: Entry = {
      subject,
      year,
      subjectCode,
      numofStudents,
      rate,
      course,
      hasQues,
      totalAmount,
    };

    setEntries([...entries, entry]);
    setShowTable(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Reset form fields to their default values
    setSubject("");
    setYear("");
    setSubjectCode("");
    setNumofStudents(0);
    setHasQues(false);
    setCourse("");
    setRate(0);
    setTotalAmount(0);
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
      case "Ph.D":
        return <option value="Any">Any</option>;
      default:
        return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Course:
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MCA">MCA</option>
            <option value="Ph.D">Ph.D</option>
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
          Have you set Question Paper:
          <select
            value={hasQues ? "Yes" : "No"}
            onChange={(e) => setHasQues(e.target.value === "Yes" ? true : false)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
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
          Number of Students:
          <input
            type="number"
            value={numofStudents}
            onChange={(e) => setNumofStudents(Number(e.target.value))}
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
          <button className="submit-button" type="submit" onClick={calculateTotalAmount}>
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
                <th>Course</th>
                <th>Year</th>
                <th>Subject</th>
                <th>Subject Code</th>
                <th>Rate</th>
                <th>Has Set Question Paper</th>
                <th>Number of Students</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.course}</td>
                  <td>{entry.year}</td>
                  <td>{entry.subject}</td>
                  <td>{entry.subjectCode}</td>
                  <td>{entry.rate}</td>
                  <td>{entry.hasQues ? "Yes" : "No"}</td>
                  <td>{entry.numofStudents}</td>
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

export default EvaluationPage;
