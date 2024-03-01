<?php
include 'db_connection.php';
$name="Mahita Boyina";
$email="xyz@gmail.com";
$address="134-a/7";
$des="assistant professor";
$mob=987898879;
$alt_mob=875678977;
$b_name="abcd";
$br_name="oug";
$acc_no="16537487";
$ifsc_code="ihj7896542h";
$amount=9089;
$password="hhjus808";

$sql="INSERT INTO faculty_details VALUES ('$email','$name','$des','$address',$mob , $alt_mob ,'$b_name', '$br_name' , $acc_no,'$ifsc_code',$amount,'$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close(); // Close the database connection
?>