// src/components/FacultyDetails.tsx
import React, { useState } from "react";
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

interface FacultyDetailsProps {
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
  const [editable, setEditable] = useState(false);
  const [editedValues, setEditedValues] = useState({
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
  });

  const handleInputChange = (key: string, value: string) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSubmitClick = () => {
    setEditable(false);
    // Add logic to handle the submission of edited values (e.g., API call or state update)
    console.log("Edited Values:", editedValues);
  };

  return (
    <div className="faculty-details">
      <h2>Faculty Details</h2>
      <PersonalDetails
        name={editedValues.name}
        address={editedValues.address}
        designation={editedValues.designation}
        email={editedValues.email}
        mobileNo={editedValues.mobileNo}
        alternateNo={editedValues.alternateNo}
        editable={editable}
        onInputChange={handleInputChange}
      />
      <BankDetails
        bankName={editedValues.bankName}
        branchName={editedValues.branchName}
        accountNo={editedValues.accountNo}
        ifscCode={editedValues.ifscCode}
        editable={editable}
        onInputChange={handleInputChange}
      />
      {editable ? (
        <button className="submit-button" onClick={handleSubmitClick}>
          Submit
        </button>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>
          Edit Details
        </button>
      )}
    </div>
  );
};

export default FacultyDetails;
