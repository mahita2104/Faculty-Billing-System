import React from "react";
import "./Header.css"; // Import your CSS file for styles

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="image-container">
        <a href="index.php" className="logo">
          <img
            src="https://d2lk14jtvqry1q.cloudfront.net/media/large_Department_of_Management_Studies_Indira_Gandhi_Delhi_Technical_University_for_Women_IGDTUW_Delhi_3792cc2387_41cda05cc3.png"
            alt="IGDTUW logo"
            height="100px"
            width="auto"
          />
        </a>
      </div>
      <div className="text-container">
        <div className="heading">
          <div id="mainHeading">
            Indira Gandhi Delhi Technical University For Women
          </div>
          <div id="secondHeading">
            (Established by Govt. of Delhi vide Act 9 of 2012)
          </div>
          <div id="thirdHeading">ISO 9001:2015 Certified University</div>
        </div>
      </div>
    </header>
  );
};

export default Header;