import jsPDF from 'jspdf';
import "jspdf-autotable";
import { autoTable } from 'jspdf-autotable'; 

interface Entry {
  course: string;
  year: string;
  subject: string;
  subjectCode: string;
  rate: number;
  hasQues: boolean;
  numofStudents: number;
  totalAmount: number;
}

export const generatePDF = (entries: Entry[]) => {
    const doc = new jsPDF();
  
    // Prepare data for the table
    const data = entries.map(({ course, year, subject, subjectCode, rate, hasQues, numofStudents, totalAmount }) => [
      course,
      year,
      subject,
      subjectCode,
      rate.toString(),
      hasQues ? 'Yes' : 'No',
      numofStudents.toString(),
      totalAmount.toString(),
    ]);
  
    // Set up table headers
    const headers = [['Course', 'Year', 'Subject', 'Subject Code', 'Rate', 'Has Set Question Paper', 'Number of Students', 'Total Amount']];
  
    // Define column widths
    const columnStyles = {
      0: { width: 40 }, // Course
      1: { width: 30 }, // Year
      2: { width: 50 }, // Subject
      3: { width: 40 }, // Subject Code
      4: { width: 25 }, // Rate
      5: { width: 40 }, // Has Set Question Paper
      6: { width: 35 }, // Number of Students
      7: { width: 40 }, // Total Amount
    };
  
    // Add table headers and data to the PDF
    (doc as any).autoTable({
      head: headers,
      body: data,
      columnStyles: columnStyles, // Apply column widths
    });
  
    // Save the PDF
    doc.save('generated_bill.pdf');
  };
  