<?php
include 'db_connection.php' ;
//error_reporting(E_ALL);
//ini_set('display_errors',1);
header("Access-Control-Allow-Origin:http://localhost:5173/");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
// header('Access-Control-Allow-Origin: http://localhost:5173');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type, Authorization');
// header('Access-Control-Allow-Credentials: true');

// $db_conn= mysqli_connect("localhost","root","", "faculty_billing_system");
// if($db_conn===false)
// {
//   die("ERROR: Could Not Connect".mysqli_connect_error());
// }

$method = $_SERVER['REQUEST_METHOD'];
switch($method)
{
   case "GET": 
    $alluser= mysqli_query($db_conn, "SELECT * FROM user"); 
    if(mysqli_num_rows($alluser) > 0)
    {
      while($row= mysqli_fetch_array($alluser))
      {
       $json_array["userdata"][]= array("id"=>$row['userid'], "name"=>$row["name"], "address"=>$row["address"], "email"=>$row["email"]);
      }
      echo json_encode($json_array["userdata"]);
      return;
    } else {
        echo json_encode(["result"=>"Please check the Data"]); 
        return;
    }
    
    case "POST":
      $userpostdata=json_decode(file_get_contents("php://input"));
      //echo "success data";
      //print_r($userpostdata); die;
      $name= $userpostdata->name;
      $address= $userpostdata->address;
      $email= $userpostdata->email;
      
      $result= mysqli_query($db_conn, "INSERT INTO faculty_details (name, address, email_id) 
      VALUES('$name', '$address', '$email')");

      if($result)
      {
        echo json_encode(["success"=>"User Added Successfully"]);
        return;
      } else {
          echo json_encode(["success"=>"Please Check the User Data!"]);
          return; 
      }
}

?>
