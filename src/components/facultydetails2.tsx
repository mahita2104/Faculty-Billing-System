// src/components/FacultyDetails.tsx
import React from "react";
import "./FacultyDetails.css";

// New component for Personal Details section
const PersonalDetails: React.FC<{
  name: string;
  address: string;
  designation: string;
  email: string;
  mobileNo: string;
  alternateNo: string;
}> = ({ name, address, designation, email, mobileNo, alternateNo }) => (
  <div>
    <h3>Personal Details</h3>
    <div>
      <strong>Name:</strong> {name}
    </div>
    <div>
      <strong>Address:</strong> {address}
    </div>
    <div>
      <strong>Designation:</strong> {designation}
    </div>
    <div>
      <strong>Email:</strong> {email}
    </div>
    <div className="contact-details">
      <div>
        <strong>Mobile No.:</strong> {mobileNo}
      </div>
      <div>
        <strong>Alternate No.:</strong> {alternateNo}
      </div>
    </div>
  </div>
);

// New component for Bank Details section
const BankDetails: React.FC<{
  bankName: string;
  branchName: string;
  accountNo: string;
  ifscCode: string;
}> = ({ bankName, branchName, accountNo, ifscCode }) => (
  <div>
    <h3>Bank Details</h3>
    <div>
      <strong>Bank Name:</strong> {bankName}
    </div>
    <div className="bank-details">
      <div>
        <strong>Branch Name:</strong> {branchName}
      </div>
      <div>
        <strong>Account No.:</strong> {accountNo}
      </div>
    </div>
    <div>
      <strong>IFSC Code:</strong> {ifscCode}
    </div>
  </div>
);

interface FacultyDetailsProps {
  // Define the props for the faculty details
  name: string;
  address: string;
  designation: string;
  email: string;
  mobileNo: string;
  alternateNo: string;
  bankName: string;
  branchName: string;
  accountNo: string;
  ifscCode: string;
}

const FacultyDetails: React.FC<FacultyDetailsProps> = ({
  name,
  address,
  designation,
  email,
  mobileNo,
  alternateNo,
  bankName,
  branchName,
  accountNo,
  ifscCode,
}) => {
  return (
    <div className="faculty-details">
      <h2>Faculty Details</h2>
      <PersonalDetails
        name={name}
        address={address}
        designation={designation}
        email={email}
        mobileNo={mobileNo}
        alternateNo={alternateNo}
      />
      <BankDetails
        bankName={bankName}
        branchName={branchName}
        accountNo={accountNo}
        ifscCode={ifscCode}
      />
      {/* Add an edit button here */}
      <button>Edit Details</button>
    </div>
  );
};

export default FacultyDetails;
