<?php

$random_id = $_COOKIE['board_random_id'];
include('connect.php');
$sql = "SELECT * FROM xu3cl40122_users_certificate where id = '$random_id' ";
$result = $conn->query($sql);
if ($result->num_rows > 0){
	$row = $result->fetch_assoc();
	echo $row['nickname'];
}else{
	echo 'not_found_users_certificate';
}
?>