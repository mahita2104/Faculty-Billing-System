<?php
include 'db_connection.php';
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
$sql="SELECT * FROM billing_hours";
$stmt=$conn->prepare($sql);
$stmt->execute();
$result=$stmt->get_result();
$data=[];
if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        $data[]=$row;
    }
}
echo json_encode($data);
$stmt->close();
?>