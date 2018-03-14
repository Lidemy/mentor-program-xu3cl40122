<?php
include('connect.php');
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$sql = "SELECT * FROM xu3cl40122_users where email = '$obj->email'";
$result = $conn->query($sql);
    if ($result->num_rows > 0){
        $row = $result->fetch_assoc();
        if(password_verify($obj->pwd, $row['password'])){
        	setcookie("board_member_id",$row['nickname'], time()+3600*24);
        	echo 'pass';
        }
    }
    else {
      echo 'nopass';
    }
$conn->close();


?>