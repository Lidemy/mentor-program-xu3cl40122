<?php

include('connect.php');

header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
// identify
$board_random_id =  $_COOKIE['board_random_id'];
$id_sql = "SELECT * FROM xu3cl40122_users_certificate where id = '$board_random_id' ";
$id_result = $conn->query($id_sql);
if($id_result->num_rows > 0){
	$id_row = $id_result->fetch_assoc();
	$nickname = $id_row['nickname'];
	$sql = "SELECT * FROM xu3cl40122_users WHERE nickname = '$nickname'";
	$result = $conn->query($sql);
    if ($result->num_rows > 0){
        $row = $result->fetch_assoc();
        $sid = $row['sid'];
		$stmt = $conn->prepare("INSERT INTO xu3cl40122_comment (parent_id, content, user_id) VALUES (?, ?, ?)");
		$stmt->bind_param('isi',$obj->parent_id, $obj->content, $sid);
		$stmt->execute() or trigger_error($stmt->error, E_USER_ERROR);
		echo "pass";
		$stmt->close();
    }
}
else{
	echo '權限問題';
}


$conn->close();

?>