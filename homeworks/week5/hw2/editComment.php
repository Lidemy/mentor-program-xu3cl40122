<?php

function edit(){
	include('connect.php');
	$sql = "UPDATE xu3cl40122_comment SET content ='$newContent' WHERE comment_id = $comment_id";
	if ($conn->query($sql) === TRUE) {
    	echo "pass";
	} else {
	    echo "Error updating record: " . $conn->error;
	}	

$conn->close();
}

function delete(){
	
	include('connect.php');
	$sql = "DELETE FROM xu3cl40122_comment WHERE comment_id= $comment_id";
	if ($conn->query($sql) === TRUE) {
    	echo "pass";
	} else {
	    echo "Error updating record: " . $conn->error;
	}	
$conn->close();
}

// start
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
$comment_id = $obj->comment_id;
$type = $obj->type;
$newContent = $obj->newContent;
if ($type == 'delete'){
	include('connect.php');
	$sql = "DELETE FROM xu3cl40122_comment WHERE comment_id= $comment_id";
	if ($conn->query($sql) === TRUE) {
    	echo "pass";
	} else {
	    echo "Error updating record: " . $conn->error;
	}	
$conn->close();
}else{
	include('connect.php');
	$sql = "UPDATE xu3cl40122_comment SET content ='$newContent' WHERE comment_id = $comment_id";
	if ($conn->query($sql) === TRUE) {
    	echo $sql;
	} else {
	    echo "Error updating record: " . $conn->error;
	}	

$conn->close();
}


?>