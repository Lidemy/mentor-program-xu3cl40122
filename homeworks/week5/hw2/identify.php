<?php

$random_id = $_COOKIE['board_random_id'];
$nickname =  $_COOKIE['board_member_id'];
include('connect.php');
$sql = "SELECT * FROM users_certificate where nickname = '$nickname' AND id = '$random_id' ";
$result = $conn->query($sql);
if ($result->num_rows > 0){
	echo "pass";
}else{
	echo 'nopass';
}
?>