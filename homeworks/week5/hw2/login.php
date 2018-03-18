<?php
include('connect.php');
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

//$sql = "SELECT * FROM xu3cl40122_users where email = ?";
//$result = $conn->query($sql);
    $stmt = $conn->prepare("SELECT * FROM xu3cl40122_users where email = ?");
    $stmt->bind_param('s',$obj->email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0){
        $row = $result->fetch_assoc();
        if(password_verify($obj->pwd, $row['password'])){
        	//創造亂數
        	$random_id = uniqid();
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