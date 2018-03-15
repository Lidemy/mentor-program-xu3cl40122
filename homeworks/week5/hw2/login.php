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
        	//創造亂數
        	$t = time();
        	$r = strval(rand(1000,9999));
        	$random_id = $t.'AT'.$r;
        	setcookie("board_random_id",$random_id, time()+3600*24);
        	$nickname = $row['nickname'];
        	$ra_sql = "INSERT INTO xu3cl40122_users_certificate (id, nickname) VALUES('$random_id', '$nickname') ON DUPLICATE KEY UPDATE id='$random_id', nickname='$nickname'";
        	if($conn->query($ra_sql) === TRUE){
        		echo 'pass';
        	}else{
        		echo 'nopass';
        	}
        }
    }
    else {
      echo 'nopass';
    }
$conn->close();


?>