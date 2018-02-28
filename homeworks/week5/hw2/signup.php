<?php
include('connect.php');
//$email = $_POST["email"];
//$pwd = $_POST["pwd"];
//$nickname = $_REQUEST["nickname"];
$type = $_REQUEST['type'];
$value = $_REQUEST['value'];

$sql = "SELECT * FROM users where $type = '$value'";
$result = $conn->query($sql);
if ($result->num_rows > 0){
    echo "nopass";
}
else{
	echo "pass";
}



?>