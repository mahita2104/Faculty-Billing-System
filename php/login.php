<?php
// Start session
session_start();

// Allow requests from any origin
header("Access-Control-Allow-Origin: http://localhost:5173");

// Allow the following methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Access-Control-Allow-Credentials: true');

// If it's an OPTIONS request, end the script here
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'db_connection.php'; // Assuming this file contains your database connection

// Get POST data
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    // Check if both email and password are provided in the request
    $email = $data->email;
    $password = $data->password;

    // SQL query with a parameterized query for fetching user details by email
    $query = "SELECT email_id, name, password FROM faculty_details WHERE email_id = ?";

    // Prepare the SQL statement
    $stmt = mysqli_prepare($conn, $query);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);

        $result = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);

            $_SESSION['user_id'] = $user['email_id'];
            $_SESSION['email'] = $user['email_id']; // Store email in session

            // Build the response array
            $response = array(
                "message" => "Login successful.",
                "session_variables" => array(
                    "user_id" => $_SESSION['user_id'],
                    "username" => $_SESSION['email']
                )
            );

            // Encode to JSON and send the response
            echo json_encode($response);
        } else {
            // User not found
            http_response_code(404); // Not Found
            echo json_encode(array("message" => "User not found."));
        }

        // Close the statement
        mysqli_stmt_close($stmt);
    } else {
        // Error in preparing the statement
        http_response_code(500); // Internal Server Error
        echo json_encode(array("message" => "Internal Server Error."));
    }
}

// Close the database connection
mysqli_close($conn);
