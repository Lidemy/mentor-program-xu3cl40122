<?php
include('connect.php');
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$sql = "SELECT * FROM users where email = '$obj->email' AND password = '$obj->pwd' ";
$result = $conn->query($sql);
    if ($result->num_rows > 0){
        $row = $result->fetch_assoc();
        setcookie("board_member_id",$row['nickname'], time()+3600*24);
        //echo "board_member_id" . $_COOKIE["board_member_id"];
        echo 'pass';
    }
    else {
      echo 'nopass';
    }
$conn->close();


?>