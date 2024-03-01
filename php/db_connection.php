<?php
$servername= "localhost";
$username="root";
$password="";
$database="faculty_billing_system";
$conn=mysqli_connect($servername,$username,$password,$database);
if(!$conn)
{
   die("error detected".mysqli_connect_error());
}

?>