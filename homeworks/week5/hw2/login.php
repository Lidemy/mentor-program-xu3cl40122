<?php
include('connect.php');
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
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
        $ra_stmt = $conn->prepare("INSERT INTO xu3cl40122_users_certificate (id, nickname) VALUES(?,?) ON DUPLICATE KEY UPDATE id=?, nickname=?");
        $ra_stmt->bind_param('ssss',$random_id, $nickname, $random_id, $nickname);
        $status = $ra_stmt->execute();
        if ($status === false) {
            echo 'nopass';
        }
        else{
            echo "pass";
        }

    }
}
else {
  echo 'nopass';
}
$conn->close();


?>