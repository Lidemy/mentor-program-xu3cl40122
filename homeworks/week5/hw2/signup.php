<?php


function typingCheck(){
	include('connect.php');
	$type = $_REQUEST['type'];
	$value = $_REQUEST['value'];
	$stmt = $conn->prepare("SELECT * FROM xu3cl40122_users where $type = ?");
	$stmt->bind_param('s',$value);
	$stmt->execute();
    $result = $stmt->get_result();
	if ($result->num_rows > 0){
	    echo "nopass";
	}
	else{
		echo "pass";
	}
}

function signUp(){
	include('connect.php');
	header("Content-Type: application/json; charset=UTF-8");
	$obj = json_decode($_POST["x"], false);
	$hash_pwd = password_hash($obj->pwd, PASSWORD_DEFAULT);
	$stmt = $conn->prepare("INSERT INTO xu3cl40122_users (email, password, nickname)
	VALUES (?, ?, ?)");
	$stmt->bind_param('sss',$obj->email, $hash_pwd, $obj->nickname);
	$stmt->execute() or trigger_error($stmt->error, E_USER_ERROR);
	echo "pass";
	$stmt->close();
	$conn->close();
}


//--- 用 method 區分要執行什麼 --- 
if ($_SERVER['REQUEST_METHOD'] == "GET"){
	typingCheck();
}else if($_SERVER['REQUEST_METHOD'] == "POST"){
	signUp();
}

?>