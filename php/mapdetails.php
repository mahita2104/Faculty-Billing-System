<?php
// session_start();
// header('Access-Control-Allow-Origin: http://localhost:5173');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type, Authorization');

// include 'work.php';
// echo $_SESSION['email'];
// $email = $_SESSION['email'];

// // Prepare the SQL statement to fetch details of the user based on email ID
// $sql = "SELECT * FROM faculty_details WHERE email_id = ?"; // Replace 'your_table_name' with your table name

// $stmt = $conn->prepare($sql);
// $stmt->bind_param("s", $email);
// $stmt->execute();

// $result = $stmt->get_result();

// $data = [];

// if ($result->num_rows > 0) {
//     while ($row = $result->fetch_assoc()) {
//         $data[] = $row;
//     }
// }

// echo json_encode($data);

// $stmt->close();
// $conn->close(); -->
session_start();
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
include 'work.php';
echo $_SESSION['email'];
// Debugging output
echo "Before session start: " . ($_SESSION['email'] ?? "Not set") . "<br>";

// Start session (if not already started)
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Debugging output
echo "After session start: " . ($_SESSION['email'] ?? "Not set") . "<br>";

// Check if 'email' is set in the session
if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];

    // Debugging output
    echo "Email from session: " . $email . "<br>";

    // Prepare the SQL statement to fetch details of the user based on email ID
    $sql = "SELECT * FROM faculty_details WHERE email_id = ?"; // Replace 'your_table_name' with your table name

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    $data = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    echo json_encode($data);

    $stmt->close();
    $conn->close();
} else {
    echo 'Session variable "email" not set. Please log in.';
}
?>
