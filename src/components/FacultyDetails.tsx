import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FacultyDetails.css";

const PersonalDetails: React.FC<{
  name: string;
  address: string;
  designation: string;
  email: string;
  mobileNo: string;
  alternateNo: string;
  editable: boolean;
  onInputChange: (key: string, value: string) => void;
}> = ({
  name,
  address,
  designation,
  email,
  mobileNo,
  alternateNo,
  editable,
  onInputChange,
}) => (
  <div>
    <h3>Personal Details</h3>
    <div>
      <strong>Name:</strong>
      {editable ? (
        <input
          type="text"
          value={name}
          onChange={(e) => onInputChange("name", e.target.value)}
        />
      ) : (
        <span>{name}</span>
      )}
    </div>
    <div>
      <strong>Address:</strong>
      {editable ? (
        <input
          type="text"
          value={address}
          onChange={(e) => onInputChange("address", e.target.value)}
        />
      ) : (
        <span>{address}</span>
      )}
    </div>
    <div>
      <strong>Designation:</strong>
      {editable ? (
        <input
          type="text"
          value={designation}
          onChange={(e) => onInputChange("designation", e.target.value)}
        />
      ) : (
        <span>{designation}</span>
      )}
    </div>
    <div>
      <strong>Email:</strong>
      {editable ? (
        <input
          type="text"
          value={email}
          onChange={(e) => onInputChange("email", e.target.value)}
        />
      ) : (
        <span>{email}</span>
      )}
    </div>
    <div className="contact-details">
      <div>
        <strong>Mobile No.:</strong>
        {editable ? (
          <input
            type="text"
            value={mobileNo}
            onChange={(e) => onInputChange("mobileNo", e.target.value)}
          />
        ) : (
          <span>{mobileNo}</span>
        )}
      </div>
      <div>
        <strong>Alternate No.:</strong>
        {editable ? (
          <input
            type="text"
            value={alternateNo}
            onChange={(e) => onInputChange("alternateNo", e.target.value)}
          />
        ) : (
          <span>{alternateNo}</span>
        )}
      </div>
    </div>
  </div>
);

const BankDetails: React.FC<{
  bankName: string;
  branchName: string;
  accountNo: string;
  ifscCode: string;
  editable: boolean;
  onInputChange: (key: string, value: string) => void;
}> = ({
  bankName,
  branchName,
  accountNo,
  ifscCode,
  editable,
  onInputChange,
}) => (
  <div>
    <h3>Bank Details</h3>
    <div>
      <strong>Bank Name:</strong>
      {editable ? (
        <input
          type="text"
          value={bankName}
          onChange={(e) => onInputChange("bankName", e.target.value)}
        />
      ) : (
        <span>{bankName}</span>
      )}
    </div>
    <div className="bank-details">
      <div>
        <strong>Branch Name:</strong>
        {editable ? (
          <input
            type="text"
            value={branchName}
            onChange={(e) => onInputChange("branchName", e.target.value)}
          />
        ) : (
          <span>{branchName}</span>
        )}
      </div>
      <div>
        <strong>Account No.:</strong>
        {editable ? (
          <input
            type="text"
            value={accountNo}
            onChange={(e) => onInputChange("accountNo", e.target.value)}
          />
        ) : (
          <span>{accountNo}</span>
        )}
      </div>
    </div>
    <div>
      <strong>IFSC Code:</strong>
      {editable ? (
        <input
          type="text"
          value={ifscCode}
          onChange={(e) => onInputChange("ifscCode", e.target.value)}
        />
      ) : (
        <span>{ifscCode}</span>
      )}
    </div>
  </div>
);

const FacultyDetails: React.FC = () => {
  const [editable, setEditable] = useState(false);
  const [facultyData, setFacultyData] = useState<any>({
    // Initialize with default values or empty strings
    name: "",
    address: "",
    designation: "",
    email: "",
    mobileNo: "",
    alternateNo: "",
    bankName: "",
    branchName: "",
    accountNo: "",
    ifscCode: "",
  });

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        // Make a GET request to your PHP backend
        const response = await axios.get(
          "http://localhost:3000/php/mapdetails.php",
          {
            withCredentials: true,
          }
        );
        console.log("Response from backend:", response.data);
        // Assuming the backend returns an array with a single faculty object
        const facultyObject = response.data[0];
        setFacultyData(facultyObject); // Set faculty data from the response
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      }
    };

    fetchFacultyData();
  }, []);

  const handleInputChange = (key: string, value: string) => {
    setFacultyData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSubmitClick = async () => {
    setEditable(false);
    try {
      // Make a POST request to update the faculty details on the backend
      const response = await axios.post(
        "http://localhost:3000/php/updatedetails.php",
        facultyData, // Send the entire facultyData object
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );
      console.log("Response from update:", response.data);
      // Handle the response as needed
    } catch (error) {
      console.error("Error updating faculty details:", error);
    }
  };
  
  return (
    <div className="faculty-details">
      <h2>Faculty Details</h2>
      <PersonalDetails
        name={facultyData.name}
        address={facultyData.address}
        designation={facultyData.designation}
        email={facultyData.email_id}
        mobileNo={facultyData.mobile_no}
        alternateNo={facultyData.alternate_no}
        editable={editable}
        onInputChange={handleInputChange}
      />
      <BankDetails
        bankName={facultyData.bank_name}
        branchName={facultyData.branch_name}
        accountNo={facultyData.account_no}
        ifscCode={facultyData.ifsc_code}
        editable={editable}
        onInputChange={handleInputChange}
      />
      {!editable && ( // Show the edit button only when not in editable mode
        <button className="edit-button" onClick={handleEditClick}>
          Edit Details
        </button>
      )}
      {editable && ( // Show the submit button only when in editable mode
        <button className="submit-button" onClick={handleSubmitClick}>
          Submit
        </button>
      )}
    </div>
  );
};

export default FacultyDetails;
