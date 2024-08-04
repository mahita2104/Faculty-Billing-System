# Faculty Billing System
## Challenges with Manual Billing
In universities, the payment process for faculty members remains largely manual, involving the completion of tedious forms and meticulous tracking of every expense. This manual approach incurs additional costs for maintaining and collecting these forms on time, which is crucial for timely faculty payments. Furthermore, there's always a risk of human error, and this manual process can cause significant delays in essential processes like faculty payroll.
## Brief Overview of Our solution
Our solution aims to automate the billing process workflow, significantly increasing the efficiency of university operations. By eliminating the need to sift through paper forms, mail, email, scan, or process them manually, our automated system allows you to “set and forget” certain steps. Key features of our solution include:
- Comprehensive automation of faculty compensation based on:
  - Evaluation of answer sheets
  - Creation of question papers
  - Teaching hours logged
  - Practical exams conducted
  - Travel Expenses
- Streamlined Workflow: Efficiently manages the entire process from expense reimbursement to proper compensation,ensuring seamless operations.

Faculty members can generate bills at their convenience, freeing up time and resources for both faculty and staff to focus on more critical matters. This shift from manual to automated processes ensures that the academic institution runs more smoothly and efficiently, reducing the likelihood of errors and delays.
To checkout the proper functionality of our webapp 

## Detailed Walkthrough
<details>
<summary>User Authenication and Account Creation</summary>
  
  - Login: Users can log in using their email ID and password if they already have an account.

[login.webm](https://github.com/user-attachments/assets/5acca6f9-14f8-47e4-b68c-83390114d5ee)

  - Sign Up: New users can create an account by providing necessary details

 </details>
 <details>
   <summary> Homepage</summary>
   The homepage provides a comprehensive display of user details, including:
   
   - Profile Information: Name, email, contact number, and profile picture.
   - Role and Designation: Faculty role and designation within the university.
   - Bank Details: Bank account number, IFSC code, and other relevant banking information.
   - Edit Options for updating personal information, changing passwords, and managing preferences.

[editing_details.webm](https://github.com/user-attachments/assets/56718454-ff9c-49e7-ad5a-b1afe6c5603a)
 
 </details>
 <details>
   <summary>Hours Worked Module</summary>
   
   - Input Details: Users can input their designation and the number of hours taught, which will be compensated on an hourly basis.
   - Total Amount: The total amount is generated based on the hours input.

[hours_taught.webm](https://github.com/user-attachments/assets/68b201b0-b201-488f-93fe-dfefe39fb3bc)     
 </details>
 <details>
   <summary>Evaluation Module</summary>
   
   - Input Details: Users can input the number of students whose sheets are checked, degree, year, number of students, and whether the question paper was made by the faculty.
   - Multiple Entries: Users can add multiple entries by submitting each set of details, with a table below recording all entries for this module.
   - Entry Management: Option to edit or delete existing entries directly from the table.

[evaluation.webm](https://github.com/user-attachments/assets/c649b092-fb7d-42f4-a72c-17d8c4974748)

 </details>
 <details>
   <summary>Question Paper Module</summary>
   
   - Input Details: Users can input which subject question paper was set,subject code, degree, and year.
   - Multiple Entries: Similar to the Evaluation module, users can add multiple entries with a table below recording all entries.
   - Entry Management: Option to edit or delete existing entries directly from the table.

  [question_paper.webm](https://github.com/user-attachments/assets/01621b2e-2d1f-4537-954b-0964bf89522a)

 </details>
 <details>
   <summary> Final  Bill Generation</summary>
   
   - Generate Bill: Users can click on the "Submit and Generate Bill" button to compile entries across different modules and display the final amount.
   - Bill Summary: A detailed breakdown of the bill, including individual entries from each module, total amounts.
   - Download Print Option: Users can download and print the final bill for their records.

 [bill-generation.webm](https://github.com/user-attachments/assets/076a24b6-3ef8-4fbe-bcf3-3bd34d919402)
 </details>

## Demonstration
Watch a demo video of our Faculty Billing System web app to see these features in action:

 ## Future work 
 Creating a admin side in the web app with below features:
- Admin Login: A separate login system for admins, who can view and manage all bills generated.
- Database Management: Admins will have access to the entire database.
- User Management: Admins can add, edit, or remove users and assign roles and permissions.
- Audit Logs: Detailed logs of all actions taken within the system for accountability and transparency.

