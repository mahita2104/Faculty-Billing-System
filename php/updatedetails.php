<?php
session_start();
include 'db_connection.php';
// Allow from any origin
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    exit(0);
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assume you receive data from the frontend
    $email = $_SESSION['email'];
    $sql0 = "SELECT * FROM faculty_details WHERE email_id = ?";
    
    // Prepare the statement
    $stmt = mysqli_prepare($conn, $sql0);

    // Bind the parameters
    mysqli_stmt_bind_param($stmt, "s", $email);

    // Execute the statement
    mysqli_stmt_execute($stmt);

    // Get the result set
    $result = mysqli_stmt_get_result($stmt);

    // Fetch the data
    $row = mysqli_fetch_assoc($result);

    // Return the data to the frontend
    echo json_encode($row);
    $requestData = json_decode(file_get_contents("php://input"), true);
    
    // Extract data from the request
    $name = $requestData['name'];
    $address = $requestData['address'];
    $des = $requestData['designation'];
    $email = $requestData['email_id'];
    $mob = $requestData['mobile_no'];
    $alt_mob = $requestData['alternate_no'];
    $b_name = $requestData['bank_name'];
    $br_name = $requestData['branch_name'];
    $acc_no = $requestData['account_no'];
    $ifsc_code = $requestData['ifsc_code'];
    $amount = $row['amount'];
    $password=$row['password'];
    $stmt->close();
    $sql1 = "DELETE FROM faculty_details WHERE email_id = ?";

    // Prepare the statement
    $stmt = $conn->prepare($sql1);

    // Bind the email parameter
    $stmt->bind_param("s", $email);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Record deleted successfully.";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
    $stmt->close();
    // Construct the SQL INSERT statement
    $sql="INSERT INTO faculty_details VALUES ('$email','$name','$des','$address',$mob , $alt_mob ,'$b_name', '$br_name' , $acc_no,'$ifsc_code',$amount, '$password')";
    // Add other fields in the VALUES clause as needed

    // Execute the SQL statement
    if (mysqli_query($conn, $sql)) {
        // Insertion successful
        echo json_encode(array("message" => "Record inserted successfully"));
    } else {
        // Insertion failed
        echo json_encode(array("message" => "Error inserting record: " . mysqli_error($conn)));
    }
    //$stmt->close();
    $conn->close();
} else {
    // Method not allowed
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed"));
}

?>
