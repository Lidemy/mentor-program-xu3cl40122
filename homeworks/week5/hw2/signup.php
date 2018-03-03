<?php


function typingCheck(){
	include('connect.php');
	$type = $_REQUEST['type'];
	$value = $_REQUEST['value'];

	$sql = "SELECT * FROM xu3cl40122_users where $type = '$value'";
	$result = $conn->query($sql);
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

	$sql = "INSERT INTO xu3cl40122_users (email, password, nickname)
	VALUES ('$obj->email', '$obj->pwd', '$obj->nickname')";

	if ($conn->query($sql) === TRUE) {
	    echo "pass";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
}


//--- 用 method 區分要執行什麼 --- 
if ($_SERVER['REQUEST_METHOD'] == "GET"){
	typingCheck();
}else if($_SERVER['REQUEST_METHOD'] == "POST"){
	signUp();
}

?>